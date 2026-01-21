import React from 'react';
import { Timer, ArrowLeft, Construction } from 'lucide-react';

interface MaintenanceProps {
    onBack: () => void;
}

const Maintenance: React.FC<MaintenanceProps> = ({ onBack }) => {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in-95 duration-500">
            <div className="relative mb-8 group">
                <div className="absolute inset-0 bg-accent-500/20 rounded-full blur-2xl group-hover:bg-accent-500/30 transition-all duration-500"></div>
                <div className="relative bg-white p-6 rounded-3xl shadow-xl shadow-brand-900/5 border border-slate-100">
                    <Construction size={64} className="text-accent-500 mb-4 animate-pulse" />
                    <div className="absolute -bottom-2 -right-2 bg-brand-900 p-2 rounded-xl text-white shadow-lg">
                        <Timer size={24} className="animate-spin-slow" />
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-black text-brand-900 mb-4 tracking-tight">
                Upgrade System <span className="text-accent-500">Under Maintenance</span>
            </h2>

            <p className="text-slate-500 max-w-md text-sm leading-relaxed mb-8">
                We are currently upgrading our payment gateways and pro features to provide you with a smoother, more secure experience. Please check back later!
            </p>

            <button
                onClick={onBack}
                className="flex items-center gap-2 px-6 py-3 bg-brand-900 text-white rounded-xl font-bold text-sm hover:bg-brand-800 transition-all hover:shadow-lg hover:shadow-brand-900/20 group"
            >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Return to Home
            </button>

            <div className="mt-12 flex gap-4 text-xs font-bold text-slate-300 uppercase tracking-widest">
                <span>Secure</span>
                <span>•</span>
                <span>Fast</span>
                <span>•</span>
                <span>Premium</span>
            </div>
        </div>
    );
};

export default Maintenance;
