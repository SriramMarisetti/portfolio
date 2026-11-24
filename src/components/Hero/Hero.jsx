import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Mail, Download, ExternalLink, Code2, Layers, Palette } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../Icons/Icons'
import { personalInfo } from '../../data/portfolio'
import './Hero.scss'

const techBadges = [
  { label: 'React.js', color: '#61DAFB', bg: 'rgba(97,218,251,0.1)', x: -40, y: -60 },
  { label: 'JavaScript', color: '#F7DF1E', bg: 'rgba(247,223,30,0.1)', x: 60, y: -30 },
  { label: 'HTML5', color: '#E34F26', bg: 'rgba(227,79,38,0.1)', x: -60, y: 60 },
  { label: 'CSS3', color: '#1572B6', bg: 'rgba(21,114,182,0.1)', x: 50, y: 70 },
]

const socialLinks = [
  { icon: GithubIcon, href: 'https://github.com/SriramMarisetti', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/sri-ram-marisetti-688729285', label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
]

const TypewriterText = ({ texts }) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const full = texts[currentIndex]
      if (!isDeleting) {
        setCurrentText(full.substring(0, charIndex + 1))
        if (charIndex + 1 === full.length) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else {
          setCharIndex(c => c + 1)
        }
      } else {
        setCurrentText(full.substring(0, charIndex - 1))
        if (charIndex === 0) {
          setIsDeleting(false)
          setCurrentIndex(i => (i + 1) % texts.length)
        } else {
          setCharIndex(c => c - 1)
        }
      }
    }, isDeleting ? 50 : 80)
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, currentIndex, texts])

  return (
    <span className="typewriter">
      {currentText}
      <span className="cursor-blink">|</span>
    </span>
  )
}

const Hero = () => {
  const handleScrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <section id="home" className="hero">
      {/* Animated background */}
      <div className="hero__bg">
        <div className="hero__bg-orb hero__bg-orb--1" />
        <div className="hero__bg-orb hero__bg-orb--2" />
        <div className="hero__bg-orb hero__bg-orb--3" />
        <div className="hero__grid-lines" />
        <ParticleField />
      </div>

      <div className="container">
        <div className="hero__inner">
          {/* Left: Content */}
          <motion.div
            className="hero__content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status Badge */}
            <motion.div className="hero__status" variants={itemVariants}>
              <span className="status-dot" />
              <span>Open to Frontend Opportunities</span>
            </motion.div>

            {/* Greeting */}
            <motion.p className="hero__greeting" variants={itemVariants}>
              <span className="greeting-wave">👋</span> Hello, World!
            </motion.p>

            {/* Main Heading */}
            <motion.h1 className="hero__heading" variants={itemVariants}>
              Hi, I'm{' '}
              <span className="hero__name">
                Sriram Marisetti
                <span className="hero__name-underline" />
              </span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div className="hero__role" variants={itemVariants}>
              <span className="role-prefix">&lt;</span>
              <TypewriterText
                texts={[
                  'Frontend Developer',
                  'React.js Developer',
                  'UI/UX Enthusiast',
                  'Problem Solver',
                ]}
              />
              <span className="role-prefix">/&gt;</span>
            </motion.div>

            {/* Description */}
            <motion.p className="hero__description" variants={itemVariants}>
              {personalInfo.heroDescription}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="hero__actions" variants={itemVariants}>
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                <ExternalLink size={16} />
                <span>View My Work</span>
              </a>
              <a href="/resume.pdf" download className="btn btn-secondary">
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div className="hero__social" variants={itemVariants}>
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon size={18} />
                </motion.a>
              ))}
              <div className="social-divider" />
              <span className="social-label">Find me on</span>
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <DeveloperIllustration />
            {/* Tech floating badges */}
            {techBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                className="tech-float-badge"
                style={{ '--badge-color': badge.color, '--badge-bg': badge.bg }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1, y: -3 }}
              >
                {badge.label}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          className="hero__scroll"
          onClick={handleScrollDown}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.1 }}
          aria-label="Scroll down"
        >
          <span className="scroll-text">Scroll</span>
          <motion.div
            className="scroll-icon"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}

// Developer Illustration (SVG-based, no fake photo)
const DeveloperIllustration = () => (
  <div className="dev-illustration">
    <div className="dev-illustration__ring dev-illustration__ring--outer" />
    <div className="dev-illustration__ring dev-illustration__ring--inner" />
    <div className="dev-illustration__core">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="dev-svg">
        {/* Monitor */}
        <rect x="30" y="45" width="140" height="90" rx="8" fill="none" stroke="#4f8ef7" strokeWidth="2.5" />
        <rect x="35" y="50" width="130" height="80" rx="4" fill="#0d1627" />
        {/* Code lines */}
        <rect x="45" y="65" width="50" height="4" rx="2" fill="#4f8ef7" opacity="0.9" />
        <rect x="45" y="77" width="80" height="4" rx="2" fill="#06b6d4" opacity="0.7" />
        <rect x="55" y="89" width="60" height="4" rx="2" fill="#818cf8" opacity="0.8" />
        <rect x="55" y="101" width="40" height="4" rx="2" fill="#10b981" opacity="0.7" />
        <rect x="45" y="113" width="70" height="4" rx="2" fill="#4f8ef7" opacity="0.6" />
        {/* Cursor blink */}
        <rect x="120" y="77" width="8" height="4" rx="1" fill="#f0f4ff" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0;0.9" dur="1.2s" repeatCount="indefinite" />
        </rect>
        {/* Monitor stand */}
        <rect x="90" y="135" width="20" height="12" rx="2" fill="#4f8ef7" opacity="0.6" />
        <rect x="70" y="147" width="60" height="6" rx="3" fill="#4f8ef7" opacity="0.4" />
        {/* Decorative elements */}
        <circle cx="162" cy="52" r="4" fill="#10b981" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="150" cy="52" r="4" fill="#f59e0b" opacity="0.7" />
        <circle cx="138" cy="52" r="4" fill="#ef4444" opacity="0.7" />
      </svg>

      {/* Code symbol overlay */}
      <div className="dev-code-symbol">
        <span>{'{ '}</span>
        <span className="sym-var">dev</span>
        <span>{' }'}</span>
      </div>
    </div>

    {/* Orbiting elements */}
    <div className="orbit-wrapper">
      {['⚛️', '🎨', '⚡', '🔧'].map((icon, i) => (
        <div
          key={i}
          className="orbit-item"
          style={{ '--orbit-delay': `${i * -2}s`, '--orbit-angle': `${i * 90}deg` }}
        >
          {icon}
        </div>
      ))}
    </div>
  </div>
)

// Particle Field
const ParticleField = () => {
  const particles = Array.from({ length: 30 }, (_, i) => i)
  return (
    <div className="particle-field">
      {particles.map((i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            '--tx': `${(Math.random() - 0.5) * 200}px`,
            '--ty': `${(Math.random() - 0.5) * 200}px`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 8}s`,
          }}
        />
      ))}
    </div>
  )
}

export default Hero
