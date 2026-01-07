
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
  Info
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
    { id: 'ai-tutor', label: 'Siksha AI', icon: <MessageSquare size={20} /> },
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
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 ${
                activeTab === item.id 
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
        </div>

        <div className="space-y-3">
          {visibleCourses.map(course => (
            <div key={course.id} className="space-y-1">
              <button
                onClick={() => toggleCourse(course.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all group ${
                  expandedCourses.includes(course.id) ? 'bg-brand-50 text-brand-900' : 'hover:bg-slate-50 text-slate-600'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`${expandedCourses.includes(course.id) ? 'text-brand-600' : 'text-slate-400 group-hover:text-brand-900'} transition-colors`}>
                    {ICON_MAP[course.icon]}
                  </div>
                  <span className="font-bold text-[13px]">{course.title}</span>
                </div>
                {expandedCourses.includes(course.id) ? <ChevronDown size={14} className="opacity-50" /> : <ChevronRight size={14} className="opacity-50" />}
              </button>
              
              {expandedCourses.includes(course.id) && (
                <div className="ml-9 space-y-1 py-1 border-l-2 border-brand-100 pl-2">
                  {course.lessons.map(lesson => {
                    const isDone = completedLessons.includes(lesson.id);
                    return (
                      <button
                        key={lesson.id}
                        onClick={() => onSelectLesson(course.id, lesson.id)}
                        className="w-full text-left px-3 py-2.5 rounded-xl text-[13px] text-slate-500 hover:text-brand-900 hover:bg-brand-50 transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-2">
                          <Circle size={4} className={`fill-current ${isDone ? 'text-brand-600' : 'text-slate-300'}`} />
                          <span className={isDone ? 'font-medium' : ''}>{lesson.title}</span>
                        </div>
                        {isDone && <CheckCircle size={12} className="text-brand-600" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 border-t border-slate-100">
        <div className="bg-brand-900 rounded-[2rem] p-5 text-white shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <Trophy size={16} className="text-accent-500" />
            <span className="text-[10px] font-black uppercase tracking-wider text-accent-100">Daily Milestone</span>
          </div>
          <div className="flex justify-between text-[11px] mb-2 font-bold">
            <span className="opacity-50">XP EARNED</span>
            <span className="text-accent-500">{completedLessons.length * 50} / 1k</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-1">
            <div className="h-full bg-accent-500 shadow-[0_0_8px_rgba(211,177,109,0.5)]" style={{ width: `${Math.min(100, completedLessons.length * 5)}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
