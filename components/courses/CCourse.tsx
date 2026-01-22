import React, { useState } from 'react';
import SEO from '../SEO';
import { Lesson, Course } from '../../types';
import { CheckCircle2, ArrowRight, ArrowLeft, Play, Copy, Check, Circle, Undo, Terminal, GraduationCap } from 'lucide-react';
import MarkdownRenderer from '../MarkdownRenderer';

interface CCourseProps {
    lesson: Lesson;
    course: Course;
    completedLessons: string[];
    toggleCompletion: (lessonId: string) => void;
    onSelectLesson: (lessonId: string) => void;
    onNext: () => void;
    onPrev: () => void;
    onTryIt: (code: string) => void;
}

const CCourse: React.FC<CCourseProps> = ({
    lesson,
    course,
    completedLessons,
    toggleCompletion,
    onSelectLesson,
    onNext,
    onPrev,
    onTryIt
}) => {
    const [copied, setCopied] = useState(false);
    const [showMindMap, setShowMindMap] = useState(false);

    React.useEffect(() => {
        const scrollContainer = document.getElementById('scroll-container');
        if (scrollContainer) {
            scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setShowMindMap(false);
    }, [lesson.id]);

    const handleCopy = () => {
        if (lesson.codeSnippet) {
            navigator.clipboard.writeText(lesson.codeSnippet);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const currentIndex = course.lessons.findIndex(l => l.id === lesson.id);
    const isCompleted = completedLessons.includes(lesson.id);

    const base = typeof window !== 'undefined' ? window.location.origin : 'https://sikshasarovar.com';
    const seoDescription = lesson.content.replace(/\n+/g, ' ').slice(0, 160);

    return (
        <div className="max-w-5xl mx-auto py-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <SEO
                title={`${lesson.title} — ${course.title}`}
                description={seoDescription}
                image={lesson.image}
                url={`${base}/course/${course.id}/lesson/${lesson.id}`}
            />

            {/* Visual Learning Path Indicator */}
            <div className="mb-10 px-8">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Module Path: {course.title}</span>
                    <span className="text-[10px] font-black text-brand-600 uppercase tracking-widest">{currentIndex + 1} of {course.lessons.length} Modules</span>
                </div>
                <div className="flex items-center gap-3">
                    {course.lessons.map((l, i) => {
                        const done = completedLessons.includes(l.id);
                        const active = i === currentIndex;
                        return (
                            <button
                                key={l.id}
                                onClick={() => onSelectLesson(l.id)}
                                className={`h-2 flex-1 rounded-full transition-all duration-300 relative group ${done ? 'bg-brand-500' :
                                    active ? 'bg-brand-900 shadow-lg shadow-brand-200' :
                                        'bg-slate-200 hover:bg-slate-300'
                                    }`}
                                title={l.title}
                            >
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                                    {l.title}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="bg-white rounded-[3rem] shadow-xl border border-slate-100 overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-brand-900 via-brand-700 to-brand-500"></div>

                <div className="p-10 md:p-16">
                    <div className="flex justify-between items-start mb-8 flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                            <span className="bg-brand-100 text-brand-900 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em]">Lesson {currentIndex + 1}</span>
                            {isCompleted && <span className="flex items-center gap-1 text-brand-600 text-[10px] font-black"><Check size={12} /> COMPLETED</span>}
                        </div>
                        <div className="flex items-center gap-3">
                            {lesson.mindMapImage && (
                                <button
                                    onClick={() => setShowMindMap(!showMindMap)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${showMindMap
                                        ? 'bg-amber-100 text-amber-700'
                                        : 'bg-amber-50 text-amber-600 hover:bg-amber-100'
                                        }`}
                                >
                                    <GraduationCap size={14} />
                                    {showMindMap ? 'Hide Mind Map' : 'View Mind Map'}
                                </button>
                            )}
                            <button
                                onClick={() => toggleCompletion(lesson.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${isCompleted
                                    ? 'bg-brand-50 text-brand-600 hover:bg-brand-100'
                                    : 'bg-brand-900 text-white hover:bg-brand-800'
                                    }`}
                            >
                                {isCompleted ? <><Undo size={14} /> Mark Incomplete</> : <><Check size={14} /> Mark Complete</>}
                            </button>
                        </div>
                    </div>

                    <h1 className="text-5xl font-black text-slate-900 mb-8 tracking-tight">{lesson.title}</h1>

                    {showMindMap && lesson.mindMapImage && (
                        <div className="mb-10 rounded-[2rem] overflow-hidden shadow-2xl border border-amber-100 ring-4 ring-amber-50 animate-in fade-in zoom-in duration-300">
                            <div className="bg-amber-50 px-6 py-3 border-b border-amber-100 flex items-center justify-between">
                                <span className="text-amber-800 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                    <GraduationCap size={14} />
                                    Mind Map Visual Resource
                                </span>
                            </div>
                            <img src={lesson.mindMapImage} alt={`${lesson.title} Mind Map`} className="w-full h-auto object-cover" />
                        </div>
                    )}

                    {!showMindMap && lesson.image && (
                        <div className="mb-10 flex justify-center">
                            <div className="rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 max-w-full md:max-w-3xl">
                                <img
                                    src={lesson.image}
                                    alt={lesson.title}
                                    className="w-full h-auto object-contain"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                />
                            </div>
                        </div>
                    )}

                    <div className="mb-12">
                        <MarkdownRenderer content={lesson.content} />
                    </div>

                    {lesson.codeSnippet && (
                        <div className="group relative bg-slate-900 rounded-[2rem] p-8 border border-slate-800 mb-12 shadow-2xl">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-brand-500"></div>
                                    </div>
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Interactive Sandbox</span>
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={handleCopy}
                                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-xl text-xs font-bold border border-white/10"
                                    >
                                        {copied ? <Check size={14} className="text-brand-400" /> : <Copy size={14} />}
                                        {copied ? 'Copied!' : 'Copy Code'}
                                    </button>
                                    <button
                                        onClick={() => onTryIt(lesson.codeSnippet!)}
                                        className="bg-brand-600 hover:bg-brand-500 text-white px-6 py-2.5 rounded-xl text-xs font-black flex items-center gap-2 transition-all shadow-lg shadow-brand-900/40"
                                    >
                                        <Play size={14} fill="currentColor" />
                                        Open in Playground
                                    </button>
                                </div>
                            </div>
                            <pre className="font-mono text-base text-brand-400 bg-black/40 p-8 rounded-2xl border border-white/5 overflow-x-auto leading-relaxed">
                                {lesson.codeSnippet}
                            </pre>
                        </div>
                    )}

                    <div className="flex items-center gap-6 p-8 bg-brand-50/50 rounded-[2rem] border border-brand-100 mb-12">
                        <div className="bg-brand-900 text-white p-4 rounded-2xl shadow-lg shadow-brand-200 shrink-0">
                            <CheckCircle2 size={32} />
                        </div>
                        <div>
                            <p className="font-black text-xl text-brand-900 mb-1">Module Concept</p>
                            <p className="text-brand-700 text-lg opacity-80">This module is part of the {course.level} path. Experimenting with code is the fastest way to understand syntax behavior!</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-10 border-t border-slate-100">
                        <button
                            onClick={onPrev}
                            disabled={currentIndex === 0}
                            className={`w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 font-black transition-all rounded-2xl ${currentIndex === 0 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-500 hover:text-brand-600 hover:bg-brand-50'
                                }`}
                        >
                            <ArrowLeft size={20} />
                            Previous Module
                        </button>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            {!isCompleted && (
                                <button
                                    onClick={() => toggleCompletion(lesson.id)}
                                    className="flex items-center justify-center gap-3 bg-brand-50 text-brand-900 border border-brand-100 px-8 py-4 rounded-2xl font-black hover:bg-brand-100 transition-all"
                                >
                                    <Check size={20} />
                                    Complete Lesson
                                </button>
                            )}
                            <button
                                onClick={onNext}
                                className="flex items-center justify-center gap-3 bg-brand-900 text-white px-12 py-4 rounded-2xl font-black hover:bg-brand-800 transition-all shadow-2xl hover:scale-105 active:scale-95"
                            >
                                {currentIndex === course.lessons.length - 1 ? 'Finish Course' : 'Next Lesson'}
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CCourse;
