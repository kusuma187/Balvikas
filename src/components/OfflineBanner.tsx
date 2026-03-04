import React from 'react';
import { useLanguage } from '../LanguageContext';

const OfflineBanner: React.FC = () => {
  const { t } = useLanguage();
  const [isOffline, setIsOffline] = React.useState(true);

  return (
    <div 
      className={`sticky top-0 z-50 w-full py-1 px-4 text-center text-xs font-medium transition-colors duration-300 ${
        isOffline ? 'bg-yellow-400 text-yellow-900' : 'bg-green-500 text-white'
      }`}
      onClick={() => setIsOffline(!isOffline)}
    >
      <div className="flex items-center justify-center gap-2 cursor-pointer">
        <span>{isOffline ? '📡' : '🌐'}</span>
        <span>{isOffline ? t('offlineMode') : t('dataSync')}</span>
        <span className="opacity-70">|</span>
        <span>{isOffline ? 'డేటా సమకాలీకరణ (Data syncs when connected)' : 'సమకాలీకరించబడింది (Synced)'}</span>
      </div>
    </div>
  );
};

export default OfflineBanner;
