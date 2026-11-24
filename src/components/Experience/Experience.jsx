import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, CheckCircle2, ChevronDown, ChevronUp, Calendar, MapPin } from 'lucide-react'
import { experiences } from '../../data/portfolio'
import './Experience.scss'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const ExperienceCard = ({ exp, index }) => {
  const [expanded, setExpanded] = useState(index === 0)

  return (
    <motion.div
      className={`exp-card ${exp.type === 'Current' ? 'exp-card--current' : ''}`}
      variants={itemVariants}
    >
      {/* Timeline dot */}
      <div className="exp-card__timeline">
        <div className={`timeline-dot ${exp.type === 'Current' ? 'timeline-dot--active' : ''}`}>
          <Briefcase size={14} />
        </div>
        {index < experiences.length - 1 && <div className="timeline-line" />}
      </div>

      {/* Content */}
      <motion.div
        className="exp-card__body"
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {/* Header */}
        <div className="exp-card__header">
          <div className="exp-card__meta">
            <div className="exp-card__company-row">
              <h3 className="exp-card__company">{exp.company}</h3>
              <span className={`exp-status ${exp.type === 'Current' ? 'exp-status--current' : 'exp-status--past'}`}>
                {exp.type === 'Current' ? (
                  <><span className="status-pulse" />{exp.status}</>
                ) : exp.status}
              </span>
            </div>
            <div className="exp-card__role-row">
              <span className="exp-card__role">{exp.role}</span>
              <span className="exp-card__period">
                <Calendar size={12} />
                {exp.period}
              </span>
            </div>
          </div>
          <button
            className="exp-card__toggle"
            onClick={() => setExpanded(!expanded)}
            aria-label={expanded ? 'Collapse' : 'Expand'}
          >
            {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>

        {/* Description */}
        <p className="exp-card__description">{exp.description}</p>

        {/* Expandable responsibilities */}
        <motion.div
          className="exp-card__details"
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          style={{ overflow: 'hidden' }}
        >
          <ul className="exp-card__list">
            {exp.responsibilities.map((item, i) => (
              <motion.li
                key={i}
                className="exp-card__list-item"
                initial={{ opacity: 0, x: -10 }}
                animate={expanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                <CheckCircle2 size={14} className="list-icon" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Technologies */}
        <div className="exp-card__tech">
          {exp.technologies.map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience__bg-left" />
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <div className="section-tag">
              <Briefcase size={12} />
              Work History
            </div>
            <h2 className="section-title">
              Professional <span>Experience</span>
            </h2>
            <p className="section-subtitle">
              My journey in frontend development
            </p>
            <div className="gradient-divider" />
          </motion.div>

          {/* Timeline */}
          <div className="experience__timeline">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
