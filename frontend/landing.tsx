import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styles from './landing.module.css';

export function LandingPage() {
  return (
    <div>
      <div className={styles.landingTitle}>
        <h1 className={styles.titleText}>
          This website is irritating.
        </h1>
      </div>
      <div className={styles.enterSite}>
        <Link to="/achievements">
          <button className={styles.enterSiteButton}>
            Enter
          </button>
        </Link>
      </div>
    </div>
  );
}


