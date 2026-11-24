import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, FolderOpen, CheckCircle2, X } from 'lucide-react'
import { GithubIcon } from '../Icons/Icons'
import { projects } from '../../data/portfolio'
import './Projects.scss'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const ProjectCard = ({ project, onOpen }) => (
  <motion.div
    className="project-card"
    style={{ '--project-color': project.color }}
    variants={cardVariants}
    whileHover={{ y: -6 }}
    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
  >
    {/* Card top accent */}
    <div className="project-card__accent" />

    {/* Visual placeholder */}
    <div className="project-card__visual">
      <div className="project-card__mockup">
        <div className="mockup__bar">
          <span /><span /><span />
        </div>
        <div className="mockup__screen">
          <div className="mockup__line mockup__line--wide" style={{ background: project.color + '33' }} />
          <div className="mockup__line mockup__line--medium" />
          <div className="mockup__line mockup__line--short" />
          <div className="mockup__content-row">
            <div className="mockup__block" style={{ background: project.color + '22' }} />
            <div className="mockup__block" style={{ background: project.color + '15' }} />
          </div>
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="project-card__content">
      <div className="project-card__header">
        <div className="project-card__icon">
          <FolderOpen size={18} style={{ color: project.color }} />
        </div>
        <div className="project-card__links">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn"
            aria-label="GitHub"
            title="View Source"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn"
            aria-label="Live Demo"
            title="Live Demo"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__description">{project.description}</p>

      {/* Features preview */}
      <ul className="project-card__features">
        {project.features.slice(0, 3).map((f, i) => (
          <li key={i}>
            <CheckCircle2 size={12} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <div className="project-card__tech">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-badge">{tech}</span>
        ))}
      </div>

      {/* Buttons */}
      <div className="project-card__actions">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
        >
          <ExternalLink size={14} />
          <span>Live Demo</span>
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary btn-sm"
        >
          <GithubIcon size={14} />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  </motion.div>
)

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects__bg-deco" />
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div className="section-header" variants={cardVariants}>
            <div className="section-tag">
              <FolderOpen size={12} />
              Portfolio
            </div>
            <h2 className="section-title">
              Featured <span>Projects</span>
            </h2>
            <p className="section-subtitle">
              Real-world projects I've built and contributed to
            </p>
            <div className="gradient-divider" />
          </motion.div>

          {/* Projects Grid */}
          <div className="projects__grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Footer note */}
          <motion.div
            className="projects__note"
            variants={cardVariants}
          >
            <p>
              🚀 More projects coming soon. These represent my featured public work.{' '}
              <a href="https://github.com/SriramMarisetti" target="_blank" rel="noopener noreferrer">
                View all on GitHub →
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
