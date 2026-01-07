
import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Copy, Check, Terminal } from 'lucide-react';

interface PlaygroundProps {
  initialCode?: string;
}

const Playground: React.FC<PlaygroundProps> = ({ initialCode = '' }) => {
  const [code, setCode] = useState(initialCode || `<!DOCTYPE html>\n<html>\n<head>\n<style>\n  body {\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    background: #ecfdf5;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    margin: 0;\n  }\n  .card {\n    background: white;\n    padding: 2rem;\n    border-radius: 2rem;\n    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);\n    text-align: center;\n  }\n  h1 { color: #059669; }\n  .btn {\n    background: #059669;\n    color: white;\n    padding: 12px 24px;\n    border-radius: 12px;\n    border: none;\n    font-weight: bold;\n    cursor: pointer;\n    transition: 0.3s;\n  }\n  .btn:hover { background: #047857; }\n</style>\n</head>\n<body>\n\n<div class="card">\n  <h1>Siksha Editor</h1>\n  <p>Practice your code in real-time!</p>\n  <button class="btn" onclick="alert('Success!')">Test Action</button>\n</div>\n\n</body>\n</html>`);

  const [srcDoc, setSrcDoc] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Initial run
    setSrcDoc(code);
  }, []);

  const handleRun = () => {
    setSrcDoc(code);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-800">
      <div className="flex items-center justify-between px-8 py-4 bg-slate-800/50 backdrop-blur-md border-b border-slate-700">
        <div className="flex items-center gap-6">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
             <Terminal size={16} />
             <span className="text-[10px] font-black uppercase tracking-widest">siksha-playground v1.0</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={handleCopy}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-xl text-xs font-bold"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            {copied ? 'Copied' : 'Copy'}
          </button>
          <button 
            onClick={() => setCode(initialCode || code)}
            className="p-2.5 text-slate-400 hover:text-white transition-colors rounded-xl hover:bg-slate-700"
            title="Reset to default"
          >
            <RotateCcw size={18} />
          </button>
          <button 
            onClick={handleRun}
            className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-2.5 rounded-xl text-sm font-black transition-all shadow-lg shadow-emerald-900/40"
          >
            <Play size={16} fill="currentColor" />
            RUN CODE
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden min-h-0 flex-col md:flex-row">
        {/* Editor Pane */}
        <div className="flex-1 border-r border-slate-800 flex flex-col min-h-0">
          <div className="px-6 py-2 bg-slate-800/30 text-[9px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-800">
            Source Code Editor
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 w-full bg-slate-900 text-emerald-50/80 p-8 font-mono text-sm resize-none focus:outline-none leading-relaxed custom-scrollbar selection:bg-emerald-500/30"
            spellCheck={false}
          />
        </div>

        {/* Preview Pane */}
        <div className="flex-1 bg-white flex flex-col min-h-0">
          <div className="px-6 py-2 bg-slate-50 border-b border-slate-200 text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center justify-between">
            Live Preview Browser
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
            </div>
          </div>
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            className="flex-1 w-full border-none bg-white transition-opacity duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Playground;
