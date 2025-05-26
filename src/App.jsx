// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import Footer from '@/Footer'; // Adjust path if needed

import Home from '@/components/Home';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';

import Login from '@/Login';
import Signup from '@/Signup';
import Dashboard from '@/page/Dashboard';
import ForgotPassword from '@/page/ForgotPassword';

import { AuthProvider } from './AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router basename="/my-portfolio">
        <Navbar />

        <main>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            {/* Fallback Route */}
            <Route path="*" element={<Login />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
