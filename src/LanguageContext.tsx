import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'te';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

export const LABELS: Record<string, { en: string; te: string }> = {
  // APP TITLES
  appName: { en: "ECD Smart Tracker", te: "ECD స్మార్ట్ ట్రాకర్ (ECD Smart Tracker)" },
  appSubtitle: { en: "Child Development Tracker", te: "బాలల అభివృద్ధి ట్రాకర్ (Child Development Tracker)" },
  department: { en: "WD&CW Andhra Pradesh", te: "మహిళా శిశు సంక్షేమ శాఖ (WD&CW Andhra Pradesh)" },

  // NAVIGATION
  home: { en: "Home", te: "హోమ్ (Home)" },
  children: { en: "Children", te: "పిల్లలు (Children)" },
  attendance: { en: "Attendance", te: "హాజరు (Attendance)" },
  nutrition: { en: "Nutrition", te: "పోషణ (Nutrition)" },
  report: { en: "Report", te: "నివేదిక (Report)" },
  settings: { en: "Settings", te: "సెట్టింగ్స్ (Settings)" },
  logout: { en: "Logout", te: "లాగ్ అవుట్ (Logout)" },
  login: { en: "Login", te: "లాగిన్ (Login)" },
  help: { en: "Help", te: "సహాయం (Help)" },

  // REGISTRATION
  registration: { en: "Registration", te: "నమోదు (Registration)" },
  beneficiary: { en: "Beneficiary", te: "లబ్ధిదారుడు (Beneficiary)" },
  newChild: { en: "Register New Child", te: "నూతన నమోదు (Register New Child)" },
  childName: { en: "Child Name", te: "పిల్లవాడి పేరు (Child Name)" },
  dateOfBirth: { en: "Date of Birth", te: "పుట్టిన తేది (Date of Birth)" },
  age: { en: "Age", te: "వయసు (Age)" },
  gender: { en: "Gender", te: "లింగం (Gender)" },
  male: { en: "Male", te: "మగ (Male)" },
  female: { en: "Female", te: "ఆడ (Female)" },
  motherName: { en: "Mother Name", te: "తల్లి పేరు (Mother Name)" },
  fatherName: { en: "Father Name", te: "తండ్రి పేరు (Father Name)" },
  village: { en: "Village", te: "గ్రామం (Village)" },
  mandal: { en: "Mandal", te: "మండలం (Mandal)" },
  district: { en: "District", te: "జిల్లా (District)" },
  mobile: { en: "Mobile Number", te: "మొబైల్ నంబర్ (Mobile Number)" },
  aadhaar: { en: "Aadhaar Number", te: "ఆధార్ నంబర్ (Aadhaar Number)" },
  awcName: { en: "AWC Name", te: "అంగన్‌వాడీ కేంద్రం (AWC Name)" },
  submit: { en: "Submit", te: "సమర్పించు (Submit)" },
  cancel: { en: "Cancel", te: "రద్దు చేయండి (Cancel)" },
  save: { en: "Save", te: "సేవ్ చేయండి (Save)" },

  // ATTENDANCE
  attendanceMarking: { en: "Attendance Marking", te: "హాజరు నమోదు (Attendance Marking)" },
  present: { en: "Present", te: "హాజరు (Present)" },
  absent: { en: "Absent", te: "గైర్హాజరు (Absent)" },
  attendancePercent: { en: "Attendance %", te: "హాజరు శాతం (Attendance %)" },
  todayAttendance: { en: "Today's Attendance", te: "నేటి హాజరు (Today's Attendance)" },
  monthlyAttendance: { en: "Monthly Attendance", te: "నెల హాజరు (Monthly Attendance)" },
  absenceAlert: { en: "Absence Alert", te: "గైర్హాజరు హెచ్చరిక (Absence Alert)" },
  homeVisitRequired: { en: "Home Visit Required", te: "హోమ్ విజిట్ అవసరం (Home Visit Required)" },
  submitAttendance: { en: "Submit Attendance", te: "హాజరు సమర్పించు (Submit Attendance)" },

  // GROWTH MONITORING
  growthMonitoring: { en: "Growth Monitoring", te: "వృద్ధి పర్యవేక్షణ (Growth Monitoring)" },
  weight: { en: "Weight (kg)", te: "బరువు కిలోలు (Weight kg)" },
  height: { en: "Height (cm)", te: "ఎత్తు సెం.మీ (Height cm)" },
  headCircumference: { en: "Head Circumference", te: "తల చుట్టుకొలత (Head Circumference)" },
  muac: { en: "MUAC", te: "మధ్య భుజం చుట్టుకొలత - MUAC" },
  nutritionalStatus: { en: "Nutritional Status", te: "పోషకాహార స్థితి (Nutritional Status)" },
  normal: { en: "Normal", te: "సాధారణం (Normal)" },
  mam: { en: "MAM - Moderate Malnutrition", te: "మధ్యస్థ పోషకాహార లోపం - MAM" },
  sam: { en: "SAM - Severe Malnutrition", te: "తీవ్రమైన పోషకాహార లోపం - SAM" },
  growthChart: { en: "Growth Chart", te: "వృద్ధి చార్ట్ (Growth Chart)" },
  measurementDate: { en: "Measurement Date", te: "కొలత తేది (Measurement Date)" },

  // NUTRITION
  hotMeal: { en: "Hot Cooked Meal", te: "వేడి భోజనం (Hot Cooked Meal)" },
  morningSnack: { en: "Morning Snack", te: "ఉదయం అల్పాహారం (Morning Snack)" },
  takeHomeRation: { en: "Take Home Ration", te: "ఇంటికి రేషన్ (Take Home Ration)" },
  stock: { en: "Stock / Inventory", te: "నిల్వలు (Stock)" },
  lowStockAlert: { en: "Low Stock Alert", te: "తక్కువ నిల్వ హెచ్చరిక (Low Stock Alert)" },
  mealServed: { en: "Meal Served", te: "భోజనం వడ్డించారు (Meal Served)" },
  rationDistributed: { en: "Ration Distributed", te: "రేషన్ పంపిణీ (Ration Distributed)" },
  ifaTablets: { en: "IFA Tablets", te: "IFA మాత్రలు (IFA Tablets)" },

  // ASSESSMENT
  assessment: { en: "Assessment", te: "మూల్యాంకనం (Assessment)" },
  quarterlyAssessment: { en: "Quarterly Assessment", te: "త్రైమాసిక మూల్యాంకనం (Quarterly Assessment)" },
  developmentalMilestones: { en: "Developmental Milestones", te: "అభివృద్ధి మైలురాళ్ళు (Developmental Milestones)" },
  developmentalDelay: { en: "Developmental Delay", te: "అభివృద్ధి ఆలస్యం (Developmental Delay)" },
  riskScore: { en: "Risk Score", te: "ప్రమాద స్కోరు (Risk Score)" },
  highRisk: { en: "High Risk", te: "అధిక ప్రమాదం (High Risk)" },
  mediumRisk: { en: "Medium Risk", te: "మధ్యస్థ ప్రమాదం (Medium Risk)" },
  lowRisk: { en: "Low Risk", te: "తక్కువ ప్రమాదం (Low Risk)" },
  language: { en: "Language Domain", te: "భాష (Language)" },
  motor: { en: "Motor Domain", te: "కదలిక (Motor)" },
  cognitive: { en: "Cognitive Domain", te: "జ్ఞానం (Cognitive)" },
  socialEmotional: { en: "Social-Emotional", te: "సామాజిక-భావోద్వేగం (Social-Emotional)" },
  achieved: { en: "Achieved ✅", te: "సాధించారు ✅ (Achieved)" },
  notAchieved: { en: "Not Achieved ❌", te: "సాధించలేదు ❌ (Not Achieved)" },
  partial: { en: "Partial ⚠️", te: "పాక్షికంగా ⚠️ (Partial)" },
  earlyWarning: { en: "Early Warning", te: "ముందస్తు హెచ్చరిక (Early Warning)" },
  aiPrediction: { en: "AI Prediction", te: "AI అంచనా (AI Prediction)" },
  activityPlan: { en: "Personalized Activity Plan", te: "వ్యక్తిగత కార్యాచరణ ప్రణాళిక (Activity Plan)" },
  thisWeekPlan: { en: "This Week's Plan", te: "ఈ వారం కార్యక్రమం (This Week's Plan)" },
  todayActivity: { en: "Today's Activity", te: "నేటి కార్యక్రమం (Today's Activity)" },
  markDone: { en: "Mark as Done", te: "పూర్తయింది (Mark Done)" },
  listenAudio: { en: "Listen in Telugu", te: "తెలుగులో వినండి (Listen)" },

  // DISABILITY
  divyang: { en: "Divyang", te: "దివ్యాంగుడు (Divyang)" },
  disability: { en: "Disability", te: "వైకల్యం (Disability)" },
  physical: { en: "Physical Disability", te: "శారీరక వైకల్యం (Physical)" },
  visual: { en: "Visual Impairment", te: "దృష్టి వైకల్యం (Visual)" },
  hearing: { en: "Hearing Impairment", te: "శ్రవణ వైకల్యం (Hearing)" },
  intellectual: { en: "Intellectual Disability", te: "మేధో వైకల్యం (Intellectual)" },
  speech: { en: "Speech Disability", te: "వాక్కు వైకల్యం (Speech)" },
  autism: { en: "Autism", te: "ఆటిజం (Autism)" },
  cerebralPalsy: { en: "Cerebral Palsy", te: "సెరిబ్రల్ పాల్సీ (Cerebral Palsy)" },
  disabilityCertificate: { en: "Disability Certificate", te: "వికలాంగ ధృవపత్రం (Certificate)" },
  udidApplication: { en: "UDID Application", te: "UDID దరఖాస్తు (UDID Application)" },
  assistiveDevice: { en: "Assistive Device", te: "సహాయక పరికరం (Assistive Device)" },
  ddrcReferral: { en: "DDRC Referral", te: "DDRC రెఫరల్ (DDRC Referral)" },
  specialCare: { en: "Special Care", te: "ప్రత్యేక సంరక్షణ (Special Care)" },

  // REFERRAL
  referralStatus: { en: "Referral Status", te: "రెఫరల్ స్థితి (Referral Status)" },
  referred: { en: "Referred ✅", te: "రెఫర్ చేయబడింది ✅ (Referred)" },
  pending: { en: "Pending ⏳", te: "పెండింగ్‌లో ఉంది ⏳ (Pending)" },
  notReferred: { en: "Not Referred ❌", te: "రెఫర్ చేయలేదు ❌ (Not Referred)" },
  followUp: { en: "Follow-up", te: "ఫాలో-అప్ (Follow-up)" },
  homeVisit: { en: "Home Visit", te: "హోమ్ విజిట్ (Home Visit)" },
  referToAsha: { en: "Refer to ASHA", te: "ASHA కి రెఫర్ చేయండి (Refer to ASHA)" },
  referToPHC: { en: "Refer to PHC", te: "PHC కి రెఫర్ చేయండి (Refer to PHC)" },

  // UI ACTIONS
  viewDetails: { en: "View Details →", te: "వివరాలు చూడండి → (View Details)" },
  search: { en: "Search", te: "శోధన (Search)" },
  filter: { en: "Filter", te: "వడపోత (Filter)" },
  update: { en: "Update", te: "నవీకరించు (Update)" },
  download: { en: "Download Report", te: "నివేదిక డౌన్లోడ్ (Download Report)" },
  exportReport: { en: "Export Report", te: "నివేదిక ఎగుమతి (Export Report)" },
  alert: { en: "Alert", te: "హెచ్చరిక (Alert)" },
  actionNeeded: { en: "Action Needed", te: "చర్య అవసరం (Action Needed)" },
  notification: { en: "Notification", te: "నోటిఫికేషన్ (Notification)" },
  offlineMode: { en: "Offline Mode", te: "ఆఫ్‌లైన్ మోడ్ (Offline Mode)" },
  dataSync: { en: "Data Sync", te: "డేటా సమకాలీకరణ (Data Sync)" },
  changeLanguage: { en: "Change Language", te: "భాష మార్చండి (Change Language)" },
  sendWhatsApp: { en: "Send WhatsApp Alert", te: "WhatsApp హెచ్చరిక పంపు (Send Alert)" },
  playAgain: { en: "Play Again", te: "మళ్ళీ చూడండి (Play Again)" },
  watchDemo: { en: "Watch Demo", te: "డెమో చూడండి (Watch Demo)" },
  startAssessment: { en: "Start Assessment", te: "మూల్యాంకనం ప్రారంభించు (Start)" },

  // ROLES
  aww: { en: "Anganwadi Worker", te: "అంగన్‌వాడీ కార్యకర్త (AWW)" },
  supervisor: { en: "Supervisor", te: "పర్యవేక్షకుడు (Supervisor)" },
  cdpo: { en: "District Officer / CDPO", te: "జిల్లా అధికారి (CDPO)" },
  parent: { en: "Parent", te: "తల్లిదండ్రులు (Parent)" },
  asha: { en: "ASHA Worker", te: "ASHA కార్యకర్త (ASHA Worker)" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('te');

  const t = (key: string) => {
    const entry = LABELS[key];
    if (!entry) return key;
    if (lang === 'te') {
      return entry.te;
    }
    return entry.en;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
