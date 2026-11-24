import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'
import { education } from '../../data/portfolio'
import './Education.scss'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
}

const Education = () => {
  return (
    <section id="education" className="education">
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
              <GraduationCap size={12} />
              Education
            </div>
            <h2 className="section-title">
              Academic <span>Background</span>
            </h2>
            <div className="gradient-divider" />
          </motion.div>

          {/* Education Timeline */}
          <div className="education__list">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="edu-card"
                variants={itemVariants}
                whileHover={{ x: 6, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                {/* Number */}
                <div className="edu-card__number">
                  <span>0{index + 1}</span>
                </div>

                {/* Icon */}
                <div className="edu-card__icon">
                  {edu.icon}
                </div>

                {/* Content */}
                <div className="edu-card__content">
                  <h3 className="edu-card__degree">{edu.degree}</h3>
                  <p className="edu-card__institution">
                    <MapPin size={12} />
                    {edu.institution}
                  </p>
                </div>

                {/* Year badge */}
                <div className="edu-card__year">
                  <Calendar size={12} />
                  <span>{edu.year}</span>
                </div>

                {/* Hover border */}
                <div className="edu-card__border" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
