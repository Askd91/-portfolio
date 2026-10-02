import { motion } from 'framer-motion'
import { FaRobot, FaUserShield, FaFlask, FaCheckCircle } from 'react-icons/fa'

const directions = [
  {
    icon: FaRobot,
    title: 'Multi-agent AI safety, trust & security',
    intro:
      'Agents that act for different people and organizations create new trust boundaries. I come at this as a penetration tester: assume each agent can be tricked, then test what the whole system does.',
    questions: [
      'How do delegated credentials and tool access get abused when agents call other agents?',
      'How do we evaluate safety across a whole multi-agent system, not one model in isolation?',
      'How do we detect and reduce risk while keeping agents useful?',
    ],
  },
  {
    icon: FaUserShield,
    title: 'Privacy-preserving AI for healthcare & finance',
    intro:
      'Hospitals and banks need AI that works across organizations without exposing patient or customer records. My interest is the security assurance side: what can be verified, and what an attacker could still learn.',
    questions: [
      'What leaks in private inference and retrieval, and how do we test for it?',
      'How can institutions share insight across organizations while records stay confidential?',
    ],
  },
]

const evidence = [
  'Authorization and authentication testing of REST/GraphQL APIs, the same surface agents use to act on tools',
  'VAPT of 10+ PSCA Safe Cities and validation of web vulnerabilities across national, private-sector, and provincial organizations',
  'Reproducible PoCs and written reports, then follow-through on remediation until closure',
  'Malware analysis (FLARE VM, REMnux 7) and APK analysis (MobSF) for adversary behavior',
  'SIEM, log, DNS, email, and Pcap analysis for detection work',
  'MS Cybersecurity (Webster University); CEH, CySA+, ISO 27001, and more',
]

const Research = () => (
  <section id="research" className="py-20 lg:py-32 px-6 lg:px-8">
    <div className="max-w-[1400px] mx-auto">
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Research <span className="text-gradient">Interests</span>
      </motion.h2>
      <motion.p
        className="text-gray-400 text-lg text-center max-w-3xl mx-auto mb-16 lg:mb-20 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      >
        I'm applying for a PhD in multi-agent AI safety, security, and privacy. My background is
        offensive security, and I want to apply it to systems where AI agents make decisions and
        take actions on people's behalf.
      </motion.p>

      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
        {directions.map((d, i) => (
          <motion.div
            key={d.title}
            className="glass-card p-8 lg:p-10 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <div className="w-14 h-14 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-6">
              <d.icon className="text-3xl text-accent-blue" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{d.title}</h3>
            <p className="text-gray-300 leading-relaxed mb-6">{d.intro}</p>
            <p className="text-sm font-semibold text-accent-blue mb-3">Questions I want to work on</p>
            <ul className="space-y-3">
              {d.questions.map((q) => (
                <li key={q} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                  <span className="text-accent-blue mt-1">•</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="glass-card p-8 lg:p-10 rounded-2xl mt-6 lg:mt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-gray-700 flex items-center gap-3">
          <FaFlask className="text-accent-blue" /> Foundation in computer security
        </h3>
        <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4">
          {evidence.map((e) => (
            <li key={e} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
              <FaCheckCircle className="text-accent-blue mt-0.5 shrink-0" />
              <span>{e}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
)

export default Research
