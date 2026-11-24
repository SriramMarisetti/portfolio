import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, MessageSquare, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../Icons/Icons'
import { personalInfo } from '../../data/portfolio'
import './Contact.scss'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: '#4f8ef7',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'sri-ram-marisetti',
    href: personalInfo.linkedin,
    color: '#0A66C2',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'SriramMarisetti',
    href: personalInfo.github,
    color: '#f0f4ff',
  },
]

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }

const validate = (form) => {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required'
  if (!form.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email'
  if (!form.subject.trim()) errors.subject = 'Subject is required'
  if (!form.message.trim()) errors.message = 'Message is required'
  else if (form.message.trim().length < 20) errors.message = 'Message must be at least 20 characters'
  return errors
}

const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (touched[name]) {
      const newErrors = validate({ ...form, [name]: value })
      setErrors(prev => ({ ...prev, [name]: newErrors[name] }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    const newErrors = validate(form)
    setErrors(prev => ({ ...prev, [name]: newErrors[name] }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const allTouched = { name: true, email: true, subject: true, message: true }
    setTouched(allTouched)
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '598e5f1e-d480-46e5-a738-b32ef6c8e1b8'

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          from_name: form.name
        })
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setForm(INITIAL_FORM)
      } else {
        setStatus('error')
        setErrorMessage(data.message || 'Something went wrong while sending your message.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please check your connection or contact me directly via email.')
    }
  }

  const handleReset = () => {
    setForm(INITIAL_FORM)
    setErrors({})
    setTouched({})
    setStatus('idle')
    setErrorMessage('')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__bg-deco" />
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
              <MessageSquare size={12} />
              Contact
            </div>
            <h2 className="section-title">
              Have a project in mind?{' '}
              <span>Let's work together.</span>
            </h2>
            <p className="section-subtitle">
              I'm always interested in connecting with developers, recruiters and businesses
              looking for frontend development opportunities.
            </p>
            <div className="gradient-divider" />
          </motion.div>

          <div className="contact__grid">
            {/* Left: Info */}
            <motion.div className="contact__info" variants={itemVariants}>
              <h3 className="contact__info-heading">Get in touch</h3>
              <p className="contact__info-text">
                Whether you have a project, an opportunity, or just want to say hello — my inbox is always open. I'll get back to you as soon as possible.
              </p>

              <div className="contact__links">
                {contactLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link-card"
                    style={{ '--link-color': link.color }}
                    whileHover={{ x: 6, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  >
                    <div className="contact-link-card__icon">
                      <link.icon size={18} />
                    </div>
                    <div className="contact-link-card__content">
                      <span className="contact-link-card__label">{link.label}</span>
                      <span className="contact-link-card__value">{link.value}</span>
                    </div>
                    <div className="contact-link-card__arrow">→</div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div className="contact__form-wrapper" variants={itemVariants}>
              {status === 'success' ? (
                <motion.div
                  className="contact__info-banner contact__info-banner--success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle2 size={36} className="banner-icon" />
                  <h4>Message Sent Successfully!</h4>
                  <p>
                    Thank you for reaching out! Your message has been sent directly to my inbox, and I'll get back to you as soon as possible.
                  </p>
                  <button className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-flex' }} onClick={handleReset}>
                    Send Another Message
                  </button>
                </motion.div>
              ) : status === 'error' ? (
                <motion.div
                  className="contact__info-banner contact__info-banner--error"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <AlertCircle size={36} className="banner-icon" />
                  <h4>Message Failed to Send</h4>
                  <p>
                    {errorMessage || 'There was an issue sending your message. You can try again or reach out to me directly.'}
                  </p>
                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <button className="btn btn-primary" onClick={() => setStatus('idle')}>
                      Try Again
                    </button>
                    <a href={`mailto:${personalInfo.email}`} className="btn btn-secondary" style={{ display: 'inline-flex' }}>
                      <Mail size={16} />
                      <span>Email Directly</span>
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className={`form-group ${errors.name && touched.name ? 'has-error' : ''}`}>
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Sriram Marisetti"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={status === 'submitting'}
                      />
                      {errors.name && touched.name && (
                        <span className="form-error"><AlertCircle size={12} />{errors.name}</span>
                      )}
                    </div>

                    <div className={`form-group ${errors.email && touched.email ? 'has-error' : ''}`}>
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={status === 'submitting'}
                      />
                      {errors.email && touched.email && (
                        <span className="form-error"><AlertCircle size={12} />{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className={`form-group ${errors.subject && touched.subject ? 'has-error' : ''}`}>
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Project collaboration / Job opportunity / Just saying hi"
                      value={form.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={status === 'submitting'}
                    />
                    {errors.subject && touched.subject && (
                      <span className="form-error"><AlertCircle size={12} />{errors.subject}</span>
                    )}
                  </div>

                  <div className={`form-group ${errors.message && touched.message ? 'has-error' : ''}`}>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={status === 'submitting'}
                    />
                    <span className="form-char-count">{form.message.length} / 1000</span>
                    {errors.message && touched.message && (
                      <span className="form-error"><AlertCircle size={12} />{errors.message}</span>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    className="btn btn-primary contact-submit"
                    disabled={status === 'submitting'}
                    whileHover={status !== 'submitting' ? { scale: 1.02 } : {}}
                    whileTap={status !== 'submitting' ? { scale: 0.98 } : {}}
                  >
                    {status === 'submitting' ? (
                      <><Loader2 size={16} className="spin" /><span>Sending...</span></>
                    ) : (
                      <><Send size={16} /><span>Send Message</span></>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
