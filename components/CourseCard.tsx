
import React from 'react';
import { Course } from '../types';
import { ICON_MAP } from '../constants';
import { ChevronRight } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer">
      <div className="flex justify-between items-start mb-5">
        <div className={`p-4 rounded-2xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm`}>
          {ICON_MAP[course.icon] || ICON_MAP['code']}
        </div>
        <span className={`text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest ${
          course.level === 'Beginner' ? 'bg-emerald-100 text-emerald-700' :
          course.level === 'Intermediate' ? 'bg-teal-100 text-teal-700' :
          'bg-rose-100 text-rose-700'
        }`}>
          {course.level}
        </span>
      </div>

      <h3 className="font-black text-slate-800 text-lg mb-2 group-hover:text-emerald-600 transition-colors leading-tight">{course.title}</h3>
      <p className="text-sm text-slate-500 mb-6 line-clamp-2 leading-relaxed">{course.category} • {course.lessons.length} Lessons</p>

      <div className="space-y-2">
        <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          <span>Course Completion</span>
          <span className="text-emerald-600">{course.progress}%</span>
        </div>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-emerald-500 h-full transition-all duration-700 ease-out" 
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-slate-50 flex items-center justify-between text-sm font-black text-emerald-600">
        <span>Start Learning</span>
        <div className="bg-emerald-50 p-1.5 rounded-lg group-hover:translate-x-1 transition-transform">
          <ChevronRight size={16} />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
