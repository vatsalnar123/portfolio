import styles from './About.module.css'

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>About</h2>
        </div>
        
        <div className={styles.content}>
          <div className={styles.imageCol}>
            <div className={styles.profileImage}>
              <span>VN</span>
            </div>
          </div>
          
          <div className={styles.textCol}>
            <p>
              Focused and enthusiastic developer with a keen interest in software development and machine learning. 
              Through comprehensive exposure to underlying concepts and applying them to various projects, my passion 
              for these domains continues to grow. I am a driven individual who thrives on building and applying 
              algorithms to solve real-world problems.
            </p>
            
            <div className={styles.details}>
              <div className={styles.detailsCol}>
                <ul>
                  <li><strong>University:</strong> Rutgers University</li>
                  <li><strong>Degree:</strong> Computer Science</li>
                </ul>
              </div>
              <div className={styles.detailsCol}>
                <ul>
                  <li><strong>Email:</strong> vatsalnarula821@gmail.com</li>
                  <li><strong>Location:</strong> New Brunswick, NJ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About