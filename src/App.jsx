import { useEffect } from 'react';
import { useLangStore } from './store/useLangStore';
import AppRoutes from './routes/AppRoutes';

function App() {
  const { currentLang } = useLangStore();

  // لایه منطق مدیریت زبان در سطح کلان (جهت RTL/LTR صفحه)
  useEffect(() => {
    const isFa = currentLang === 'fa';
    document.documentElement.dir = isFa ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <AppRoutes />
    </div>
  );
}

export default App;