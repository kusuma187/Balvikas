import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Check, X, AlertCircle, Calendar } from 'lucide-react';

const AttendancePage: React.FC = () => {
  const { t } = useLanguage();
  const [attendance, setAttendance] = React.useState<Record<number, boolean>>({
    1: true, 2: true, 3: false, 4: true, 5: true, 6: true, 7: false, 8: true, 9: true, 10: true
  });

  const children = [
    { id: 1, name: "Ravi Kumar", age: "18m", absentDays: 0 },
    { id: 2, name: "Priya Devi", age: "24m", absentDays: 0 },
    { id: 3, name: "Arjun Reddy", age: "12m", absentDays: 3 },
    { id: 4, name: "Kavya Sri", age: "36m", absentDays: 0 },
    { id: 5, name: "Suresh Babu", age: "6m", absentDays: 5 },
    { id: 6, name: "Meena Kumari", age: "30m", absentDays: 0 },
    { id: 7, name: "Deepa Rani", age: "48m", absentDays: 2 },
    { id: 8, name: "Raja Gopal", age: "9m", absentDays: 0 },
    { id: 9, name: "Anitha", age: "15m", absentDays: 0 },
    { id: 10, name: "Lakshmi Bai", age: "42m", absentDays: 0 },
  ];

  const toggleAttendance = (id: number) => {
    setAttendance(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const presentCount = Object.values(attendance).filter(Boolean).length;
  const totalCount = children.length;
  const percent = Math.round((presentCount / totalCount) * 100);

  return (
    <div className="pb-24 animate-in fade-in duration-500">
      <header className="bg-white p-4 sticky top-0 z-30 border-b border-slate-100 space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-800">{t('attendance')}</h2>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
            <Calendar size={14} /> March 4, 2026
          </div>
        </div>
        
        <div className="bg-blue-600 rounded-2xl p-4 text-white flex justify-between items-center shadow-lg shadow-blue-100">
          <div className="space-y-0.5">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-70">{t('todayAttendance')}</p>
            <p className="text-2xl font-black">{presentCount} / {totalCount}</p>
          </div>
          <div className="text-right space-y-0.5">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-70">{t('attendancePercent')}</p>
            <p className="text-2xl font-black">{percent}%</p>
          </div>
        </div>
      </header>

      <main className="p-4 space-y-3">
        {children.map((child) => (
          <div 
            key={child.id}
            className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex justify-between items-center"
          >
            <div className="flex gap-3 items-center">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${attendance[child.id] ? 'bg-green-50' : 'bg-red-50'}`}>
                {attendance[child.id] ? '✅' : '❌'}
              </div>
              <div className="space-y-0.5">
                <h3 className="font-bold text-slate-800 text-sm">{child.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{child.age}</span>
                  {child.absentDays >= 3 && (
                    <span className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest flex items-center gap-1 ${
                      child.absentDays >= 5 ? 'bg-red-50 text-red-600' : 'bg-yellow-50 text-yellow-600'
                    }`}>
                      <AlertCircle size={8} /> 
                      {child.absentDays >= 5 ? t('homeVisitRequired') : `${child.absentDays} రోజులు గైర్హాజరు`}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <button 
              onClick={() => toggleAttendance(child.id)}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all active:scale-90 ${
                attendance[child.id] 
                ? 'bg-green-600 text-white shadow-lg shadow-green-100' 
                : 'bg-slate-100 text-slate-400'
              }`}
            >
              {attendance[child.id] ? <Check size={24} strokeWidth={3} /> : <X size={24} strokeWidth={3} />}
            </button>
          </div>
        ))}

        <div className="pt-4">
          <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-sm uppercase tracking-wider shadow-xl shadow-blue-100 active:scale-95 transition-all">
            {t('submitAttendance')}
          </button>
        </div>
      </main>
    </div>
  );
};

export default AttendancePage;
