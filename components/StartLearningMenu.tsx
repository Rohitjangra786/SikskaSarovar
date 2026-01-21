import React, { useEffect, useState } from 'react';
import { X, ChevronRight, BookOpen, GraduationCap, Star, Zap, Code, Database, Brain, Layout, Monitor, Smartphone, Terminal, Coffee, Microscope, Globe, Layers, Cpu } from 'lucide-react';
import { COURSES } from '../constants'; // Assumes constants is in parent dir or resolve correctly
import { COLLEGE_COURSES } from '../constants/collegeData';

// Map icon strings to Lucide components manually if needed, or reuse ICON_MAP if possible.
// Since ICON_MAP is likely in constants.tsx and exports ReactNodes, we can try to import it.
// However, for better styling control (size, color) in the menu, I might map them dynamically.

interface StartLearningMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onSelectCourse: (courseId: string, lessonId: string, isCollege?: boolean) => void;
}

const StartLearningMenu: React.FC<StartLearningMenuProps> = ({ isOpen, onClose, onSelectCourse }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            setTimeout(() => setIsVisible(false), 300); // Wait for exit animation
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${isOpen ? 'opacity-100 backdrop-blur-md bg-brand-900/40' : 'opacity-0 backdrop-blur-none pointer-events-none'}`}>

            {/* Backdrop click to close */}
            <div className="absolute inset-0" onClick={onClose} />

            {/* Main Container */}
            <div className={`relative w-full max-w-5xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transition-all duration-500 transform ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'}`}>

                {/* Header */}
                <div className="relative bg-brand-900 p-8 sm:p-10 text-white overflow-hidden shrink-0">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
                    <button
                        onMouseDown={onClose}
                        className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50 hover:rotate-90 duration-300"
                    >
                        <X size={24} />
                    </button>

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-accent-500 text-brand-900 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-accent-900/20">
                                Explore The Future
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-2">
                            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-200">Path</span>
                        </h2>
                        <p className="text-brand-100/70 text-lg max-w-xl">
                            Select a comprehensive learning track or a specialized college bundle to start your journey.
                        </p>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto p-8 sm:p-10 custom-scrollbar bg-slate-50/50">

                    {/* Main Tracks Section */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-brand-100 text-brand-600 rounded-xl">
                                <Zap size={20} fill="currentColor" />
                            </div>
                            <h3 className="text-xl font-black text-brand-900 uppercase tracking-widest">Core Tracks</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {COURSES.map((course) => (
                                <button
                                    key={course.id}
                                    onClick={() => onSelectCourse(course.id, course.lessons[0]?.id || '')}
                                    className="group relative bg-white p-6 rounded-[2rem] border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 text-left overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className={`p-3.5 rounded-2xl ${course.id === 'html' ? 'bg-orange-100 text-orange-600' :
                                                course.id === 'python' ? 'bg-blue-100 text-blue-600' :
                                                    course.id === 'java' ? 'bg-red-100 text-red-600' :
                                                        course.id === 'php' ? 'bg-indigo-100 text-indigo-600' :
                                                            course.id === 'ai' ? 'bg-purple-100 text-purple-600' :
                                                                'bg-emerald-100 text-emerald-600'
                                                } transition-colors`}>
                                                {/* Render icon based on course.icon string if needed, or use a generic one if map is missing */}
                                                <GridIcon iconName={course.icon} />
                                            </div>
                                            <span className="bg-slate-100 text-slate-500 text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest">{course.level}</span>
                                        </div>

                                        <div className="mt-auto">
                                            <h4 className="text-lg font-black text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">{course.title}</h4>
                                            <p className="text-xs text-slate-400 font-medium mb-4">{course.lessons.length} Lessons • {course.category}</p>

                                            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-brand-500 transition-colors">
                                                <span>Start Now</span>
                                                <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* College/Bundles Section */}
                    {COLLEGE_COURSES && COLLEGE_COURSES.length > 0 && (
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-accent-100 text-accent-700 rounded-xl">
                                    <GraduationCap size={20} />
                                </div>
                                <h3 className="text-xl font-black text-brand-900 uppercase tracking-widest">College Bundles</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {COLLEGE_COURSES.map((bundle) => (
                                    <button
                                        key={bundle.id}
                                        onClick={() => onSelectCourse(bundle.id, bundle.lessons[0]?.id || '', true)}
                                        className="group relative bg-brand-900 p-6 rounded-[2rem] shadow-xl overflow-hidden text-left hover:shadow-2xl hover:scale-[1.01] transition-all duration-300"
                                    >
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 group-hover:bg-accent-500/20 transition-all" />

                                        <div className="relative z-10 flex items-center gap-6">
                                            <div className="shrink-0 p-4 bg-white/10 backdrop-blur-md rounded-2xl text-accent-400 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                                <BookOpen size={28} />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-black text-white mb-2 group-hover:text-accent-400 transition-colors">{bundle.title}</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="text-brand-200 text-xs font-medium bg-white/5 px-2 py-1 rounded-lg">Official Syllabus</span>
                                                    <span className="text-brand-200 text-xs font-medium bg-white/5 px-2 py-1 rounded-lg">{bundle.lessons.length} Units</span>
                                                </div>
                                            </div>
                                            <div className="ml-auto p-2 bg-accent-500 rounded-full text-brand-900 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                                <ChevronRight size={16} />
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                </div>

                {/* Footer */}
                <div className="p-6 border-t border-slate-100 bg-slate-50 text-center">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                        Unlock your potential with SikshaSarovar
                    </p>
                </div>

            </div>
        </div>
    );
};

// Helper component to render icons based on string names
const GridIcon = ({ iconName }: { iconName: string }) => {
    const size = 24;
    switch (iconName) {
        case 'layout': return <Layout size={size} />;
        case 'terminal': return <Terminal size={size} />;
        case 'coffee': return <Coffee size={size} />;
        case 'database': return <Database size={size} />;
        case 'brain': return <Brain size={size} />;
        case 'microscope': return <Microscope size={size} />;
        case 'code': return <Code size={size} />;
        case 'globe': return <Globe size={size} />;
        case 'layers': return <Layers size={size} />;
        case 'cpu': return <Cpu size={size} />;
        case 'monitor': return <Monitor size={size} />;
        case 'smartphone': return <Smartphone size={size} />;
        default: return <Star size={size} />;
    }
};

export default StartLearningMenu;
