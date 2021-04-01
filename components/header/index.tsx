import React from 'react'
import styles from './Header.module.scss'

function Header() {
    return (
      <header className={styles.header}>
        <h1 className={styles.title}>
          Publish your podcasts{" "}
          <span className={styles.accent}>everywhere.</span>
        </h1>
        <p className={styles.subtitle}>
          Upload your audio to Pod with a single click. We’ll then distribute
          your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
          and more!
        </p>
      </header>
    );
}

export default Header
