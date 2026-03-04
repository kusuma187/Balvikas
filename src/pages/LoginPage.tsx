import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import LanguageToggle from '../components/LanguageToggle';
import { ChevronDown } from 'lucide-react';

const LoginPage: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [role, setRole] = React.useState('aww');
  const [username, setUsername] = React.useState('aww@demo');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setUsername(val);
    if (val.includes('sup')) setRole('supervisor');
    else if (val.includes('cdpo')) setRole('cdpo');
    else if (val.includes('parent')) setRole('parent');
    else if (val.includes('aww')) setRole('aww');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'aww') navigate('/dashboard');
    else if (role === 'supervisor') navigate('/supervisor');
    else if (role === 'cdpo') navigate('/cdpo');
    else if (role === 'parent') navigate('/parent');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 flex flex-col items-center justify-center p-6 text-white">
      <div className="absolute top-6 right-6">
        <LanguageToggle />
      </div>

      <div className="w-full max-w-sm space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="text-center space-y-2">
          <div className="text-6xl mb-4 drop-shadow-lg">👶</div>
          <h1 className="text-3xl font-bold tracking-tight">{t('appName')}</h1>
          <p className="text-blue-100 font-medium">{t('appSubtitle')}</p>
          <p className="text-blue-200 text-sm">{t('department')}</p>
        </div>

        <form onSubmit={handleLogin} className="bg-white rounded-3xl p-8 shadow-2xl space-y-6 text-slate-800">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Username</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Enter username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Enter password"
                defaultValue="pass123"
              />
            </div>
            <div className="relative">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Role</label>
              <select 
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none pr-10"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="aww">AWW (Anganwadi Worker)</option>
                <option value="supervisor">Supervisor</option>
                <option value="cdpo">CDPO (District Officer)</option>
                <option value="parent">Parent</option>
              </select>
              <div className="absolute right-3 bottom-3 text-slate-400 pointer-events-none">
                <ChevronDown size={18} />
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-200"
          >
            {t('login')}
          </button>
        </form>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-xs space-y-2">
          <p className="font-bold opacity-80 uppercase tracking-widest">Demo Credentials</p>
          <div className="grid grid-cols-2 gap-2 opacity-70">
            <p>AWW: aww@demo</p>
            <p>Pass: pass123</p>
            <p>Sup: sup@demo</p>
            <p>Pass: pass123</p>
          </div>
        </div>

        <footer className="text-center text-[10px] text-blue-200 opacity-60 space-y-1">
          <p>🤖 Powered by Sarvam AI Edge | DPDP 2023 Compliant</p>
          <p>WD&CW Andhra Pradesh</p>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;

