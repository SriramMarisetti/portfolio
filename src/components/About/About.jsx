import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Briefcase, Code2, GraduationCap, Coffee, Zap } from 'lucide-react'
import { personalInfo } from '../../data/portfolio'
import './About.scss'

const infoCards = [
  { icon: MapPin, label: 'Location', value: 'Andhra Pradesh, India', color: '#4f8ef7' },
  { icon: Briefcase, label: 'Role', value: 'Frontend Developer', color: '#06b6d4' },
  { icon: Code2, label: 'Primary Tech', value: 'React.js', color: '#818cf8' },
  { icon: Zap, label: 'Experience', value: '6+ Months', color: '#10b981' },
]

const traits = [
  { icon: '🧩', text: 'Problem Solver' },
  { icon: '🎨', text: 'UI Enthusiast' },
  { icon: '⚡', text: 'Fast Learner' },
  { icon: '🤝', text: 'Team Player' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

const About = () => {
  return (
    <section id="about" className="about">
      {/* Background decorations */}
      <div className="about__bg-decoration" />

      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <div className="section-tag">
              <Coffee size={12} />
              About Me
            </div>
            <h2 className="section-title">
              A Little <span>About Me</span>
            </h2>
            <div className="gradient-divider" />
          </motion.div>

          <div className="about__grid">
            {/* Left: Text Content */}
            <motion.div className="about__content" variants={itemVariants}>
              <div className="about__text-block">
                <p className="about__text">
                  I'm a <span className="about__highlight">Frontend Developer</span> from{' '}
                  <span className="about__highlight">Andhra Pradesh, India</span>, with practical
                  experience developing responsive web applications and building user-friendly interfaces.
                </p>
                <p className="about__text">
                  I completed a <span className="about__highlight">six-month internship at KN Advisors</span> and
                  currently work with the team on frontend development for an{' '}
                  <span className="about__highlight">EOR application</span>.
                </p>
                <p className="about__text">
                  I enjoy solving UI problems, developing reusable components, integrating APIs, and
                  creating consistent experiences across different devices.
                </p>
              </div>

              {/* Trait pills */}
              <div className="about__traits">
                {traits.map((trait) => (
                  <div key={trait.text} className="trait-pill">
                    <span>{trait.icon}</span>
                    <span>{trait.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="about__cta">
                <a
                  href="#contact"
                  className="btn btn-primary"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                >
                  <span>Get In Touch</span>
                </a>
                <a
                  href="#experience"
                  className="btn btn-secondary"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' }) }}
                >
                  <span>My Experience</span>
                </a>
              </div>
            </motion.div>

            {/* Right: Info Cards */}
            <motion.div className="about__info-grid" variants={containerVariants}>
              {infoCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  className="info-card"
                  style={{ '--card-color': card.color }}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <div className="info-card__icon">
                    <card.icon size={20} />
                  </div>
                  <div className="info-card__content">
                    <span className="info-card__label">{card.label}</span>
                    <span className="info-card__value">{card.value}</span>
                  </div>
                  <div className="info-card__glow" />
                </motion.div>
              ))}

              {/* KN Advisors feature card */}
              <motion.div className="about__company-card" variants={itemVariants}>
                <div className="company-card__header">
                  <div className="company-card__dot" />
                  <span className="company-card__status">Currently Working</span>
                </div>
                <div className="company-card__name">KN Advisors</div>
                <div className="company-card__role">Frontend Developer — EOR Application</div>
                <div className="company-card__tags">
                  {['React.js', 'SCSS', 'Vite'].map((tag) => (
                    <span key={tag} className="tech-badge">{tag}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
