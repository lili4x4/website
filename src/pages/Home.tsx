import React from 'react';
import "../App.css"

export default function ComingSoonPage() {
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 1rem',
      fontFamily: 'var(--subtitle-font)'
    },
    content: {
      textAlign: 'center' as const,
      margin: '0 auto'
    },
    mainHeading: {
      fontSize: 'clamp(1.3rem, 4.5vw, 6rem)',
      color: 'var(--text)',
      fontWeight: 300,
      marginBottom: '4.5rem',
      letterSpacing: '0.4em',
      lineHeight: 1.1,
      textAlign: 'center' as const
    },
    businessNameContainer: {
      textAlign: 'center' as const,
      marginBottom: '2rem'
    },
    businessLine1: {
      fontSize: 'clamp(2rem, 7.2vw, 7rem)',
      fontFamily: 'var(--title-font)',
      color: 'var(--accent)', 
      fontWeight: 700,
      letterSpacing: '0.05em',
      lineHeight: 1.2
    },
    businessLine2: {
      fontSize: 'clamp(1.2rem, 3.8vw, 5rem)',
      color: 'var(--accent)', 
      fontWeight: 400,
      letterSpacing: '0.05em',
      lineHeight: 1.2
    },
    tagline: {
      fontSize: 'clamp(1rem, 2.5vw, 3rem)', 
      color: 'var(--text)',
      fontFamily: 'var(--heading-font)',
      fontWeight: 400,
      marginBottom: '5.5rem',
      textAlign: 'center' as const,
    },
    decorativeLine: {
      width: 'clamp(150px, 35vw, 400px)',
      maxWidth: '200px',
      height: 'auto',
      display: 'block',
      margin: '0 auto'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.mainHeading}>
          COMING SOON
        </h1>
        
        <div style={styles.businessNameContainer}>
          <div style={styles.businessLine1}>LILI4X4</div>
          <div style={styles.businessLine2}>Events & Experiences</div>
        </div>
        
        <p style={styles.tagline}>
          Event planning done with Creativity, Compassion, and Authenticity
        </p>

        <img style={styles.decorativeLine} src={require('../assets/SquiggleLine.png')} alt="Blue squiggle line" />
      </div>
    </div>
  );
}