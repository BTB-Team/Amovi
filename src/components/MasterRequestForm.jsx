import { useState, useEffect } from 'react';
import { useLangStore } from '../store/useLangStore';

export default function MasterRequestForm({ packageName = "" }) {
  const { currentLang, translations } = useLangStore();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneWhatsApp: '',
    preferredDate: '',
    travelersCount: 1,
    packageOrService: packageName,
    additionalRequirements: '',
    privacyConsent: false
  });

  useEffect(() => {
    setFormData(prev => ({ ...prev, packageOrService: packageName }));
  }, [packageName]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data to send:", formData);
    alert(currentLang === 'en' ? "Request Received!" : "درخواست دریافت شد!");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg border border-[var(--color-amovi-gray-light)] my-8">
      <h2 className="text-xl font-bold text-[var(--color-amovi-navy)] mb-6 text-center">
        {currentLang === 'en' ? "Request This Package / Service" : "ثبت درخواست این پکیج / خدمت"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{translations.fullName} *</label>
            <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full p-3 border border-[var(--color-amovi-gray-light)] rounded-xl focus:outline-none focus:border-[var(--color-amovi-gold)]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{translations.email} *</label>
            <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full p-3 border border-[var(--color-amovi-gray-light)] rounded-xl focus:outline-none focus:border-[var(--color-amovi-gold)]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{translations.phone} *</label>
            <input type="text" name="phoneWhatsApp" required placeholder="+93..." value={formData.phoneWhatsApp} onChange={handleChange} className="w-full p-3 border border-[var(--color-amovi-gray-light)] rounded-xl focus:outline-none focus:border-[var(--color-amovi-gold)] text-left" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{translations.travelDate} *</label>
            <input type="date" name="preferredDate" required value={formData.preferredDate} onChange={handleChange} className="w-full p-3 border border-[var(--color-amovi-gray-light)] rounded-xl focus:outline-none focus:border-[var(--color-amovi-gold)]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{translations.travelers} *</label>
            <input type="number" name="travelersCount" min="1" required value={formData.travelersCount} onChange={handleChange} className="w-full p-3 border border-[var(--color-amovi-gray-light)] rounded-xl focus:outline-none focus:border-[var(--color-amovi-gold)]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{translations.packageField} *</label>
            <input type="text" name="packageOrService" readOnly value={formData.packageOrService} className="w-full p-3 bg-slate-50 border border-[var(--color-amovi-gray-light)] rounded-xl text-slate-400 font-semibold cursor-not-allowed" />
          </div>
        </div>

        <div>
          <button type="submit" className="w-full bg-[var(--color-amovi-gold)] hover:bg-amber-500 text-[var(--color-amovi-navy)] font-bold py-3 px-6 rounded-xl shadow-md transition duration-300 mt-4 cursor-pointer">
            {translations.submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
}