import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <button
      onClick={() => navigate('/')}
      className="flex items-center gap-1 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold border border-red-100 hover:bg-red-100 transition-colors"
      title={t('logout')}
    >
      <LogOut size={14} />
      <span>{t('logout').split(' ')[0]}</span>
    </button>
  );
};

export default LogoutButton;
