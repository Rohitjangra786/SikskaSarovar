
import React, { useState } from 'react';
import { 
  Home, 
  BookOpen, 
  Code2, 
  MessageSquare, 
  Trophy,
  GraduationCap,
  ChevronDown,
  ChevronRight,
  Circle,
  CheckCircle
} from 'lucide-react';
import { COURSES } from '../constants';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onSelectLesson: (courseId: string, lessonId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, onSelectLesson }) => {
  const [expandedCourses, setExpandedCourses] = useState<string[]>(['html-tutorial']);

  const toggleCourse = (id: string) => {
    setExpandedCourses(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
    { id: 'ai-tutor', label: 'AI Tutor', icon: <MessageSquare size={20} /> },
    { id: 'playground', label: 'Playground', icon: <Code2 size={20} /> },
  ];

  return (
    <div className="w-72 bg-white h-screen border-r border-slate-200 fixed left-0 top-0 flex flex-col overflow-hidden z-50">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-emerald-600 p-2 rounded-xl shadow-lg shadow-emerald-200">
          <GraduationCap className="text-white" size={24} />
        </div>
        <div>
          <span className="font-black text-xl tracking-tight text-slate-800 block leading-none">SikshaSarovar</span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">E-Learning Platform</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 custom-scrollbar">
        <div className="space-y-1 mb-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                activeTab === item.id 
                  ? 'bg-emerald-600 text-white font-bold shadow-md shadow-emerald-100' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-emerald-600'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="px-4 mb-3">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Learning Paths</span>
        </div>

        <div className="space-y-2">
          {COURSES.map(course => (
            <div key={course.id} className="space-y-1">
              <button
                onClick={() => toggleCourse(course.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all group ${
                  expandedCourses.includes(course.id) ? 'bg-emerald-50 text-emerald-700' : 'hover:bg-slate-50 text-slate-600'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`${expandedCourses.includes(course.id) ? 'text-emerald-600' : 'text-slate-400 group-hover:text-emerald-500'} transition-colors`}>
                    {course.title.includes('HTML') ? <GraduationCap size={18} /> : <Code2 size={18} />}
                  </div>
                  <span className="font-bold text-sm">{course.title}</span>
                </div>
                {expandedCourses.includes(course.id) ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>
              
              {expandedCourses.includes(course.id) && (
                <div className="ml-9 space-y-1 py-1 border-l-2 border-emerald-100 pl-2">
                  {course.lessons.map(lesson => (
                    <button
                      key={lesson.id}
                      onClick={() => onSelectLesson(course.id, lesson.id)}
                      className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-500 hover:text-emerald-600 hover:bg-emerald-50/50 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2">
                        <Circle size={4} className={`fill-current ${lesson.isCompleted ? 'text-emerald-500' : 'text-slate-300'}`} />
                        <span className={lesson.isCompleted ? 'font-medium' : ''}>{lesson.title}</span>
                      </div>
                      {lesson.isCompleted && <CheckCircle size={12} className="text-emerald-500" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 border-t border-slate-100">
        <div className="bg-emerald-900 rounded-2xl p-4 text-white">
          <div className="flex items-center gap-2 mb-3">
            <Trophy size={16} className="text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider">Daily Goal</span>
          </div>
          <div className="flex justify-between text-xs mb-2">
            <span className="opacity-70">XP Gained</span>
            <span className="font-bold">450 / 1000</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-400" style={{ width: '45%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
