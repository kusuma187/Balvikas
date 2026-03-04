import React from 'react';
import { useLanguage } from '../LanguageContext';
import LanguageToggle from '../components/LanguageToggle';
import LogoutButton from '../components/LogoutButton';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { AlertTriangle, MessageSquare, ChevronRight } from 'lucide-react';

const SupervisorDashboard: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { label: 'Total Children', value: 312, color: 'bg-blue-600' },
    { label: 'High Risk', value: 28, color: 'bg-red-600' },
    { label: 'Pending Referrals', value: 14, color: 'bg-orange-500' },
    { label: 'Overdue AWCs', value: 3, color: 'bg-slate-800' },
  ];

  const barData = [
    { name: 'AWC 1', risk: 8 },
    { name: 'AWC 2', risk: 5 },
    { name: 'AWC 3', risk: 12 },
    { name: 'AWC 4', risk: 3 },
  ];

  const pieData = [
    { name: t('highRisk'), value: 28, color: '#dc2626' },
    { name: t('mediumRisk'), value: 64, color: '#ca8a04' },
    { name: t('lowRisk'), value: 220, color: '#16a34a' },
  ];

  return (
    <div className="pb-24 animate-in fade-in duration-500 bg-slate-50 min-h-screen">
      <header className="bg-white p-4 flex justify-between items-center border-b border-slate-100 sticky top-0 z-30">
        <div>
          <h2 className="text-lg font-bold text-slate-800">పర్యవేక్షకుడు (Supervisor): Radha Devi</h2>
          <p className="text-xs text-slate-500 font-medium">Block: Kuppam | 8 AWCs</p>
        </div>
        <div className="flex gap-2">
          <LanguageToggle />
          <LogoutButton />
        </div>
      </header>

      <main className="p-4 space-y-6">
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, i) => (
            <div key={i} className={`${stat.color} p-4 rounded-3xl text-white shadow-lg`}>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-70">{stat.label}</p>
              <p className="text-2xl font-black">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-red-50 border border-red-100 p-4 rounded-3xl flex gap-3 items-start">
          <AlertTriangle className="text-red-500 flex-shrink-0" size={20} />
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-red-700">Alerts</h3>
            <p className="text-xs text-red-600 font-medium leading-relaxed">
              ⚠️ 3 AWCs 7+ రోజులు నవీకరించలేదు (not updated in 7+ days)
            </p>
          </div>
        </div>

        <section className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-800">AWC Performance</h3>
          <div className="space-y-3">
            {['AWC Kuppam-1', 'AWC Kuppam-2', 'AWC Kuppam-3'].map((awc, i) => (
              <div key={i} className="flex justify-between items-center p-3 border border-slate-50 rounded-2xl">
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-slate-800">{awc}</p>
                  <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest">Overdue: 8 days</p>
                </div>
                <button className="p-2 bg-green-50 text-green-600 rounded-xl">
                  <MessageSquare size={16} />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-800">Risk Distribution</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-4">
            {pieData.map((d, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }}></div>
                <span className="text-[10px] font-bold text-slate-500">{d.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-800">High Risk by AWC</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold', fill: '#94a3b8'}} />
                <YAxis hide />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '16px', border: 'none'}} />
                <Bar dataKey="risk" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SupervisorDashboard;
