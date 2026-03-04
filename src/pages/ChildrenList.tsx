import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import LanguageToggle from '../components/LanguageToggle';
import LogoutButton from '../components/LogoutButton';
import { Search, Filter, ChevronRight } from 'lucide-react';

const ChildrenList: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [filter, setFilter] = React.useState('All');

  const children = [
    { id: 1, name: "Ravi Kumar", age: "18m", risk: "high", domain: t('language'), status: "🔴 " + t('highRisk') },
    { id: 2, name: "Priya Devi", age: "24m", risk: "low", domain: "On Track", status: "🟢 " + t('lowRisk') },
    { id: 3, name: "Arjun Reddy", age: "12m", risk: "medium", domain: t('motor'), status: "🟡 " + t('mediumRisk') },
    { id: 4, name: "Kavya Sri", age: "36m", risk: "low", domain: "On Track", status: "🟢 " + t('lowRisk') },
    { id: 5, name: "Suresh Babu", age: "6m", risk: "high", domain: "Multiple", status: "🔴 " + t('highRisk') },
    { id: 6, name: "Meena Kumari", age: "30m", risk: "medium", domain: t('cognitive'), status: "🟡 " + t('mediumRisk') },
    { id: 7, name: "Deepa Rani", age: "48m", risk: "low", domain: "On Track", status: "🟢 " + t('lowRisk') },
    { id: 8, name: "Raja Gopal", age: "9m", risk: "high", domain: t('motor'), status: "🔴 " + t('highRisk') },
    { id: 9, name: "Anitha", age: "15m", risk: "medium", domain: t('language'), status: "🟡 " + t('mediumRisk') },
    { id: 10, name: "Lakshmi Bai", age: "42m", risk: "divyang", domain: t('visual'), status: "🔵 " + t('divyang') },
  ];

  const filteredChildren = children.filter(c => {
    if (filter === 'All') return true;
    if (filter === 'high') return c.risk === 'high';
    if (filter === 'medium') return c.risk === 'medium';
    if (filter === 'low') return c.risk === 'low';
    if (filter === 'divyang') return c.risk === 'divyang';
    return true;
  });

  return (
    <div className="pb-24 animate-in fade-in duration-500">
      <header className="bg-white p-4 sticky top-0 z-30 border-b border-slate-100 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-800">{t('children')}</h2>
          <div className="flex gap-2">
            <LanguageToggle />
            <LogoutButton />
          </div>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="పేరు వెతకండి (Search child name)"
            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {['All', 'high', 'medium', 'low', 'divyang'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filter === f 
                ? 'bg-blue-600 text-white shadow-md shadow-blue-100' 
                : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {f === 'All' ? 'All' : f === 'high' ? t('highRisk') : f === 'medium' ? t('mediumRisk') : f === 'low' ? t('lowRisk') : t('divyang')}
            </button>
          ))}
        </div>
      </header>

      <main className="p-4 space-y-3">
        {filteredChildren.map((child) => (
          <div 
            key={child.id}
            onClick={() => navigate(`/child/${child.id}`)}
            className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex justify-between items-center active:scale-[0.98] transition-all group"
          >
            <div className="flex gap-4 items-center">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${
                child.risk === 'high' ? 'bg-red-50' : child.risk === 'medium' ? 'bg-yellow-50' : child.risk === 'divyang' ? 'bg-blue-50' : 'bg-green-50'
              }`}>
                {child.risk === 'divyang' ? '♿' : '👶'}
              </div>
              <div className="space-y-0.5">
                <h3 className="font-bold text-slate-800">{child.name}</h3>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <span>{child.age}</span>
                  <span>•</span>
                  <span>{child.domain}</span>
                </div>
                <div className={`text-[11px] font-bold ${
                  child.risk === 'high' ? 'text-red-500' : child.risk === 'medium' ? 'text-yellow-600' : child.risk === 'divyang' ? 'text-blue-600' : 'text-green-600'
                }`}>
                  {child.status}
                </div>
              </div>
            </div>
            <div className="text-slate-300 group-hover:text-blue-500 transition-colors">
              <ChevronRight size={20} />
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default ChildrenList;
