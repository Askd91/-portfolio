import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa'

const EMAIL = 'askd05811@gmail.com'
const PHONE_DISPLAY = '+92 304 4330054'
const PHONE_LINK = '+923044330054'

const inputClass =
  'w-full px-6 py-4 rounded-xl bg-secondary/50 border border-gray-700 text-white placeholder-gray-500 focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/20 transition-all'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // No backend: opens the visitor's mail app with the message pre-filled.
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Portfolio message from ${formData.name}`
    const body = `${formData.message}\n\n— ${formData.name} (${formData.email})`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
    setTimeout(() => setSent(false), 6000)
  }

  const details = [
    { icon: FaEnvelope, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: FaPhone, label: 'Phone', value: PHONE_DISPLAY, href: `tel:${PHONE_LINK}` },
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In <span className="text-gradient">Touch</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Let's Talk Security
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Reach out about research collaboration, security assessments, or vulnerability reports.
              </p>
            </div>

            <div className="space-y-6">
              {details.map((d) => (
                <a key={d.label} href={d.href} className="flex items-center gap-4 group w-fit">
                  <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors">
                    <d.icon className="text-accent-blue text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{d.label}</p>
                    <p className="text-white font-medium">{d.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass-card p-8 lg:p-10 rounded-3xl space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">Name</label>
              <input id="name" type="text" name="name" value={formData.name} onChange={handleChange}
                required className={inputClass} placeholder="Your name" />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">Email</label>
              <input id="email" type="email" name="email" value={formData.email} onChange={handleChange}
                required className={inputClass} placeholder="you@example.com" />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                required rows="5" className={`${inputClass} resize-none`}
                placeholder="What would you like to discuss?" />
            </div>

            <motion.button
              type="submit"
              className="w-full glow-button px-8 py-4 rounded-xl text-white font-semibold text-lg flex items-center justify-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
              <FaPaperPlane />
            </motion.button>

            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-center font-medium"
              >
                Your email app should open with the message ready to send.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
