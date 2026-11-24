import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Cpu, Code2, Database, Wrench, Bot, Star, Layers } from 'lucide-react'
import { skills } from '../../data/portfolio'
import './Skills.scss'

const categories = [
  { key: 'all', label: 'All Skills', icon: Layers, color: '#4f8ef7' },
  { key: 'frontend', label: 'Frontend', icon: Code2, color: '#4f8ef7' },
  { key: 'programming', label: 'Programming', icon: Cpu, color: '#818cf8' },
  { key: 'database', label: 'Database & SQL', icon: Database, color: '#06b6d4' },
  { key: 'tools', label: 'Tools', icon: Wrench, color: '#10b981' },
  { key: 'aiTools', label: 'AI & Productivity', icon: Bot, color: '#f59e0b' },
]

const skillIconMap = {
  'HTML5': '🌐',
  'CSS3': '🎨',
  'JavaScript': '⚡',
  'React.js': '⚛️',
  'Bootstrap': '🅱️',
  'Python': '🐍',
  'Python (Basics)': '🐍',
  'SQL': '🗄️',
  'MySQL': '🐬',
  'Git': '📦',
  'GitHub': '🐙',
  'VS Code': '💻',
  'ChatGPT': '🤖',
  'GitHub Copilot': '🤝',
  'Microsoft Copilot': '🔷',
  'Lovable AI': '💜',
  'Prompt Engineering': '✍️',
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

const SkillCard = ({ skill, color }) => (
  <motion.div
    className="skill-card"
    style={{ '--skill-color': color }}
    variants={cardVariants}
    whileHover={{ y: -4, scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
  >
    <div className="skill-card__icon">{skillIconMap[skill.name] || '🔹'}</div>
    <div className="skill-card__info">
      <span className="skill-card__name">{skill.name}</span>
      <div className="skill-card__bar">
        <motion.div
          className="skill-card__fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        />
      </div>
    </div>
    <div className="skill-card__level">{skill.level}%</div>
  </motion.div>
)

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const allSkillsList = Object.entries(skills).flatMap(([catKey, skillList]) =>
    skillList.map(s => ({ ...s, categoryKey: catKey }))
  )

  const activeSkills = activeCategory === 'all'
    ? allSkillsList
    : (skills[activeCategory] || []).map(s => ({ ...s, categoryKey: activeCategory }))

  const getSkillColor = (skill) => {
    const categoryMeta = categories.find(c => c.key === skill.categoryKey)
    return categoryMeta?.color || '#4f8ef7'
  }

  return (
    <section id="skills" className="skills">
      <div className="skills__bg-decoration" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="section-header">
            <div className="section-tag">
              <Star size={12} />
              Technical Skills
            </div>
            <h2 className="section-title">
              My <span>Tech Stack</span>
            </h2>
            <p className="section-subtitle">
              Core technologies, programming languages, databases and productivity tools
            </p>
            <div className="gradient-divider" />
          </div>

          {/* Category Tabs */}
          <div className="skills__tabs">
            {categories.map((cat) => (
              <motion.button
                key={cat.key}
                className={`skill-tab ${activeCategory === cat.key ? 'active' : ''}`}
                style={{ '--tab-color': cat.color }}
                onClick={() => setActiveCategory(cat.key)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <cat.icon size={15} />
                <span>{cat.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            className="skills__grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {activeSkills.map((skill) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                color={getSkillColor(skill)}
              />
            ))}
          </motion.div>

          {/* All Technologies Overview */}
          <motion.div
            className="skills__all-tags"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="skills__all-tags-label">Quick tech overview:</p>
            <div className="skills__tags-row">
              {Object.values(skills).flat().map((skill) => (
                <motion.span
                  key={skill.name}
                  className="tech-badge"
                  whileHover={{ scale: 1.08, y: -2 }}
                >
                  {skillIconMap[skill.name] || '🔹'} {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
