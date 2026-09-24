import { useState, useEffect } from 'react';
import { useLangStore } from '../store/useLangStore';

export default function MasterRequestForm({ packageName = "" }) {
  // ۱. خواندن زبان فعال و متون ترجمه شده از استور Zustand
  const { currentLang, translations } = useLangStore();

  // ۲. تعریف ایالت‌های فرم (Form States)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneWhatsApp: '',
    preferredDate: '',
    travelersCount: 1,
    packageOrService: packageName, // پر شدن خودکار بر اساس پروپس صفحه
    additionalRequirements: '',
    privacyConsent: false
  });

  // ۳. آپدیت فیلد نام پکیج در صورتی که کاربر صفحه را عوض کند
  useEffect(() => {
    setFormData(prev => ({ ...prev, packageOrService: packageName }));
  }, [packageName]);

  // ۴. مدیریت تغییرات در اینپوت‌ها
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // ۵. اکشن ارسال فرم (Submit)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // در فازهای بعدی تیم فرانت با Axios این دیتای formData را به /requests ارسال می‌کند
    console.log("Data to send to json-server:", formData);
    
    alert(
      currentLang === 'en' 
        ? "Thank You! Your request has been received. Our team will review it and contact you shortly."
        : "تشکر! درخواست شما دریافت شد. تیم ما درخواست شما را بررسی کرده و به‌زودی با شما تماس خواهد گرفت."
    );
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg border border-slate-100 my-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
        {currentLang === 'en' ? "Request This Package / Service" : "ثبت درخواست این پکیج / خدمت"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ردیف ۱ دسکتاپ: نام و ایمیل */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{translations.fullName} *</label>
            <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{translations.email} *</label>
            <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500" />
          </div>
        </div>

        {/* ردیف ۲ دسکتاپ: واتس‌اپ و تاریخ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{translations.phone} *</label>
            <input type="text" name="phoneWhatsApp" required placeholder="+93..." value={formData.phoneWhatsApp} onChange={handleChange} className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-left" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              {currentLang === 'en' ? "Preferred Travel Date *" : "تاریخ موردنظر سفر *"}
            </label>
            <input type="date" name="preferredDate" required value={formData.preferredDate} onChange={handleChange} className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500" />
          </div>
        </div>

        {/* ردیف ۳ دسکتاپ: تعداد مسافر و نام پکیج خودکار */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              {currentLang === 'en' ? "Number of Travelers *" : "تعداد مسافران *"}
            </label>
            <input type="number" name="travelersCount" min="1" required value={formData.travelersCount} onChange={handleChange} className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              {currentLang === 'en' ? "Package / Service *" : "نام پکیج یا خدمت *"}
            </label>
            <input type="text" name="packageOrService" readOnly value={formData.packageOrService} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-500 font-semibold cursor-not-allowed" />
          </div>
        </div>

        {/* توضیحات اضافی تمام عرض */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            {currentLang === 'en' ? "Additional Requirements (Optional)" : "نیازمندی‌های خاص (اختیاری)"}
          </label>
          <textarea name="additionalRequirements" rows="3" value={formData.additionalRequirements} onChange={handleChange} className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"></textarea>
        </div>

        {/* چک‌باکس حریم خصوصی */}
        <div className="flex items-start gap-2 pt-2">
          <input type="checkbox" name="privacyConsent" id="privacyConsent" required checked={formData.privacyConsent} onChange={handleChange} className="mt-1 accent-blue-600 cursor-pointer" />
          <label htmlFor="privacyConsent" className="text-xs text-slate-600 cursor-pointer select-none">
            {currentLang === 'en' 
              ? "I agree to Amovi's Privacy Policy and consent to the use of my information for handling my travel request."
              : "من با قوانین حریم خصوصی Amovi موافقم و اجازه می‌دهم از اطلاعاتم برای بررسی درخواست سفر استفاده شود."}
          </label>
        </div>

        {/* دکمه ارسال دوزبانه هماهنگ با تیلوند ۴ */}
        <button type="submit" className="w-full bg-amovi-secondary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-300 mt-4 cursor-pointer">
          {translations.submitBtn}
        </button>
      </form>
    </div>
  );
}