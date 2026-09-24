import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Services from '../pages/services/Services';
import Tours from '../pages/tours/Tours';
import Destinations from '../pages/destinations/Destinations';
import Blog from '../pages/blog/Blog';
import Contact from '../pages/contact/Contact';
import Policy from '../pages/policy/Policy';
import PaymentMethods from '../pages/payment/PaymentMethods';

// کامپوننت مدیریت کلی مسیرهای فرانت‌پروژه Amovi
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/payment-methods" element={<PaymentMethods />} />
      </Routes>
    </BrowserRouter>
  );
}