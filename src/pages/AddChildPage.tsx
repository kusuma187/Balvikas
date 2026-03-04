import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { ChevronLeft, Save } from 'lucide-react';

const AddChildPage: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isDivyang, setIsDivyang] = React.useState(false);

  return (
    <div className="pb-24 animate-in fade-in duration-500 min-h-screen bg-slate-50">
      <header className="bg-white p-4 flex items-center gap-4 border-b border-slate-100 sticky top-0 z-30">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-xl font-bold text-slate-800">{t('newChild')}</h2>
      </header>

      <main className="p-4">
        <form className="bg-white rounded-[40px] p-8 shadow-sm border border-slate-100 space-y-6">
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('childName')}</label>
              <input type="text" className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none font-bold" placeholder="Enter name" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('dateOfBirth')}</label>
                <input type="date" className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none font-bold" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('gender')}</label>
                <select className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none font-bold">
                  <option>{t('male')}</option>
                  <option>{t('female')}</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('motherName')}</label>
              <input type="text" className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none font-bold" placeholder="Enter mother name" />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('aadhaar')}</label>
              <input type="text" className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none font-bold" placeholder="XXXX-XXXX-XXXX" />
            </div>

            <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
              <span className="text-sm font-bold text-slate-700">{t('divyang')}</span>
              <button 
                type="button"
                onClick={() => setIsDivyang(!isDivyang)}
                className={`w-14 h-8 rounded-full relative transition-colors ${isDivyang ? 'bg-blue-600' : 'bg-slate-300'}`}
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${isDivyang ? 'left-7' : 'left-1'}`}></div>
              </button>
            </div>

            {isDivyang && (
              <div className="space-y-1 animate-in slide-in-from-top-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('disability')}</label>
                <select className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none font-bold">
                  <option>{t('physical')}</option>
                  <option>{t('visual')}</option>
                  <option>{t('hearing')}</option>
                  <option>{t('intellectual')}</option>
                  <option>{t('autism')}</option>
                </select>
              </div>
            )}
          </div>

          <button 
            type="button"
            onClick={() => navigate('/children')}
            className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-sm uppercase tracking-wider shadow-xl shadow-blue-100 flex items-center justify-center gap-2"
          >
            <Save size={18} /> {t('registration')}
          </button>
        </form>
      </main>
    </div>
  );
};

export default AddChildPage;
