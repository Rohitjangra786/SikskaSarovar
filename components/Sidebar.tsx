import React, { useState, useEffect } from 'react';
import {
  Home as HomeIcon,
  Code2,
  MessageSquare,
  Trophy,
  ChevronDown,
  ChevronRight,
  Circle,
  CheckCircle,
  Info,
  GraduationCap
} from 'lucide-react';
import { COURSES, ICON_MAP } from '../constants';
import { SikshaLogo } from '../App';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onSelectLesson: (courseId: string, lessonId: string) => void;
  filterCourseId?: string;
  completedLessons: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, onSelectLesson, filterCourseId, completedLessons }) => {
  const [expandedCourses, setExpandedCourses] = useState<string[]>([]);

  useEffect(() => {
    if (filterCourseId) {
      setExpandedCourses([filterCourseId]);
    } else if (activeTab === 'home') {
      setExpandedCourses([]);
    }
  }, [filterCourseId, activeTab]);

  const toggleCourse = (id: string) => {
    setExpandedCourses(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const menuItems = [
    { id: 'home', label: 'Home', icon: <HomeIcon size={20} /> },
    { id: 'college', label: 'College Data', icon: <GraduationCap size={20} /> },
    { id: 'ai-tutor', label: 'SikshaSarovar AI', icon: <MessageSquare size={20} /> },
    { id: 'playground', label: 'Playground', icon: <Code2 size={20} /> },
    { id: 'about', label: 'Our Story', icon: <Info size={20} /> },
  ];

  const visibleCourses = filterCourseId
    ? COURSES.filter(c => c.id === filterCourseId)
    : COURSES;

  return (
    <div className="w-72 bg-white h-full border-r border-slate-200 flex flex-col overflow-hidden shadow-sm">
      <div className="p-8 pb-4 flex items-center gap-3">
        <div className="bg-brand-900 p-2 rounded-xl shadow-lg shadow-brand-900/20 border border-white/5 relative group">
          <div className="absolute inset-0 bg-accent-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
          <SikshaLogo className="w-10 h-10 relative z-10" colorMode="dark" />
        </div>
        <div>
          <span className="font-black text-xl tracking-tight text-brand-900 block leading-none">SikshaSarovar</span>
          <span className="text-[10px] font-bold text-accent-500 uppercase tracking-widest mt-1 block">Learn Your Way</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 custom-scrollbar">
        <div className="space-y-1 mb-10">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 ${activeTab === item.id
                ? 'bg-brand-900 text-white font-bold shadow-lg shadow-brand-900/40'
                : 'text-slate-500 hover:bg-brand-50 hover:text-brand-900'
                }`}
            >
              <span className={activeTab === item.id ? 'text-accent-500' : ''}>{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="px-4 mb-4 flex items-center justify-between">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
            Tutorials
          </span>
          <span className="bg-brand-50 text-brand-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
            {visibleCourses.length}
          </span>
        </div>

        <div className="space-y-4">
          {visibleCourses.map((course) => (
            <div key={course.id} className="group">
              <button
                onClick={() => toggleCourse(course.id)}
                className={`w-full flex items-center justify-between p-3 rounded-2xl transition-all ${expandedCourses.includes(course.id) || activeTab === 'lesson' && filterCourseId === course.id
                  ? 'bg-slate-50 text-brand-900'
                  : 'text-slate-600 hover:bg-slate-50'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl transition-colors ${expandedCourses.includes(course.id) ? 'bg-white shadow-sm text-brand-600' : 'bg-slate-100 text-slate-400 group-hover:bg-white group-hover:shadow-sm group-hover:text-brand-600'
                    }`}>
                    {ICON_MAP[course.icon]}
                  </div>
                  <span className="font-bold text-sm tracking-tight">{course.title}</span>
                </div>
                {expandedCourses.includes(course.id) ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>

              {/* LESSONS LIST */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${expandedCourses.includes(course.id) ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
                  }`}
              >
                <div className="overflow-hidden">
                  <div className="pl-4 space-y-1 relative">
                    <div className="absolute left-7 top-2 bottom-2 w-px bg-slate-200"></div>
                    {course.lessons.map((lesson) => {
                      const isCompleted = completedLessons.includes(lesson.id);
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => onSelectLesson(course.id, lesson.id)}
                          className="w-full flex items-center gap-3 py-2 px-3 pl-8 text-[13px] text-slate-500 hover:text-brand-600 transition-colors relative group/lesson"
                        >
                          <div className={`absolute left-[10px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border-2 transition-all z-10 ${isCompleted
                            ? 'bg-accent-500 border-accent-500 scale-110'
                            : 'bg-white border-slate-300 group-hover/lesson:border-brand-400'
                            }`}></div>
                          <span className="truncate text-left flex-1">{lesson.title}</span>
                          {isCompleted && <CheckCircle size={12} className="text-accent-500 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 border-t border-slate-100 bg-slate-50/50">
        <div className="bg-brand-900 rounded-2xl p-4 relative overflow-hidden group cursor-pointer shadow-xl">
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent-500/10 rounded-full blur-2xl group-hover:bg-accent-500/20 transition-all"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-1.5 bg-accent-500 rounded-lg text-brand-900"><Trophy size={16} fill="currentColor" /></div>
              <span className="text-white font-black text-xs uppercase tracking-widest">Pro Plan</span>
            </div>
            <p className="text-brand-100 text-[10px] font-medium leading-relaxed mb-3">Unlock AI Tutor, Certificates, and Premium Projects.</p>
            <div
              onClick={() => setActiveTab('upgrade')}
              className="w-full py-2 bg-white text-brand-900 rounded-xl text-center text-xs font-black uppercase tracking-widest hover:bg-accent-500 transition-colors"
            >
              Upgrade Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
