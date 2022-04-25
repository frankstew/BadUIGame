import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styles from './landing.module.css';



export function LandingPage() {
  return (
    <div className={styles.landingTitle}>
      <h1 className={styles.titleText}>
        I hope this website is irritating.
      </h1>
      <Link to="/achievements">Achievements page</Link>
    </div>
  );
}

//module.exports = {landingPage}


