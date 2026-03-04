import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import LoginPage from './pages/LoginPage';
import AWWDashboard from './pages/AWWDashboard';
import ChildrenList from './pages/ChildrenList';
import ChildDetail from './pages/ChildDetail';
import AttendancePage from './pages/AttendancePage';
import AddChildPage from './pages/AddChildPage';
import NutritionPage from './pages/NutritionPage';
import VoiceAssessmentPage from './pages/VoiceAssessmentPage';
import SupervisorDashboard from './pages/SupervisorDashboard';
import CDPODashboard from './pages/CDPODashboard';
import ParentDashboard from './pages/ParentDashboard';
import BottomNav from './components/BottomNav';
import OfflineBanner from './components/OfflineBanner';

const AppContent: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  const isSupervisor = location.pathname.startsWith('/supervisor');
  const isCDPO = location.pathname.startsWith('/cdpo');
  const isParent = location.pathname.startsWith('/parent');
  
  // Only show bottom nav for AWW routes
  const showBottomNav = !isLoginPage && !isSupervisor && !isCDPO && !isParent;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 max-w-[430px] mx-auto shadow-2xl relative overflow-x-hidden">
      {!isLoginPage && <OfflineBanner />}
      
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<AWWDashboard />} />
        <Route path="/children" element={<ChildrenList />} />
        <Route path="/child/:id" element={<ChildDetail />} />
        <Route path="/attendance" element={<AttendancePage />} />
        <Route path="/add-child" element={<AddChildPage />} />
        <Route path="/nutrition" element={<NutritionPage />} />
        <Route path="/voice-assessment" element={<VoiceAssessmentPage />} />
        <Route path="/supervisor" element={<SupervisorDashboard />} />
        <Route path="/cdpo" element={<CDPODashboard />} />
        <Route path="/parent" element={<ParentDashboard />} />
        <Route path="/reports" element={<div className="p-8 text-center font-bold text-slate-400">Reports Coming Soon...</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {showBottomNav && <BottomNav />}
      
      {!isLoginPage && (
        <footer className="p-8 pb-32 text-center space-y-2 opacity-40">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">ECD Smart Tracker | WD&CW AP</p>
          <p className="text-[10px] font-medium text-slate-400">🤖 Sarvam AI Edge (Telugu) | 🔒 DPDP 2023 Compliant</p>
        </footer>
      )}
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}
