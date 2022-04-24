import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

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


function HomePage() {
  return (
    <div className="App">
      <h1 className="App-header">
        HOME
      </h1>
      <Link to="/achievements">Achievements page</Link>
    </div>
  );
}

function AchievementsPage() {
  return (
    <div>
      <h1>
        ACHIEVEMENTS PAGE
      </h1>
      <Link to="/">Back home</Link>
    </div>
  );
}
export default App;
