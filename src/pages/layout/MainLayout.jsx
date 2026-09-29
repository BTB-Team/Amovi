import { Outlet } from 'react-router-dom';

import Footer from './Footer';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      
      
      {/* محتوای متغیر صفحات در این قسمت رندر می‌شود */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      {/* فوتر در پایین تمام صفحات */}
      <Footer />
    </div>
  );
}