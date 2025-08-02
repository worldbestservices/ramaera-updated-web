import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  UserPlus, 
  Shield, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  Award,
  Target,
  IndianRupee,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Heart,
  FileText,
  Rocket,
  Quote
} from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import EnhancedLogo from '../components/EnhancedLogo'
import EnhLogo from '../components/EnhLogo'
import MagneticButton from '../components/MagneticButton'
import { useNavigate } from 'react-router-dom'

const JoinPage: React.FC = () => {
  const navigate = useNavigate()
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  };

  const benefits = [
    {
      icon: Shield,
      title: 'Co-own Real Industries',
      description: 'Become a part-owner of actual manufacturing units, not just paper investments',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: CheckCircle,
      title: 'No Risk of Fraud',
      description: 'Legal, regulated, and community-audited investments with full transparency',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Target,
      title: 'Lifetime Access',
      description: 'One share gives you lifetime access to invest in unlimited future projects',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: TrendingUp,
      title: 'Real Profit from Real Factories',
      description: 'Earn genuine returns from profitable manufacturing operations',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]

  const steps = [
    {
      number: 1,
      title: 'Get Invited',
      description: 'Receive invitation from existing shareholder',
      icon: Users,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      number: 2,
      title: 'Buy Share',
      description: 'Purchase minimum 1 share of Ramaera',
      icon: IndianRupee,
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      number: 3,
      title: 'Complete KYC',
      description: 'Verify your identity and documents',
      icon: Shield,
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      number: 4,
      title: 'Access Dashboard',
      description: 'Get access to member dashboard and projects',
      icon: Target,
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]

  const shareholdingTerms = [
    {
      id: 'ownership',
      title: 'Share Ownership',
      icon: Shield,
      content: [
        'Each Ramaera share costs ₹500(Flexible)',
        'Shares are non-tradable until IPO',
        'Once Ramaera is listed, an IPO will be conducted — increasing liquidity and valuation',
        'Lifetime Partership with unlimited project access'
      ]
    },
    {
      id: 'investment',
      title: 'Factory Investment Terms',
      icon: FileText,
      content: [
        'Shareholders can invest in multiple factory projects (e.g., 100+)',
        'All investments are non-refundable',
        'This is not a financial scheme, it\'s pure industrialization',
        'Only shareholders can participate in factory funding'
      ]
    },
    {
      id: 'profit',
      title: 'Profit & Risk Policy',
      icon: TrendingUp,
      content: [
        'Profit is not guaranteed in any project',
        'If a shareholder invests in 100 factories: Even if 20 fail, the remaining 80% successful ones will yield yearly profits',
        'Profit is distributed only if the factory earns it',
        'Distribution is annual, after book closing and auditing — not monthly'
      ]
    },
    {
      id: 'legacy',
      title: 'Generational Ownership',
      icon: Heart,
      content: [
        'If a shareholder passes away, profits and rights go to their nominee',
        'This is not just investment—it\'s family legacy through co-owned industries',
        'Shares can be transferred to family members',
        'Multi-generational wealth building through real assets'
      ]
    }
  ]

  const faqs = [
    {
      question: 'What makes Ramaera different from other investment platforms?',
      answer: 'Ramaera is not an investment platform - we are a community-owned public limited company. Only shareholders can participate, and we build real factories, not financial products.'
    },
    {
      question: 'How do I get invited to join Ramaera?',
      answer: 'You need an invitation from an existing shareholder. This ensures our community remains trusted and aligned with our values.'
    },
    {
      question: 'What is the minimum investment required?',
      answer: 'The minimum is  for 1 share, which gives you lifetime partnership and access to all future projects.'
    },
    {
      question: 'How are profits distributed?',
      answer: 'Profits are distributed transparently: 30% to production partner, 55% to project investors, 10% for marketing, and 5% for operations.'
    },
    {
      question: 'Can I sell my shares?',
      answer: 'Shares are non-tradable until IPO. After IPO, shares will have liquidity and can be traded on stock exchanges.but if you shell the share you will be become not part of Ramaera not receive any benefit of factory.',
    }
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section with Background */}
      <section className="bg-gradient-to-br from-primary-600 to-black text-white py-24 relative overflow-hidden" id="hero-section">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Community Building"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-primary-600/20 to-black/60"></div>
        </div>
        <div className="absolute inset-0 cyber-grid-bg opacity-20 z-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <AnimatedSection className="text-center">
            <div className="flex justify-center items-center space-x-4 mb-8">
              <EnhLogo size="lg" variant="floating" />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-8 font-['Orbitron']">
              <span className="holographic">JOIN RAMAERA COMMUNITY</span>
            </h1>
            <p className="text-xl md:text-3xl text-primary-100 max-w-5xl mx-auto leading-relaxed">
              Become a Shareholder and Co-Owner in India's Industrial Revolution
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary-200 mt-6">
              <Star className="h-6 w-6 text-yellow-400" />
              <span>22,000+ Members Already Building Together</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Legacy Message with Background */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Family Legacy"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black"></div>
        </div>
        <div className="absolute inset-0 cyber-grid-bg opacity-20 z-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-['Orbitron']">
              <span className="cyber-text">THIS IS NOT TRADING. THIS IS TRANSFORMATION.</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                When you invest in a Ramaera factory, you're not chasing a short-term scheme —
                You're <strong className="text-white">owning real industry</strong>, <strong className="text-white">creating real jobs</strong>, and <strong className="text-white">leaving a legacy</strong> for your family.
              </p>
              <p className="text-2xl font-semibold text-secondary-400">
                In the world of Ramaera, common men become industrialists — forever.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Join Section with Images */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">WHY JOIN RAMAERA?</span>
            </h2>
            <p className="text-xl text-gray-300">
              Unique benefits that traditional investments can't offer
            </p>
          </AnimatedSection>
          
          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="cyber-card p-8 relative overflow-hidden h-full">
                    <div className="absolute inset-0 opacity-20">
                      <img 
                        src={benefit.image} 
                        alt={benefit.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-start space-x-4">
                        <motion.div 
                          className="flex-shrink-0"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="p-3 bg-primary-600/20 rounded-lg neon-border">
                            <Icon className="h-8 w-8 text-primary-400" />
                          </div>
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-3 font-['Orbitron']">{benefit.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* How to Join Steps with Images */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">HOW TO JOIN</span>
            </h2>
            <p className="text-xl text-gray-300">
              Simple steps to become a Ramaera shareholder
            </p>
          </AnimatedSection>
          
          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div className="cyber-card p-6 relative overflow-hidden h-full">
                    <div className="absolute inset-0 opacity-20">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative z-10">
                      <div className="relative mb-16">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden neon-border">
                          <img 
                            src={step.image} 
                            alt={step.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <motion.div 
                          className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-white to-accent-500 text-black rounded-full text-2xl font-bold absolute top-16 left-1/2 transform -translate-x-1/2 border-4 border-white shadow-neon"
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {step.number}
                        </motion.div>
                        {index < steps.length - 1 && (
                          <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-700 -translate-y-0.5"></div>
                        )}
                      </div>
                      
                      <motion.div 
                        className="mb-4"
                        animate={{
                          y: [0, -5, 0],
                          rotate: [0, 3, -3, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5
                        }}
                      >
                        <Icon className="h-12 w-12 text-primary-400 mx-auto" />
                      </motion.div>
                      
                      <h3 className="text-lg font-bold text-white mb-2 font-['Orbitron']">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* Community Stats with Background */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">JOIN A THRIVING COMMUNITY</span>
            </h2>
            <p className="text-xl text-gray-300">
              Be part of India's largest community of industrial investors
            </p>
          </AnimatedSection>
          
          <AnimatedSection stagger className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center cyber-card p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Community"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-3 golden-accent font-['Orbitron']">
                  22,000+
                </div>
                <div className="text-gray-400">Active Members</div>
              </div>
            </div>
            <div className="text-center cyber-card p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Investment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-3 golden-accent font-['Orbitron']">
                  ₹2.95 Cr
                </div>
                <div className="text-gray-400">Total Invested</div>
              </div>
            </div>
            <div className="text-center cyber-card p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Factories"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-bold text-secondary-400 mb-3 golden-accent font-['Orbitron']">
                  2
                </div>
                <div className="text-gray-400">Factories Running</div>
              </div>
            </div>
            <div className="text-center cyber-card p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Returns"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-3 golden-accent font-['Orbitron']">
                  10,000+
                </div>
                <div className="text-gray-400">Our Vision</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Shareholding Terms & Conditions */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">
              Shareholding Terms & Conditions
            </h2>
            <p className="text-xl text-gray-300">
              Important information about share ownership and investment terms
            </p>
          </AnimatedSection>
          
          <AnimatedSection className="max-w-4xl mx-auto space-y-4">
            {shareholdingTerms.map((term) => {
              const Icon = term.icon
              const isExpanded = expandedSection === term.id
              
              return (
                <div key={term.id} className="bg-black/60 border border-gray-200 rounded-lg shadow-sm">
                  <button
                    onClick={() => toggleSection(term.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-black/40 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="h-6 w-6 text-primary-500" />
                      <h3 className="text-lg font-semibold text-gray-200">{term.title}</h3>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-gray-300" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-300" />
                    )}
                  </button>
                  
                  {isExpanded && (
                    <div className="px-6 pb-4">
                      <ul className="space-y-3">
                        {term.content.map((item, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-accent-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-400">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </AnimatedSection>
          
          
          {/* Risk Warning */}
          <AnimatedSection className="mt-8 max-w-4xl mx-auto">
            <div className="cyber-card p-6 relative overflow-hidden bg-yellow-600/10 border border-yellow-600/50">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Risk Warning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-400 flex-shrink-0 pulse-glow" />
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-400 mb-2 font-['Orbitron']">IMPORTANT RISK DISCLOSURE</h4>
                    <p className="text-yellow-300 leading-relaxed">
                      This is <strong>not a financial scheme</strong>, it's <strong>pure industrialization</strong>. 
                      Profit is not guaranteed in any project. All investments are non-refundable. 
                      Please invest only what you can afford and understand the risks involved in industrial ventures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">FREQUENTLY ASKED QUESTIONS</span>
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about joining Ramaera
            </p>
          </AnimatedSection>
          
          <AnimatedSection stagger className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="cyber-card p-6 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400" 
                      alt="FAQ"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold text-white mb-3 font-['Orbitron']">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>
      {/* CTA Section with Background */}
      <section className="py-24 bg-gradient-to-r from-black via-primary-600/10 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Partnership Success"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-primary-600/20 to-black"></div>
        </div>
        <div className="absolute inset-0 cyber-grid-bg opacity-30 z-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-6xl font-bold mb-8 font-['Orbitron']">
              <span className="holographic">READY TO BUILD INDIA TOGETHER?</span>
            </h2>
            <p className="text-xl mb-12 text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Join our community of industrialists and be part of India's manufacturing revolution
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://kyc1.ramaera.com/auth/login" target="_blank" rel="noopener noreferrer">
  <MagneticButton className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-secondary-600 to-secondary-500 md:px-10 md:py-5 lg:px-12 lg:py-6 glow-button btn-hover-lift text-base md:text-lg lg:text-xl font-bold">
    <motion.div
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    >
      <Rocket className="mr-3 md:mr-4 h-6 w-6 md:h-7 md:w-7" />
    </motion.div>
    GET STARTED TODAY
    <motion.div
      animate={{ x: [0, 8, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <ArrowRight className="ml-3 md:ml-4 h-6 w-6 md:h-7 md:w-7" />
    </motion.div>
  </MagneticButton>
</a>
              <MagneticButton  onClick={() => navigate('/contact')} className="inline-flex items-center px-12 py-6 glow-button btn-hover-lift font-bold mobile-optimized">
                <Users className="mr-4 h-8 w-8" />
                CONTACT US
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default JoinPage