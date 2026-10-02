import { useParams, Link } from 'react-router-dom';
import { useLangStore } from '../../store/useLangStore';
import Header from "../layout/Header.jsx";

// ۱. ایمپورت کامپوننت مستقل هیرو سکشن ولایت
import ProvinceHero from './components/ProvinceHero';

// لود داده‌ها از فایل db.json پروژه
import database from '../../../db.json';

export default function ProvinceView() {
  const { slug } = useParams(); // استخراج نام ولایت از آدرس مرورگر (مثلاً: kabul)
  const { currentLang } = useLangStore();
  const isRtl = currentLang === 'fa';

  // پیدا کردن آبجکت ولایت جاری از روی دیتابیس بر اساس اسلاگ آدرس
  const province = database.provinces?.find(p => p.slug === slug);

  // لایه دفاعی: در صورتی که ولایت در دیتابیس پیدا نشود
  if (!province) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-2xl font-bold text-amovi-navy mb-4">
          {isRtl ? "ولایت مورد نظر پیدا نشد" : "Province Not Found"}
        </h2>
        <Link to="/" className="bg-amovi-gold text-amovi-navy font-bold py-2.5 px-6 rounded-full shadow-md">
          {isRtl ? "بازگشت به صفحه اصلی" : "Back to Home"}
        </Link>
      </div>
    );
  }

  // استخراج داده‌های دوزبانه ولایت جاری بر اساس زبان فعال سیستم
  const localData = province[currentLang];

  return (
    <div className="w-full bg-[#F8FAFC] pb-12">
      {/* 🟢 ۱. صدا زدن هدر به صورت استاندارد و بازکردن زنجیر کانتینر ۱۲۲۰ پیکسلی */}
      <Header />
      
      {/* 👑 ۲. صدا زدن کامپوننت هیرو سکشن (دقیقاً تراز با لبه‌های هدر بالای خود) */}
      <ProvinceHero 
        province={province} 
        localData={localData} 
        isRtl={isRtl} 
      />

      {/* 📥 نگه‌دارنده موقت سکشن‌های بعدی (تاریخ، فرهنگ و فیلترینگ) */}
      <div id="explore-hub" className="w-[96%] max-w-[1600px] mx-auto mt-12 py-12 text-center text-slate-400 border border-dashed border-slate-200 rounded-3xl bg-white shadow-sm">
        <p style={{ fontFamily: isRtl ? 'Sahel, sans-serif' : 'Inter, sans-serif' }}>
          {isRtl 
            ? "بخش‌های بعدی (داستان تاریخ و فرهنگ ولایت) در گام بعدی به این قسمت اضافه می‌شوند..." 
            : "The next sections (History and Culture Story) will be added here in the next step..."}
        </p>
      </div>

      {/* 📥 نگه‌دارنده موقت سکشن‌های بعدی (تاریخ، فرهنگ و فیلترینگ) */}
      <div id="explore-hub" className="w-[96%] max-w-[1600px] mx-auto mt-12 py-12 text-center text-slate-400 border border-dashed border-slate-200 rounded-3xl bg-white shadow-sm">
        <p style={{ fontFamily: isRtl ? 'Sahel, sans-serif' : 'Inter, sans-serif' }}>
          {isRtl 
            ? "بخش‌های بعدی (داستان تاریخ و فرهنگ ولایت) در گام بعدی به این قسمت اضافه می‌شوند..." 
            : "The next sections (History and Culture Story) will be added here in the next step..."}
        </p>
      </div>

    </div>
  );
}
