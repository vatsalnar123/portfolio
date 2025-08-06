import styles from './Experience.module.css'

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Research Assistant",
      company: "Rutgers University-New Brunswick",
      duration: "May 2023 – Aug 2023",
      description: [
        "Conducted research on transformer-based recommendation systems using the Bert4rec Model. Optimized data parsing algorithms using PyTorch and fine-tuned the BERT transformer architecture for specific model training and sequential data handling.",
        "Explored research frontiers by investigating novel algorithms, deep learning concepts, user-item interactions, and interpretability in recommendation systems."
      ]
    },
    {
      title: "Software Development Intern",
      company: "SISL",
      duration: "May 2022 – Aug 2022",
      description: [
        "Built and deployed a real-time conference room booking system using Node.js, Express, MongoDB, EJS, and AJAX, enabling 1,000+ employees across 4 departments to coordinate meetings with zero double-booking incidents post-launch.",
        "Delivered the full-stack MVP in under 6 weeks, including backend logic, conflict resolution, UI workflows, and AJAX-based interactivity — resulting in a 5× faster booking workflow and a 90%+ internal adoption rate within 2 weeks."
      ]
    }
  ]

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Experience</h2>
        </div>
        
        <div className={styles.experienceList}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.experienceCard}>
              <h4 className={styles.jobTitle}>
                <a href="#" className={styles.companyLink}>{exp.company}</a>
              </h4>
              <h5 className={styles.duration}>{exp.duration}</h5>
              <p className={styles.position}>{exp.title}</p>
              <ul className={styles.responsibilities}>
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience