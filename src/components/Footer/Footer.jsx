import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Heart, ArrowUp, Code2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../Icons/Icons'
import { navLinks, personalInfo } from '../../data/portfolio'
import './Footer.scss'

const socialLinks = [
  { icon: GithubIcon, href: personalInfo.github, label: 'GitHub' },
  { icon: LinkedinIcon, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  const handleNavClick = (href) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="footer">
      {/* Top border glow */}
      <div className="footer__top-glow" />

      <div className="container">
        {/* Main footer content */}
        <div className="footer__main">
          {/* Brand */}
          <div className="footer__brand">
            <a
              href="#home"
              className="footer__logo"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            >
              <span className="logo-bracket">&lt;</span>
              <span>Sriram Marisetti</span>
              <span className="logo-bracket">/&gt;</span>
            </a>
            <p className="footer__tagline">Frontend Developer</p>
            <p className="footer__bio">
              Building modern, responsive and user-friendly web experiences from Andhra Pradesh, India.
            </p>
            {/* Socials */}
            <div className="footer__socials">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label={link.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="footer__nav">
            <h4 className="footer__nav-title">Navigation</h4>
            <ul className="footer__nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    className="footer__nav-link"
                  >
                    <span className="nav-arrow">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__contact">
            <h4 className="footer__nav-title">Contact</h4>
            <div className="footer__contact-list">
              <a href={`mailto:${personalInfo.email}`} className="footer__contact-link">
                <Mail size={14} />
                <span>{personalInfo.email}</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer__contact-link">
                <LinkedinIcon size={14} />
                <span>LinkedIn Profile</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="footer__contact-link">
                <GithubIcon size={14} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} Sriram Marisetti. All rights reserved.
          </p>
          <p className="footer__made">
            Made with <Heart size={12} className="heart-icon" /> using React.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
