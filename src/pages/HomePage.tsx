import React, { useRef, Suspense, useState, useEffect, useCallback } from 'react'

import { useScroll, useTransform } from 'framer-motion'
import { useSpring, animated } from 'react-spring'
import {
  Factory,
  Users,
  Target,
  ShoppingCart,
  Zap,
  Quote,
  Star,
  TrendingUp,
  ArrowRight,
  Shield,
  Rocket,
  Building,
  IndianRupee,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Award,
  Sparkles,
  Globe
} from 'lucide-react'
import { useGSAP } from '../hooks/useGSAP'
import ParallaxSection from '../components/ParallaxSection'
import AnimatedCounter from '../components/AnimatedCounter'
import MagneticButton from '../components/MagneticButton'
// import Logo3D from '../components/Logo3D'
import EnhLogo from '../components/EnhLogo'
// import LoadingFallback from '../components/LoadingFallback'
import AnimatedSection from '../components/AnimatedSection'
import { Progress } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom'

const HomePage: React.FC = () => {
  const navigate = useNavigate()
  const containerRef = useGSAP()
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const impactHighlights = [
    {
      icon: Factory,
      label: 'Spice Factory Launched',
      value: 2.2,
      suffix: ' Cr',
      decimal: true,
      location: 'Hajipur, Bihar',
      color: 'text-white',
      image: 'assets/sliderHeader.webp'
    },
    {
      icon: ShoppingCart,
      label: 'Supermarket Funded',
      value: 45,
      suffix: ' Lakh',
      location: 'Agra, UP',
      color: 'text-accent-400',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Users,
      label: 'Shareholders Growing',
      value: 22000,
      suffix: '+',
      location: 'Toward 2,00,000',
      color: 'text-secondary-400',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Target,
      label: 'Target Factories',
      value: 10000,
      suffix: '+',
      location: '15+ Industries',
      color: 'text-white',
      image: 'assets/factory.jpg'
    },
  ]

  const projects = [
    {
      id: 'project-1',
      name: 'Spice Factory',
      type: 'Food Processing',
      location: 'Hajipur, Bihar',
      amount: '₹2.2 Cr',
      status: 'Profitable',
      statusColor: 'bg-white/20 text-white border border-white/50',
      icon: Building,
      description: 'State-of-the-art spice processing unit serving North India',
      images: [
        'assets/sliderHeader.webp',
        'assets/sp2.webp',
        'assets/sp3.webp'
      ],
      progress: 100
    },
    {
      id: 'project-2',
      name: 'Ramaera Mart',
      type: 'Supermarket',
      location: 'Agra, UP',
      amount: '₹45 Lacs',
      status: 'Running',
      statusColor: 'bg-accent-500/20 text-accent-400 border border-accent-500/50',
      icon: ShoppingCart,
      description: 'Community supermarket serving 2,000+ households weekly',
      images: [
        'assets/mart1.jpg',
        'assets/mart2.jpg',
        'assets/mart3.jpg'
      ],
      progress: 100
    },
    {
      id: 'project-3',
      name: 'Alkline Water Plant',
      type: 'Electrolysis-Based Alkaline Water Plant',
      location: 'Jhansi and Chhapra',
      amount: '₹30 Lacs',
      status: 'Coming Soon',
      statusColor: 'bg-secondary-500/20 text-secondary-400 border border-secondary-500/50',
      icon: Zap,
      description: 'Produces high-pH mineral-enriched water using advanced filtration and ionization for health-conscious consumers',
      images: [
        'assets/water1.jpg',
        'assets/water2.jpg',
        'assets/water3.jpg'
      ],
      progress: 80
    },
  ];


  const steps = [
    {
      number: '1',
      title: 'Get Invited',
      description: 'Receive invitation from existing shareholder',
      icon: Users,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      number: '2',
      title: 'Buy Share',
      description: 'Become lifetime shareholder of Ramaera',
      icon: Star,
      image: 'assets/buy.jpg'
    },
    {
      number: '3',
      title: 'Explore Projects',
      description: 'Browse live factory projects in dashboard',
      icon: Building,
      image: 'assets/project.jpg'
    },
    {
      number: '4',
      title: 'Invest & Earn',
      description: 'Contribute to factories and receive yearly profits',
      icon: TrendingUp,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
  ]

  // React Spring animations
  const heroSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.95)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 150, friction: 20 },
    delay: 300
  })

  const logoSpring = useSpring({
    from: { transform: 'scale(0.8)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
    config: { tension: 200, friction: 25 },
    delay: 200
  })

  return (
    <div ref={containerRef} className="animate-fade-in overflow-x-hidden">
      {/* Enhanced Hero Section */}
      <section ref={heroRef} className="relative bg-black text-white overflow-hidden min-h-[90vh] md:min-h-screen flex items-center" >
        {/* Hero Background Images */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60 z-10"></div>
          <motion.img
            src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Industrial Manufacturing"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}
          />
          <motion.img
            src="https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Factory Operations"
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]) }}
          />
        </div>

        <div className="absolute inset-0 cyber-grid-bg opacity-10 z-5"></div>

        {/* Parallax background elements */}
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "10%"]), opacity }} className="absolute inset-0 z-5">
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-white/5 rounded-full blur-xl md:blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-56 h-56 md:w-80 md:h-80 bg-accent-500/10 rounded-full blur-xl md:blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -30, 0],
              y: [0, 30, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-20 w-full">
          <div className="text-center px-4">
            {/* Enhanced logo showcase */}
            <motion.div
              className="mb-8 md:mb-12 flex justify-center items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <EnhLogo size="lg" variant="floating" className="w-32 h-32 md:w-48 md:h-48" />
            </motion.div>

            <animated.div style={heroSpring}>
              <motion.h1
                className="hero-title text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-8 leading-tight font-['Orbitron']"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.span
                  className="holographic block mb-2 md:mb-4 text-3xl md:text-5xl lg:text-6xl"
                >
                  TURN KNOWLEDGE INTO LEGACY
                </motion.span>
                <motion.span
                  className="block text-xl md:text-3xl lg:text-4xl mt-4 md:mt-6 text-white"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Become a Co-Owner of Real Indian Factories
                </motion.span>
              </motion.h1>
            </animated.div>

            <motion.p
              className="hero-subtitle text-base md:text-lg lg:text-xl xl:text-2xl mb-8 md:mb-12 text-gray-300 max-w-3xl md:max-w-5xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Welcome to <span className="text-orange-700 font-bold">RAMAERA INDUSTRIES LTD</span>, India's first community-owned public limited company.
              Build real factories. Share real profits. Shape India's future — become a <span className="text-white font-bold">RAMAERA SHAREHOLDER</span>.
            </motion.p>

            <motion.div
              className="hero-buttons flex flex-col sm:flex-row gap-3 md:gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <MagneticButton onClick={() => navigate('shareholder')} className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 glow-button btn-hover-lift text-sm md:text-lg font-bold">
                <Shield className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
                BECOME A SHAREHOLDER
                <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
              </MagneticButton>

              <MagneticButton className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-black/80 border border-white/30 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/50 hover:shadow-neon transition-all duration-300">
                <Factory className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
                EXPLORE PROJECTS
              </MagneticButton>
                <a href="/apply">
              <MagneticButton className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-secondary-600 to-secondary-500 text-black font-bold rounded-xl hover:from-secondary-500 hover:to-secondary-400 transition-all duration-300 shadow-golden">
                <Building className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
                LAUNCH YOUR FACTORY
              </MagneticButton>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Quote Section */}
      <ParallaxSection speed={0.1}>
        <section className="py-16 md:py-20 bg-gradient-to-r from-black via-white/5 to-black relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Business Partnership"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black"></div>
          </div>
          <div className="absolute inset-0 cyber-grid-bg opacity-20 z-5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <AnimatedSection>
              <Quote className="h-12 w-12 md:h-16 md:w-16 text-secondary-400 mx-auto mb-6 md:mb-8" />
              <blockquote className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 holographic leading-tight font-['Orbitron']">
                "We are not raising money — we are raising a nation of industrialists."
              </blockquote>
              <p className="text-gray-300 text-base md:text-lg lg:text-xl">
                Building India's industrial future through community ownership
              </p>
            </AnimatedSection>
          </div>
        </section>
      </ParallaxSection>

      {/* Impact Highlights Section */}
      <section className="py-16 md:py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 matrix-bg opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 holographic font-['Orbitron']">
              REAL IMPACT, REAL RESULTS
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-300">
              Factories funded, jobs created, communities empowered
            </p>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {impactHighlights.map((highlight, index) => {
              const Icon = highlight.icon
              const showRupee = index < 2; // Only show ₹ for first two items

              return (
                <motion.div
                  key={index}
                  className="text-center group"
                >
                  <div className="cyber-card p-6 md:p-8 h-full relative overflow-hidden">
                    <motion.div
                      className="mb-4 md:mb-6 h-24 md:h-32 relative overflow-hidden rounded-xl"
                    >
                      <img
                        src={highlight.image}
                        alt={highlight.label}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-black/80 rounded-full mb-4 md:mb-6 border border-white/20"
                    >
                      <Icon className={`h-8 w-8 md:h-10 md:w-10 ${highlight.color}`} />
                    </motion.div>

                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3 golden-accent font-['Orbitron']">
                      {showRupee ? '₹' : ''}
                      {highlight.decimal ?
                        `${highlight.value.toFixed(1)} ${highlight.suffix}` :  // Combine value and suffix for decimal case
                        <AnimatedCounter
                          target={Math.floor(highlight.value)}
                          suffix={highlight.suffix}  // AnimatedCounter will handle suffix for non-decimal
                        />
                      }

                    </div>
                    <div className="text-gray-200 text-sm md:text-base font-medium mb-1 md:mb-2">{highlight.label}</div>
                    <div className="text-gray-400 text-xs md:text-sm">{highlight.location}</div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 holographic font-['Orbitron']">
                YOUR JOURNEY TO FACTORY OWNERSHIP
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto">
                Simple steps to become a factory co-owner and build India's industrial future
              </p>
            </AnimatedSection>

            <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={index}
                    className="text-center group"
                  >
                    <div className="cyber-card p-6 md:p-8 h-full relative overflow-hidden">
                      <motion.div
                        className="mb-4 md:mb-6 h-24 md:h-32 relative overflow-hidden rounded-xl"
                      >
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>

                      <motion.div
                        className="relative mb-6 md:mb-8"
                      >
                        <motion.div
                          className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-white to-accent-500 text-black rounded-full text-xl md:text-2xl font-bold shadow-neon font-['Orbitron']"
                        >
                          {step.number}
                        </motion.div>
                      </motion.div>

                      <div className="mb-4 md:mb-6">
                        <Icon className="h-10 w-10 md:h-12 md:w-12 text-white mx-auto" />
                      </div>

                      <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4 font-['Orbitron']">{step.title}</h3>
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatedSection>
          </div>
      </section>

      {/* Active Projects Section */}
      <section className="py-16 md:py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 matrix-bg opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 holographic font-['Orbitron']">
              LIVE FACTORY PROJECTS
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-300">
              Real factories, real profits, real impact
            </p>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const [currentImageIndex, setCurrentImageIndex] = useState(0);
              const [isHovered, setIsHovered] = useState(false);

              const nextImage = useCallback(() => {
                setCurrentImageIndex((prev) =>
                  prev === project.images.length - 1 ? 0 : prev + 1
                );
              }, [project.images.length]);

              const prevImage = useCallback(() => {
                setCurrentImageIndex((prev) =>
                  prev === 0 ? project.images.length - 1 : prev - 1
                );
              }, [project.images.length]);

              // Auto-play effect
              useEffect(() => {
                if (project.images.length <= 1) return;

                const interval = setInterval(() => {
                  if (!isHovered) {
                    nextImage();
                  }
                }, 4000);

                return () => clearInterval(interval);
              }, [isHovered, nextImage, project.images.length]);

              return (
                <motion.div
                  key={project.id || index}
                  className="cyber-card p-0 overflow-hidden group"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <AnimatePresence mode='wait'>
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        <img
                          src={project.images[currentImageIndex]}
                          alt={project.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Carousel controls */}
                    <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                        className="bg-black/60 rounded-full p-2 hover:bg-black/80 transition-all z-10"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-5 w-5 text-white" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        className="bg-black/60 rounded-full p-2 hover:bg-black/80 transition-all z-10"
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-5 w-5 text-white" />
                      </button>
                    </div>

                    {/* Indicators */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                      {project.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(idx);
                          }}
                          className={`h-1.5 w-1.5 rounded-full transition-all ${currentImageIndex === idx ? 'bg-white w-3' : 'bg-white/50'}`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>

                    {/* Status Badge */}
                    <motion.div
                      className="absolute top-3 right-3 md:top-4 md:right-4 z-10"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <span className={`px-3 py-1 rounded-full text-xs md:text-sm font-bold ${project.statusColor}`}>
                        {project.status}
                      </span>
                    </motion.div>

                    {/* Icon */}
                    <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 z-10">
                      <Icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                    </div>

                    {/* Progress bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 md:h-2 bg-black/50">
                      <motion.div
                        className="h-full bg-gradient-to-r from-white to-accent-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 md:p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white font-['Orbitron']">{project.name}</h3>
                        <p className="text-xs md:text-sm text-gray-400">{project.type}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 md:mb-6 text-xs md:text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-xs md:text-sm">Location:</span>
                        <span className="font-medium text-gray-200 text-xs md:text-sm">{project.location}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-xs md:text-sm">Amount:</span>
                        <span className="font-bold text-white text-sm md:text-base">{project.amount}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-xs md:text-sm">Progress:</span>
                        <span className="font-medium text-accent-400 text-xs md:text-sm">
                          {typeof project.progress === 'string' ? project.progress : `${project.progress}%`}
                        </span>
                      </div>
                    </div>
                    <button onClick={() => window.open("https://kyc1.ramaera.com/auth/signup", "_blank")}
                      className="w-full bg-gradient-to-r from-white to-accent-500 text-black py-2 md:py-3 rounded-lg md:rounded-xl hover:from-gray-200 hover:to-accent-400 transition-all duration-200 font-bold text-xs md:text-sm shadow-neon"
                      style={{ position: 'relative', zIndex: 1000 }}
                    >
                      VIEW DETAILS
                    </button>
                  </div>



                </motion.div>
              );
            })}

          </AnimatedSection>
        </div>
      </section>
      {/* Legacy Goals Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-black via-white/5 to-black relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Family Legacy"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black"></div>
          </div>
          <div className="absolute inset-0 cyber-grid-bg opacity-30 z-5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 holographic font-['Orbitron']">
                BUILDING INDIA'S INDUSTRIAL LEGACY
              </h2>
              <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-12 text-gray-300 max-w-3xl md:max-w-4xl mx-auto leading-relaxed">
                Join our community of industrialists and be part of India's manufacturing revolution.
                Every investment is a brick in building the new industrial India.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
                {[
                  {
                    target: 10000,
                    label: 'Target Factories',
                    suffix: '+', // Added suffix for the + sign
                    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400'
                  },
                  {
                    target: 500,
                    label: 'Minimum Contribution by Shareholders',
                    prefix: '₹',
                    image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400'
                  },
                  {
                    target: 200000,
                    label: 'Target Community',
                    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="cyber-card p-4 md:p-6 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                      <img
                        src={item.image}
                        alt={item.label}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative z-10">
                      <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 golden-accent font-['Orbitron']">
                        {item.prefix || ''}
                        <AnimatedCounter
                          target={item.target}
                          suffix={item.suffix || ''} // Pass suffix to AnimatedCounter
                        />
                      </div>
                      <div className="text-gray-300 font-medium text-sm md:text-base">{item.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <a href="https://kyc1.ramaera.com/auth/login" target="_blank" rel="noopener noreferrer">
                <MagneticButton className="inline-flex items-center px-8 py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 glow-button btn-hover-lift text-base md:text-lg lg:text-xl font-bold">
                  <Rocket className="mr-3 md:mr-4 h-6 w-6 md:h-7 md:w-7" />
                  GET STARTED TODAY
                  <ArrowRight className="ml-3 md:ml-4 h-6 w-6 md:h-7 md:w-7" />
                </MagneticButton>
              </a>
            </AnimatedSection>
          </div>
      </section>
    </div>
  )
}

export default HomePage



