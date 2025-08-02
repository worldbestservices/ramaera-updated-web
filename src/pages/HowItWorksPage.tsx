import React from 'react'
import { 
  UserPlus, 
  Users, 
  FileText, 
  MessageSquare, 
  IndianRupee, 
  Building, 
  Factory, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Calendar,
  Award,
  Globe,
  Rocket,
  Sparkles,
  Heart
} from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import EnhancedLogo from '../components/EnhancedLogo'
import EnhLogo from '../components/EnhLogo'
import MagneticButton from '../components/MagneticButton'
import { useNavigate } from 'react-router-dom'

const HowItWorksPage: React.FC = () => {
  const navigate = useNavigate()
  const steps = [
    {
      number: 1,
      icon: UserPlus,
      title: 'Get Invited & Buy Share',
      description: 'You get invited and become a shareholder by buying minimum 1 share of Ramaera',
      details: 'Exclusive access through existing shareholder invitation. Minimum investment ₹500 for lifetime membership.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      number: 2,
      icon: Users,
      title: 'Become Lifetime Shareholder',
      description: 'You become a lifetime shareholder of Ramaera Industries',
      details: 'Permanent Partnership with access to all current and future factory projects.',
      image: 'assets/buy.jpg'
    },
    {
      number: 3,
      icon: FileText,
      title: 'Explore Live Factory Projects',
      description: 'Explore live factory projects in your dashboard',
      details: 'Browse active manufacturing opportunities across multiple industries and locations.',
      image: 'assets/factory.jpg'
    },
    {
      number: 4,
      icon: IndianRupee,
      title: 'Contribute to Projects',
      description: 'Contribute any amount in multiples of the project\'s fixed unit (e.g., ₹500, ₹10,000)',
      details: 'Flexible investment amounts based on your capacity and project requirements.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      number: 5,
      icon: Building,
      title: 'Pvt. Ltd. Company Formed',
      description: 'A new Pvt. Ltd. company is formed for each factory',
      details: 'Legal structure ensures proper governance and transparent operations for each project.',
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      number: 6,
      icon: Factory,
      title: 'Factory Launches',
      description: 'The factory is launched and run by the appointed directors',
      details: 'Professional management with community oversight and Ramaera support systems.',
      image: 'assets/project.jpg'
    },
    {
      number: 7,
      icon: Calendar,
      title: 'Yearly Audit',
      description: 'After yearly audit, profits are distributed',
      details: 'Transparent financial reporting and profit distribution based on actual performance.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      number: 8,
      icon: TrendingUp,
      title: 'Receive Your Profit',
      description: 'You receive your profit based on your share units in that project',
      details: 'Direct profit sharing proportional to your investment in each successful factory.',
      image: 'https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ]

  const profitBreakdown = [
    { percentage: 30, label: 'Factory Operator', description: 'The entrepreneur who manages the factory', color: 'bg-primary-600' },
    { percentage: 55, label: 'Project Investors', description: 'Shareholders who funded this specific project', color: 'bg-accent-500' },
    { percentage: 10, label: 'Marketing Budget', description: 'Community marketing and growth initiatives', color: 'bg-secondary-500' },
    { percentage: 5, label: 'Operations', description: 'Legal, audit, IT, backend operations', color: 'bg-gray-500' }
  ]

  const successMetrics = [
    { label: 'Steps to Success', value: '8', icon: Rocket, image: 'assets/buy.jpg' },
    { label: 'Profit Share', value: '55%', icon: TrendingUp, image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { label: 'Community Members', value: '1000+', icon: Users, image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { label: 'Active Projects', value: '3', icon: Factory, image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section with Background */}
      <section className="bg-gradient-to-br from-primary-600 to-black text-white py-24 relative overflow-hidden" id="hero-section">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Industrial Manufacturing"
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
              <span className="holographic">HOW IT WORK'S?</span>
            </h1>
            <p className="text-xl md:text-3xl text-primary-100 max-w-5xl mx-auto leading-relaxed">
              Your Complete Journey from Shareholder to Factory Co-Owner
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Success Metrics with Images */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 matrix-bg opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection stagger className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <div key={index} className="text-center cyber-card p-8 mobile-optimized relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src={metric.image} 
                      alt={metric.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-10">
                    <Icon className="h-12 w-12 text-cyan-600 mx-auto mb-4 floating-element pulse-glow" />
                    <div className="text-3xl md:text-5xl font-bold text-primary-600 mb-3 golden-accent font-['Orbitron']">
                      {metric.value}
                    </div>
                    <div className="text-gray-400 font-medium">{metric.label}</div>
                  </div>
                </div>
              )
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* Process Steps - Updated with Animated Cards */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">OUR 8-STEP PROCESS</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              From invitation to profit sharing - your complete journey
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="cyber-card h-full p-0 overflow-hidden relative">
                    {/* Step Image Background */}
                    <motion.div 
                      className="h-48 w-full relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                      
                      {/* Step Number Badge */}
                      <motion.div 
                        className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-white to-accent-500 rounded-full flex items-center justify-center text-black font-bold text-xl shadow-neon"
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
                    </motion.div>
                    
                    {/* Step Content */}
                    <div className="p-6">
                      <motion.div 
                        className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-primary-600/20 rounded-full neon-border"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="h-8 w-8 text-primary-400" />
                      </motion.div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 text-center font-['Orbitron']">{step.title}</h3>
                      <p className="text-gray-300 mb-4 text-center">{step.description}</p>
                      <p className="text-gray-400 text-sm text-center">{step.details}</p>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/50">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-white to-accent-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 2, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Profit Distribution */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">HOW PROFITS ARE SHARED</span>
            </h2>
            <p className="text-xl text-gray-300">
              Transparent distribution of factory earnings
            </p>
          </AnimatedSection>
          
          <AnimatedSection className="max-w-4xl mx-auto">
            {/* Visual Breakdown */}
            <div className="cyber-card p-8 mb-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Profit Distribution"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row h-16 rounded-lg overflow-hidden mb-8 neon-border">
                  {profitBreakdown.map((item, index) => (
                    <div
                      key={index}
                      className={`${item.color} flex items-center justify-center text-white font-bold`}
                      style={{ width: `${item.percentage}%` }}
                    >
                      {item.percentage}%
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {profitBreakdown.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-4 h-4 ${item.color} rounded-full flex-shrink-0 mt-1`}></div>
                      <div>
                        <h4 className="font-bold text-white mb-1 font-['Orbitron']">{item.label} ({item.percentage}%)</h4>
                        <p className="text-gray-200 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Example Calculation */}
            <div className="cyber-card p-8 relative overflow-hidden bg-primary-600/10">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Example Calculation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-primary-400 mb-6 text-center font-['Orbitron']">
                  EXAMPLE: ₹1 CRORE FACTORY MONTHLY PROFIT OF ₹10 LAKHS
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center cyber-card-sm p-4">
                    <div className="text-2xl font-bold text-primary-400">₹3L</div>
                    <div className="text-sm text-gray-200">Factory Operator</div>
                  </div>
                  <div className="text-center cyber-card-sm p-4">
                    <div className="text-2xl font-bold text-accent-400">₹5.5L</div>
                    <div className="text-sm text-gray-200">Project Investors</div>
                  </div>
                  <div className="text-center cyber-card-sm p-4">
                    <div className="text-2xl font-bold text-secondary-400">₹1L</div>
                    <div className="text-sm text-gray-200">Marketing Budget</div>
                  </div>
                  <div className="text-center cyber-card-sm p-4">
                    <div className="text-2xl font-bold text-gray-400">₹50K</div>
                    <div className="text-sm text-gray-200">Operations</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Important Disclaimers */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="cyber-card p-8 relative overflow-hidden bg-yellow-600/10 border border-yellow-600/50">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Important Notice"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-8 w-8 text-yellow-400 flex-shrink-0 mt-1 pulse-glow" />
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-400 mb-6 font-['Orbitron']">IMPORTANT</h3>
                    <ul className="space-y-4 text-yellow-300">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span><strong>No guaranteed return.</strong> This is not a scheme.</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span>Profits are distributed only after actual earnings and book closing</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span>If no profit is made, investors wait for next year</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span>This is <strong>pure industrialization</strong>, not financial trading</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section with Background */}
      <section className="py-24 bg-gradient-to-r from-black via-primary-600/10 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Community Building"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-primary-600/20 to-black"></div>
        </div>
        <div className="absolute inset-0 cyber-grid-bg opacity-30 z-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-6xl font-bold mb-8 font-['Orbitron']">
              <span className="holographic">READY TO START YOUR JOURNEY?</span>
            </h2>
            <p className="text-xl mb-12 text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Join thousands of shareholders who are already building India's industrial future
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <MagneticButton  onClick={() => navigate('/shareholder')} className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-secondary-600 to-secondary-500 text-black font-bold rounded-xl hover:from-secondary-500 hover:to-secondary-400 transition-all duration-300 transform hover:scale-110 shadow-golden mobile-optimized">
                <Rocket className="mr-4 h-8 w-8" />
                BECOME A SHAREHOLDER
                <ArrowRight className="ml-4 h-8 w-8" />
              </MagneticButton>
              <button
  onClick={() => {
    navigate('/apply#factory-form');
    // Small delay to ensure the page has loaded before scrolling
    setTimeout(() => {
      const formSection = document.getElementById('factory-form');
      if (formSection) {
        formSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  }}
  className="inline-flex w-auto bg-gradient-to-r from-white to-accent-500 text-black py-3 px-8 rounded-xl hover:from-primary-500 hover:to-accent-400 transition-all duration-300 transform hover:scale-[1.02] font-bold shadow-neon items-center justify-center space-x-2"
>
  <span>APPLY FOR FACTORY</span>
  <ArrowRight className="h-5 w-5" />
</button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default HowItWorksPage