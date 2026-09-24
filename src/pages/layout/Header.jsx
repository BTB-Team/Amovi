import { useLangStore } from '../../store/useLangStore';

export default function Header() {
  const { currentLang, switchLanguage, translations } = useLangStore();

  return (
    <header className="bg-amovi-primary text-white p-4 flex justify-between items-center shadow-md">
      <div className="font-bold text-xl">Amovi Travel</div>
      <nav className="flex gap-4">
        <span>{translations.home}</span>
        <span>{translations.services}</span>
        <span>{translations.destinations}</span>
      </nav>
      <button 
        onClick={() => switchLanguage(currentLang === 'en' ? 'fa' : 'en')}
        className="bg-amovi-secondary px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-blue-600 transition"
      >
        {currentLang === 'en' ? 'دری' : 'English'}
      </button>
    </header>
  );
}