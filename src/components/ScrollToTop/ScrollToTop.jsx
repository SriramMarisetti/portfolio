import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useScrollY } from '../../hooks/usePortfolio'
import './ScrollToTop.scss'

const ScrollToTop = () => {
  const scrollY = useScrollY()
  const visible = scrollY > 400

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="scroll-to-top"
          onClick={scrollTop}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
          <div className="scroll-to-top__progress">
            <svg viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="16" />
              <circle
                cx="18"
                cy="18"
                r="16"
                strokeDasharray={`${(scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100} 100`}
              />
            </svg>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
