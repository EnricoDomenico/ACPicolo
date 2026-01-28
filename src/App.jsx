import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion'
import { Users, Headphones, TrendingUp, Award } from 'lucide-react'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-white">
      <Navbar isScrolled={isScrolled} />
      <HeroSection />
      <ServicesSection />
      <DifferentialsSection />
      <TeamSection />
      <Footer />
    </div>
  )
}

// ==================== NAVBAR ====================
function Navbar({ isScrolled }) {
  const scrollToSection = (sectionId) => {
    if (sectionId === 'contato') {
      window.open('https://wa.me/message/3PALZRTCRHR4H1', '_blank')
      return
    }
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navItems = [
    { label: 'Início', id: 'hero' },
    { label: 'História', id: 'team' },
    { label: 'Serviços', id: 'services' },
    { label: 'Contato', id: 'contato' }
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-6">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`w-full max-w-4xl transition-all duration-500 rounded-full border ${
          isScrolled 
            ? 'bg-black/10 backdrop-blur-sm border-white/10' 
            : 'bg-charcoal-900/95 backdrop-blur-md shadow-2xl border-white/10'
        }`}
      >
        <div className="px-6 py-2.5 flex items-center justify-between">
          {/* Logo */}
          <div className="text-white">
            <img 
              src="/logo.png" 
              alt="AC Picolo" 
              className="h-12 w-auto cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('hero')}
            />
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6">
            {navItems.map((item, index) => (
              <NavLink 
                key={index} 
                delay={index * 0.1}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </motion.nav>
    </div>
  )
}

function NavLink({ children, delay, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="text-white text-sm font-medium relative group cursor-pointer bg-transparent border-none"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
    </motion.button>
  )
}

// ==================== HERO SECTION ====================
function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section id="hero" ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-10" />
        <img
          src="/magemdecimaclaraboia.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentElement.style.backgroundColor = '#1a1a1a'
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center pb-20 pt-36">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight text-shadow"
            >
              Advocacia Estratégica para Resultados Reais
            </motion.h1>

            {/* Body Text */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="text-lg text-white/90 mb-12 leading-relaxed"
            >
              Na AC Picolo, oferecemos soluções jurídicas personalizadas com uma abordagem estratégica que prioriza o seu interesse e traz resultados concretos.
            </motion.p>

            {/* CTA Button + Stats Container */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
              {/* CTA Button */}
              <motion.a
                href="https://wa.me/message/3PALZRTCRHR4H1"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
                whileHover={{ scale: 1.05, backgroundColor: '#ffffff' }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white/95 text-charcoal-900 px-8 py-4 rounded-md font-medium text-base transition-all duration-300 hover:shadow-xl whitespace-nowrap"
              >
                Agende uma consulta
              </motion.a>

              {/* Inline Stats */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
                className="flex gap-8 bg-charcoal-900/60 backdrop-blur-md px-8 py-4 rounded-lg border border-white/10"
              >
                <HeroStatItem number={50} suffix="+" label="Anos de experiência" />
                <HeroStatItem number={1200} suffix="+" label="Clientes satisfeitos" delay={0.2} />
                <HeroStatItem number={100} suffix="+" label="Empresas realizadas" delay={0.3} />
                <HeroStatItem number={1500} suffix="+" label="Casos resolvidos" delay={0.4} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ==================== HERO STAT ITEM ====================
function HeroStatItem({ number, suffix, label, delay = 0 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = number / steps
    const stepDuration = duration / steps

    const startDelay = setTimeout(() => {
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= number) {
          setCount(number)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }, delay * 1000)

    return () => clearTimeout(startDelay)
  }, [number, delay])

  return (
    <div className="text-center border-r border-white/10 last:border-r-0 pr-8 last:pr-0">
      <div className="text-3xl font-serif font-bold text-white mb-1">
        {count}{suffix}
      </div>
      <div className="text-xs text-white/70 uppercase tracking-wider font-sans">
        {label}
      </div>
    </div>
  )
}

// ==================== STATS BAR ====================
function StatsBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      className="relative z-30 -mt-12"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-charcoal-900 rounded-2xl shadow-2xl px-12 py-10">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            <StatItem number={50} suffix="+" label="anos de experiência" isInView={isInView} />
            <StatItem number={1200} suffix="+" label="clientes satisfeitos" isInView={isInView} delay={0.2} />
            <StatItem number={1500} suffix="+" label="casos resolvidos" isInView={isInView} delay={0.4} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function StatItem({ number, suffix, label, isInView, delay = 0 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = number / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= number) {
        setCount(number)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isInView, number])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center px-8"
    >
      <div className="text-5xl font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm text-white/70 uppercase tracking-wide">
        {label}
      </div>
    </motion.div>
  )
}

// ==================== SERVICES SECTION ====================
function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    'Consultoria e planejamento jurídico',
    'Assessoria em contratos e negociações',
    'Defesa em processos judiciais',
    'Regularização e compliance empresarial',
    'Mediação e resolução de conflitos'
  ]

  return (
    <section id="services" className="bg-grey-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-5xl font-bold text-charcoal-900 mb-6 leading-tight">
              Como Podemos Ajudar Você
            </h2>
            <p className="text-lg text-charcoal-800/80 leading-relaxed">
              Oferecemos suporte jurídico completo e orientação estratégica em diferentes áreas do direito, para que você tenha sempre a melhor orientação.
            </p>
          </motion.div>

          {/* Right Column - Services List */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="flex items-start gap-3"
              >
                <div className="w-2 h-2 mt-2 bg-charcoal-900 transform rotate-45 flex-shrink-0" />
                <span className="text-lg text-charcoal-800">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ==================== DIFFERENTIALS SECTION ====================
function DifferentialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const differentials = [
    {
      icon: Users,
      title: 'Equipe especializada e multidisciplinar',
      description: ''
    },
    {
      icon: Headphones,
      title: 'Atendimento personalizado e ágil',
      description: ''
    },
    {
      icon: TrendingUp,
      title: 'Foco em resultados concretos',
      description: ''
    },
    {
      icon: Award,
      title: 'Credibilidade e ética garantidas',
      description: ''
    }
  ]

  return (
    <section className="relative bg-charcoal-900 py-24 overflow-hidden">
      {/* Background image do escritório */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/escritorio preto e branco.png" 
          alt="Escritório" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      {/* Dark texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/40 to-charcoal-900/50 z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Headline */}
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-white text-center mb-16"
        >
          Nosso Diferencial
        </motion.h2>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {differentials.map((item, index) => (
            <DifferentialCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="https://wa.me/message/3PALZRTCRHR4H1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: '#f5f5f5' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-charcoal-900 px-10 py-4 rounded-md font-medium text-base transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Agende uma consulta
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

function DifferentialCard({ icon: Icon, title, description, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="text-center"
    >
      {/* Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: 'spring', stiffness: 200 }}
        className="flex justify-center mb-6"
      >
        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
          <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
        </div>
      </motion.div>

      {/* Title */}
      <h3 className="text-white font-semibold text-lg mb-2 leading-tight px-2">
        {title}
      </h3>
      
      {description && (
        <p className="text-white/60 text-sm">
          {description}
        </p>
      )}
    </motion.div>
  )
}

// ==================== TEAM SECTION ====================
function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-150px' })

  return (
    <section id="team" ref={ref} className="relative bg-grey-100 py-24 overflow-hidden">
      {/* Background image aperto */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/aperto.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-25"
        />
      </div>
      {/* Light overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-grey-100/80 to-grey-100/85 z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-0 bg-white shadow-xl overflow-hidden">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-charcoal-900 text-white p-16 flex flex-col justify-center"
          >
            <div className="space-y-6">
              <p className="text-base leading-relaxed">
                Por trás de cada caso, uma equipe comprometida em resultados reais.
              </p>
              <p className="text-base leading-relaxed">
                Na AC Picolo mantemos nossos valores pautados em transparência, ética e um trabalho em equipe que garante soluções jurídicas diferenciadas.
              </p>
              <p className="text-base leading-relaxed">
                Acreditamos que o trabalho em equipe e a transformação contínua através de inovação e dedicação são os pilares que nos diferenciam, tornando-nos referência para clientes que exigem mais.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Team Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative h-full min-h-[500px]"
          >
            <img
              src="/Imagemparabaixo.png"
              alt="Equipe AC Picolo"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ==================== FOOTER ====================
function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <footer ref={ref} className="relative bg-grey-100 py-20 overflow-hidden">
      {/* Background image aperto */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/aperto.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      {/* Light overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-grey-100/40 to-grey-100/50 z-0" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
      >
        {/* Logo */}
        <div className="mb-8 flex flex-col items-center">
          <img 
            src="/logo.png" 
            alt="AIC Picolo" 
            className="h-24 w-auto mb-4"
          />
          <div className="text-sm text-charcoal-800 mt-2 tracking-wide">
            Advogados Associados
          </div>
        </div>

        {/* CTA Button */}
        <motion.a
          href="https://wa.me/message/3PALZRTCRHR4H1"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, backgroundColor: '#1a1a1a' }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-charcoal-900 text-white px-10 py-4 rounded-md font-medium text-base transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Agende uma consulta
        </motion.a>
      </motion.div>
    </footer>
  )
}

export default App
