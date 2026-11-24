import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../data/portfolio'
import { useScrollY, useActiveSection } from '../../hooks/usePortfolio'
import './Navbar.scss'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollY = useScrollY()
  const activeSection = useActiveSection()
  const isScrolled = scrollY > 60

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } })
  }

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar__container">
        {/* Logo */}
        <motion.a
          href="#home"
          className="navbar__logo"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
        >
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">Sriram</span>
          <span className="logo-dot">.</span>
          <span className="logo-bracket">/&gt;</span>
        </motion.a>

        {/* Desktop Nav */}
        <ul className="navbar__links">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.name}
              custom={i}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              <a
                href={link.href}
                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              >
                {link.name}
                <span className="nav-link__underline" />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <motion.a
          href="#contact"
          className="navbar__cta btn btn-primary btn-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <span>Let's Talk</span>
        </motion.a>

        {/* Hamburger - mobile only */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mobile-menu__header">
                <span className="mobile-menu__logo">
                  <span className="logo-bracket">&lt;</span>SM<span className="logo-bracket">/&gt;</span>
                </span>
                <button
                  className="mobile-menu__close"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X size={20} />
                </button>
              </div>
              <ul className="mobile-menu__links">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ x: 25, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.08 + i * 0.04, duration: 0.25 }}
                  >
                    <a
                      href={link.href}
                      className={`mobile-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    >
                      <span className="mobile-link__num">0{i + 1}.</span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                className="mobile-menu__footer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.25 }}
              >
                <a
                  href="#contact"
                  className="btn btn-primary mobile-menu__cta-btn"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                >
                  <span>Let's Talk</span>
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
