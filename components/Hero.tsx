'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bgPattern}></div>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className={styles.greeting}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            👋 Hello, I'm
          </motion.div>
          
          <motion.h1 
            className={styles.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Vatsal Narula
          </motion.h1>
          
          <motion.div 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Software Developer
          </motion.div>
          
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Passionate about building innovative software and exploring machine learning. 
            From distributed systems to AI research, I love creating solutions that matter.
          </motion.p>
          
          <motion.div 
            className={styles.actions}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <a href="#projects" className={styles.btnPrimary}>
              View My Work
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              <Mail size={20} />
              Get In Touch
            </a>
          </motion.div>
          
          <motion.div 
            className={styles.socialLinks}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <a href="https://github.com/vatsalnarula" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/vatsalnarula" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Linkedin size={24} />
            </a>
            <a href="mailto:vatsalnarula821@gmail.com" className={styles.socialLink}>
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <a href="#education" className={styles.scrollLink}>
            <ChevronDown size={24} />
            <span>Explore</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero