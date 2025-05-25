import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import SustainabilityPage from './pages/commitment/SustainabilityPage';
import SafetyPage from './pages/commitment/SafetyPage';
import QualityPage from './pages/commitment/QualityPage';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="commitment">
            <Route path="sustainability" element={<SustainabilityPage />} />
            <Route path="safety" element={<SafetyPage />} />
            <Route path="quality" element={<QualityPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;