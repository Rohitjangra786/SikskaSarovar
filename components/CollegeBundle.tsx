
import React from 'react';
import { Course } from '../types';
import { BookOpen, GraduationCap, ArrowRight } from 'lucide-react';
import { COLLEGE_COURSES } from '../constants/collegeData';

interface CollegeBundleProps {
    onSelectCourse: (course: Course) => void;
}

const CollegeBundle: React.FC<CollegeBundleProps> = ({ onSelectCourse }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-in fade-in duration-700">
            <div className="text-center mb-16 space-y-4">
                <div className="inline-flex items-center justify-center p-3 bg-indigo-100 text-indigo-700 rounded-2xl mb-4">
                    <GraduationCap size={32} />
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
                    College Data Hub
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    Access curated notes, lectures, and resources specifically designed for your college curriculum.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {COLLEGE_COURSES.map((course) => (
                    <div
                        key={course.id}
                        onClick={() => onSelectCourse(course)}
                        className="group bg-white rounded-[2rem] border border-slate-200 p-8 shadow-sm hover:shadow-2xl hover:shadow-indigo-900/10 hover:border-indigo-100 transition-all duration-300 cursor-pointer relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-indigo-100"></div>

                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                                <BookOpen size={28} />
                            </div>

                            <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-indigo-900 transition-colors">
                                {course.title}
                            </h3>

                            <div className="flex items-center gap-2 mb-6">
                                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-full">
                                    {course.level}
                                </span>
                                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-full">
                                    {course.lessons.length} Modules
                                </span>
                            </div>

                            <div className="flex items-center text-indigo-600 font-bold text-sm mt-4 group-hover:translate-x-2 transition-transform">
                                <span>View Subject</span>
                                <ArrowRight size={16} className="ml-2" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CollegeBundle;
