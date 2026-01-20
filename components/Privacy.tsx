import React from 'react';
import SEO from './SEO';

const Privacy: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700 py-6 lg:p-12">
            <SEO title="Privacy Policy" description="Privacy Policy for SikshaSarovar." />
            <div className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-xl border border-slate-100">
                <h1 className="text-3xl lg:text-4xl font-black text-brand-900 tracking-tight mb-6">Privacy Policy</h1>
                <div className="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed">
                    <p>Last updated: January 20, 2026</p>

                    <h3 className="text-brand-900 font-bold text-xl mt-6 mb-2">1. Overview</h3>
                    <p>We value your privacy. This policy outlines how SikshaSarovar handles potential user data on our free educational platform.</p>

                    <h3 className="text-brand-900 font-bold text-xl mt-6 mb-2">2. Data Collection</h3>
                    <p>As a primarily static educational resource, we collect minimal personal data. We may use local storage in your browser to save your learning progress (e.g., completed lessons) so you can pick up where you left off. This data remains on your device.</p>

                    <h3 className="text-brand-900 font-bold text-xl mt-6 mb-2">3. Third-Party Services</h3>
                    <p>We may use third-party analytics (like Vercel Analytics) to understand general usage patterns to improve our content. These services typically collect anonymous data about page visits and device types.</p>

                    <h3 className="text-brand-900 font-bold text-xl mt-6 mb-2">4. Contact</h3>
                    <p>If you have any questions about this policy, please reach out to us via the contact methods listed in our footer.</p>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
