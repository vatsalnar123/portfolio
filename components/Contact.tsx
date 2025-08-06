import { Mail } from 'lucide-react'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Contact</h2>
        </div>
        
        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <Mail size={40} />
            <h3>Email</h3>
            <p>vatsalnarula821@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact