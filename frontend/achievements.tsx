import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styles from './achievements.module.css';


export function AchievementsPage() {
  return (
    <div className={styles.title}>
      <h1>
        ACHIEVEMENTS PAGE
      </h1>
      <Link to="/">Back home</Link>
    </div>
  );
}
