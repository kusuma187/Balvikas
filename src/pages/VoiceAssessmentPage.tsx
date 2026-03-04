import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Mic, CheckCircle2, RotateCcw, Save } from 'lucide-react';

const VoiceAssessmentPage: React.FC = () => {
  const { t } = useLanguage();
  const [isRecording, setIsRecording] = React.useState(false);
  const [showResults, setShowResults] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let timer: any;
    if (isRecording) {
      setProgress(0);
      timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsRecording(false);
            setShowResults(true);
            return 100;
          }
          return prev + 1;
        });
      }, 100);
    }
    return () => clearInterval(timer);
  }, [isRecording]);

  return (
    <div className="pb-24 animate-in fade-in duration-500 min-h-screen bg-slate-50">
      <header className="bg-white p-4 border-b border-slate-100 space-y-1">
        <h2 className="text-xl font-bold text-slate-800">వాయిస్ మూల్యాంకనం (Voice Assessment)</h2>
        <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">🤖 Powered by Sarvam AI Edge | Telugu</p>
      </header>

      <main className="p-4 space-y-6">
        {!showResults ? (
          <div className="space-y-8 flex flex-col items-center">
            <div className="w-full space-y-4">
              <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Select Child</label>
                  <select className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 font-bold text-sm">
                    <option>Ravi Kumar (18m)</option>
                    <option>Arjun Reddy (12m)</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Select Domain</label>
                  <select className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 font-bold text-sm">
                    <option>{t('language')}</option>
                    <option>{t('cognitive')}</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-6">
              <button 
                onClick={() => setIsRecording(true)}
                disabled={isRecording}
                className={`w-32 h-32 rounded-full flex items-center justify-center shadow-2xl transition-all active:scale-90 ${
                  isRecording ? 'bg-red-500 animate-pulse' : 'bg-orange-500 hover:bg-orange-600'
                }`}
              >
                <Mic size={48} className="text-white" />
              </button>
              <p className="font-black text-slate-800 uppercase tracking-widest text-sm">
                {isRecording ? '🔴 రికార్డింగ్... (Recording...)' : '🎤 నొక్కండి (Tap to Start)'}
              </p>
            </div>

            {isRecording && (
              <div className="w-full space-y-6 animate-in slide-in-from-bottom-4">
                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 transition-all duration-100" style={{ width: `${progress}%` }}></div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {[
                    { text: 'ఏమిటి ఇది? (What is this?)', icon: '🥭' },
                    { text: 'బంతి ఎక్కడ? (Where is ball?)', icon: '🏀' },
                    { text: 'చేతులు చప్పట్లు (Clap hands)', icon: '👏' },
                  ].map((card, i) => (
                    <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 flex justify-between items-center shadow-sm">
                      <span className="text-sm font-bold text-slate-700">{card.text}</span>
                      <span className="text-2xl">{card.icon}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6 animate-in zoom-in duration-500">
            <div className="bg-white p-6 rounded-[40px] border border-slate-100 shadow-xl space-y-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-green-100 text-green-600 p-3 rounded-full">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-black text-slate-800">✅ విశ్లేషణ పూర్తయింది</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Analysis Complete</p>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'Speech Clarity', value: '45%', color: 'text-red-600', bg: 'bg-red-50' },
                  { label: 'Response Time', value: '3.2s', color: 'text-yellow-600', bg: 'bg-yellow-50' },
                  { label: 'Vocabulary', value: '3/10', color: 'text-red-600', bg: 'bg-red-50' },
                ].map((res, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                    <span className="text-sm font-bold text-slate-700">{res.label}</span>
                    <span className={`text-sm font-black px-3 py-1 rounded-lg ${res.bg} ${res.color}`}>{res.value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-red-600 p-4 rounded-2xl text-white text-center shadow-lg shadow-red-100">
                <p className="text-sm font-black uppercase tracking-widest">HIGH RISK - Speech Delay Detected</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => setShowResults(false)}
                className="flex-1 py-4 bg-slate-100 text-slate-800 rounded-2xl font-bold flex items-center justify-center gap-2"
              >
                <RotateCcw size={18} /> {t('playAgain')}
              </button>
              <button 
                onClick={() => setShowResults(false)}
                className="flex-1 py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-100"
              >
                <Save size={18} /> {t('save')}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default VoiceAssessmentPage;
