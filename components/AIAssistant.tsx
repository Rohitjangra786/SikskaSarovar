import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User as UserIcon, Loader2, Sparkles, WifiOff } from 'lucide-react';
import { Message } from '../types';
import { handleOfflineQuery } from '../lib/offlineAI';
import MarkdownRenderer from './MarkdownRenderer';
// Remove unused google import if not needed directly here, or keep if used elsewhere.
// import { GoogleGenerativeAI } from '@google/generative-ai';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      content: "Hello! I'm SikshaSarovar AI. I can help you learn web development and programming. Ask me anything!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOfflineMode, setIsOfflineMode] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({
            role: m.role === 'model' ? 'assistant' : m.role,
            content: m.content
          }))
        })
      });

      if (!response.ok) throw new Error('API request failed');

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No readable stream');

      const aiMessage: Message = {
        role: 'model',
        content: '',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsOfflineMode(response.headers.get('X-AI-Mode') === 'offline');

      // Stream handling
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const text = new TextDecoder().decode(value);
        setMessages(prev => {
          // Create a new array to avoid mutating state directly
          const newMessages = [...prev];
          const lastIndex = newMessages.length - 1;
          const lastMessage = { ...newMessages[lastIndex] };

          // Append new text chunk
          lastMessage.content += text;
          newMessages[lastIndex] = lastMessage;
          return newMessages;
        });
      }

    } catch (error) {
      console.error('API failed, using offline mode:', error);
      const offlineResponse = handleOfflineQuery(userMessage.content);
      setIsOfflineMode(true);
      setMessages(prev => [...prev, {
        role: 'model',
        content: offlineResponse,
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col h-full overflow-hidden transition-colors duration-300">
      {/* Header */}
      <div className="bg-brand-900 dark:bg-slate-950 p-6 flex items-center gap-4 border-b border-brand-800 dark:border-slate-800">
        <div className="bg-white/10 p-3 rounded-2xl shadow-inner backdrop-blur-md">
          <Sparkles className="text-accent-500" size={24} />
        </div>
        <div className="flex-1">
          <h2 className="text-white font-black text-xl tracking-tight">SikshaSarovar AI</h2>
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isOfflineMode ? 'bg-amber-500' : 'bg-green-500 animate-pulse'}`}></span>
            <p className="text-brand-100 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest">
              {isOfflineMode ? 'Offline Mode' : 'Online & Ready'}
            </p>
          </div>
        </div>
        {isOfflineMode && (
          <div className="bg-amber-500/20 border border-amber-500/30 px-3 py-1.5 rounded-xl flex items-center gap-2">
            <WifiOff className="text-amber-500" size={14} />
            <span className="text-amber-500 text-[10px] font-black uppercase tracking-widest">Offline</span>
          </div>
        )}
      </div>

      {/* Messages Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50 dark:bg-slate-950/50 custom-scrollbar">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}>
            <div className={`flex gap-4 max-w-[90%] md:max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>

              {/* Avatar */}
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border ${msg.role === 'user'
                  ? 'bg-brand-100 dark:bg-brand-900/50 text-brand-900 dark:text-brand-300 border-brand-200 dark:border-brand-800'
                  : 'bg-white dark:bg-slate-800 text-brand-900 dark:text-white border-slate-100 dark:border-slate-700'
                }`}>
                {msg.role === 'user' ? <UserIcon size={20} /> : <Bot size={20} />}
              </div>

              {/* Message Bubble */}
              <div className={`p-5 rounded-3xl text-sm leading-relaxed shadow-sm overflow-hidden ${msg.role === 'user'
                  ? 'bg-brand-900 dark:bg-brand-700 text-white rounded-tr-none shadow-brand-200 dark:shadow-none'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-tl-none border border-slate-100 dark:border-slate-800'
                }`}>
                {msg.role === 'user' ? (
                  <p className="whitespace-pre-wrap font-medium">{msg.content}</p>
                ) : (
                  <MarkdownRenderer content={msg.content} />
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex justify-start animate-in fade-in duration-300">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 text-brand-900 dark:text-white flex items-center justify-center">
                <Bot size={20} />
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 px-6 rounded-3xl rounded-tl-none border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-3 text-slate-400 dark:text-slate-500 font-bold italic text-xs">
                <Loader2 size={16} className="animate-spin text-accent-500" />
                Thinking...
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="relative group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask a question about code..."
            className="w-full bg-slate-50 dark:bg-slate-950 border-2 border-slate-100 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-2xl py-4 pl-6 pr-14 focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-900 dark:focus:border-brand-600 transition-all text-sm font-medium placeholder:text-slate-400 dark:placeholder:text-slate-600"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-900 dark:bg-brand-600 text-accent-500 dark:text-white p-3 rounded-xl hover:bg-brand-800 dark:hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg active:scale-90"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
