
import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Copy, Check, Terminal } from 'lucide-react';

interface PlaygroundProps {
  initialCode?: string;
}

const Playground: React.FC<PlaygroundProps> = ({ initialCode = '' }) => {
  const [code, setCode] = useState(initialCode || `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Siksha Interactive</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            color: white;
        }

        .dashboard-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            padding: 3rem;
            border-radius: 2rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            max-width: 400px;
            width: 100%;
            transition: transform 0.3s ease;
        }

        .dashboard-card:hover {
            transform: translateY(-5px);
            border-color: rgba(0, 219, 222, 0.3);
        }

        h1 {
            background: linear-gradient(to right, #00dbde, #fc00ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 2.5rem;
            margin: 0 0 1rem 0;
            font-weight: 800;
        }

        p {
            color: #94a3b8;
            margin-bottom: 2rem;
            line-height: 1.6;
        }

        .counter-box {
            background: rgba(0, 0, 0, 0.3);
            border-radius: 1rem;
            padding: 1.5rem;
            margin-bottom: 2rem;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        #count {
            font-size: 3rem;
            font-weight: 900;
            color: #fff;
            display: block;
        }

        .label {
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #64748b;
            font-weight: 700;
        }

        button {
            background: #00dbde;
            color: #0f172a;
            border: none;
            padding: 1rem 2rem;
            border-radius: 1rem;
            font-weight: 800;
            cursor: pointer;
            transition: all 0.2s;
            width: 100%;
            font-size: 1rem;
        }

        button:hover {
            background: #fff;
            box-shadow: 0 0 30px rgba(0, 219, 222, 0.4);
            transform: scale(1.02);
        }

        button:active {
            transform: scale(0.98);
        }
    </style>
</head>
<body>

    <div class="dashboard-card">
        <h1>Hello World</h1>
        <p>Welcome to your new coding playground. Build something amazing today.</p>
        
        <div class="counter-box">
            <span class="label">Total Clicks</span>
            <span id="count">0</span>
        </div>

        <button onclick="increment()">Click Me!</button>
    </div>

    <script>
        let count = 0;
        const countDisplay = document.getElementById('count');
        const button = document.querySelector('button');

        function increment() {
            count++;
            countDisplay.innerText = count;
            
            // Add a little pop effect
            countDisplay.style.transform = 'scale(1.2)';
            setTimeout(() => {
                countDisplay.style.transform = 'scale(1)';
            }, 100);

            // Change button text dynamically
            if (count === 5) button.innerText = "Keep Going!";
            if (count === 10) button.innerText = "You're on Fire! 🔥";
        }
    </script>
</body>
</html>`);

  const [srcDoc, setSrcDoc] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
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
            <div className="w-3 h-3 rounded-full bg-brand-500"></div>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Terminal size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest">siksha-playground v2.0</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-xl text-xs font-bold"
          >
            {copied ? <Check size={14} className="text-brand-400" /> : <Copy size={14} />}
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
            className="flex items-center gap-3 bg-brand-600 hover:bg-brand-500 text-white px-8 py-2.5 rounded-xl text-sm font-black transition-all shadow-lg shadow-brand-900/40"
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
            className="flex-1 w-full bg-slate-900 text-brand-50/80 p-8 font-mono text-sm resize-none focus:outline-none leading-relaxed custom-scrollbar selection:bg-brand-500/30"
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
