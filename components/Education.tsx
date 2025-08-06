import styles from './Education.module.css'

const Education = () => {
  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Education</h2>
        </div>
        
        <div className={styles.educationGrid}>
          <div className={styles.educationCard}>
            <div className={styles.university}>Rutgers University-New Brunswick</div>
            <div className={styles.degree}>Bachelor of Science in Computer Science</div>
            <div className={styles.duration}>September 2021 - May 2025</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education