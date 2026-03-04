import React from 'react';
import { useLanguage } from '../LanguageContext';
import LanguageToggle from '../components/LanguageToggle';
import LogoutButton from '../components/LogoutButton';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Download, MapPin, ChevronRight } from 'lucide-react';

const CDPODashboard: React.FC = () => {
  const { t } = useLanguage();

  const metrics = [
    { label: 'Total', value: '8,420', color: 'bg-blue-600' },
    { label: 'High Risk', value: '234', color: 'bg-red-600' },
    { label: 'SAM', value: '89', color: 'bg-orange-600' },
    { label: 'Divyang', value: '45', color: 'bg-purple-600' },
  ];

  const blocks = [
    { name: 'Kuppam', status: 'red', risk: 42 },
    { name: 'Palamaner', status: 'yellow', risk: 28 },
    { name: 'Madanapalle', status: 'green', risk: 12 },
    { name: 'Punganur', status: 'yellow', risk: 31 },
    { name: 'Bangarupalem', status: 'red', risk: 38 },
  ];

  return (
    <div className="pb-24 animate-in fade-in duration-500 bg-slate-50 min-h-screen">
      <header className="bg-white p-4 flex justify-between items-center border-b border-slate-100 sticky top-0 z-30">
        <div>
          <h2 className="text-lg font-bold text-slate-800">జిల్లా డాష్‌బోర్డ్ (District Dashboard)</h2>
          <p className="text-xs text-slate-500 font-medium">Chittoor District | Andhra Pradesh</p>
        </div>
        <div className="flex gap-2">
          <LanguageToggle />
          <LogoutButton />
        </div>
      </header>

      <main className="p-4 space-y-6">
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          {metrics.map((m, i) => (
            <div key={i} className={`${m.color} min-w-[120px] p-4 rounded-3xl text-white shadow-lg`}>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-70">{m.label}</p>
              <p className="text-xl font-black">{m.value}</p>
            </div>
          ))}
        </div>

        <section className="grid grid-cols-1 gap-3">
          <h3 className="font-bold text-slate-800 px-1">Block Performance</h3>
          <div className="grid grid-cols-2 gap-3">
            {blocks.map((block, i) => (
              <div key={i} className={`p-4 rounded-3xl border-2 flex flex-col gap-2 ${
                block.status === 'red' ? 'bg-red-50 border-red-100' : block.status === 'yellow' ? 'bg-yellow-50 border-yellow-100' : 'bg-green-50 border-green-100'
              }`}>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-black text-slate-800">{block.name}</span>
                  <MapPin size={14} className="text-slate-400" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">High Risk Cases</p>
                  <p className={`text-xl font-black ${
                    block.status === 'red' ? 'text-red-600' : block.status === 'yellow' ? 'text-yellow-600' : 'text-green-600'
                  }`}>{block.risk}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-800">District Trends</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={[
                { month: 'Oct', cases: 180 },
                { month: 'Nov', cases: 210 },
                { month: 'Dec', cases: 195 },
                { month: 'Jan', cases: 234 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold', fill: '#94a3b8'}} />
                <YAxis hide />
                <Tooltip />
                <Line type="monotone" dataKey="cases" stroke="#3b82f6" strokeWidth={4} dot={{r: 4}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        <button className="w-full py-4 bg-slate-800 text-white rounded-2xl font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-slate-200">
          <Download size={18} /> {t('exportReport')}
        </button>
      </main>
    </div>
  );
};

export default CDPODashboard;
