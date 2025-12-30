import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import AssessmentPage from './pages/AssessmentPage';
import LandingPage from './pages/LandingPage';
import PageWrapper from './components/PageWrapper';

// Inner component to handle location-based transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
      <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
      <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
      <Route path="/blog" element={<PageWrapper><BlogPage /></PageWrapper>} />
      <Route path="/blog/:slug" element={<PageWrapper><BlogPostPage /></PageWrapper>} />
      <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
      <Route path="/assessment" element={<PageWrapper><AssessmentPage /></PageWrapper>} />
      <Route path="/landing" element={<PageWrapper><LandingPage /></PageWrapper>} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-brand-red selection:text-white">
        <Header />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;