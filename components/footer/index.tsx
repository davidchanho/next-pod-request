import React from 'react'
import styles from './Footer.module.scss'

function Footer() {
    return (
      <footer className={styles.footer}>
        <img src="/desktop/spotify.svg" />
        <img src="/desktop/apple-podcast.svg" />
        <img src="/desktop/google-podcasts.svg" />
        <img src="/desktop/pocket-casts.svg" />
      </footer>
    );
}

export default Footer
