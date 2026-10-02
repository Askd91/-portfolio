import { motion } from 'framer-motion'
import { FaGraduationCap, FaCertificate } from 'react-icons/fa'

const skillCategories = [
  {
    title: 'Offensive Security',
    skills: [
      'Web App Pen Testing (OWASP Top 10)',
      'Network Pen Testing',
      'API Security Testing',
      'REST / GraphQL authn & authz',
      'Android Pentesting',
      'Vulnerability Assessment',
      'Enumeration & Service Discovery',
      'Exploitation',
      'Privilege Escalation',
      'Lateral Movement',
    ],
  },
  {
    title: 'Analysis & Monitoring',
    skills: [
      'Malware Analysis',
      'APK Analysis',
      'Pcap Analysis',
      'Log Monitoring',
      'SIEM Monitoring',
      'Threat Detection',
      'Incident Response',
      'Phishing Investigation',
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      'Burp Suite',
      'Nmap',
      'Nessus',
      'Kali Linux',
      'FLARE VM',
      'REMnux 7',
      'MobSF',
      'Splunk',
      'Wireshark',
      'Snort',
    ],
  },
  {
    title: 'Network & Systems',
    skills: [
      'Cisco',
      'Palo Alto',
      'FortiGate',
      'Windows Server 2016/2019',
      'BGP & Routing',
      'Network Design & Security',
      'ASP.NET',
      'SQL Server',
      'JavaScript',
    ],
  },
]

const certifications = ['CEH', 'CySA+', 'CCNA', 'MCSA', 'ISO 27001', 'PCNSA', 'AppSec', 'VCA', 'MCP']

const education = [
  { degree: 'MS Cybersecurity', school: 'Webster University, USA', year: '2019' },
  { degree: 'BS Software Engineering', school: 'Beaconhouse National University, PK', year: '2015' },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & <span className="text-gradient">Expertise</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              className="glass-card p-8 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.15, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-gray-700">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-sm text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-8">
          <motion.div
            className="glass-card p-8 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-gray-700 flex items-center gap-3">
              <FaCertificate className="text-accent-blue" /> Certifications
            </h3>
            <div className="flex flex-wrap gap-3">
              {certifications.map((c) => (
                <span
                  key={c}
                  className="px-5 py-2 rounded-full glass border border-accent-blue/30 text-sm font-semibold text-white"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass-card p-8 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-gray-700 flex items-center gap-3">
              <FaGraduationCap className="text-accent-blue" /> Education
            </h3>
            <ul className="space-y-5">
              {education.map((e) => (
                <li key={e.degree} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-white font-semibold">{e.degree}</p>
                    <p className="text-gray-400 text-sm">{e.school}</p>
                  </div>
                  <span className="text-sm text-accent-blue whitespace-nowrap">{e.year}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
