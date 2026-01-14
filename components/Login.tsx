
import React, { useState } from 'react';
import { Mail, Lock, User, Chrome, Loader2, ArrowRight, X } from 'lucide-react';
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const endpoint = isSignUp ? '/api/auth/signup' : '/api/auth/login';
      const body = isSignUp
        ? { name: formData.name, email: formData.email, password: formData.password }
        : { email: formData.email, password: formData.password };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        onLoginSuccess({
          name: data.user.name,
          email: data.user.email
        });
      } else {
        alert(data.error || (isSignUp ? 'Signup failed' : 'Login failed'));
      }
    } catch (error) {
      console.error('Auth error:', error);
      alert('An error occurred during authentication');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    window.location.href = '/auth/google';
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden font-['Inter'] bg-slate-950">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      {/* Close button */}
      <button
        onClick={onCancel}
        className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors z-50 p-2 hover:bg-white/5 rounded-full backdrop-blur-sm"
      >
        <X size={24} />
      </button>

      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden relative z-10 animate-in zoom-in-95 duration-500">
        <div className="p-8 md:p-10">
          <div className="flex flex-col items-center mb-8">
            <div className="bg-gradient-to-br from-brand-500 to-indigo-600 p-3 rounded-2xl shadow-lg shadow-brand-500/20 mb-6">
              <SikshaLogo className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="text-slate-400 text-sm text-center">
              {isSignUp ? 'Start your learning journey today' : 'Continue where you left off'}
            </p>
          </div>

          <div className="space-y-4">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full bg-white text-slate-900 font-semibold py-3.5 rounded-xl hover:bg-slate-50 transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-lg"
            >
              <Chrome size={20} className="text-red-500" />
              <span>Continue with Google</span>
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-xs font-medium uppercase tracking-wider">
                <span className="bg-[#0f111a] px-4 text-slate-500">Or continue with email</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-400 transition-colors" size={18} />
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500/50 focus:bg-white/10 transition-all"
                  />
                </div>
              )}
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-400 transition-colors" size={18} />
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500/50 focus:bg-white/10 transition-all"
                />
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-400 transition-colors" size={18} />
                <input
                  required
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={e => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500/50 focus:bg-white/10 transition-all"
                />
              </div>

              <button
                disabled={isLoading}
                type="submit"
                className="w-full bg-gradient-to-r from-brand-600 to-indigo-600 text-white font-bold py-3.5 rounded-xl hover:from-brand-500 hover:to-indigo-500 transition-all shadow-lg shadow-brand-500/25 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
              >
                {isLoading ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <>
                    {isSignUp ? 'Create Account' : 'Sign In'}
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            <div className="text-center mt-6">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-slate-400 text-sm hover:text-white transition-colors"
              >
                {isSignUp ? 'Already have an account?' : "Don't have an account?"} <span className="text-brand-400 font-semibold">{isSignUp ? 'Sign In' : 'Sign Up'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
