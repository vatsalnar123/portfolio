'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import styles from './Header.module.css'

const Header = () => {
  const [text, setText] = useState('')
  const roles = ['Software Developer', 'ML Researcher', 'Problem Solver']
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentRole = roles[roleIndex]
      
      if (isDeleting) {
        setText(currentRole.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
        
        if (charIndex === 0) {
          setIsDeleting(false)
          setRoleIndex((roleIndex + 1) % roles.length)
        }
      } else {
        setText(currentRole.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
        
        if (charIndex === currentRole.length) {
          setIsDeleting(true)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex, roles])

  return (
    <header id="header" className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navMenu}>
          <ul>
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="/resume.pdf" target="_blank">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        
        <h1><a href="#header">Vatsal Narula</a></h1>
        <h2>I'm a <span className={styles.typing}>{text}</span></h2>

        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/vatsal-narula/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/vatsalnar123" target="_blank" rel="noopener noreferrer">
            <Github size={20} />
          </a>
          <a href="mailto:vatsalnarula821@gmail.com">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header