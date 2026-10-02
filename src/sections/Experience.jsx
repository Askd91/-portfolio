import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'Penetration Testing Security Analyst',
      company: 'National Cybersecurity Response Team (NCert)',
      date: 'Jul 2025 – Present',
      description:
        'Validates and assesses web vulnerabilities affecting national, private-sector, and provincial organizations across Pakistan, and coordinates remediation through to closure.',
      responsibilities: [
        'Conducted VAPT assessments of over 10 PSCA Safe Cities, assessing critical infrastructure security',
        'Run vulnerability assessments across web, network, and mobile environments',
        'Perform malware analysis in FLARE VM and REMnux 7; APK assessment with MobSF; Android penetration testing',
        'Prepare detailed PoCs, reports, and remediation recommendations',
        'Monitor remediation with affected organizations and issue official certificates of recognition to reporters once vulnerabilities are closed',
        'Receive, analyze, and escalate cybersecurity threats, incidents, and adversarial activity to the concerned authorities',
      ],
      technologies: ['Burp Suite', 'Nmap', 'MobSF', 'FLARE VM', 'REMnux 7', 'Custom Scripts'],
    },
    {
      title: 'Cyber Security Analyst',
      company: 'SkillGear',
      date: 'Apr 2023 – Jul 2025',
      description:
        'Secured enterprise infrastructure and kept network security and audit documentation current.',
      responsibilities: [
        'Secured firewalls, routers, and Windows Server 2016/2019',
        'Configured Cisco and FortiGate firewalls and deployed Fortinet firewalls in secure network designs',
        'Ran internal and external scans with Nessus and maintained audit documentation',
        'Improved network efficiency by ~45% through routing and BGP optimization',
      ],
      technologies: ['Nessus', 'Cisco', 'FortiGate', 'BGP', 'Windows Server'],
    },
    {
      title: 'Cyber Security Engineer',
      company: 'Greenray Solutions',
      date: 'Dec 2017 – Mar 2023',
      description:
        'Monitored and investigated threats, and ran vulnerability assessments across the environment.',
      responsibilities: [
        'Performed SIEM monitoring, threat detection, and log analysis with Splunk and Snort',
        'Executed vulnerability assessments with Nessus and Nmap',
        'Investigated phishing campaigns and malicious activity',
        'Analyzed network traffic, DNS, firewall, and email logs',
      ],
      technologies: ['Splunk', 'Snort', 'Nessus', 'Nmap', 'Log Analysis'],
    },
    {
      title: 'Associate Software Engineer',
      company: 'Dove Pharma Co',
      date: 'Feb 2016 – Jan 2017',
      description:
        'Started in software engineering, building business applications and supporting their users.',
      responsibilities: [
        'Developed ASP.NET applications and SQL modules',
        'Trained users and improved workflows',
        'Performed system analysis and recommended enhancements',
      ],
      technologies: ['ASP.NET', 'SQL Server'],
    },
  ]

  return (
    <section id="experience" className="py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Work <span className="text-gradient">Experience</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-cyan to-accent-purple transform md:-translate-x-1/2" />

          <div className="space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent-blue rounded-full transform -translate-x-1/2 mt-6 z-10 shadow-glow">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-accent-blue"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.8, 0, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
                  <motion.div
                    className="glass-card p-6 lg:p-8 rounded-2xl"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: '0 0 40px rgba(59, 130, 246, 0.2)',
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-accent-blue font-semibold text-lg">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-sm text-gray-400 whitespace-nowrap ml-4">
                        {exp.date}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                          <span className="text-accent-blue mt-1.5">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-xs text-accent-blue"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
