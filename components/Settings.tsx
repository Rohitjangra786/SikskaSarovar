import React, { useState, useEffect } from 'react';

interface Props {
  currentUser: any | null;
  onUpdate: (user: any) => void;
}

const Settings: React.FC<Props> = ({ currentUser, onUpdate }) => {
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
    <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-md">
      <h2 className="text-2xl font-black mb-4">Profile Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-bold">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="w-full mt-2 p-3 border rounded-lg" placeholder="Enter your name" />
        </div>
        <div>
          <label className="text-sm font-bold">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mt-2 p-3 border rounded-lg" placeholder="Enter your email" />
        </div>
        <div>
          <label className="text-sm font-bold">Designation</label>
          <input value={designation || ''} onChange={(e) => setDesignation(e.target.value)} className="w-full mt-2 p-3 border rounded-lg" />
        </div>
        <div>
          <label className="text-sm font-bold">Age</label>
          <input type="number" value={age === '' ? '' : age} onChange={(e) => setAge(e.target.value === '' ? '' : Number(e.target.value))} className="w-full mt-2 p-3 border rounded-lg" />
        </div>
        <div>
          <label className="text-sm font-bold">Sex</label>
          <select value={sex || ''} onChange={(e) => setSex(e.target.value)} className="w-full mt-2 p-3 border rounded-lg">
            <option value="">Prefer not to say</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>


        <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
          <button onClick={handleSave} disabled={saving} className="bg-brand-900 text-white px-6 py-3 rounded-xl font-black disabled:opacity-50 hover:bg-brand-800 transition-colors shadow-lg shadow-brand-900/20">{saving ? 'Saving...' : 'Save Profile'}</button>

          <button
            onClick={() => {
              if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
                localStorage.removeItem('siksha_progress');
                localStorage.removeItem('siksha_user');
                window.location.reload();
              }
            }}
            className="px-6 py-3 rounded-xl font-bold text-red-500 hover:bg-red-50 transition-colors border border-transparent hover:border-red-100"
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
