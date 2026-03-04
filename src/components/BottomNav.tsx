import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, ClipboardCheck, Utensils, BarChart3 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const BottomNav: React.FC = () => {
  const { t } = useLanguage();

  const navItems = [
    { to: '/dashboard', icon: Home, label: 'home' },
    { to: '/children', icon: Users, label: 'children' },
    { to: '/attendance', icon: ClipboardCheck, label: 'attendance' },
    { to: '/nutrition', icon: Utensils, label: 'nutrition' },
    { to: '/reports', icon: BarChart3, label: 'report' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around items-center py-2 px-1 z-40 max-w-[430px] mx-auto shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-colors ${
              isActive ? 'text-blue-700' : 'text-slate-400'
            }`
          }
        >
          <item.icon size={20} />
          <span className="text-[10px] font-medium leading-none">{t(item.label).split(' ')[0]}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;
