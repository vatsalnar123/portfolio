import styles from './Projects.module.css'

const Projects = () => {
  const projects = [
    {
      title: "Distributed Peer-to-Peer Poker Platform",
      description: "Built a scalable multiplayer game server in Go using gRPC APIs and Distributed Hash Table-based peer discovery, supporting real-time messaging and connection management across distributed clients.",
      technologies: ["Go", "gRPC", "Docker", "AWS EC2"],
      image: "/api/placeholder/300/200"
    },
    {
      title: "Visual Retrieval Augmented Generation System",
      description: "Developed a Visual Retrieval Augmented Generation system using FastAPI and React, enabling intelligent search across both text and visual elements in PDF documents with real-time processing.",
      technologies: ["FastAPI", "React", "Docker", "Redis", "AWS EKS"],
      image: "/api/placeholder/300/200"
    },
    {
      title: "Personify",
      description: "Spearheaded the architecture of a hybrid-cloud job-application automation tool, converting a Figma prototype into a responsive interface.",
      technologies: ["Flask", "MongoDB Atlas", "GCP Pub/Sub", "AWS KMS", "Docker"],
      image: "/api/placeholder/300/200"
    }
  ]

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Projects</h2>
        </div>
        
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <div className={styles.imagePlaceholder}>
                  {project.title}
                </div>
              </div>
              <div className={styles.projectContent}>
                <center><h4>{project.title}</h4></center>
                <p>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects