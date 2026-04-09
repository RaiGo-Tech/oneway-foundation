import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import BackToTop from './BackToTop';
import AIWidget from '../ai/AIWidget';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-[72px] lg:pt-[96px] flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <BackToTop />
      <AIWidget />
    </div>
  );
};

export default MainLayout;

