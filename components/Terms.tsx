import React from 'react';
import SEO from './SEO';

const Terms: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700 py-6 lg:p-12">
            <SEO title="Terms of Use" description="Terms of Use for SikshaSarovar." />
            <div className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-xl border border-slate-100">
                <h1 className="text-3xl lg:text-4xl font-black text-brand-900 tracking-tight mb-6">Terms of Use</h1>
                <div className="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed">
                    <p>Last updated: January 20, 2026</p>

                    <h3 className="text-brand-900 font-bold text-xl mt-6 mb-2">1. Introduction</h3>
                    <p>Welcome to SikshaSarovar. By accessing our website, you agree to these Terms of Use. Please read them carefully. These terms generally apply to your use of our free educational content.</p>

                    <h3 className="text-brand-900 font-bold text-xl mt-6 mb-2">2. Educational Use</h3>
                    <p>SikshaSarovar provides free access to educational materials for learning purposes. You are encouraged to use these resources for personal growth and academic understanding.</p>

                    <h3 className="text-brand-900 font-bold text-xl mt-6 mb-2">3. Intellectual Property</h3>
                    <p>The content, including tutorials, code snippets, and original text, is the property of SikshaSarovar unless otherwise stated. You may use code snippets for your personal projects, but you may not republish our full tutorials without permission.</p>

                    <h3 className="text-brand-900 font-bold text-xl mt-6 mb-2">4. Disclaimer</h3>
                    <p>The content is provided "as is". While we strive for accuracy, we make no warranties about the completeness or reliability of the information. Coding best practices change rapidly; always verify with official documentation.</p>
                </div>
            </div>
        </div>
    );
};

export default Terms;
