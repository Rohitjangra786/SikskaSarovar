
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import CourseCard from './components/CourseCard';
import AIAssistant from './components/AIAssistant';
import SEO from './components/SEO';
import LessonViewer from './components/LessonViewer';
import Playground from './components/Playground';
import Login from './components/Login';
import { Analytics } from '@vercel/analytics/react';
import { COURSES, ICON_MAP } from './constants';
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
  Menu,
  ChevronLeft,
  Settings,
  Sparkles,
  Info,
  Users,
  Mail,
  Linkedin,
  Heart,
  Github,
  Twitter,
  LogIn,
  CloudUpload,
  User as UserIcon,
  MessageCircle
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import RohitImg from './Images/rohit.jpg';
import RahulImg from './Images/rahul.jpg';

// High-fidelity SVG recreation of the SikshaSarovar Logo
export const SikshaLogo: React.FC<{ className?: string, colorMode?: 'light' | 'dark' | 'full' }> = ({ className = "w-10 h-10", colorMode = 'full' }) => {
  const isDark = colorMode === 'dark';
  const outerColor = isDark ? '#FFFFFF' : '#00385D'; 
  const innerColor = isDark ? '#D3B16D' : '#168B99'; 
  const highlightColor = '#D3B16D'; 
  
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 160C20 150 100 145 100 145C100 145 180 150 180 160L180 180C180 170 100 165 100 165C100 165 20 170 20 180L20 160Z" fill={outerColor} />
      <path d="M25 165C25 158 100 153 100 153C100 153 175 158 175 165L175 178C175 171 100 166 100 166C100 166 25 171 25 178L25 165Z" fill={highlightColor} />
      <path d="M40 145C25 100 60 75 80 110C100 145 75 165 100 165C125 165 150 135 135 100C120 65 90 75 90 75" stroke={innerColor} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      <path d="M100 145C100 145 88 115 88 85C88 55 112 55 112 85C112 115 100 145 100 145Z" fill={outerColor} />
      <ellipse cx="68" cy="115" rx="6" ry="10" transform="rotate(-40 68 115)" fill={highlightColor} />
      <ellipse cx="132" cy="115" rx="6" ry="10" transform="rotate(40 132 115)" fill={highlightColor} />
      <ellipse cx="78" cy="80" rx="5" ry="9" transform="rotate(-20 78 80)" fill={highlightColor} />
      <ellipse cx="122" cy="80" rx="5" ry="9" transform="rotate(20 122 80)" fill={highlightColor} />
      <ellipse cx="100" cy="55" rx="4" ry="7" fill={highlightColor} />
      <path d="M65 45L72 60L58 60L65 45Z" fill={highlightColor} />
      <rect x="63" y="61" width="4" height="6" fill={highlightColor} />
      <path d="M100 25L108 42L92 42L100 25Z" fill={highlightColor} />
      <rect x="98" y="43" width="4" height="8" fill={highlightColor} />
      <circle cx="140" cy="45" r="9" stroke={highlightColor} strokeWidth="2.5" strokeDasharray="3 1.5" />
      <circle cx="140" cy="45" r="3.5" fill={highlightColor} />
      <path d="M155 75L175 85L155 95L135 85L155 75Z" fill={highlightColor} />
      <path d="M140 88V95C140 95 155 100 170 95V88" stroke={highlightColor} strokeWidth="2" />
      <path d="M175 85V100" stroke={highlightColor} strokeWidth="1.5" />
    </svg>
  );
};

const statsData = [
  { name: 'Mon', hours: 2 },
  { name: 'Tue', hours: 5 },
  { name: 'Wed', hours: 3 },
  { name: 'Thu', hours: 7 },
  { name: 'Fri', hours: 4 },
  { name: 'Sat', hours: 8 },
  { name: 'Sun', hours: 1 },
];

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ name: string, email: string } | null>(null);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [playgroundCode, setPlaygroundCode] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
    const savedUser = localStorage.getItem('siksha_user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
    const savedProgress = localStorage.getItem('siksha_progress');
    if (savedProgress) {
      setCompletedLessons(JSON.parse(savedProgress));
    }
    // Try server session first (cookie-based JWT)
    (async () => {
      try {
        const r = await fetch('/api/auth/me', { credentials: 'include' });
        if (r.ok) {
          const j = await r.json();
          if (j.user) {
            setCurrentUser({ name: j.user.name, email: j.user.email });
            setIsLoggedIn(true);
            localStorage.setItem('siksha_user', JSON.stringify({ name: j.user.name, email: j.user.email }));
          }
        }
      } catch (err) {
        // ignore -- no server session
      }
    })();
  }, []);

  const handleLoginSuccess = (user: { name: string, email: string }) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
    setShowLogin(false);
    localStorage.setItem('siksha_user', JSON.stringify(user));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem('siksha_user');
  };

  const toggleLessonCompletion = (lessonId: string) => {
    setCompletedLessons(prev => {
      const updated = prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId];
      localStorage.setItem('siksha_progress', JSON.stringify(updated));
      return updated;
    });
  };

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

  if (showLogin) {
    return (
      <>
        <SEO title="Sign In" description="Sign in to SikshaSarovar to save progress and access premium features." />
        <Login onLoginSuccess={handleLoginSuccess} onCancel={() => setShowLogin(false)} />
      </>
    );
  }

  const renderHome = () => (
    <div className="space-y-10 animate-in fade-in duration-700">
      <SEO title="Home" description="SikshaSarovar - interactive tutorials and projects for web development and AI." />
      <div className="relative bg-brand-900 rounded-[3rem] p-8 lg:p-12 overflow-hidden text-white shadow-2xl border border-white/10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-500/20 to-transparent skew-x-12 translate-x-1/4"></div>
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
              <span className="bg-accent-500 text-brand-900 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-accent-900/40">
                {isLoggedIn ? 'PRO STUDENT' : 'FREE GUEST ACCESS'}
              </span>
              <span className="flex items-center gap-1 text-accent-300 text-[10px] font-black bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md uppercase tracking-widest">
                <Flame size={14} fill="currentColor" /> {isLoggedIn ? '12 DAY STREAK' : 'LOCAL PROGRESS ON'}
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight">Master the Future of <br/><span className="text-brand-400">Web & Programming</span></h1>
            <p className="text-brand-100/80 text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed font-medium">
              SikshaSarovar.com provides full access to all tutorials for everyone. Explore coding, AI, and backend development without any barriers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => handleSelectLesson('html-tutorial', 'h1')}
                className="bg-white text-brand-900 font-black px-12 py-5 rounded-2xl hover:bg-brand-50 transition-all flex items-center justify-center gap-3 shadow-2xl hover:scale-105 active:scale-95"
              >
                <Play fill="currentColor" size={18} />
                START LEARNING
              </button>
              {!isLoggedIn && (
                <button 
                  onClick={() => setShowLogin(true)}
                  className="bg-brand-800/40 backdrop-blur-xl text-white border border-white/20 px-10 py-5 rounded-2xl hover:bg-brand-700/60 transition-all font-black uppercase tracking-widest text-sm flex items-center gap-3"
                >
                  <CloudUpload size={18} />
                  SYNC PROGRESS
                </button>
              )}
            </div>
          </div>
          <div className="w-full lg:w-auto hidden md:block">
             <div className="bg-white/10 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/20 shadow-2xl w-full lg:w-80">
               <div className="flex justify-between items-center mb-8">
                 <div className="p-2 bg-brand-900 rounded-3xl shadow-xl">
                    <SikshaLogo className="w-12 h-12" colorMode="dark" />
                 </div>
                 <div className="text-right">
                    <p className="text-[10px] opacity-60 font-black uppercase tracking-[0.2em] mb-1">XP SCORE</p>
                    <p className="text-4xl font-black tracking-tighter text-white">{completedLessons.length * 50}</p>
                 </div>
               </div>
               <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-[10px] font-black uppercase mb-2 opacity-60 tracking-widest text-brand-100">
                      <span>LEVEL Progress</span>
                      <span>{Math.min(100, completedLessons.length * 5)}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-accent-500 shadow-[0_0_10px_rgba(211,177,109,0.5)] transition-all duration-1000" style={{ width: `${Math.min(100, completedLessons.length * 5)}%` }}></div>
                    </div>
                  </div>
                  {!isLoggedIn ? (
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                      <p className="text-[9px] font-bold text-accent-500 uppercase tracking-widest mb-2">Guest Account</p>
                      <p className="text-xs text-brand-100/70 leading-relaxed mb-4">Your progress is being saved locally. Create an account to access it from any device.</p>
                      <button 
                        onClick={() => setShowLogin(true)}
                        className="w-full bg-accent-500 text-brand-900 font-black py-3 rounded-xl text-[10px] uppercase tracking-widest hover:bg-accent-400 transition-all"
                      >
                        Save to Cloud
                      </button>
                    </div>
                  ) : (
                    <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                      <div>
                        <p className="text-[10px] opacity-60 font-black uppercase tracking-widest text-brand-100">CLOUD SYNC</p>
                        <p className="text-lg font-black text-accent-500">Active</p>
                      </div>
                      <Zap className="text-accent-500" size={24} fill="currentColor" />
                    </div>
                  )}
               </div>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-4">
              <div className="p-2 bg-brand-100 text-brand-600 rounded-xl">
                <Clock size={24} />
              </div>
              Learning Statistics
            </h2>
            {!isLoggedIn && <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Local Session Only</span>}
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
                      <Cell key={`cell-${index}`} fill={entry.hours > 4 ? '#168B99' : '#e0f2f4'} className="hover:opacity-80 transition-opacity" />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            {!isLoggedIn && (
               <div className="mt-6 pt-6 border-t border-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
                 <p className="text-xs text-slate-400 font-medium">Tracking {completedLessons.length} completed tasks today.</p>
                 <button onClick={() => setShowLogin(true)} className="text-brand-600 font-black text-[10px] uppercase tracking-widest hover:underline flex items-center gap-2">
                    <CloudUpload size={14} />
                    Sync this data to my profile
                 </button>
               </div>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Browse All Courses</h2>
              <span className="bg-brand-50 text-brand-600 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">Full Access Unlocked</span>
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
          <div className="bg-brand-900 p-8 lg:p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group border border-slate-800">
            <div className="absolute -right-4 -top-4 w-32 h-32 bg-accent-500/10 rounded-full blur-3xl group-hover:bg-accent-500/20 transition-all duration-1000"></div>
            <h3 className="font-black text-2xl text-white mb-8 flex items-center gap-4">
              <div className="p-2 bg-accent-500/10 rounded-xl">
                <Zap className="text-accent-500" size={24} fill="currentColor" />
              </div>
              Goal Tracker
            </h3>
            <div className="space-y-5">
              {[
                { title: 'HTML Mastery', reward: '+150 XP', category: 'Web', progress: completedLessons.filter(id => id.startsWith('h')).length * 5 },
                { title: 'Programming Logic', reward: '+300 XP', category: 'Core', progress: completedLessons.filter(id => id.startsWith('p') || id.startsWith('j')).length * 5 },
                { title: 'AI Exploration', reward: '+500 XP', category: 'Tech', progress: completedLessons.filter(id => id.startsWith('ai')).length * 5 },
              ].map((task, i) => (
                <div key={i} className="group/item flex items-center justify-between p-6 rounded-[1.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer">
                  <div className="flex-1">
                    <p className="text-[10px] font-black text-accent-500 uppercase tracking-widest mb-1">{task.category}</p>
                    <p className="font-bold text-white mb-3 text-sm">{task.title}</p>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-accent-500 transition-all duration-1000" style={{ width: `${Math.min(100, task.progress)}%` }}></div>
                    </div>
                  </div>
                  <div className="ml-4 text-accent-500 font-black text-xs text-right whitespace-nowrap">
                    {task.reward}
                  </div>
                </div>
              ))}
            </div>
            {!isLoggedIn && (
              <button 
                onClick={() => setShowLogin(true)}
                className="w-full mt-6 bg-white/10 border border-white/20 text-white font-black py-4 rounded-2xl text-[10px] uppercase tracking-widest hover:bg-white/20 transition-all"
              >
                Sign In to Save Goals
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="max-w-4xl mx-auto space-y-12 animate-in slide-in-from-bottom-10 duration-700 py-6">
      <SEO title="About" description="About SikshaSarovar - our mission, team and values." />
      <div className="text-center space-y-4">
        <h2 className="text-4xl lg:text-5xl font-black text-brand-900 tracking-tight">About SikshaSarovar</h2>
        <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">Empowering the next generation of digital creators through high-quality, accessible education.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { 
            name: "Mr. Rahul Kumar", 
            role: "Founder & CEO", 
            bio: "With over a decade of experience in software architecture, Rahul envisions a world where quality code education is a basic right.", 
            initial: "R", 
            phone: "9639748020",
            image: RahulImg // Local image placeholder (replace with actual photo if desired)
             
          },
          { 
            name: "Mr. Rohit Kumar", 
            role: "Founder & CEO", 
            bio: "A master of frontend aesthetics and user psychology, Rohit leads the creative direction of SikshaSarovar. He ensures that every student enjoys a frictionless and visually inspiring learning experience.", 
            initial: "RK", 
            phone: "7015204440",
            image: RohitImg // Local image placeholder (replace with actual photo if desired)
          }
        ].map((founder, i) => (
          <div key={i} className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col items-center text-center space-y-6 hover:shadow-2xl hover:-translate-y-2 transition-all group overflow-hidden">
            <div className="relative w-full aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-brand-900/10">
               <img 
                 src={founder.image} 
                 alt={founder.name} 
                 className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                 onError={(e) => {
                   (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${founder.name}`;
                 }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-8">
                 <p className="text-white font-black text-xs uppercase tracking-widest">{founder.initial}</p>
               </div>
            </div>
            <div className="pt-2">
              <h3 className="text-2xl font-black text-slate-900 mb-1">{founder.name}</h3>
              <p className="text-accent-600 font-black text-[10px] uppercase tracking-widest">{founder.role}</p>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed px-4">{founder.bio}</p>
            <div className="flex gap-4 pt-4 w-full justify-center">
              <a href={`https://wa.me/${founder.phone}`} target="_blank" rel="noopener noreferrer" className="flex-1 max-w-[140px] p-3 bg-green-50 rounded-xl text-green-600 hover:bg-green-600 hover:text-white transition-all border border-green-100 flex items-center justify-center gap-2 font-black text-[10px] uppercase tracking-widest">
                <MessageCircle size={18}/>
                WhatsApp
              </a>
              <button className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-brand-600 transition-colors border border-slate-100"><Linkedin size={18}/></button>
              <button className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-brand-600 transition-colors border border-slate-100"><Mail size={18}/></button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-brand-900 p-12 rounded-[3.5rem] text-white text-center space-y-8 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <Users className="mx-auto text-accent-500" size={48} />
        <div className="space-y-4 relative z-10">
          <h3 className="text-3xl font-black tracking-tight">Our Mission</h3>
          <p className="text-brand-100/80 text-lg leading-relaxed max-w-2xl mx-auto">
            At SikshaSarovar, we believe that education is the most powerful weapon which you can use to change the world. 
            Our platform is designed to be your companion in the journey from a curious learner to a professional developer.
          </p>
        </div>
      </div>
    </div>
  );

  const getPageTitle = () => {
    if (activeTab === 'home') return 'Home';
    if (activeTab === 'about') return 'Our Story';
    if (activeTab === 'lesson' && selectedCourse) return selectedCourse.title;
    if (activeTab === 'playground') return 'Editor';
    if (activeTab === 'ai-tutor') return 'AI Tutor';
    return 'Hub';
  };

  // Dynamic SEO: prefer lesson-level metadata when a lesson is active
  const seoData = (() => {
    if (activeTab === 'lesson' && activeLesson && selectedCourse) {
      const title = `${activeLesson.title} — ${selectedCourse.title}`;
      const desc = activeLesson.content.replace(/\n+/g, ' ').slice(0, 160);
      const url = `${typeof window !== 'undefined' ? window.location.origin : FRONTEND}/${selectedCourse.id}/lesson/${activeLesson.id}`;
      return { title, description: desc, url };
    }
    if (activeTab === 'about') return { title: 'About SikshaSarovar', description: 'About SikshaSarovar - our mission, team and values.', url: `${typeof window !== 'undefined' ? window.location.origin : FRONTEND}/about` };
    return { title: 'SikshaSarovar', description: 'SikshaSarovar - interactive tutorials and projects for web development and AI.', url: typeof window !== 'undefined' ? window.location.origin : FRONTEND };
  })();

  return (
    <div className="h-screen w-full flex bg-slate-50 overflow-hidden font-['Inter']">
      <SEO title={seoData.title} description={seoData.description} url={seoData.url} />
      
      {/* SIDEBAR */}
      <aside className={`fixed lg:relative inset-y-0 left-0 z-50 transition-all duration-500 ease-in-out ${isSidebarOpen ? 'w-72 translate-x-0' : 'w-0 -translate-x-full lg:translate-x-0'} bg-white border-r border-slate-200 overflow-hidden`}>
        <div className="w-72 h-full">
          <Sidebar 
            activeTab={activeTab} 
            setActiveTab={(tab) => {
              setActiveTab(tab);
              if (tab === 'home' || tab === 'about') setSelectedCourse(null);
              if (window.innerWidth < 1024) setIsSidebarOpen(false);
            }} 
            onSelectLesson={handleSelectLesson}
            filterCourseId={selectedCourse?.id}
            completedLessons={completedLessons}
          />
        </div>
      </aside>

      {/* MOBILE OVERLAY */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-brand-900/40 backdrop-blur-sm lg:hidden z-40 transition-opacity duration-300" onClick={() => setIsSidebarOpen(false)} />
      )}
      
      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-full min-w-0">
        
        {/* HEADER */}
        <header className="sticky top-0 z-30 bg-brand-50 px-4 lg:px-8 py-3.5 flex justify-between items-center border-b border-brand-100 shrink-0">
          <div className="flex items-center gap-4 min-w-0">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 bg-white rounded-lg border border-brand-200 text-brand-900 hover:text-white hover:bg-brand-900 transition-all">
               {isSidebarOpen ? <ChevronLeft size={18} /> : <Menu size={18} />}
            </button>
            <nav className="flex items-center text-xs font-bold tracking-tight overflow-hidden text-slate-500">
               <button onClick={() => { setActiveTab('home'); setSelectedCourse(null); }} className="hover:text-brand-900 transition-colors">SikshaSarovar</button>
               <ChevronRight size={14} className="mx-2 opacity-50" />
               <span className="text-brand-900 truncate font-black">{getPageTitle()}</span>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {/* SEARCH BAR */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-300" size={16} />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="w-40 lg:w-56 bg-white border border-brand-200 rounded-lg py-1.5 pl-9 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-500/10 text-xs font-medium placeholder:text-brand-200"
              />
            </div>

            {/* ABOUT BUTTON */}
            <button 
              onClick={() => setActiveTab('about')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                activeTab === 'about' 
                ? 'bg-brand-900 text-white border-brand-900' 
                : 'bg-white text-brand-900 border-brand-200 hover:text-white hover:bg-brand-900 hover:border-brand-900'
              }`}
            >
              <Info size={14} />
              About
            </button>

            {!isLoggedIn ? (
              <div className="flex items-center gap-3">
                <span className="hidden sm:block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Guest Mode</span>
                <button 
                  onClick={() => setShowLogin(true)}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-xl bg-brand-900 text-white text-[10px] font-black uppercase tracking-widest shadow-xl shadow-brand-900/20 hover:scale-105 active:scale-95 transition-all"
                >
                  <LogIn size={14} />
                  Login
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3 ml-2 pl-4 border-l border-brand-100 relative group cursor-pointer">
                <div className="text-right">
                  <p className="text-[10px] font-black text-brand-900 leading-none">{currentUser?.name}</p>
                  <p className="text-[8px] font-bold text-accent-500 uppercase tracking-widest mt-0.5">Premium Sync</p>
                </div>
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${currentUser?.name}`} className="w-9 h-9 rounded-xl bg-white border border-brand-200 shadow-sm" alt="User" />
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-slate-200 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                  <div className="p-4 border-b border-slate-50">
                    <p className="text-xs font-black text-brand-900">{currentUser?.name}</p>
                    <p className="text-[10px] text-slate-400 truncate">{currentUser?.email}</p>
                  </div>
                  <button onClick={handleLogout} className="w-full text-left px-4 py-3 text-[10px] font-black uppercase text-rose-500 hover:bg-rose-50 transition-colors">Logout</button>
                </div>
              </div>
            )}
            
            <button className="bg-white p-2 rounded-lg border border-brand-200 text-brand-900 hover:bg-brand-900 hover:text-white transition-all">
              <Bell size={18} />
            </button>
          </div>
        </header>

        {/* SUB HEADER */}
        <div className="bg-white border-b border-slate-200 overflow-hidden shrink-0">
          <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-center px-6 lg:px-12 py-4 gap-6">
            <div className="flex items-center gap-4 shrink-0">
              <div className="p-2 bg-brand-50 rounded-xl shadow-lg shadow-brand-200/50">
                 <SikshaLogo className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-black text-brand-900 tracking-tight leading-none mb-1">{getPageTitle()}</h1>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">SikshaSarovar Hub</p>
              </div>
            </div>
            <div className="h-8 w-px bg-slate-100 hidden md:block"></div>
            <nav className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              {COURSES.map((course) => (
                <button key={course.id} onClick={() => handleSelectLesson(course.id, course.lessons[0].id)} className={`flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs font-black transition-all whitespace-nowrap border ${selectedCourse?.id === course.id && (activeTab === 'lesson' || activeTab === 'playground') ? 'bg-brand-900 text-white border-brand-900 shadow-md shadow-brand-200' : 'bg-slate-50 text-slate-500 border-slate-100 hover:border-brand-200 hover:text-brand-900'}`}>
                  <span className={selectedCourse?.id === course.id ? 'text-accent-500' : 'text-brand-500'}>{ICON_MAP[course.icon]}</span>
                  {course.title}
                </button>
              ))}
              <button onClick={() => setActiveTab('playground')} className={`flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs font-black transition-all whitespace-nowrap border ${activeTab === 'playground' ? 'bg-accent-500 text-brand-900 border-accent-500 shadow-md shadow-accent-100' : 'bg-accent-50 text-accent-700 border-accent-100 hover:bg-accent-100'}`}>
                <Zap size={14} fill="currentColor" /> Live Editor
              </button>
            </nav>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1 overflow-y-auto custom-scrollbar bg-slate-50/50 flex flex-col">
          <div className="p-6 lg:p-12 flex-1">
            {activeTab === 'home' && renderHome()}
            {activeTab === 'about' && renderAbout()}
            {activeTab === 'lesson' && activeLesson && selectedCourse && (
              <LessonViewer 
                lesson={activeLesson} 
                course={selectedCourse} 
                completedLessons={completedLessons}
                toggleCompletion={toggleLessonCompletion}
                onSelectLesson={(lId) => handleSelectLesson(selectedCourse.id, lId)}
                onNext={() => {
                  const nextId = selectedCourse.lessons.findIndex(l => l.id === activeLesson.id);
                  if (nextId !== undefined && nextId < selectedCourse.lessons.length - 1) {
                    handleSelectLesson(selectedCourse.id, selectedCourse.lessons[nextId + 1].id);
                  } else { setActiveTab('home'); }
                }} 
                onPrev={() => {
                  const prevId = selectedCourse.lessons.findIndex(l => l.id === activeLesson.id);
                  if (prevId !== undefined && prevId > 0) {
                    handleSelectLesson(selectedCourse.id, selectedCourse.lessons[prevId - 1].id);
                  }
                }}
                onTryIt={handleTryIt}
              />
            )}
            {activeTab === 'playground' && <div className="h-full min-h-[600px] animate-in zoom-in-95 duration-500"><Playground initialCode={playgroundCode} /></div>}
            {activeTab === 'ai-tutor' && <div className="max-w-4xl mx-auto h-full animate-in fade-in duration-500"><AIAssistant /></div>}
          </div>
          
          <footer className="bg-white border-t border-slate-200 py-8 px-6 lg:px-12 mt-auto">
            <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-brand-900 p-1 rounded-md"><Sparkles className="text-accent-500" size={14} /></div>
                  <span className="font-black text-brand-900 text-sm tracking-tight">SikshaSarovar.com</span>
                </div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Developed by SikshaSarovar</p>
                <div className="mt-2 flex gap-4 text-[9px] font-black text-green-600 uppercase tracking-widest">
                  <a href="https://wa.me/9639748020" target="_blank" rel="noopener noreferrer" className="hover:text-green-800 flex items-center gap-1"><MessageCircle size={12}/> Rahul: 9639748020</a>
                  <a href="https://wa.me/7015204440" target="_blank" rel="noopener noreferrer" className="hover:text-green-800 flex items-center gap-1"><MessageCircle size={12}/> Rohit: 7015204440</a>
                </div>
              </div>
              <div className="flex items-center gap-8 text-[11px] font-black text-slate-500 uppercase tracking-widest">
                <button onClick={() => setActiveTab('home')} className="hover:text-brand-900 transition-colors">Home</button>
                <button onClick={() => setActiveTab('about')} className="hover:text-brand-900 transition-colors">About</button>
                <a href="#" className="hover:text-brand-900 transition-colors">Terms</a>
                <a href="#" className="hover:text-brand-900 transition-colors">Privacy</a>
              </div>
              <div className="flex gap-2">
                <button className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-brand-900 border border-slate-100 transition-all"><Twitter size={16}/></button>
                <button className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-brand-900 border border-slate-100 transition-all"><Github size={16}/></button>
              </div>
            </div>
          </footer>
        </div>
      </main>
      <Analytics />
    </div>
  );
};

export default App;
