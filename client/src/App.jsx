import { Routes, Route } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import BackToTop from './components/common/BackToTop';

import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Programs from './pages/Programs';
import ProgramDetails from './pages/ProgramDetails';
import Gallery from './pages/Gallery';
import Media from './pages/Media';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import Documents from './pages/Documents';
import JoinUs from './pages/JoinUs';
import SearchResults from './pages/SearchResults';
import PromoteBrand from './pages/PromoteBrand';

// Admin
import AdminLayout from './components/common/AdminLayout';
import ProtectedRoute from './admin/components/ProtectedRoute';
import Login from './admin/pages/Login';
import Dashboard from './admin/pages/Dashboard';
import Members from './admin/pages/Members';
import Donations from './admin/pages/Donations';
import Partners from './admin/pages/Partners';
import Messages from './admin/pages/Messages';
import SocialPosts from './admin/pages/SocialPosts';
import GalleryAdmin from './admin/pages/Gallery';

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        {/* Public Routes */}
        <Routes>
          {/* Frontend Pages */}
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <main className="pt-[72px] lg:pt-[96px] flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/programs" element={<Programs />} />
                    <Route path="/programs/:id" element={<ProgramDetails />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/media" element={<Media />} />
                    <Route path="/donate" element={<Donate />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/documents" element={<Documents />} />
                    <Route path="/join-us" element={<JoinUs />} />
                    <Route path="/search" element={<SearchResults />} />
                    <Route path="/promote-brand" element={<PromoteBrand />} />
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="members" element={<Members />} />
            <Route path="donations" element={<Donations />} />
            <Route path="partners" element={<Partners />} />
            <Route path="messages" element={<Messages />} />
            <Route path="social" element={<SocialPosts />} />
            <Route path="gallery" element={<GalleryAdmin />} />
          </Route>
        </Routes>
      </div>
      <BackToTop />
    </>
  );
}

export default App;

