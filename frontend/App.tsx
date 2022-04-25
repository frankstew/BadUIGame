import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './home';
import AchievementsPage from './achievements';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/achievements" element={<AchievementsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
