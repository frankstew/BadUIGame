import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



export default function HomePage() {
  return (
    <div className="App">
      <h1 className="App-header">
        HOME
      </h1>
      <Link to="/achievements">Achievements page</Link>
    </div>
  );
}


