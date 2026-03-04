import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Utensils, Package, AlertTriangle, ChevronRight } from 'lucide-react';

const NutritionPage: React.FC = () => {
  const { t } = useLanguage();

  const stocks = [
    { name: 'Rice', value: 85, amount: '45kg', status: 'yellow', label: 'తక్కువ (Low)' },
    { name: 'Dal', value: 100, amount: '12kg', status: 'green', label: 'సాధారణం' },
    { name: 'Oil', value: 40, amount: '3L', status: 'red', label: 'క్లిష్టమైన స్థితి (Critical)' },
  ];

  return (
    <div className="pb-24 animate-in fade-in duration-500">
      <header className="bg-white p-4 sticky top-0 z-30 border-b border-slate-100">
        <h2 className="text-xl font-bold text-slate-800">పోషణ ట్రాకింగ్ (Nutrition Tracking)</h2>
      </header>

      <main className="p-4 space-y-6">
        {/* Today's Meals */}
        <section className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <Utensils size={18} className="text-blue-600" /> Today's Meals
          </h3>
          
          <div className="space-y-3">
            {[
              { label: t('hotMeal'), done: true },
              { label: t('morningSnack'), done: true },
              { label: t('takeHomeRation'), done: false },
            ].map((meal, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-slate-50 rounded-2xl">
                <span className="text-sm font-bold text-slate-700">{meal.label}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${meal.done ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-400'}`}>
                  {meal.done ? '✓' : ''}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stock Status */}
        <section className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <Package size={18} className="text-blue-600" /> {t('stock')}
            </h3>
            <button className="text-blue-600 text-xs font-bold">Update Stock</button>
          </div>

          <div className="space-y-4">
            {stocks.map((stock, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-700">{stock.name}</span>
                  <span className={stock.status === 'red' ? 'text-red-500' : stock.status === 'yellow' ? 'text-yellow-600' : 'text-green-600'}>
                    {stock.amount} • {stock.label}
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ${
                      stock.status === 'red' ? 'bg-red-500' : stock.status === 'yellow' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${stock.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-red-50 border border-red-100 p-3 rounded-2xl flex gap-3 items-center animate-pulse">
            <AlertTriangle size={20} className="text-red-500" />
            <p className="text-[11px] font-bold text-red-600">
              నూనె నిల్వ తక్కువగా ఉంది! Oil stock critical - order immediately
            </p>
          </div>
        </section>

        {/* Malnourished Children */}
        <section className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-800">SAM/MAM Children</h3>
          <div className="space-y-3">
            {[
              { name: 'Ravi Kumar', status: 'MAM', action: 'వారంలో పర్యవేక్షించండి', color: 'text-yellow-600 bg-yellow-50' },
              { name: 'Suresh Babu', status: 'SAM', action: 'NRC కి రెఫర్ చేయండి', color: 'text-red-600 bg-red-50' },
            ].map((child, i) => (
              <div key={i} className="flex justify-between items-center p-3 border border-slate-50 rounded-2xl">
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-slate-800">{child.name}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{child.action}</p>
                </div>
                <span className={`text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-widest ${child.color}`}>
                  {child.status}
                </span>
              </div>
            ))}
          </div>
          <button className="w-full py-3 text-blue-600 text-xs font-bold flex items-center justify-center gap-1">
            View All Nutritional Reports <ChevronRight size={14} />
          </button>
        </section>
      </main>
    </div>
  );
};

export default NutritionPage;
