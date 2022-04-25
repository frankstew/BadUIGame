import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { LandingPage } from './landing';
import { AchievementsPage } from './achievements';

function app() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/achievements" element={<AchievementsPage/>}/>
      </Routes>
    </Router>
  );
}

export default app;
