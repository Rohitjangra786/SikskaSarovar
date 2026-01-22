import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

interface Props {
  currentUser: any | null;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onUpdate: (user: any) => void;
}

const Settings: React.FC<Props> = ({ currentUser, isDarkMode, onToggleDarkMode, onUpdate }) => {
  const [name, setName] = useState<string>(currentUser?.name || '');
  const [email, setEmail] = useState<string>(currentUser?.email || '');
  const [designation, setDesignation] = useState<string>(currentUser?.designation || '');
  const [age, setAge] = useState<number | ''>(currentUser?.age ?? '');
  const [sex, setSex] = useState<string>(currentUser?.sex || '');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    setName(currentUser?.name || '');
    setEmail(currentUser?.email || '');
    setDesignation(currentUser?.designation || '');
    setAge(currentUser?.age ?? '');
    setSex(currentUser?.sex || '');
  }, [currentUser]);

  const handleSave = () => {
    setSaving(true);
    setMessage(null);

    // Simulate save delay
    setTimeout(() => {
      const updatedData = {
        ...currentUser,
        name,
        email,
        designation,
        age,
        sex
      };

      onUpdate(updatedData);
      setMessage('Profile saved locally');
      setSaving(false);
      setTimeout(() => setMessage(null), 3000);
    }, 500);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-8 shadow-md">
      <h2 className="text-2xl font-black mb-6">Settings</h2>

      {/* Dark Mode Toggle */}
      <div className="mb-8 p-4 bg-slate-50 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {isDarkMode ? <Moon size={20} className="text-slate-400 dark:text-slate-300" /> : <Sun size={20} className="text-slate-600 dark:text-slate-400" />}
            <div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100">Dark Mode</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Toggle between light and dark themes</p>
            </div>
          </div>
          <button
            onClick={onToggleDarkMode}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${
              isDarkMode ? 'bg-brand-600' : 'bg-slate-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isDarkMode ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

      <h3 className="text-xl font-black mb-4">Profile Settings</h3>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-bold text-slate-900 dark:text-slate-100">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="w-full mt-2 p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500" placeholder="Enter your name" />
        </div>
        <div>
          <label className="text-sm font-bold text-slate-900 dark:text-slate-100">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mt-2 p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500" placeholder="Enter your email" />
        </div>
        <div>
          <label className="text-sm font-bold text-slate-900 dark:text-slate-100">Designation</label>
          <input value={designation || ''} onChange={(e) => setDesignation(e.target.value)} className="w-full mt-2 p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500" />
        </div>
        <div>
          <label className="text-sm font-bold text-slate-900 dark:text-slate-100">Age</label>
          <input type="number" value={age === '' ? '' : age} onChange={(e) => setAge(e.target.value === '' ? '' : Number(e.target.value))} className="w-full mt-2 p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500" />
        </div>
        <div>
          <label className="text-sm font-bold text-slate-900 dark:text-slate-100">Gender</label>
          <select value={sex || ''} onChange={(e) => setSex(e.target.value)} className="w-full mt-2 p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100">
            <option value="">Prefer not to say</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>


        <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-600">
          <button onClick={handleSave} disabled={saving} className="w-full sm:w-auto bg-brand-900 text-white px-6 py-3 rounded-xl font-black disabled:opacity-50 hover:bg-brand-800 transition-colors shadow-lg shadow-brand-900/20">{saving ? 'Saving...' : 'Save Profile'}</button>

          <button
            onClick={() => {
              if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
                localStorage.removeItem('siksha_progress');
                localStorage.removeItem('siksha_user');
                window.location.reload();
              }
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-red-500 hover:bg-red-50 transition-colors border border-transparent hover:border-red-100"
          >
            Reset Progress
          </button>
        </div>
        {message && <div className="text-sm font-bold text-emerald-600 animate-in fade-in">{message}</div>}
      </div>
    </div>
  );
};

export default Settings;
