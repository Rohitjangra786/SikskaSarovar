
import React, { useState } from 'react';
import { Mail, Lock, User, Github, Facebook, Twitter, Chrome, Loader2, ArrowRight, X } from 'lucide-react';
import { SikshaLogo } from '../App';

interface LoginProps {
  onLoginSuccess: (user: { name: string, email: string }) => void;
  onCancel: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess, onCancel }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      onLoginSuccess({
        name: formData.name || 'Student',
        email: formData.email
      });
      setIsLoading(false);
    }, 1500);
  };

  const handleSocialLogin = async (provider: string) => {
    setIsLoading(true);

    // NOTE: Replace the simulated providerId/name/email with real data
    // from the Google Identity Service or OAuth response in production.
    const simulated = {
      provider: provider.toLowerCase(),
      providerId: `${provider.toLowerCase()}-id-${Date.now()}`,
      name: `${provider} User`,
      email: `${provider.toLowerCase()}@example.com`,
      picture: ''
    };

    try {
      const res = await fetch('/api/auth/social', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(simulated)
      });

      if (!res.ok) {
        throw new Error('Login failed');
      }

      const data = await res.json();
      const user = data.user;

      onLoginSuccess({ name: user.name || simulated.name, email: user.email || simulated.email });
    } catch (err) {
      console.error('Social login error', err);
      // fallback to simulated login locally
      onLoginSuccess({ name: simulated.name, email: simulated.email });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-brand-900 flex items-center justify-center p-6 relative overflow-hidden font-['Inter']">
      {/* Close button for optional login */}
      <button 
        onClick={onCancel}
        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-50 p-2 hover:bg-white/10 rounded-full"
      >
        <X size={32} />
      </button>

      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white/5 backdrop-blur-2xl rounded-[4rem] border border-white/10 shadow-2xl overflow-hidden relative z-10 animate-in zoom-in-95 duration-1000">
        
        {/* Left Branding Side */}
        <div className="p-12 lg:p-20 flex flex-col justify-between bg-gradient-to-br from-brand-800/50 to-transparent">
          <div>
            <div className="bg-white p-3 rounded-3xl w-fit shadow-2xl shadow-brand-900/40 mb-10">
              <SikshaLogo className="w-12 h-12" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              Gateway to <br/>
              <span className="text-brand-400">Knowledge.</span>
            </h1>
            <p className="text-brand-100/80 text-lg lg:text-xl max-w-sm leading-relaxed mb-10">
              Join SikshaSarovar.com to master modern development skills with our interactive playground and AI tutor.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i} 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`} 
                  className="w-12 h-12 rounded-2xl bg-brand-800 border-4 border-brand-900" 
                  alt="User" 
                />
              ))}
            </div>
            <p className="text-xs font-bold text-brand-100 uppercase tracking-widest">+ 5,000 active learners</p>
          </div>
        </div>

        {/* Right Form Side */}
        <div className="bg-white p-12 lg:p-20">
          <div className="max-w-md mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl font-black text-brand-900 mb-2">
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </h2>
              <p className="text-slate-400 font-medium">
                {isSignUp ? 'Start your learning journey today.' : 'Login to continue your progress.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 mb-10">
              {isSignUp && (
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-brand-600 transition-colors" size={18} />
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-brand-600 focus:ring-4 focus:ring-brand-500/10 transition-all font-medium"
                  />
                </div>
              )}
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-brand-600 transition-colors" size={18} />
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-brand-600 focus:ring-4 focus:ring-brand-500/10 transition-all font-medium"
                />
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-brand-600 transition-colors" size={18} />
                <input
                  required
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={e => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-brand-600 focus:ring-4 focus:ring-brand-500/10 transition-all font-medium"
                />
              </div>

              {!isSignUp && (
                <div className="text-right">
                  <button type="button" className="text-xs font-black text-brand-600 hover:text-brand-900 uppercase tracking-widest">
                    Forgot Password?
                  </button>
                </div>
              )}

              <button
                disabled={isLoading}
                type="submit"
                className="w-full bg-brand-900 text-white font-black py-4 rounded-2xl hover:bg-brand-800 transition-all shadow-xl shadow-brand-900/20 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <Loader2 size={20} className="animate-spin text-accent-500" />
                ) : (
                  <>
                    {isSignUp ? 'CREATE ACCOUNT' : 'SIGN IN'}
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            <div className="relative mb-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <div className="relative flex justify-center text-xs font-black uppercase tracking-widest">
                <span className="bg-white px-4 text-slate-300">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button 
                type="button"
                onClick={() => handleSocialLogin('Google')}
                className="flex items-center justify-center gap-3 border-2 border-slate-100 py-3 rounded-2xl hover:bg-slate-50 transition-colors font-black text-[10px] uppercase tracking-widest"
              >
                <Chrome size={16} className="text-red-500" />
                Google
              </button>
              <button 
                type="button"
                onClick={() => handleSocialLogin('X')}
                className="flex items-center justify-center gap-3 border-2 border-slate-100 py-3 rounded-2xl hover:bg-slate-50 transition-colors font-black text-[10px] uppercase tracking-widest"
              >
                <Twitter size={16} fill="currentColor" className="text-sky-500" />
                X
              </button>
              <button 
                type="button"
                onClick={() => handleSocialLogin('Facebook')}
                className="flex items-center justify-center gap-3 border-2 border-slate-100 py-3 rounded-2xl hover:bg-slate-50 transition-colors font-black text-[10px] uppercase tracking-widest"
              >
                <Facebook size={16} fill="currentColor" className="text-blue-600" />
                Facebook
              </button>
              <button 
                type="button"
                onClick={() => handleSocialLogin('GitHub')}
                className="flex items-center justify-center gap-3 border-2 border-slate-100 py-3 rounded-2xl hover:bg-slate-50 transition-colors font-black text-[10px] uppercase tracking-widest"
              >
                <Github size={16} className="text-slate-900" />
                GitHub
              </button>
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-400 font-medium text-sm">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button 
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-brand-900 font-black hover:underline"
                >
                  {isSignUp ? 'Sign In' : 'Sign Up'}
                </button>
              </p>
              <button 
                onClick={onCancel}
                className="mt-6 text-slate-400 text-xs font-bold hover:text-brand-900 transition-colors uppercase tracking-widest"
              >
                Continue as Guest
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
