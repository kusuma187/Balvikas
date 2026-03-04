import React from 'react';
import { useLanguage } from '../LanguageContext';
import LanguageToggle from '../components/LanguageToggle';
import LogoutButton from '../components/LogoutButton';
import { CheckCircle2, Volume2, ChevronRight, MessageSquare, Phone } from 'lucide-react';

const ParentDashboard: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pb-24 animate-in fade-in duration-500 bg-slate-50 min-h-screen">
      <header className="bg-white p-4 flex justify-between items-center border-b border-slate-100 sticky top-0 z-30">
        <div>
          <h2 className="text-lg font-bold text-slate-800">నమస్కారం! (Hello!) 🙏</h2>
          <p className="text-xs text-slate-500 font-medium">మీ పిల్లవాడు (Your child): Ravi Kumar | 18m</p>
        </div>
        <div className="flex gap-2">
          <LanguageToggle />
          <LogoutButton />
        </div>
      </header>

      <main className="p-4 space-y-6">
        <div className="bg-red-50 border-2 border-red-100 rounded-3xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-red-600">
            <CheckCircle2 size={20} />
            <h3 className="font-black text-sm uppercase tracking-wider">Ravi కి కొంచెం సహాయం అవసరం</h3>
          </div>
          <p className="text-xs text-red-700 font-medium leading-relaxed">
            Ravi needs some extra help with language skills. Please follow today's activity.
          </p>
        </div>

        <section className="bg-orange-500 rounded-[40px] p-8 text-white space-y-6 shadow-xl shadow-orange-100 relative overflow-hidden">
          <div className="absolute -top-4 -right-4 opacity-20 rotate-12"><Volume2 size={120} /></div>
          <div className="space-y-1">
            <h3 className="text-2xl font-black">🎯 నేటి కార్యక్రమం</h3>
            <p className="text-orange-100 font-bold">Today's Activity: Name Recognition</p>
          </div>

          <div className="space-y-4">
            {[
              "Ravi పేరు స్పష్టంగా పిలవండి (Call Ravi's name clearly)",
              "5 సెకన్లు వేచి ఉండండి (Wait 5 seconds)",
              "స్పందించినప్పుడు చప్పట్లు కొట్టండి (Clap when responds)"
            ].map((step, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0">{i+1}</span>
                <p className="text-sm font-bold">{step}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <button className="w-full py-4 bg-white text-orange-600 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-lg">
              <Volume2 size={18} /> {t('listenAudio')}
            </button>
            <button className="w-full py-4 bg-green-500 text-white rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-lg">
              <CheckCircle2 size={18} /> {t('markDone')}
            </button>
          </div>
        </section>

        <section className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-slate-800">Weekly Progress</h3>
            <span className="text-xs font-bold text-green-600">4/7 days ✅</span>
          </div>
          <div className="flex justify-between">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold text-slate-400">{day}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${i < 4 ? 'bg-green-500 text-white' : 'bg-slate-100 text-slate-300'}`}>
                  {i < 4 ? '✓' : ''}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-800">Milestone Checklist</h3>
          <div className="space-y-3">
            {[
              { label: 'నడవగలడు (Walks alone)', done: true },
              { label: 'అమ్మ/నాన్న అంటున్నాడు (Says mama/dada)', done: true },
              { label: 'వస్తువులు చూపిస్తున్నాడు (Points to objects)', done: false },
              { label: 'ఇతర పిల్లలతో ఆడుతున్నాడు (Plays with others)', done: false },
            ].map((m, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-slate-50 rounded-2xl">
                <span className="text-xs font-bold text-slate-700">{m.label}</span>
                <span className={m.done ? 'text-green-500' : 'text-slate-300'}>{m.done ? '✅' : '❌'}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-blue-600 rounded-3xl p-6 text-white space-y-4">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Your Anganwadi Worker</p>
              <p className="text-lg font-black">Lakshmi</p>
            </div>
            <div className="flex gap-2">
              <button className="p-3 bg-white/20 rounded-2xl"><Phone size={20} /></button>
              <button className="p-3 bg-white/20 rounded-2xl"><MessageSquare size={20} /></button>
            </div>
          </div>
          <button className="w-full py-3 bg-white text-blue-600 rounded-xl font-black text-xs flex items-center justify-center gap-2">
            <MessageSquare size={14} /> Join WhatsApp Group
          </button>
        </section>
      </main>
    </div>
  );
};

export default ParentDashboard;
