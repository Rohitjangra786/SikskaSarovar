
import React, { useState, useEffect } from 'react';
import SEO from '../SEO';
import { Lesson, Course } from '../../types';
import { CheckCircle2, ArrowRight, ArrowLeft, Play, Copy, Check, Circle, Undo, GraduationCap } from 'lucide-react';

interface DmpCourseProps {
    lesson: Lesson;
    course: Course;
    completedLessons: string[];
    toggleCompletion: (lessonId: string) => void;
    onSelectLesson: (lessonId: string) => void;
    onNext: () => void;
    onPrev: () => void;
    onTryIt: (code: string) => void;
}

const DmpCourse: React.FC<DmpCourseProps> = ({
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

    useEffect(() => {
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
                url={`${base}/college/${course.id}/lesson/${lesson.id}`}
            />

            {/* Visual Learning Path Indicator - College Bundle Style */}
            <div className="mb-10 px-8">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">College Path: {course.title}</span>
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
                                className={`h-2 flex-1 rounded-full transition-all duration-300 relative group ${done ? 'bg-indigo-500' :
                                    active ? 'bg-indigo-900 shadow-lg shadow-indigo-200' :
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
                <div className="h-3 bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-500"></div>

                <div className="p-10 md:p-16">
                    <div className="flex justify-between items-start mb-8 flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                            <span className="bg-indigo-100 text-indigo-900 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em]">Lesson {currentIndex + 1}</span>
                            {isCompleted && <span className="flex items-center gap-1 text-indigo-600 text-[10px] font-black"><Check size={12} /> COMPLETED</span>}
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
                                    ? 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
                                    : 'bg-indigo-900 text-white hover:bg-indigo-800'
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
                        <div className="mb-10 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200">
                            <img src={lesson.image} alt={lesson.title} className="w-full h-auto object-cover" />
                        </div>
                    )}

                    <div className="prose prose-indigo max-w-none text-slate-600 text-xl leading-relaxed mb-12">
                        {lesson.content.split('\n').map((paragraph, i) => (
                            <p key={i} className="mb-4">{paragraph}</p>
                        ))}
                    </div>

                    {lesson.codeSnippet && (
                        <div className="group relative bg-slate-900 rounded-[2rem] p-8 border border-slate-800 mb-12 shadow-2xl">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Example Snippet</span>
                                <button
                                    onClick={handleCopy}
                                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-xl text-xs font-bold border border-white/10"
                                >
                                    {copied ? <Check size={14} className="text-indigo-400" /> : <Copy size={14} />}
                                    {copied ? 'Copied!' : 'Copy Code'}
                                </button>
                            </div>
                            <pre className="font-mono text-base text-indigo-400 bg-black/40 p-8 rounded-2xl border border-white/5 overflow-x-auto leading-relaxed">
                                {lesson.codeSnippet}
                            </pre>
                        </div>
                    )}

                    <div className="flex items-center gap-6 p-8 bg-indigo-50/50 rounded-[2rem] border border-indigo-100 mb-12">
                        <div className="bg-indigo-900 text-white p-4 rounded-2xl shadow-lg shadow-indigo-200 shrink-0">
                            <GraduationCap size={32} />
                        </div>
                        <div>
                            <p className="font-black text-xl text-indigo-900 mb-1">College Notes</p>
                            <p className="text-indigo-700 text-lg opacity-80">This material is curated for your college curriculum.</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-10 border-t border-slate-100">
                        <button
                            onClick={onPrev}
                            disabled={currentIndex === 0}
                            className={`w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 font-black transition-all rounded-2xl ${currentIndex === 0 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-500 hover:text-indigo-600 hover:bg-indigo-50'
                                }`}
                        >
                            <ArrowLeft size={20} />
                            Previous
                        </button>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <button
                                onClick={onNext}
                                className="flex items-center justify-center gap-3 bg-indigo-900 text-white px-12 py-4 rounded-2xl font-black hover:bg-indigo-800 transition-all shadow-2xl hover:scale-105 active:scale-95"
                            >
                                {currentIndex === course.lessons.length - 1 ? 'Finish' : 'Next'}
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DmpCourse;
