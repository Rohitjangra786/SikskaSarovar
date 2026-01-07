
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import CourseCard from './components/CourseCard';
import AIAssistant from './components/AIAssistant';
import LessonViewer from './components/LessonViewer';
import Playground from './components/Playground';
import { COURSES } from './constants';
import { Course, Lesson } from './types';
import { 
  Search, 
  Bell, 
  ChevronRight, 
  Play, 
  Star, 
  Clock, 
  Zap,
  Flame,
  LayoutDashboard,
  Menu,
  X,
  ChevronLeft,
  BookOpen,
  Settings
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [playgroundCode, setPlaygroundCode] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  }, []);

  const statsData = [
    { name: 'Mon', hours: 2.5 },
    { name: 'Tue', hours: 4.1 },
    { name: 'Wed', hours: 3.8 },
    { name: 'Thu', hours: 5.2 },
    { name: 'Fri', hours: 1.5 },
    { name: 'Sat', hours: 6.0 },
    { name: 'Sun', hours: 2.2 },
  ];

  const handleSelectLesson = (courseId: string, lessonId: string) => {
    const course = COURSES.find(c => c.id === courseId);
    if (course) {
      const lesson = course.lessons.find(l => l.id === lessonId);
      if (lesson) {
        setSelectedCourse(course);
        setActiveLesson(lesson);
        setActiveTab('lesson');
        if (window.innerWidth < 1024) {
          setIsSidebarOpen(false);
        }
      }
    }
  };

  const handleTryIt = (code: string) => {
    setPlaygroundCode(code);
    setActiveTab('playground');
  };

  const renderDashboard = () => (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="relative bg-emerald-900 rounded-[3rem] p-8 lg:p-12 overflow-hidden text-white shadow-2xl border border-white/10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-400/20 to-transparent skew-x-12 translate-x-1/4"></div>
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
              <span className="bg-emerald-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] border border-white/20 shadow-lg shadow-emerald-900/40">
                PRO STUDENT
              </span>
              <span className="flex items-center gap-1 text-amber-400 text-[10px] font-black bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md uppercase tracking-widest">
                <Flame size={14} fill="currentColor" /> 12 DAY STREAK
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight">Master the Future of <br/><span className="text-emerald-400">Web Technology</span></h1>
            <p className="text-emerald-100/80 text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed font-medium">
              Continue your journey on <span className="text-white font-black underline decoration-emerald-400 underline-offset-4">HTML Attributes</span> and level up your skills today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => handleSelectLesson('html-tutorial', 'html-intro')}
                className="bg-white text-emerald-900 font-black px-12 py-5 rounded-2xl hover:bg-emerald-50 transition-all flex items-center justify-center gap-3 shadow-2xl hover:scale-105 active:scale-95"
              >
                <Play fill="currentColor" size={18} />
                CONTINUE LEARNING
              </button>
              <button 
                onClick={() => setActiveTab('playground')}
                className="bg-emerald-800/40 backdrop-blur-xl text-white border border-white/20 px-10 py-5 rounded-2xl hover:bg-emerald-700/60 transition-all font-black uppercase tracking-widest text-sm"
              >
                OPEN PLAYGROUND
              </button>
            </div>
          </div>
          <div className="w-full lg:w-auto hidden md:block">
             <div className="bg-white/10 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/20 shadow-2xl w-full lg:w-80">
               <div className="flex justify-between items-center mb-8">
                 <div className="p-4 bg-emerald-500 rounded-3xl shadow-xl shadow-emerald-500/40">
                    <Star className="text-white" size={28} fill="currentColor" />
                 </div>
                 <div className="text-right">
                    <p className="text-[10px] opacity-60 font-black uppercase tracking-[0.2em] mb-1">XP SCORE</p>
                    <p className="text-4xl font-black tracking-tighter text-white">4,820</p>
                 </div>
               </div>
               <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-[10px] font-black uppercase mb-2 opacity-60 tracking-widest text-emerald-100">
                      <span>NEXT LEVEL: MASTER</span>
                      <span>85%</span>
                    </div>
                    <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)] w-[85%]"></div>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                    <div>
                      <p className="text-[10px] opacity-60 font-black uppercase tracking-widest text-emerald-100">RANK</p>
                      <p className="text-lg font-black text-amber-400">#42 Worldwide</p>
                    </div>
                    <Zap className="text-amber-400" size={24} fill="currentColor" />
                  </div>
               </div>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-4">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-xl">
                <Clock size={24} />
              </div>
              Activity Feed
            </h2>
            <div className="hidden sm:flex bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-sm text-sm font-black text-slate-500 items-center gap-3">
              Daily Avg: <span className="text-emerald-600">3.6h</span>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            </div>
          </div>

          <div className="bg-white p-6 lg:p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50">
            <div className="h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={statsData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 800 }} dy={15} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 800 }} />
                  <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)', padding: '20px' }} />
                  <Bar dataKey="hours" radius={[12, 12, 12, 12]} barSize={40}>
                    {statsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.hours > 4 ? '#059669' : '#d1fae5'} className="hover:opacity-80 transition-opacity" />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">E-Learning Paths</h2>
              <button className="bg-emerald-50 text-emerald-600 px-6 py-2.5 rounded-xl text-sm font-black hover:bg-emerald-600 hover:text-white transition-all">View All</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {COURSES.map(course => (
                <div key={course.id} onClick={() => handleSelectLesson(course.id, course.lessons[0].id)}>
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <AIAssistant />
          <div className="bg-slate-900 p-8 lg:p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group border border-slate-800">
            <div className="absolute -right-4 -top-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-1000"></div>
            <h3 className="font-black text-2xl text-white mb-8 flex items-center gap-4">
              <div className="p-2 bg-amber-400/10 rounded-xl">
                <Zap className="text-amber-400" size={24} fill="currentColor" />
              </div>
              Daily Missions
            </h3>
            <div className="space-y-5">
              {[
                { title: 'Semantic HTML Quiz', reward: '+150 XP', category: 'HTML5', progress: 100 },
                { title: 'Flexbox Mastery', reward: '+300 XP', category: 'CSS3', progress: 30 },
                { title: 'JS Async/Await', reward: '+500 XP', category: 'JS ES6', progress: 0 },
              ].map((task, i) => (
                <div key={i} className="group/item flex items-center justify-between p-6 rounded-[1.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer hover:border-emerald-500/30">
                  <div className="flex-1">
                    <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">{task.category}</p>
                    <p className="font-bold text-white mb-3 text-sm">{task.title}</p>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-emerald-500 transition-all duration-1000" style={{ width: `${task.progress}%` }}></div>
                    </div>
                  </div>
                  <div className="ml-4 text-amber-400 font-black text-xs text-right whitespace-nowrap">
                    {task.reward}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const getPageTitle = () => {
    if (activeTab === 'dashboard') return 'Dashboard Home';
    if (activeTab === 'lesson' && selectedCourse) return selectedCourse.title;
    if (activeTab === 'playground') return 'Code Playground';
    if (activeTab === 'ai-tutor') return 'Siksha AI Assistant';
    return 'Learning Hub';
  };

  return (
    <div className="h-screen w-full flex bg-slate-50 overflow-hidden font-['Inter']">
      
      {/* SIDEBAR CONTAINER */}
      <aside 
        className={`
          fixed lg:relative inset-y-0 left-0 z-50 
          transition-all duration-500 ease-in-out
          ${isSidebarOpen ? 'w-72 translate-x-0' : 'w-0 -translate-x-full lg:translate-x-0'}
          bg-white border-r border-slate-200 overflow-hidden
        `}
      >
        <div className="w-72 h-full">
          <Sidebar 
            activeTab={activeTab} 
            setActiveTab={(tab) => {
              setActiveTab(tab);
              if (window.innerWidth < 1024) setIsSidebarOpen(false);
            }} 
            onSelectLesson={handleSelectLesson}
          />
        </div>
      </aside>

      {/* MOBILE OVERLAY */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm lg:hidden z-40 transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col h-full min-w-0">
        
        {/* TOP HEADER BAR */}
        <header className="sticky top-0 z-30 bg-white px-4 lg:px-8 py-3.5 flex justify-between items-center border-b border-slate-200 shrink-0">
          <div className="flex items-center gap-4 min-w-0">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
              className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all focus:outline-none active:scale-95"
            >
               {isSidebarOpen ? <ChevronLeft size={18} /> : <Menu size={18} />}
            </button>
            
            <nav className="flex items-center text-xs font-bold tracking-tight overflow-hidden text-slate-400">
               <button onClick={() => setActiveTab('dashboard')} className="hover:text-emerald-600 transition-colors">SikshaSarovar</button>
               <ChevronRight size={14} className="mx-2 opacity-50" />
               <span className="text-emerald-600 truncate">{getPageTitle()}</span>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-40 lg:w-56 bg-slate-50 border border-slate-200 rounded-lg py-1.5 pl-9 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/10 text-xs font-medium"
              />
            </div>
            
            <button className="bg-slate-50 p-2 rounded-lg border border-slate-200 text-slate-400 hover:text-emerald-600 transition-all">
              <Bell size={18} />
            </button>
            <div className="h-8 w-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center">
               <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" className="w-full h-full rounded-lg" alt="Profile" />
            </div>
          </div>
        </header>

        {/* PROMINENT CONTEXT BAR (COURSE NAME DISPLAYED JUST AFTER THE TOP BAR) */}
        <div className="bg-white border-b border-slate-200 py-6 px-6 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0 shadow-sm animate-in slide-in-from-top-4 duration-500">
          <div className="flex items-center gap-5">
            <div className="p-3 bg-emerald-100 text-emerald-600 rounded-2xl shadow-inner">
              {activeTab === 'dashboard' ? <LayoutDashboard size={24} /> : 
               activeTab === 'lesson' ? <BookOpen size={24} /> : 
               activeTab === 'playground' ? <Play size={24} /> : <Zap size={24} />}
            </div>
            <div>
              <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-1">Learning Module</p>
              <h1 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                {getPageTitle()}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 bg-slate-50 text-slate-600 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-black hover:bg-slate-100 transition-all">
               <Settings size={14} />
               Preferences
            </button>
            <button className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-xs font-black shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all">
               Quick Start
            </button>
          </div>
        </div>

        {/* MAIN PAGE CONTENT */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-12 custom-scrollbar bg-slate-50/50">
          {activeTab === 'dashboard' && renderDashboard()}
          
          {activeTab === 'lesson' && activeLesson && selectedCourse && (
            <LessonViewer 
              lesson={activeLesson}
              course={selectedCourse}
              onSelectLesson={(lId) => handleSelectLesson(selectedCourse.id, lId)}
              onNext={() => {
                const nextId = selectedCourse?.lessons.findIndex(l => l.id === activeLesson.id);
                if (nextId !== undefined && nextId < (selectedCourse?.lessons.length || 0) - 1) {
                  handleSelectLesson(selectedCourse!.id, selectedCourse!.lessons[nextId + 1].id);
                } else {
                  setActiveTab('dashboard');
                }
              }} 
              onPrev={() => {
                const prevId = selectedCourse?.lessons.findIndex(l => l.id === activeLesson.id);
                if (prevId !== undefined && prevId > 0) {
                  handleSelectLesson(selectedCourse!.id, selectedCourse!.lessons[prevId - 1].id);
                }
              }}
              onTryIt={handleTryIt}
            />
          )}

          {activeTab === 'playground' && (
            <div className="h-full min-h-[600px] animate-in zoom-in-95 duration-500">
              <Playground initialCode={playgroundCode} />
            </div>
          )}

          {activeTab === 'ai-tutor' && (
            <div className="max-w-4xl mx-auto h-full animate-in fade-in duration-500">
              <AIAssistant />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
