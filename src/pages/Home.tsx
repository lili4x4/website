import React from 'react';

export default function ComingSoonPage() {
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#F1F4DF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 1rem',
      fontFamily: '"Nunito Sans", "Helvetica Neue", Arial, sans-serif'
    },
    content: {
      textAlign: 'center' as const,
      maxWidth: '48rem',
      margin: '0 auto'
    },
    mainHeading: {
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      color: '#141613',
      fontWeight: 300,
      marginBottom: '3rem',
      letterSpacing: '0.05em',
      lineHeight: 1.1,
      textAlign: 'center' as const
    },
    businessNameContainer: {
      textAlign: 'center' as const,
      marginBottom: '2.5rem'
    },
    businessLine: {
      fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
      color: '#535724',
      fontWeight: 300,
      letterSpacing: '0.05em',
      lineHeight: 1.2
    },
    tagline: {
      fontSize: 'clamp(1rem, 2vw, 2rem)', // Ensures the text shrinks to fit
      color: '#141613',
      fontWeight: 300,
      fontStyle: 'italic',
      lineHeight: 1.6,
      marginBottom: '4rem',
      textAlign: 'center' as const,
      whiteSpace: 'normal' as const, // Prevents wrapping to a new line
    },
    decorativeLine: {
      width: '4rem',
      height: '1px',
      backgroundColor: '#535724',
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
          <div style={styles.businessLine}>Lili4x4</div>
          <div style={styles.businessLine}>Events & Experiences</div>
        </div>
        
        {/* <h2 style={styles.businessName}>
          Lili4x4&nbsp;Events&nbsp;&&nbsp;Experiences
        </h2> */}
        
        <p style={styles.tagline}>
          Event planning done with care, creativity, and integrity
        </p>
        
        <div style={styles.decorativeLine}></div>
      </div>
    </div>
  );
}