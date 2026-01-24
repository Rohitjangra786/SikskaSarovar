import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import CourseCard from './components/CourseCard';
import AIAssistant from './components/AIAssistant';
import SEO from './components/SEO';
import LessonViewer from './components/LessonViewer';
import HtmlCourse from './components/courses/HtmlCourse';
import CCourse from './components/courses/CCourse';
import PythonCourse from './components/courses/PythonCourse';
import JavaCourse from './components/courses/JavaCourse';
import PhpCourse from './components/courses/PhpCourse';
import AiCourse from './components/courses/AiCourse';
import MlCourse from './components/courses/MlCourse';
import DmpCourse from './components/courses/DmpCourse';
import CollegeBundle from './components/CollegeBundle';
import Playground from './components/Playground';
import StartLearningMenu from './components/StartLearningMenu';
import Maintenance from './components/Maintenance';
import Terms from './components/Terms';
import Privacy from './components/Privacy';


import Settings from './components/Settings';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { COURSES, ICON_MAP } from './constants';
import { COLLEGE_COURSES } from './constants/collegeData';
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
  Settings as SettingsIcon,
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
  MessageCircle,
  GraduationCap,
  BookOpen,
  LogOut,
  X
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

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);

  useEffect(() => {
    const scrollContainer = document.getElementById('scroll-container');
    if (!scrollContainer) return; // Wait for mount

    let lastScrollY = scrollContainer.scrollTop;

    const updateScrollDirection = () => {
      const scrollY = scrollContainer.scrollTop;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection && (Math.abs(scrollY - lastScrollY) > 10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    scrollContainer.addEventListener("scroll", updateScrollDirection);
    return () => {
      scrollContainer.removeEventListener("scroll", updateScrollDirection);
    }
  }, [scrollDirection]);

  return scrollDirection;
};


// ... imports ...

const App: React.FC = () => {
  // ... (state declarations)
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [playgroundCode, setPlaygroundCode] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const scrollDirection = useScrollDirection();
  const isLoggedIn = false;
  // const currentUser = null; // Removed hardcoded null
  const [currentUser, setCurrentUser] = useState<any>(null); // State for local user
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStartLearningOpen, setIsStartLearningOpen] = useState(false);

  // Mobile Search & Notifications State
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const [notifications, setNotifications] = useState<any[]>([]);

  // Engagement State (Streaks & Resume)
  const [streak, setStreak] = useState(0);
  const [lastActiveLesson, setLastActiveLesson] = useState<{ courseId: string, lessonId: string, title: string, category: string } | null>(null);

  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference and apply to document
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('siksha_dark_mode');
    const darkModeEnabled = savedDarkMode === 'true';
    setIsDarkMode(darkModeEnabled);
    if (darkModeEnabled) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('siksha_dark_mode', newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    // Generate mock notifications using current time
    const now = new Date();
    const getTimeString = (diffHours: number) => {
      const d = new Date(now.getTime() - diffHours * 60 * 60 * 1000);
      return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const mockNotifications = [
      {
        id: 'notif-html-launch',
        title: 'New: HTML',
        message: 'Master the fundamentals of HTML with our new comprehensive course HTML.',
        date: getTimeString(0), // Current time
        courseId: 'html',
        isRead: false
      },
      {
        id: 'notif-dva',
        title: 'New: Data Visualisation',
        message: 'Master analytics with our new college course. Unit 1 is live with Mind Maps!',
        date: getTimeString(0.1), // 6 mins ago
        courseId: 'dva',
        isRead: false
      },
      {
        id: 'notif-wbp',
        title: 'New: Web Based Programming',
        message: 'Deep dive into PHP and Web Architecture. Check out the Unit 1 Notes & Mind Map.',
        date: getTimeString(2), // 2 hours ago
        courseId: 'wbp',
        isRead: false
      },
      {
        id: 'notif-dmp',
        title: 'Course Update: Disaster Management',
        message: 'Comprehensive notes and visual mind maps are now available for DMP Unit 1.',
        date: getTimeString(5), // 5 hours ago
        courseId: 'dmp',
        isRead: false
      },
      {
        id: 'notif-c-launch',
        title: 'New: Foundation of C & C++',
        message: 'Master the fundamentals with our new comprehensive course. Includes Overview, Mind Maps, and OOP concepts!',
        date: 'Yesterday',
        courseId: 'c-programming',
        isRead: false
      },
      {
        id: 'notif-python-update-jan21',
        title: 'Major Update: Basics of Python',
        message: 'Content expanded! Now includes 60+ lessons, new Mind Map, and comprehensive topics from Basics to Plotting.',
        date: 'Yesterday',
        courseId: 'python',
        isRead: false
      },
      {
        id: 'notif-ai',
        title: 'Try the AI Tutor',
        message: 'Stuck? Ask our AI assistant for help with any concept.',
        date: 'Yesterday',
        courseId: 'ai',
        isRead: false
      }
    ];
    setNotifications(mockNotifications);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }
    const query = searchQuery.toLowerCase();
    const results: any[] = [];

    [...COURSES, ...COLLEGE_COURSES].forEach(course => {
      if (course.title.toLowerCase().includes(query)) {
        results.push({ type: 'course', id: course.id, title: course.title, subTitle: 'Course', course });
      }
      course.lessons.forEach(lesson => {
        if (lesson.title.toLowerCase().includes(query)) {
          results.push({ type: 'lesson', id: lesson.id, title: lesson.title, subTitle: `Lesson in ${course.title}`, course, lesson });
        }
      });
    });
    setSearchResults(results.slice(0, 5));
  }, [searchQuery]);

  const handleSearchResultClick = (result: any) => {
    setSearchQuery('');
    setIsSearchOpen(false);

    const isCollege = COLLEGE_COURSES.some(c => c.id === result.course.id);

    if (result.type === 'course') {
      // Go to first lesson of course
      if (result.course.lessons.length > 0) {
        handleSelectLesson(result.course.id, result.course.lessons[0].id);
      }
    } else {
      handleSelectLesson(result.course.id, result.lesson.id);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }

    // Direct Course Routing: Handle access via URLs like /HTML, /Python
    const path = window.location.pathname.substring(1).toLowerCase(); // e.g. "html"
    if (path && path !== '') {
      // Find course by ID or Title (case-insensitive)
      const targetCourse = COURSES.find(c =>
        c.id.toLowerCase() === path ||
        c.title.replace(/\s+/g, '').toLowerCase() === path
      );

      if (targetCourse) {
        setSelectedCourse(targetCourse);
        setActiveTab('lesson');
        if (targetCourse.lessons.length > 0) {
          setActiveLesson(targetCourse.lessons[0]);
        }
        // Ensure sidebar is handled for mobile
        if (window.innerWidth < 1024) {
          setIsSidebarOpen(false);
        }
      }
    }
    const savedProgress = localStorage.getItem('siksha_progress');
    if (savedProgress) {
      setCompletedLessons(JSON.parse(savedProgress));
    }

    // Load Saved User
    const savedUser = localStorage.getItem('siksha_user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }


    // Load Streak & Resume Data
    const savedStreak = localStorage.getItem('siksha_streak');
    const savedLastVisit = localStorage.getItem('siksha_last_visit');
    const savedLastActiveFragment = localStorage.getItem('siksha_last_active');

    if (savedLastActiveFragment) {
      setLastActiveLesson(JSON.parse(savedLastActiveFragment));
    }

    const today = new Date().toDateString();
    if (savedStreak && savedLastVisit) {
      if (savedLastVisit === today) {
        setStreak(parseInt(savedStreak));
      } else {
        const lastDate = new Date(savedLastVisit);
        const yesterDate = new Date();
        yesterDate.setDate(yesterDate.getDate() - 1);

        if (lastDate.toDateString() === yesterDate.toDateString()) {
          const newStreak = parseInt(savedStreak) + 1;
          setStreak(newStreak);
          localStorage.setItem('siksha_streak', newStreak.toString());
        } else {
          setStreak(1);
          localStorage.setItem('siksha_streak', '1');
        }
      }
    } else {
      setStreak(1);
      localStorage.setItem('siksha_streak', '1');
    }
    localStorage.setItem('siksha_last_visit', today);

  }, []);

  const toggleLessonCompletion = async (lessonId: string) => {
    // Optimistic update
    const wasCompleted = completedLessons.includes(lessonId);
    const newState = wasCompleted
      ? completedLessons.filter(id => id !== lessonId)
      : [...completedLessons, lessonId];

    setCompletedLessons(newState);
    localStorage.setItem('siksha_progress', JSON.stringify(newState));
  };

  // Helper to sync state with URL
  const syncStateWithUrl = () => {
    // Remove leading slash, split by /
    const parts = window.location.pathname.substring(1).toLowerCase().split('/');
    const coursePath = parts[0];
    const lessonPath = parts.length > 1 ? parts[1] : null;

    if (!coursePath || coursePath === '') {
      setActiveTab('home');
      setSelectedCourse(null);
      if (window.innerWidth < 1024) setIsSidebarOpen(false);
      return;
    }

    // Static Routes Handling
    if (coursePath === 'about') {
      setActiveTab('about');
      setSelectedCourse(null);
      if (window.innerWidth < 1024) setIsSidebarOpen(false);
      return;
    }
    if (coursePath === 'playground') {
      setActiveTab('playground');
      setSelectedCourse(null);
      if (window.innerWidth < 1024) setIsSidebarOpen(false);
      return;
    }
    if (coursePath === 'ai-tutor') {
      setActiveTab('ai-tutor');
      setSelectedCourse(null);
      if (window.innerWidth < 1024) setIsSidebarOpen(false);
      return;
    }
    if (coursePath === 'settings') {
      setActiveTab('settings');
      setSelectedCourse(null);
      if (window.innerWidth < 1024) setIsSidebarOpen(false);
      return;
    }

    // New College Route Handling
    if (coursePath === 'college') {
      if (lessonPath) {
        // /college/dmp
        // Try to find in college courses
        const collegeCourse = COLLEGE_COURSES.find(c => c.id.toLowerCase() === lessonPath.toLowerCase());
        if (collegeCourse) {
          // college/dmp/lessonId
          const dmpLessonId = parts.length > 2 ? parts[2] : null;
          setSelectedCourse(collegeCourse);

          if (dmpLessonId) {
            const l = collegeCourse.lessons.find(x => x.id === dmpLessonId);
            if (l) setActiveLesson(l);
            else setActiveLesson(collegeCourse.lessons[0]);
          } else {
            setActiveLesson(collegeCourse.lessons[0]);
          }
          setActiveTab('college-lesson');
        } else {
          // Just /college -> Hub
          setActiveTab('college');
        }
      } else {
        setActiveTab('college');
        setSelectedCourse(null);
      }
      if (window.innerWidth < 1024) setIsSidebarOpen(false);
      return;
    }

    const targetCourse = COURSES.find(c =>
      c.id.toLowerCase() === coursePath ||
      c.title.replace(/\s+/g, '').toLowerCase() === coursePath
    );


    if (targetCourse) {
      setSelectedCourse(targetCourse);
      setActiveTab('lesson');

      let targetLesson = null;
      if (lessonPath && targetCourse.lessons.length > 0) {
        // Try to find lesson by ID (case-insensitive check)
        targetLesson = targetCourse.lessons.find(l => l.id.toLowerCase() === lessonPath);
      }

      // Fallback to first lesson if deep link invalid or not provided
      if (!targetLesson && targetCourse.lessons.length > 0) {
        targetLesson = targetCourse.lessons[0];
      }

      if (targetLesson) {
        setActiveLesson(targetLesson);
      }

      if (window.innerWidth < 1024) setIsSidebarOpen(false);
    }
  };

  // Handle URL changes (Initial load + Back/Forward)
  useEffect(() => {
    syncStateWithUrl();

    const onPopState = () => {
      syncStateWithUrl();
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Unified Navigation Handler
  const handleNavigate = (tab: string, url: string) => {
    if (window.location.pathname !== url) {
      window.history.pushState(null, '', url);
    }
    setActiveTab(tab);
    setSelectedCourse(null);
    if (window.innerWidth < 1024) setIsSidebarOpen(false);
  };

  const handleSelectLesson = (courseId: string, lessonId: string) => {
    let course = COURSES.find(c => c.id === courseId);
    let isCollege = false;

    if (!course) {
      course = COLLEGE_COURSES.find(c => c.id === courseId);
      isCollege = true;
    }

    if (course) {
      const lesson = course.lessons.find(l => l.id === lessonId);
      if (lesson) {
        // Update URL to /CourseID/LessonID or /college/CourseID/LessonID
        const newPath = isCollege ? `/college/${courseId}/${lessonId}` : `/${courseId}/${lessonId}`;
        if (window.location.pathname !== newPath) {
          window.history.pushState(null, '', newPath);
        }

        // Save Last Active Lesson
        const activeData = {
          courseId,
          lessonId,
          title: course.title,
          category: course.category
        };
        setLastActiveLesson(activeData);
        localStorage.setItem('siksha_last_active', JSON.stringify(activeData));

        setSelectedCourse(course);
        setActiveLesson(lesson);
        setActiveTab(isCollege ? 'college-lesson' : 'lesson');
        if (window.innerWidth < 1024) {
          setIsSidebarOpen(false);
        }
      }
    }
  };


  const handleTryIt = (code: string) => {
    setPlaygroundCode(code);
    handleNavigate('playground', '/playground');
  };

  const handleNotificationClick = (notif: any) => {
    setIsNotificationsOpen(false);

    if (notif.courseId === 'ai') {
      handleNavigate('ai-tutor', '/ai-tutor');
      return;
    }

    // Attempt to find course in regular or college lists
    const course = COURSES.find(c => c.id === notif.courseId) || COLLEGE_COURSES.find(c => c.id === notif.courseId);

    if (course && course.lessons.length > 0) {
      handleSelectLesson(course.id, course.lessons[0].id);
    }
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  if (false) { // Login removed
    return null;
  }

  const renderHome = () => (
    <div className="space-y-10 animate-in fade-in duration-700">
      <SEO title="Home" description="SikshaSarovar - interactive tutorials and projects for web development and AI." />

      {/* ... (rest of renderHome) ... */}


      {/* HERO SECTION */}
      <div className="relative bg-brand-900 rounded-[3rem] p-8 lg:p-12 overflow-hidden text-white shadow-2xl border border-white/10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-500/20 to-transparent skew-x-12 translate-x-1/4"></div>
        <div className="relative z-10 flex flex-col xl:flex-row justify-between items-center gap-12">
          <div className="flex-1 text-center xl:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
              <span className="bg-accent-500 text-brand-900 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-accent-900/40">
                {isLoggedIn ? 'PRO STUDENT' : 'FREE GUEST ACCESS'}
              </span>
              <span className="flex items-center gap-1 text-accent-300 text-[10px] font-black bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md uppercase tracking-widest">
                <Flame size={14} fill="currentColor" className={streak > 0 ? "text-orange-500" : ""} /> {streak} DAY STREAK
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight">Master the Future of <br /><span className="text-brand-400">Web & Programming</span></h1>
            <p className="text-brand-100/80 text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed font-medium">
              SikshaSarovar.com provides full access to all tutorials for everyone. Explore coding, AI, and backend development without any barriers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start">
              <button
                onClick={() => setIsStartLearningOpen(true)}
                className="bg-white text-brand-900 font-black px-12 py-5 rounded-2xl hover:bg-brand-50 transition-all flex items-center justify-center gap-3 shadow-2xl hover:scale-105 active:scale-95"
              >
                <Play fill="currentColor" size={18} />
                START LEARNING
              </button>

              {lastActiveLesson && (
                <button
                  onClick={() => handleSelectLesson(lastActiveLesson.courseId, lastActiveLesson.lessonId)}
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold px-8 py-5 rounded-2xl hover:bg-white/20 transition-all flex items-center justify-center gap-3 hover:scale-105 active:scale-95"
                >
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[9px] uppercase tracking-widest opacity-70 mb-1">Jump Back In</span>
                    <span className="text-sm font-black">{lastActiveLesson.title}</span>
                  </div>
                  <ChevronRight size={16} />
                </button>
              )}
            </div>
          </div>
          <div className="w-full lg:w-auto hidden md:block">
            <div className="bg-white/10 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/20 shadow-2xl w-full lg:w-80">
              <div className="flex justify-between items-center mb-8">
                <div className="p-2 bg-brand-900 rounded-3xl shadow-xl">
                  <SikshaLogo className="w-12 h-12" colorMode={isDarkMode ? "dark" : "light"} />
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

          </div>

          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Browse All Courses</h2>
              <span className="bg-brand-50 text-brand-600 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">Full Access Unlocked</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {COURSES.map(course => (
                <div key={course.id} onClick={() => handleSelectLesson(course.id, course.lessons[0].id)}>
                  <CourseCard course={course} completedLessons={completedLessons} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <AIAssistant className="h-[600px]" />
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

          </div>
        </div>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="max-w-4xl mx-auto space-y-12 animate-in slide-in-from-bottom-10 duration-700 py-6">
      <SEO title="About" description="About SikshaSarovar - our mission, team and values." />
      <div className="text-center space-y-4">
        <h2 className="text-4xl lg:text-5xl font-black text-brand-900 dark:text-slate-100 tracking-tight">About SikshaSarovar</h2>
        <p className="text-slate-500 dark:text-slate-400 font-medium text-lg max-w-2xl mx-auto">Empowering the next generation of digital creators through high-quality, accessible education.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            name: "Mr. Rahul Kumar",
            role: "Founder & CEO",
            bio: "With over a decade of experience in software architecture, Rahul envisions a world where quality code education is a basic right.",
            initial: "RK",
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
          <div key={i} className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center space-y-6 hover:shadow-2xl hover:-translate-y-2 transition-all group overflow-hidden">
            <div className="relative w-full aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-brand-900/10 dark:border-white/5">
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
              <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-1">{founder.name}</h3>
              <p className="text-accent-600 dark:text-accent-400 font-black text-[10px] uppercase tracking-widest">{founder.role}</p>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed px-4">{founder.bio}</p>
            <div className="flex gap-4 pt-4 w-full justify-center">
              <a href={`https://wa.me/${founder.phone}`} target="_blank" rel="noopener noreferrer" className="flex-1 max-w-[140px] p-3 bg-green-50 dark:bg-green-900/20 rounded-xl text-green-600 dark:text-green-400 hover:bg-green-600 hover:text-white transition-all border border-green-100 dark:border-green-900/40 flex items-center justify-center gap-2 font-black text-[10px] uppercase tracking-widest">
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <button className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-400 hover:text-brand-600 transition-colors border border-slate-100 dark:border-slate-700"><Linkedin size={18} /></button>
              <button className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-400 hover:text-brand-600 transition-colors border border-slate-100 dark:border-slate-700"><Mail size={18} /></button>
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
    if (activeTab === 'ai-tutor') return 'AI Tutor';
    if (activeTab === 'terms') return 'Terms of Use';
    if (activeTab === 'privacy') return 'Privacy Policy';
    if (activeTab === 'settings') return 'Settings';
    return 'Hub';
  };

  // Dynamic SEO: prefer lesson-level metadata when a lesson is active
  const seoData = (() => {
    if (activeTab === 'lesson' && activeLesson && selectedCourse) {
      const title = `${activeLesson.title} — ${selectedCourse.title}`;
      const desc = activeLesson.content.replace(/\n+/g, ' ').slice(0, 160);
      const url = `${typeof window !== 'undefined' ? window.location.origin : 'https://www.sikshasarovar.com'}/${selectedCourse.id}/lesson/${activeLesson.id}`;
      return { title, description: desc, url };
    }
    if (activeTab === 'about') return { title: 'About SikshaSarovar', description: 'About SikshaSarovar - our mission, team and values.', url: `${typeof window !== 'undefined' ? window.location.origin : 'https://www.sikshasarovar.com'}/about` };
    if (activeTab === 'terms') return { title: 'Terms of Use', description: 'Terms of Use for SikshaSarovar.', url: `${typeof window !== 'undefined' ? window.location.origin : 'https://www.sikshasarovar.com'}/terms` };
    if (activeTab === 'privacy') return { title: 'Privacy Policy', description: 'Privacy Policy for SikshaSarovar.', url: `${typeof window !== 'undefined' ? window.location.origin : 'https://www.sikshasarovar.com'}/privacy` };
    if (activeTab === 'settings') return { title: 'Settings', description: 'Manage your SikshaSarovar account settings.', url: `${typeof window !== 'undefined' ? window.location.origin : 'https://www.sikshasarovar.com'}/settings` };
    return { title: 'SikshaSarovar', description: 'SikshaSarovar - interactive tutorials and projects for web development and AI.', url: typeof window !== 'undefined' ? window.location.origin : 'https://www.sikshasarovar.com' };
  })();

  return (
    <div className="h-screen w-full flex bg-slate-50 dark:bg-slate-950 overflow-hidden font-['Inter'] transition-colors duration-300">
      <SEO title={seoData.title} description={seoData.description} url={seoData.url} />

      {/* SIDEBAR */}
      <aside className={`fixed lg:relative inset-y-0 left-0 z-50 transition-all duration-500 ease-in-out ${isSidebarOpen ? 'w-72 translate-x-0' : 'w-0 -translate-x-full lg:translate-x-0'} bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 overflow-hidden`}>
        <div className="w-72 h-full">
          <Sidebar
            activeTab={activeTab}
            setActiveTab={(tab) => {
              if (tab === 'home') handleNavigate('home', '/');
              else if (tab === 'about') handleNavigate('about', '/about');
              else if (tab === 'playground') handleNavigate('playground', '/playground');
              else if (tab === 'ai-tutor') handleNavigate('ai-tutor', '/ai-tutor');
              else if (tab === 'settings') handleNavigate('settings', '/settings');
              else setActiveTab(tab); // fallback for tabs without specific URLs if any
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
      <main className="flex-1 flex flex-col h-full min-w-0 relative" id="main-content">

        {/* HEADER */}
        <header className={`sticky top-0 z-30 bg-brand-50/95 dark:bg-slate-900/95 backdrop-blur-sm px-4 lg:px-6 py-2.5 flex justify-between items-center border-b border-brand-100 dark:border-slate-800 shrink-0 transition-transform duration-300 ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}`}>
          {isMobileSearchOpen ? (
            <div className="w-full flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-300 dark:text-slate-500" size={16} />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setIsSearchOpen(true); }}
                  onBlur={() => {
                    // Delay closing to allow clicking results
                    setTimeout(() => setIsSearchOpen(false), 200);
                  }}
                  className="w-full bg-white dark:bg-slate-800 border border-brand-200 dark:border-slate-700 rounded-xl py-2 pl-9 pr-3 focus:outline-none focus:ring-2 focus:ring-brand-500/10 text-sm font-medium placeholder:text-brand-300 dark:placeholder:text-slate-500 dark:text-slate-200"
                />
                {/* Search Results Dropdown for Mobile */}
                {searchQuery.trim() !== '' && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden z-50">
                    <div className="flex flex-col p-1">
                      {searchResults.map((result, idx) => (
                        <button
                          key={`${result.type}-${result.id}-${idx}`}
                          className="text-left px-3 py-3 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-3 border-b border-slate-50 dark:border-slate-700 last:border-0"
                          onClick={() => {
                            handleSearchResultClick(result);
                            setIsMobileSearchOpen(false);
                          }}
                        >
                          <div className="p-2 bg-brand-50 text-brand-500 rounded-lg">
                            {result.type === 'course' ? <GraduationCap size={14} /> : <BookOpen size={14} />}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-700">{result.title}</p>
                            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{result.subTitle}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <button
                onClick={() => setIsMobileSearchOpen(false)}
                className="p-2 bg-slate-100 text-slate-500 rounded-xl hover:bg-slate-200"
              >
                <X size={18} />
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 min-w-0">
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-1.5 bg-white dark:bg-slate-800 rounded-lg border border-brand-200 dark:border-slate-700 text-brand-900 dark:text-slate-200 hover:text-white hover:bg-brand-900 dark:hover:bg-brand-700 transition-all">
                  {isSidebarOpen ? <ChevronLeft size={16} /> : <Menu size={16} />}
                </button>
                <nav className="flex items-center text-[11px] font-bold tracking-tight overflow-hidden text-slate-500 dark:text-slate-400">
                  <button onClick={() => handleNavigate('home', '/')} className="hover:text-brand-900 dark:hover:text-brand-400 transition-colors">SikshaSarovar</button>
                  <ChevronRight size={12} className="mx-1.5 opacity-50" />
                  <span className="text-brand-900 dark:text-slate-200 truncate font-black">{getPageTitle()}</span>
                </nav>
              </div>

              <div className="flex items-center gap-3">
                {/* Mobile Search Toggle */}
                <button
                  onClick={() => setIsMobileSearchOpen(true)}
                  className="md:hidden p-1.5 bg-white dark:bg-slate-800 rounded-lg border border-brand-200 dark:border-slate-700 text-brand-900 dark:text-slate-200 hover:bg-brand-50 dark:hover:bg-slate-700"
                >
                  <Search size={16} />
                </button>

                {/* SEARCH BAR (Desktop) */}
                <div className="relative hidden md:block group">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-brand-300 dark:text-slate-500" size={14} />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setIsSearchOpen(true); }}
                    onFocus={() => setIsSearchOpen(true)}
                    onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
                    className="w-32 lg:w-48 bg-white dark:bg-slate-800 border border-brand-200 dark:border-slate-700 rounded-lg py-1 pl-8 pr-3 focus:outline-none focus:ring-2 focus:ring-brand-500/10 text-[11px] font-medium placeholder:text-brand-200 dark:placeholder:text-slate-500 dark:text-slate-200 transition-all focus:w-64"
                  />

                  {/* Search Results Dropdown */}
                  {isSearchOpen && searchResults.length > 0 && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
                      <div className="flex flex-col p-1">
                        {searchResults.map((result, idx) => (
                          <button
                            key={`${result.type}-${result.id}-${idx}`}
                            className="text-left px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors flex flex-col gap-0.5"
                            onClick={() => handleSearchResultClick(result)}
                          >
                            <span className="text-xs font-bold text-slate-700 dark:text-slate-200">{result.title}</span>
                            <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                              {result.type === 'course' ? <GraduationCap size={10} /> : <BookOpen size={10} />}
                              {result.subTitle}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* ABOUT BUTTON */}
                <button
                  onClick={() => handleNavigate('about', '/about')}
                  className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all border ${activeTab === 'about'
                    ? 'bg-brand-900 text-white border-brand-900'
                    : 'bg-white text-brand-900 border-brand-200 hover:text-white hover:bg-brand-900 hover:border-brand-900'
                    }`}
                >
                  <Info size={12} />
                  About
                </button>

                <button
                  onClick={() => handleNavigate('settings', '/settings')}
                  className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all border ${activeTab === 'settings'
                    ? 'bg-brand-900 text-white border-brand-900'
                    : 'bg-white text-brand-900 border-brand-200 hover:text-white hover:bg-brand-900 hover:border-brand-900'
                    }`}
                >
                  <SettingsIcon size={12} />
                  Settings
                </button>

                {/* User Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center gap-2 hover:bg-slate-50 p-1.5 rounded-lg border border-transparent hover:border-slate-100 transition-all relative z-[60]"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${currentUser?.name ? 'bg-brand-900 text-white' : 'bg-brand-100 text-brand-500'}`}>
                      {currentUser?.name ? currentUser.name.charAt(0).toUpperCase() : <UserIcon size={14} />}
                    </div>
                    <div className="hidden sm:flex flex-col items-start">
                      <span className="text-[10px] font-bold text-brand-900 uppercase tracking-widest leading-none">
                        {currentUser?.name || 'Guest'}
                      </span>
                      <span className="text-[8px] font-semibold text-slate-400 leading-none mt-0.5">{currentUser?.designation || 'Student'}</span>
                    </div>
                  </button>

                  {isUserMenuOpen && (
                    <>
                      <div className="fixed inset-0 z-[55]" onClick={() => setIsUserMenuOpen(false)} />
                      <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-[60] animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                        <div className="p-4 border-b border-slate-50 bg-slate-50/50">
                          <p className="text-xs font-black text-slate-900 truncate">{currentUser?.name || 'Guest User'}</p>
                          <p className="text-[10px] font-semibold text-slate-400 truncate mt-0.5">{currentUser?.email || 'Local Session'}</p>
                        </div>
                        <div className="p-1.5 space-y-0.5">
                          <button
                            onClick={() => {
                              handleNavigate('settings', '/settings');
                              setIsUserMenuOpen(false);
                            }}
                            className="w-full text-left px-3 py-2.5 text-xs font-bold text-slate-600 hover:text-brand-900 hover:bg-slate-50 rounded-lg flex items-center gap-3 transition-colors"
                          >
                            <SettingsIcon size={14} className="text-slate-400" />
                            Profile Settings
                          </button>
                          <div className="h-px bg-slate-50 my-1"></div>
                          <button
                            onClick={() => {
                              if (confirm('Log out? This will clear your local session progress.')) {
                                localStorage.removeItem('siksha_progress');
                                localStorage.removeItem('siksha_user');
                                window.location.reload();
                              }
                            }}
                            className="w-full text-left px-3 py-2.5 text-xs font-bold text-red-500 hover:bg-red-50 rounded-lg flex items-center gap-3 transition-colors"
                          >
                            <LogOut size={14} />
                            Log Out
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Notifications */}
                <div className="relative">
                  <button
                    onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                    onBlur={() => setTimeout(() => setIsNotificationsOpen(false), 200)}
                    className={`bg-white dark:bg-slate-800 p-1.5 rounded-lg border transition-all relative ${isNotificationsOpen ? 'bg-brand-900 dark:bg-brand-700 text-white border-brand-900 dark:border-brand-700' : 'border-brand-200 dark:border-slate-700 text-brand-900 dark:text-slate-200 hover:bg-brand-900 dark:hover:bg-slate-700 hover:text-white'}`}
                  >
                    <Bell size={16} />
                    {notifications.filter(n => !n.isRead).length > 0 && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-800"></span>
                    )}
                  </button>

                  {isNotificationsOpen && (
                    <div className="absolute top-full right-0 mt-2 w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                      <div className="p-3 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Notifications</h4>
                        <span className="px-2 py-0.5 bg-brand-100 dark:bg-slate-800 text-brand-600 dark:text-brand-400 rounded-full text-[10px] font-bold">{notifications.filter(n => !n.isRead).length} New</span>
                      </div>
                      <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
                        {notifications.length === 0 ? (
                          <div className="p-8 text-center text-slate-400 dark:text-slate-500 text-xs font-medium">No new notifications</div>
                        ) : (
                          notifications.map((notif) => (
                            <div
                              key={notif.id}
                              onMouseDown={() => handleNotificationClick(notif)}
                              className={`p-4 border-b border-slate-50 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group cursor-pointer ${notif.isRead ? 'opacity-60' : ''}`}
                            >
                              <div className="flex gap-3">
                                <div className="shrink-0 mt-1">
                                  {notif.isRead ? (
                                    <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                                  ) : (
                                    <div className="w-2 h-2 rounded-full bg-accent-500"></div>
                                  )}
                                </div>
                                <div>
                                  <p className={`text-xs font-bold mb-1 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors ${notif.isRead ? 'text-slate-500 dark:text-slate-500' : 'text-slate-800 dark:text-slate-200'}`}>{notif.title}</p>
                                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed mb-2 line-clamp-2">{notif.message}</p>
                                  <p className="text-[9px] font-bold text-slate-300 dark:text-slate-600 uppercase tracking-widest flex items-center gap-1">
                                    <Clock size={10} /> {notif.date}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                      <div className="p-2 bg-slate-50 dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700 text-center">
                        <button onMouseDown={handleMarkAllAsRead} className="text-[10px] font-bold text-brand-500 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 uppercase tracking-widest">Mark all as read</button>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </>
          )}
        </header>

        {/* SUB HEADER */}
        <div className={`bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden shrink-0 transition-all duration-300 ${scrollDirection === 'down' ? '-mt-12' : 'mt-0'}`}>
          <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-center px-4 lg:px-8 py-3 gap-4">
            <div className="flex items-center gap-4 shrink-0">
              <div className="p-2 bg-brand-50 dark:bg-slate-800 rounded-xl shadow-lg shadow-brand-200/50 dark:shadow-none">
                <SikshaLogo className="w-8 h-8" colorMode={isDarkMode ? "dark" : "light"} />
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-black text-brand-900 dark:text-slate-100 tracking-tight leading-none mb-1">{getPageTitle()}</h1>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">SikshaSarovar Hub</p>
              </div>
            </div>
            <div className="h-8 w-px bg-slate-100 dark:bg-slate-800 hidden md:block"></div>
            <nav className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              {(activeTab.startsWith('college') ? COLLEGE_COURSES : COURSES).map((course) => (
                <button
                  key={course.id}
                  onClick={() => handleSelectLesson(course.id, course.lessons[0].id)}
                  className={`flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs font-black transition-all whitespace-nowrap border ${selectedCourse?.id === course.id && (activeTab === 'lesson' || activeTab === 'college-lesson' || activeTab === 'playground') ? 'bg-brand-900 text-white border-brand-900 shadow-md shadow-brand-200' : 'bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-100 dark:border-slate-700 hover:border-brand-200 dark:hover:border-slate-600 hover:text-brand-900 dark:hover:text-slate-200'}`}
                >
                  <span className={selectedCourse?.id === course.id ? 'text-accent-500' : 'text-brand-500'}>
                    {ICON_MAP[course.icon] || <span className="opacity-50">#</span>}
                  </span>
                  {course.title}
                </button>
              ))}
              <button onClick={() => handleNavigate('playground', '/playground')} className={`flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs font-black transition-all whitespace-nowrap border ${activeTab === 'playground' ? 'bg-accent-500 text-brand-900 border-accent-500 shadow-md shadow-accent-100' : 'bg-accent-50 dark:bg-slate-800 text-accent-700 dark:text-accent-500 border-accent-100 dark:border-slate-700 hover:bg-accent-100 dark:hover:bg-slate-700'}`}>
                <Zap size={14} fill="currentColor" /> Live Editor
              </button>
            </nav>
          </div>
        </div>

        {/* CONTENT */}
        <div id="scroll-container" className="flex-1 overflow-y-auto custom-scrollbar bg-slate-50/50 dark:bg-slate-950 flex flex-col">
          <div className="p-4 lg:p-12 flex-1">
            {activeTab === 'home' && renderHome()}
            {activeTab === 'about' && renderAbout()}
            {activeTab === 'terms' && <Terms />}
            {activeTab === 'privacy' && <Privacy />}

            {activeTab === 'ai-tutor' && <div className="max-w-4xl mx-auto h-full animate-in fade-in duration-500"><AIAssistant /></div>}
            {activeTab === 'playground' && <div className="h-full min-h-[600px] animate-in zoom-in-95 duration-500"><Playground initialCode={playgroundCode} /></div>}
            {activeTab === 'upgrade' && <Maintenance onBack={() => setActiveTab('home')} />}

            {activeTab === 'college' && (
              <CollegeBundle onSelectCourse={(course) => {
                setSelectedCourse(course);
                // If course has lessons, go to first lesson, else stay?
                // Usually bundle click goes to first lesson or lesson list.
                if (course.lessons.length > 0) {
                  handleSelectLesson(course.id, course.lessons[0].id);
                }
              }} />
            )}

            {activeTab === 'college-lesson' && activeLesson && selectedCourse && (() => {
              const commonProps = {
                lesson: activeLesson,
                course: selectedCourse,
                completedLessons,
                toggleCompletion: toggleLessonCompletion,
                onSelectLesson: (lId: string) => handleSelectLesson(selectedCourse.id, lId),
                onNext: () => {
                  const nextId = selectedCourse.lessons.findIndex(l => l.id === activeLesson.id);
                  if (nextId !== undefined && nextId < selectedCourse.lessons.length - 1) {
                    handleSelectLesson(selectedCourse.id, selectedCourse.lessons[nextId + 1].id);
                  } else {
                    // Back to hub?
                    setActiveTab('college');
                    window.history.pushState(null, '', '/college');
                  }
                },
                onPrev: () => {
                  const prevId = selectedCourse.lessons.findIndex(l => l.id === activeLesson.id);
                  if (prevId !== undefined && prevId > 0) {
                    handleSelectLesson(selectedCourse.id, selectedCourse.lessons[prevId - 1].id);
                  }
                },
                onTryIt: handleTryIt
              };
              // Add specific college course renderers here if needed, or generic DmpCourse
              if (selectedCourse.id === 'dmp' || selectedCourse.id === 'wbp' || selectedCourse.id === 'dva') {
                return <DmpCourse {...commonProps} />;
              }
              return <LessonViewer {...commonProps} />;
            })()}


            {activeTab === 'lesson' && activeLesson && selectedCourse && (() => {
              const commonProps = {
                lesson: activeLesson,
                course: selectedCourse,
                completedLessons,
                toggleCompletion: toggleLessonCompletion,
                onSelectLesson: (lId: string) => handleSelectLesson(selectedCourse.id, lId),
                onNext: () => {
                  const nextId = selectedCourse.lessons.findIndex(l => l.id === activeLesson.id);
                  if (nextId !== undefined && nextId < selectedCourse.lessons.length - 1) {
                    handleSelectLesson(selectedCourse.id, selectedCourse.lessons[nextId + 1].id);
                  } else { handleNavigate('home', '/'); }
                },
                onPrev: () => {
                  const prevId = selectedCourse.lessons.findIndex(l => l.id === activeLesson.id);
                  if (prevId !== undefined && prevId > 0) {
                    handleSelectLesson(selectedCourse.id, selectedCourse.lessons[prevId - 1].id);
                  }
                },
                onTryIt: handleTryIt
              };

              switch (selectedCourse.id) {
                case 'html': return <HtmlCourse {...commonProps} />;
                case 'c-programming': return <CCourse {...commonProps} />;
                case 'python': return <PythonCourse {...commonProps} />;
                case 'java': return <JavaCourse {...commonProps} />;
                case 'php-programming': return <PhpCourse {...commonProps} />;
                case 'ai': return <AiCourse {...commonProps} />;
                case 'ml': return <MlCourse {...commonProps} />;
                default: return <LessonViewer {...commonProps} />;
              }
            })()}
            {activeTab === 'settings' && (
              <div className="max-w-[1200px] mx-auto p-6 lg:p-12">
                <Settings
                  currentUser={currentUser}
                  isDarkMode={isDarkMode}
                  onToggleDarkMode={toggleDarkMode}
                  onUpdate={(u) => {
                    const updatedUser = { name: u.name, email: u.email, designation: u.designation || '', age: u.age ?? '', sex: u.sex || '' };
                    setCurrentUser(updatedUser);
                    localStorage.setItem('siksha_user', JSON.stringify(updatedUser));
                  }}
                />
              </div>
            )}

          </div>

          <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 px-6 lg:px-12 mt-auto">
            <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-brand-900 p-1 rounded-md"><Sparkles className="text-accent-500" size={14} /></div>
                  <span className="font-black text-brand-900 dark:text-slate-100 text-sm tracking-tight">SikshaSarovar.com</span>
                </div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Developed by SikshaSarovar</p>
                <div className="mt-2 flex gap-4 text-[9px] font-black text-green-600 uppercase tracking-widest">
                  <a href="https://wa.me/9639748020" target="_blank" rel="noopener noreferrer" className="hover:text-green-800 flex items-center gap-1"><MessageCircle size={12} /> Rahul: 9639748020</a>
                  <a href="https://wa.me/7015204440" target="_blank" rel="noopener noreferrer" className="hover:text-green-800 flex items-center gap-1"><MessageCircle size={12} /> Rohit: 7015204440</a>
                </div>
              </div>
              <div className="flex items-center gap-8 text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                <button onClick={() => handleNavigate('home', '/')} className="hover:text-brand-900 dark:hover:text-slate-200 transition-colors">Home</button>
                <button onClick={() => handleNavigate('about', '/about')} className="hover:text-brand-900 dark:hover:text-slate-200 transition-colors">About</button>
                <button onClick={() => handleNavigate('terms', '/terms')} className="hover:text-brand-900 dark:hover:text-slate-200 transition-colors">Terms</button>
                <button onClick={() => handleNavigate('privacy', '/privacy')} className="hover:text-brand-900 dark:hover:text-slate-200 transition-colors">Privacy</button>
              </div>
              <div className="flex gap-2">
                <a href="https://github.com/Rohitjangra786" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-slate-400 hover:text-brand-900 dark:hover:text-slate-200 border border-slate-100 dark:border-slate-700 transition-all">
                  <Github size={16} />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </main>
      <Analytics />
      <SpeedInsights />
      <StartLearningMenu
        isOpen={isStartLearningOpen}
        onClose={() => setIsStartLearningOpen(false)}
        onSelectCourse={(courseId, lessonId) => {
          handleSelectLesson(courseId, lessonId);
          setIsStartLearningOpen(false);
        }}
      />
    </div>
  );
};

export default App;
