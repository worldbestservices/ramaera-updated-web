import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import AdminLayout from './components/AdminLayout'
import ScrollToTop from './hooks/ScrollToTop';
import RequireAdminAuth from './components/RequireAdminAuth';


// Pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import IndustriesPage from './pages/IndustriesPage'
import HowItWorksPage from './pages/HowItWorksPage'
import SuccessStoriesPage from './pages/SuccessStoriesPage'
import JoinPage from './pages/JoinPage'
import ApplyFactoryPage from './pages/ApplyFactoryPage'
import ContactPage from './pages/ContactPage'
import Becomeshare from './pages/Becomeshare'
import MonthlySpiceSubscription from './components/MonthlySpiceSubscription'
import AdminPanel from './pages/AdminPanel';
import AdminLogin from './pages/AdminLogin';
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* Main Website Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="success-stories" element={<SuccessStoriesPage />} />
          <Route path="join" element={<JoinPage />} />
          <Route path="shareholder" element={<Becomeshare />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="apply" element={<ApplyFactoryPage />} />
          <Route path="monthly-spice-subscription" element={<MonthlySpiceSubscription />} />

        </Route>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin/reset-password/:token" element={<ResetPassword />} />

        {/* Protected Admin Layout */}
        <Route path="/admin" element={<RequireAdminAuth />}>
          <Route element={<AdminLayout />}>
            <Route index element={<AdminPanel />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;
