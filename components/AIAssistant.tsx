
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User as UserIcon, Loader2, Sparkles } from 'lucide-react';
import { Message } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      content: "Hello! I'm SikshaSarovar AI. I'm trained in the SikshaSarovar methodology to help you master code. How can I assist your journey today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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

    // Append the user message immediately so it appears in the UI
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Build history including the newly added user message to preserve order
      const history = [...messages, userMessage].map(m => ({ role: m.role, parts: [{ text: m.content }] }));

      // Use streaming endpoint if available. We will create an empty model
      // message and update it as chunks arrive from the response body.
      // Append a placeholder model message now so we can update it.
      setMessages(prev => [...prev, { role: 'model', content: '', timestamp: new Date() }]);

      const r = await fetch('/api/ai/stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ message: userMessage.content, history })
      });

      if (!r.ok || !r.body) {
        const errText = await r.text().catch(() => 'server error');
        throw new Error(`AI request failed: ${r.status} ${errText}`);
      }

      const reader = r.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let accumulated = '';

      // Update the last message in state incrementally as chunks arrive
      while (!done) {
        const { value, done: d } = await reader.read();
        done = d;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          accumulated += chunk;
          setMessages(prev => {
            // replace the last model message with updated content
            const copy = [...prev];
            for (let i = copy.length - 1; i >= 0; i--) {
              if (copy[i].role === 'model') {
                copy[i] = { ...copy[i], content: accumulated };
                break;
              }
            }
            return copy;
          });
        }
      }
    } catch (error) {
      console.error(error);
      const msg = error instanceof Error ? error.message : String(error);
      setMessages(prev => [...prev, {
        role: 'model',
        content: `Error: ${msg}`,
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl flex flex-col h-full overflow-hidden">
      <div className="bg-brand-900 p-6 flex items-center gap-4">
        <div className="bg-white/10 p-3 rounded-2xl shadow-inner backdrop-blur-md">
          <Sparkles className="text-accent-500" size={24} />
        </div>
        <div>
          <h2 className="text-white font-black text-xl tracking-tight">SikshaSarovar AI</h2>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
            <p className="text-brand-100 text-[10px] font-black uppercase tracking-widest">Powered by SikshaSarovar</p>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30 custom-scrollbar">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}>
            <div className={`flex gap-4 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border ${msg.role === 'user' ? 'bg-brand-100 text-brand-900 border-brand-200' : 'bg-white text-brand-900 border-slate-100'
                }`}>
                {msg.role === 'user' ? <UserIcon size={20} /> : <Bot size={20} />}
              </div>
              <div className={`p-5 rounded-3xl text-sm whitespace-pre-wrap leading-relaxed shadow-sm ${msg.role === 'user'
                  ? 'bg-brand-900 text-white rounded-tr-none shadow-brand-200'
                  : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'
                }`}>
                {msg.content}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-2xl bg-white shadow-sm border border-slate-100 text-brand-900 flex items-center justify-center">
                <Bot size={20} />
              </div>
              <div className="bg-white p-5 rounded-3xl rounded-tl-none border border-slate-100 shadow-sm flex items-center gap-3 text-slate-400 font-bold italic text-xs">
                <Loader2 size={16} className="animate-spin text-accent-500" />
                Processing your request...
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-white border-t border-slate-100">
        <div className="relative group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about web dev or programming..."
            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 pl-6 pr-14 focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-900 transition-all text-sm font-medium"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-900 text-accent-500 p-3 rounded-xl hover:bg-brand-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg active:scale-90"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
