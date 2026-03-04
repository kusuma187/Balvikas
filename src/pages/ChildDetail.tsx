import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { 
  ChevronLeft, 
  Phone, 
  MapPin, 
  CreditCard, 
  Play, 
  CheckCircle2, 
  AlertTriangle, 
  X, 
  MessageSquare,
  TrendingUp,
  History,
  Info,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChildDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  
  const [riskScore, setRiskScore] = useState(0);
  const [showDemo, setShowDemo] = useState<string | null>(null);
  const [showReferralAnim, setShowReferralAnim] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [activeDomain, setActiveDomain] = useState<string | null>(null);

  // Animate risk score on load
  useEffect(() => {
    const target = 72;
    const duration = 2500;
    const interval = 35;
    const steps = duration / interval;
    const increment = target / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setRiskScore(target);
        clearInterval(timer);
      } else {
        setRiskScore(Math.floor(current));
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  const domains = [
    { id: 'language', name: t('language'), expected: "Says 8-10 words", status: "notAchieved", score: 2, color: 'red' },
    { id: 'motor', name: t('motor'), expected: "Walks alone", status: "achieved", score: 7, color: 'yellow' },
    { id: 'cognitive', name: t('cognitive'), expected: "Points to objects", status: "notAchieved", score: 4, color: 'red' },
    { id: 'social', name: t('socialEmotional'), expected: "Plays with peers", status: "partial", score: 5, color: 'yellow' },
  ];

  const chartData = [
    { month: 'Sep', weight: 7.8 },
    { month: 'Oct', weight: 8.1 },
    { month: 'Nov', weight: 8.4 },
    { month: 'Dec', weight: 8.7 },
    { month: 'Jan', weight: 8.9 },
    { month: 'Feb', weight: 9.2 },
  ];

  return (
    <div className="pb-24 bg-slate-50 min-h-screen animate-in fade-in duration-500">
      <header className="bg-white p-4 flex items-center gap-4 border-b border-slate-100 sticky top-0 z-30">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-xl font-bold text-slate-800">Ravi Kumar</h2>
      </header>

      <main className="p-4 space-y-6">
        {/* SECTION A: CHILD INFO CARD */}
        <section className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-4">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="text-2xl font-black text-slate-800">Ravi Kumar</h3>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg w-fit">
                <span>18 months</span>
                <span>•</span>
                <span>{t('male')}</span>
              </div>
            </div>
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-3xl">👶</div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-50">
            <div className="space-y-1">
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{t('motherName')}</p>
              <p className="text-sm font-bold text-slate-700">Sunita Devi</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{t('fatherName')}</p>
              <p className="text-sm font-bold text-slate-700">Ramesh Kumar</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{t('mobile')}</p>
              <p className="text-sm font-bold text-slate-700 flex items-center gap-1"><Phone size={12} /> 98765-43210</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{t('aadhaar')}</p>
              <p className="text-sm font-bold text-slate-700 flex items-center gap-1"><CreditCard size={12} /> XXXX-XXXX-1234</p>
            </div>
          </div>
        </section>

        {/* SECTION B: ANIMATED RISK SCORE GAUGE */}
        <section className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col items-center space-y-6 relative overflow-hidden">
          <div className="absolute top-4 right-4 text-slate-200"><TrendingUp size={48} /></div>
          <h3 className="font-bold text-slate-800 self-start">{t('riskScore')}</h3>
          
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90 transform">
              <circle
                cx="96"
                cy="96"
                r="80"
                fill="transparent"
                stroke="#f1f5f9"
                strokeWidth="12"
              />
              <circle
                cx="96"
                cy="96"
                r="80"
                fill="transparent"
                stroke={riskScore > 70 ? '#dc2626' : riskScore > 40 ? '#ca8a04' : '#16a34a'}
                strokeWidth="12"
                strokeDasharray={502.6}
                strokeDashoffset={502.6 - (502.6 * riskScore) / 100}
                strokeLinecap="round"
                className="transition-all duration-[2500ms] ease-out"
                style={{
                  filter: riskScore >= 72 ? 'drop-shadow(0 0 8px rgba(220, 38, 38, 0.4))' : 'none'
                }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-5xl font-black ${riskScore > 70 ? 'text-red-600' : riskScore > 40 ? 'text-yellow-600' : 'text-green-600'}`}>
                {riskScore}
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">/ 100</span>
            </div>
          </div>

          <div className="space-y-3 text-center w-full">
            <div className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-black inline-block animate-bounce shadow-lg shadow-red-100 uppercase tracking-wider">
              {t('highRisk')}
            </div>
            <div className="space-y-1">
              <p className="text-sm font-bold text-red-600">Immediate action required (వెంటనే చర్య తీసుకోండి)</p>
              <p className="text-[10px] font-bold text-slate-400 flex items-center justify-center gap-1">
                Powered by Sarvam AI Edge 🤖
              </p>
            </div>
          </div>
        </section>

        {/* SECTION C: CHILD DIGITAL TWIN */}
        <section className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-6">
          <h3 className="font-bold text-slate-800">Child Digital Twin (బాలల డిజిటల్ ట్విన్)</h3>
          
          <div className="relative flex justify-center items-center py-8">
            {/* SVG Labels */}
            <div className="absolute top-0 left-0 text-left space-y-1">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Cognitive</p>
              <p className="text-xs font-black text-red-600">జ్ఞానం: 4/10 🔴</p>
            </div>
            <div className="absolute bottom-0 left-0 text-left space-y-1">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Language</p>
              <p className="text-xs font-black text-red-600">భాష: 2/10 🔴</p>
            </div>
            <div className="absolute top-1/2 -right-2 text-right space-y-1 -translate-y-1/2">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Motor</p>
              <p className="text-xs font-black text-yellow-600">కదలిక: 7/10 🟡</p>
            </div>
            <div className="absolute bottom-1/4 right-1/4 text-right space-y-1">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Social</p>
              <p className="text-xs font-black text-yellow-600">సామాజిక: 5/10 🟡</p>
            </div>

            {/* SVG Figure */}
            <svg width="200" height="220" viewBox="0 0 200 220" className="drop-shadow-xl">
              <style>
                {`
                  @keyframes redPulse {
                    0% { opacity: 1; filter: drop-shadow(0 0 0px #ef4444) }
                    50% { opacity: 0.7; filter: drop-shadow(0 0 8px #ef4444) }
                    100% { opacity: 1; filter: drop-shadow(0 0 0px #ef4444) }
                  }
                  @keyframes yellowPulse {
                    0% { opacity: 1; filter: drop-shadow(0 0 0px #f59e0b) }
                    50% { opacity: 0.8; filter: drop-shadow(0 0 6px #f59e0b) }
                    100% { opacity: 1; filter: drop-shadow(0 0 0px #f59e0b) }
                  }
                  .red-part { animation: redPulse 0.8s infinite; cursor: pointer; }
                  .yellow-part { animation: yellowPulse 1.2s infinite; cursor: pointer; }
                `}
              </style>
              
              {/* Head - Cognitive */}
              <circle 
                cx="100" cy="60" r="35" 
                fill="#fee2e2" stroke="#ef4444" strokeWidth="2" 
                className="red-part"
                onClick={() => setActiveDomain('cognitive')}
              />
              {/* Face details */}
              <circle cx="88" cy="55" r="2" fill="#475569" />
              <circle cx="112" cy="55" r="2" fill="#475569" />
              <path d="M 85 75 Q 100 85 115 75" fill="transparent" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
              
              {/* Mouth - Language */}
              <circle 
                cx="100" cy="80" r="10" 
                fill="#ef4444" opacity="0.2"
                className="red-part"
                onClick={() => setActiveDomain('language')}
              />

              {/* Body - Social */}
              <rect 
                x="75" y="95" width="50" height="55" rx="8"
                fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"
                className="yellow-part"
                onClick={() => setActiveDomain('social')}
              />

              {/* Arms - Motor */}
              <rect 
                x="48" y="100" width="25" height="12" rx="6"
                fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"
                className="yellow-part"
                onClick={() => setActiveDomain('motor')}
              />
              <rect 
                x="127" y="100" width="25" height="12" rx="6"
                fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"
                className="yellow-part"
                onClick={() => setActiveDomain('motor')}
              />

              {/* Legs - Motor */}
              <rect 
                x="80" y="150" width="18" height="40" rx="9"
                fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"
                className="yellow-part"
                onClick={() => setActiveDomain('motor')}
              />
              <rect 
                x="102" y="150" width="18" height="40" rx="9"
                fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"
                className="yellow-part"
                onClick={() => setActiveDomain('motor')}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 gap-2 text-[10px] font-bold uppercase tracking-wider">
            <div className="flex items-center gap-2 text-red-600">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              <span>🔴 {t('highRisk')} - needs immediate help</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-600">
              <span className="w-2 h-2 rounded-full bg-yellow-600"></span>
              <span>🟡 {t('mediumRisk')} - monitor closely</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <span className="w-2 h-2 rounded-full bg-green-600"></span>
              <span>🟢 {t('normal')} - on track</span>
            </div>
          </div>
        </section>

        {/* SECTION D: DOMAIN ASSESSMENT TABLE */}
        <section className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-800">అభివృద్ధి మూల్యాంకనం (Developmental Assessment)</h3>
          
          <div className="overflow-hidden rounded-2xl border border-slate-50">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <tr>
                  <th className="px-4 py-3">Domain</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Demo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {domains.map((d) => (
                  <tr key={d.id} className="group hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-4">
                      <div className="space-y-0.5">
                        <p className="text-sm font-bold text-slate-800">{d.name}</p>
                        <p className="text-[10px] text-slate-400 font-medium">Expected: {d.expected}</p>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className={`text-[10px] font-black px-2 py-1 rounded-lg inline-block uppercase tracking-wider ${
                        d.status === 'achieved' ? 'bg-green-50 text-green-600' : d.status === 'partial' ? 'bg-yellow-50 text-yellow-600' : 'bg-red-50 text-red-600'
                      }`}>
                        {d.status === 'achieved' ? '✅ సాధించారు' : d.status === 'partial' ? '⚠️ పాక్షికంగా' : '❌ సాధించలేదు'}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <button 
                        onClick={() => setShowDemo(d.id)}
                        className="p-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors active:scale-90"
                      >
                        <Play size={16} fill="currentColor" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION E: AI PREDICTION */}
        <section className="bg-white rounded-3xl p-6 border-2 border-blue-100 shadow-sm space-y-6 relative overflow-hidden">
          <div className="absolute -top-4 -right-4 text-blue-50 opacity-50"><Sparkles size={80} /></div>
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-slate-800">🔮 {t('aiPrediction')}</h3>
            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-widest">Sarvam AI Edge</span>
          </div>

          <div className="bg-blue-600 rounded-2xl p-4 text-white space-y-2 shadow-lg shadow-blue-100">
            <p className="text-sm font-bold leading-relaxed">
              Ravi కి 78% అవకాశం ఉంది (78% probability) 3 సంవత్సరాల వయసుకు భాష ఆలస్యం (speech delay by age 3).
            </p>
            <p className="text-xs text-blue-100 font-medium">
              ఇప్పుడే చర్య తీసుకుంటే 20% కి తగ్గుతుంది (Reduces to 20% with immediate action)
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* NO ACTION */}
            <div className="bg-red-50 rounded-2xl p-3 border border-red-100 space-y-3">
              <h4 className="text-[10px] font-black text-red-700 uppercase tracking-widest">❌ Without Action</h4>
              <div className="space-y-4 relative">
                <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-red-200"></div>
                {[
                  { age: '18m', label: 'భాష లేదు', icon: '😟' },
                  { age: '24m', label: 'మరింత ఆలస్యం', icon: '😢' },
                  { age: '36m', label: 'పాఠశాలలో ఇబ్బంది', icon: '😭' },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-2 relative z-10">
                    <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-white"></div>
                    <div className="text-[9px] font-bold text-red-600">
                      <span className="block opacity-60">{step.age}</span>
                      <span className="block">{step.label}</span>
                    </div>
                  </div>
                ))}
                <div className="bg-red-600 text-white p-2 rounded-xl text-center animate-pulse">
                  <p className="text-[10px] font-black">78% RISK</p>
                </div>
              </div>
            </div>

            {/* WITH ACTION */}
            <div className="bg-green-50 rounded-2xl p-3 border border-green-100 space-y-3">
              <h4 className="text-[10px] font-black text-green-700 uppercase tracking-widest">✅ Act Now</h4>
              <div className="space-y-4 relative">
                <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-green-200"></div>
                {[
                  { age: '18m', label: 'చికిత్స ప్రారంభం', icon: '😐' },
                  { age: '24m', label: 'మెరుగుపడుతోంది', icon: '🙂' },
                  { age: '36m', label: 'మాట్లాడుతున్నాడు!', icon: '😊' },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-2 relative z-10">
                    <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
                    <div className="text-[9px] font-bold text-green-600">
                      <span className="block opacity-60">{step.age}</span>
                      <span className="block">{step.label}</span>
                    </div>
                  </div>
                ))}
                <div className="bg-green-600 text-white p-2 rounded-xl text-center shadow-lg shadow-green-100">
                  <p className="text-[10px] font-black">20% RISK</p>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={() => setShowReferralAnim(true)}
            className="w-full py-4 bg-orange-500 text-white rounded-2xl font-black text-sm uppercase tracking-wider animate-pulse shadow-lg shadow-orange-100 flex items-center justify-center gap-2"
          >
            ⚡ {t('referToAsha')} RIGHT NOW
          </button>
        </section>

        {/* SECTION F: PERSONALIZED ACTIVITY PLAN */}
        <section className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-800">{t('thisWeekPlan')}</h3>
          
          <div className="space-y-3">
            {[
              { title: 'పేరు చెప్పే ఆట (Name Game) 🎮', en: 'Name Recognition Game', duration: '10 min', diff: 'Easy', color: 'bg-blue-50 text-blue-700' },
              { title: 'అద్దం ఆట (Mirror Play) 🪞', en: 'Mirror Face Game', duration: '5 min', diff: 'Easy', color: 'bg-green-50 text-green-700' },
              { title: 'శబ్ద వర్గీకరణ (Sound Sorting) 🔊', en: 'Sound Recognition', duration: '15 min', diff: 'Medium', color: 'bg-orange-50 text-orange-700' },
            ].map((act, i) => (
              <div key={i} className="p-4 rounded-2xl border border-slate-50 space-y-2 hover:bg-slate-50 transition-colors">
                <div className="flex justify-between items-start">
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-slate-800">{act.title}</h4>
                    <p className="text-[10px] text-slate-400 font-medium">{act.en}</p>
                  </div>
                  <span className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest ${act.color}`}>
                    {act.diff}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400">
                  <span className="flex items-center gap-1">⏱️ {act.duration}</span>
                  <button className="text-blue-600 flex items-center gap-1">View Steps <ArrowRight size={10} /></button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION G: REFERRAL TRACKER TIMELINE */}
        <section className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-6">
          <h3 className="font-bold text-slate-800">{t('referralStatus')}</h3>
          
          <div className="space-y-6 relative">
            <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-slate-100"></div>
            {[
              { label: 'ప్రమాదం గుర్తించబడింది (Risk Identified)', date: 'Jan 15, 2026', status: 'done' },
              { label: 'ASHA కి రెఫర్ (Referred to ASHA)', date: 'Jan 18, 2026', status: 'done' },
              { label: 'ASHA గృహ సందర్శన (ASHA Home Visit)', date: 'Pending', status: 'pending' },
              { label: 'PHC సందర్శన (PHC Visit)', date: 'Not Started', status: 'none' },
              { label: 'ఫాలో-అప్ పూర్తి (Follow-up Complete)', date: 'Not Started', status: 'none' },
            ].map((step, i) => (
              <div key={i} className="flex gap-4 items-start relative z-10">
                <div className={`w-5 h-5 rounded-full border-4 border-white shadow-sm flex-shrink-0 mt-0.5 ${
                  step.status === 'done' ? 'bg-green-500' : step.status === 'pending' ? 'bg-yellow-400 animate-pulse' : 'bg-slate-200'
                }`}></div>
                <div className="space-y-0.5">
                  <p className={`text-xs font-bold ${step.status === 'none' ? 'text-slate-400' : 'text-slate-700'}`}>{step.label}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{step.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-2">
            <button className="w-full py-3 bg-green-600 text-white rounded-xl font-bold text-xs shadow-lg shadow-green-100">
              ✅ ASHA విజిట్ పూర్తయింది (Mark ASHA Visit Done)
            </button>
            <button 
              onClick={() => setShowWhatsApp(true)}
              className="w-full py-3 bg-blue-50 text-blue-600 rounded-xl font-bold text-xs flex items-center justify-center gap-2"
            >
              <MessageSquare size={14} /> {t('sendWhatsApp')}
            </button>
          </div>
        </section>

        {/* SECTION H: GROWTH RECORD */}
        <section className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-slate-800">{t('growthMonitoring')}</h3>
            <button className="text-blue-600 text-xs font-bold">+ {t('update')}</button>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-slate-50 p-3 rounded-2xl text-center space-y-1">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t('weight')}</p>
              <p className="text-sm font-black text-slate-800">9.2 kg</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-2xl text-center space-y-1">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t('height')}</p>
              <p className="text-sm font-black text-slate-800">78 cm</p>
            </div>
            <div className="bg-yellow-50 p-3 rounded-2xl text-center space-y-1 border border-yellow-100">
              <p className="text-[10px] font-bold text-yellow-600 uppercase tracking-widest">Status</p>
              <p className="text-sm font-black text-yellow-700">MAM</p>
            </div>
          </div>

          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold', fill: '#94a3b8'}} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
                  labelStyle={{fontWeight: 'bold', color: '#1e293b'}}
                />
                <Line type="monotone" dataKey="weight" stroke="#2563eb" strokeWidth={4} dot={{r: 6, fill: '#2563eb', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 8}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>
      </main>

      {/* MODALS */}
      
      {/* Domain Info Modal */}
      {activeDomain && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="w-full max-w-sm bg-white rounded-t-[40px] p-8 space-y-6 animate-in slide-in-from-bottom-full duration-500">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-black text-slate-800">
                {domains.find(d => d.id === activeDomain)?.name}
              </h3>
              <button onClick={() => setActiveDomain(null)} className="p-2 bg-slate-100 rounded-full"><X size={20} /></button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${
                  domains.find(d => d.id === activeDomain)?.color === 'red' ? 'bg-red-50 text-red-600' : 'bg-yellow-50 text-yellow-600'
                }`}>
                  {domains.find(d => d.id === activeDomain)?.score}/10
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Expected Milestone (18m)</p>
                  <p className="text-sm font-bold text-slate-700">{domains.find(d => d.id === activeDomain)?.expected}</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 space-y-2">
                <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest">చేయవలసింది (What to do)</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeDomain === 'cognitive' ? 'Show 3 household objects daily. Name them clearly. Ask child to point. రోజూ 3 వస్తువులు చూపించండి.' : 
                   activeDomain === 'language' ? 'Talk to the child for 30 minutes daily. Repeat words clearly. రోజూ 30 నిమిషాలు మాట్లాడండి.' :
                   activeDomain === 'motor' ? 'Encourage walking with support. Play with balls. బంతి తో ఆటలు ఆడించండి.' :
                   'Encourage playing with other children. ఇతర పిల్లలతో ఆడుకోనివ్వండి.'}
                </p>
              </div>
            </div>

            <button onClick={() => setActiveDomain(null)} className="w-full py-4 bg-slate-800 text-white rounded-2xl font-bold">
              {t('cancel')}
            </button>
          </div>
        </div>
      )}

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 z-[100] bg-white animate-in fade-in duration-300 flex flex-col">
          <header className="p-4 flex justify-between items-center border-b border-slate-100">
            <h3 className="font-black text-slate-800 uppercase tracking-widest">
              {domains.find(d => d.id === showDemo)?.name} Milestone Demo
            </h3>
            <button onClick={() => setShowDemo(null)} className="p-2 bg-slate-100 rounded-full"><X size={20} /></button>
          </header>
          
          <div className="flex-1 flex flex-col items-center justify-center p-8 space-y-8 overflow-hidden">
            <div className="w-full max-w-xs aspect-square bg-blue-50 rounded-[40px] relative flex items-center justify-center overflow-hidden shadow-2xl shadow-blue-100">
              {/* Animated Demo Scene */}
              <div className="text-center space-y-4 animate-in zoom-in duration-700">
                <div className="flex justify-center gap-4">
                  <div className="text-6xl animate-bounce">👩</div>
                  <div className="text-6xl animate-pulse">👶</div>
                </div>
                <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-blue-100">
                  <p className="text-sm font-black text-blue-600">రోజూ మాట్లాడండి (Talk every day)</p>
                </div>
                <div className="flex justify-center gap-2">
                  <span className="text-4xl">🥭</span>
                  <span className="text-4xl">🏀</span>
                  <span className="text-4xl">🐱</span>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-10 right-10 text-4xl animate-pulse delay-75">✨</div>
              <div className="absolute bottom-10 left-10 text-4xl animate-pulse delay-150">🎉</div>
            </div>

            <div className="w-full max-w-sm space-y-4">
              <div className="bg-slate-50 p-6 rounded-3xl space-y-3">
                <h4 className="font-black text-slate-800 uppercase tracking-widest text-xs">Tips for Success</h4>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-sm text-slate-600 font-medium">
                    <span className="text-blue-500">1.</span> Talk for 30 minutes daily
                  </li>
                  <li className="flex gap-2 text-sm text-slate-600 font-medium">
                    <span className="text-blue-500">2.</span> Use clear, simple words
                  </li>
                  <li className="flex gap-2 text-sm text-slate-600 font-medium">
                    <span className="text-blue-500">3.</span> Praise every small effort
                  </li>
                </ul>
              </div>
              
              <div className="flex gap-3">
                <button className="flex-1 py-4 bg-slate-100 text-slate-800 rounded-2xl font-bold flex items-center justify-center gap-2">
                  <History size={18} /> {t('playAgain')}
                </button>
                <button onClick={() => setShowDemo(null)} className="flex-1 py-4 bg-blue-600 text-white rounded-2xl font-bold">
                  {t('save')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Modal */}
      {showWhatsApp && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6 animate-in fade-in duration-300">
          <div className="w-full max-w-sm bg-white rounded-[40px] overflow-hidden shadow-2xl animate-in zoom-in duration-500">
            <div className="bg-[#075e54] p-4 flex items-center gap-3 text-white">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">👶</div>
              <div>
                <p className="font-bold">Sunita Devi (Mother)</p>
                <p className="text-[10px] opacity-70">Online</p>
              </div>
            </div>
            
            <div className="p-6 bg-[#e5ddd5] space-y-4 min-h-[300px]">
              <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] space-y-2 relative">
                <div className="absolute -left-2 top-0 w-0 h-0 border-t-[10px] border-t-white border-l-[10px] border-l-transparent"></div>
                <p className="text-xs font-bold text-green-600">🌟 నమస్కారం Sunita గారు!</p>
                <p className="text-[11px] leading-relaxed text-slate-700">
                  మీ పిల్లవాడు: <b>Ravi Kumar</b> (18 నెలలు)<br/>
                  ⚠️ Risk: <b>అధిక ప్రమాదం (High Risk)</b>
                </p>
                <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">📋 నేటి కార్యక్రమం:</p>
                  <p className="text-[11px] font-bold text-slate-800">పేరు చెప్పే ఆట ఆడండి (Play Name Game)</p>
                </div>
                <p className="text-[10px] text-slate-400 text-right">10:42 AM</p>
              </div>
            </div>

            <div className="p-4 bg-white flex gap-3">
              <button onClick={() => setShowWhatsApp(false)} className="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold text-xs">
                {t('cancel')}
              </button>
              <button onClick={() => setShowWhatsApp(false)} className="flex-1 py-3 bg-[#25d366] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-green-100">
                <MessageSquare size={14} /> {t('submit')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChildDetail;
