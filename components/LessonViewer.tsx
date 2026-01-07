
import React, { useState } from 'react';
import { Lesson } from '../types';
import { CheckCircle2, ArrowRight, ArrowLeft, Play, Copy, Check } from 'lucide-react';

interface LessonViewerProps {
  lesson: Lesson;
  onNext: () => void;
  onPrev: () => void;
  onTryIt: (code: string) => void;
}

const LessonViewer: React.FC<LessonViewerProps> = ({ lesson, onNext, onPrev, onTryIt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (lesson.codeSnippet) {
      navigator.clipboard.writeText(lesson.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <div className="bg-white rounded-[3rem] shadow-xl border border-slate-100 overflow-hidden">
        {/* Header decoration */}
        <div className="h-3 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600"></div>
        
        <div className="p-10 md:p-16">
          <div className="flex items-center gap-2 mb-4">
             <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em]">Lesson Module</span>
             {lesson.isCompleted && <span className="flex items-center gap-1 text-emerald-600 text-[10px] font-black"><Check size={12}/> COMPLETED</span>}
          </div>
          
          <h1 className="text-5xl font-black text-slate-900 mb-8 tracking-tight">{lesson.title}</h1>
          
          <div className="prose prose-emerald max-w-none text-slate-600 text-xl leading-relaxed mb-12">
            {lesson.content.split('\n').map((paragraph, i) => (
              <p key={i} className="mb-4">{paragraph}</p>
            ))}
          </div>

          {lesson.codeSnippet && (
            <div className="group relative bg-slate-900 rounded-[2rem] p-8 border border-slate-800 mb-12 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Interactive Example</span>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={handleCopy}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-xl text-xs font-bold border border-white/10"
                  >
                    {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    {copied ? 'Copied!' : 'Copy Code'}
                  </button>
                  <button 
                    onClick={() => onTryIt(lesson.codeSnippet!)}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-xl text-xs font-black flex items-center gap-2 transition-all shadow-lg shadow-emerald-900/40"
                  >
                    <Play size={14} fill="currentColor" />
                    Try it Yourself
                  </button>
                </div>
              </div>
              <pre className="font-mono text-base text-emerald-400 bg-black/40 p-8 rounded-2xl border border-white/5 overflow-x-auto leading-relaxed">
                {lesson.codeSnippet}
              </pre>
            </div>
          )}

          <div className="flex items-center gap-6 p-8 bg-emerald-50/50 rounded-[2rem] border border-emerald-100 mb-12">
            <div className="bg-emerald-600 text-white p-4 rounded-2xl shadow-lg shadow-emerald-200 shrink-0">
              <CheckCircle2 size={32} />
            </div>
            <div>
              <p className="font-black text-xl text-emerald-900 mb-1">Concept Summary</p>
              <p className="text-emerald-700 text-lg opacity-80">Make sure to experiment with the code snippet above. Real learning happens when you modify the variables and see how the output changes!</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-10 border-t border-slate-100">
            <button 
              onClick={onPrev}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 text-slate-500 font-black hover:text-emerald-600 hover:bg-emerald-50 transition-all rounded-2xl"
            >
              <ArrowLeft size={20} />
              Previous Lesson
            </button>
            <button 
              onClick={onNext}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 text-white px-12 py-4 rounded-2xl font-black hover:bg-emerald-600 transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              Next Lesson
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonViewer;
