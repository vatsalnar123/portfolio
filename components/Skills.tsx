import styles from './Skills.module.css'

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Skills</h2>
        </div>
        
        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>
            <h4>Programming Languages</h4>
            <div className={styles.skillItems}>
              <span>JavaScript</span>
              <span>Python</span>
              <span>Java</span>
              <span>Go</span>
              <span>SQL</span>
            </div>
          </div>
          
          <div className={styles.skillCard}>
            <h4>Frameworks & Libraries</h4>
            <div className={styles.skillItems}>
              <span>Node.js</span>
              <span>React</span>
              <span>Django</span>
              <span>FastAPI</span>
              <span>Spring Boot</span>
              <span>PyTorch</span>
              <span>Scikit-learn</span>
            </div>
          </div>
          
          <div className={styles.skillCard}>
            <h4>Tools & Technologies</h4>
            <div className={styles.skillItems}>
              <span>Git</span>
              <span>Docker</span>
              <span>Kubernetes</span>
              <span>AWS</span>
              <span>MongoDB</span>
              <span>Redis</span>
              <span>NGINX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills