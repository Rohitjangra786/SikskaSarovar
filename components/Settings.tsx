import React, { useState, useEffect } from 'react';

interface Props {
  currentUser: any | null;
  onUpdate: (user: any) => void;
}

const Settings: React.FC<Props> = ({ currentUser, onUpdate }) => {
  const [designation, setDesignation] = useState<string>(currentUser?.designation || '');
  const [age, setAge] = useState<number | ''>(currentUser?.age ?? '');
  const [sex, setSex] = useState<string>(currentUser?.sex || '');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    setDesignation(currentUser?.designation || '');
    setAge(currentUser?.age ?? '');
    setSex(currentUser?.sex || '');
  }, [currentUser]);

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch('/api/auth/me', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ designation: designation || null, age: age === '' ? null : Number(age), sex: sex || null })
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || j.message || 'update_failed');
      onUpdate(j.user);
      setMessage('Profile updated successfully');
    } catch (err: any) {
      setMessage(String(err.message || err));
    } finally {
      setSaving(false);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-md">
      <h2 className="text-2xl font-black mb-4">Profile Settings</h2>
      <div className="space-y-4">
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

        <div className="flex items-center gap-4">
          <button onClick={handleSave} disabled={saving} className="bg-brand-900 text-white px-6 py-3 rounded-xl font-black disabled:opacity-50">{saving ? 'Saving...' : 'Save'}</button>
          {message && <div className="text-sm text-slate-600">{message}</div>}
        </div>
      </div>
    </div>
  );
};

export default Settings;
