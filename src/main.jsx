import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ResumePage from './pages/ResumePage.jsx';
import CodePage from './pages/CodePage.jsx';
import VisualArtsPage from './pages/VisualArtsPage.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/code" element={<CodePage />} />
        <Route path="/visual-arts" element={<VisualArtsPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);