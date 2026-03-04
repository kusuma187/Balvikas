import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import LanguageToggle from '../components/LanguageToggle';
import LogoutButton from '../components/LogoutButton';
import { UserPlus, ClipboardCheck, Mic, BarChart3, AlertCircle, ChevronRight } from 'lucide-react';

const AWWDashboard: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const stats = [
    { label: t('children'), value: 42, color: 'bg-blue-500', icon: '👶' },
    { label: t('highRisk'), value: 5, color: 'bg-red-500', icon: '🔴' },
    { label: t('mediumRisk'), value: 12, color: 'bg-yellow-500', icon: '🟡' },
    { label: t('lowRisk'), value: 25, color: 'bg-green-500', icon: '🟢' },
  ];

  const quickActions = [
    { label: t('newChild'), icon: UserPlus, path: '/add-child', color: 'text-blue-600' },
    { label: t('attendance'), icon: ClipboardCheck, path: '/attendance', color: 'text-green-600' },
    { label: 'వాయిస్ మూల్యాంకనం (Voice Assessment)', icon: Mic, path: '/voice-assessment', color: 'text-orange-600' },
    { label: t('report'), icon: BarChart3, path: '/reports', color: 'text-purple-600' },
  ];

  return (
    <div className="pb-24 animate-in fade-in duration-500">
      <header className="bg-white p-4 flex justify-between items-center border-b border-slate-100">
        <div>
          <h2 className="text-lg font-bold text-slate-800">🙏 Namaste, Lakshmi</h2>
          <p className="text-xs text-slate-500 font-medium">AWC: Kuppam | Block: Kuppam</p>
        </div>
        <div className="flex gap-2">
          <LanguageToggle />
          <LogoutButton />
        </div>
      </header>

      <main className="p-4 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, i) => (
            <div key={i} className={`${stat.color} p-4 rounded-3xl text-white shadow-lg shadow-slate-200 relative overflow-hidden group active:scale-95 transition-transform`}>
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-xs font-medium opacity-90">{stat.label}</div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="absolute -right-2 -bottom-2 opacity-10 group-hover:scale-110 transition-transform">
                <div className="text-6xl">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Alert Box */}
        <div className="bg-red-50 border-2 border-red-100 rounded-3xl p-4 flex gap-3 items-start animate-pulse">
          <div className="bg-red-500 text-white p-2 rounded-full">
            <AlertCircle size={20} />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-red-700">{t('actionNeeded')}</h3>
            <p className="text-xs text-red-600 leading-relaxed font-medium">
              Ravi Kumar - Speech delay - {t('referToAsha')} today
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, i) => (
            <button 
              key={i} 
              onClick={() => navigate(action.path)}
              className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center gap-2 hover:bg-slate-50 active:scale-95 transition-all"
            >
              <div className={`${action.color} bg-slate-50 p-3 rounded-2xl`}>
                <action.icon size={24} />
              </div>
              <span className="text-[11px] font-bold text-slate-700 text-center leading-tight">{action.label}</span>
            </button>
          ))}
        </div>

        {/* Today Summary */}
        <section className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-slate-800">Today's Summary</h3>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">March 4, 2026</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Attendance</p>
              <p className="text-sm font-bold text-green-600 flex items-center gap-1">✅ 35/42 (83%)</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Meal Served</p>
              <p className="text-sm font-bold text-blue-600 flex items-center gap-1">✅ {t('mealServed')}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Assessments</p>
              <p className="text-sm font-bold text-slate-700">2 Completed</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Referrals</p>
              <p className="text-sm font-bold text-red-500">3 Pending</p>
            </div>
          </div>

          <button className="w-full py-3 rounded-2xl bg-slate-50 text-slate-600 text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors">
            View Full Daily Log <ChevronRight size={14} />
          </button>
        </section>
      </main>
    </div>
  );
};

export default AWWDashboard;
