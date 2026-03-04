import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === 'en' ? 'te' : 'en')}
      className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100 hover:bg-blue-100 transition-colors"
    >
      <Globe size={14} />
      <span>{lang === 'en' ? 'EN | తె' : 'తె | EN'}</span>
    </button>
  );
};

export default LanguageToggle;
