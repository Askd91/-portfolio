import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const links = [
  { icon: FaEnvelope, url: 'mailto:askd05811@gmail.com', label: 'Email Ahmed' },
  { icon: FaPhone, url: 'tel:+923044330054', label: 'Call Ahmed' },
]

const Footer = () => {
  return (
    <footer className="py-12 px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            className="text-xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-gradient">Ahmed Durrani</span>
          </motion.div>

          <div className="flex gap-4">
            {links.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.url}
                aria-label={item.label}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-accent-blue/40 transition-all cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="text-accent-blue" />
              </motion.a>
            ))}
          </div>

          <motion.p
            className="text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            © {new Date().getFullYear()} Ahmed Saud Durrani. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
