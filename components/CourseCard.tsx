
import React from 'react';
import { Course } from '../types';
import { ICON_MAP } from '../constants';
import { ChevronRight } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  completedLessons: string[];
}

const CourseCard: React.FC<CourseCardProps> = ({ course, completedLessons }) => {
  const completedCount = course.lessons.filter(l => completedLessons.includes(l.id)).length;
  const progress = Math.round((completedCount / course.lessons.length) * 100) || 0;

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer">
      <div className="flex justify-between items-start mb-5">
        <div className={`p-4 rounded-2xl bg-brand-50 dark:bg-slate-700 text-brand-600 dark:text-brand-400 group-hover:bg-brand-900 group-hover:text-accent-500 transition-all duration-300 shadow-sm`}>
          {ICON_MAP[course.icon] || ICON_MAP['code']}
        </div>
        <span className={`text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest ${course.level === 'Beginner' ? 'bg-brand-100 text-brand-900' :
          course.level === 'Intermediate' ? 'bg-accent-100 text-accent-800' :
            'bg-rose-100 text-rose-700'
          }`}>
          {course.level}
        </span>
      </div>

      <h3 className="font-black text-slate-800 dark:text-slate-100 text-lg mb-2 group-hover:text-brand-900 dark:group-hover:text-brand-400 transition-colors leading-tight">{course.title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-2 leading-relaxed">{course.category} • {course.lessons.length} Lessons</p>

      <div className="space-y-2">
        <div className="flex justify-between text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
          <span>Completion</span>
          <span className="text-brand-600 dark:text-brand-400">{progress}%</span>
        </div>
        <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
          <div
            className="bg-brand-600 dark:bg-brand-500 h-full transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-slate-50 dark:border-slate-700/50 flex items-center justify-between text-sm font-black text-brand-900 dark:text-brand-100">
        <span>Learn Now</span>
        <div className="bg-brand-50 dark:bg-slate-700 p-1.5 rounded-lg group-hover:bg-brand-900 group-hover:text-white transition-all">
          <ChevronRight size={16} />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
