import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLangStore } from './store/useLangStore';

// ۱. ایمپورت لایوت اصلی و صفحه ادمین
import MainLayout from './pages/layout/MainLayout';
import AdminPanel from './pages/admin/AdminPanel';

// ۲. ایمپورت بقیه صفحات ۹گانه
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Tours from './pages/tours/Tours';
import Destinations from './pages/destinations/Destinations';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import Policy from './pages/policy/Policy';
import PaymentMethods from './pages/payment/PaymentMethods';

function App() {
  const { currentLang } = useLangStore();

  useEffect(() => {
    const isFa = currentLang === 'fa';
    document.documentElement.dir = isFa ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Routes>
        {/* 🔹 گروه اول روت‌ها: تمام صفحات داخل لایوت اصلی (همراه هدر و فوتر) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/payment-methods" element={<PaymentMethods />} />
        </Route>

        {/* 🔸 گروه دوم روت‌ها: صفحه ادمین کاملاً مستقل (بدون هدر و فوتر) */}
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;