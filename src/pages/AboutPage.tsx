import React from 'react'
import { Users, Target, Building, TrendingUp, CheckCircle, Award, Heart, Star, Shield, HeartHandshake as Handshake, Sparkles, Globe, Rocket } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import EnhancedLogo from '../components/EnhancedLogo'
import EnhLogo from '../components/EnhLogo'

const AboutPage: React.FC = () => {
  const whoCanJoin = [
    {
      icon: Users,
      title: 'Must be invited by an existing shareholder',
      description: 'Exclusive community access through trusted Partners',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Shield,
      title: 'Buy minimum 1 share of Ramaera',
      description: 'Start your journey Community driven Company',
      image: 'assets/buy.jpg'
    },
    {
      icon: Building,
      title: 'Explore & Invest in any project',
      description: 'From ₹500 to ₹2,00,000 across multiple factories',
      image: 'assets/project.jpg'
    },
    {
      icon: Target,
      title: 'Apply to launch your own factory',
      description: 'Turn your business ideas into community-funded reality',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: TrendingUp,
      title: 'Receive yearly profit distribution',
      description: 'Share in the success of every factory you invest in',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Heart,
      title: 'Pass profits to nominee',
      description: 'Generational wealth through industrial ownership',
      image: 'assets/nomi.jpg'
    }
  ]

  const timeline = [
    {
      year: '2020-2022',
      title: 'Foundation',
      description: 'Formed a community of 22,000 citizens with shared vision',
      icon: Users,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      year: '2023-Now',
      title: 'Launch Phase',
      description: 'Successfully launched our first real factories',
      icon: Building,
      image: 'assets/project.jpg'
    },
    {
      year: '2025 Goal',
      title: 'Scale Up',
      description: '200,000 active shareholders & 1,000 new industries funded',
      icon: Target,
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section with Background */}
      <section className="bg-gradient-to-br from-primary-600 to-black text-white py-24 relative overflow-hidden" id="hero-section">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Business Partnership"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-primary-800/80 to-black/60"></div>
        </div>
        <div className="absolute inset-0 cyber-grid-bg opacity-20 z-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <AnimatedSection className="text-center">
            <div className="flex justify-center items-center space-x-4 mb-8">
              <EnhLogo size="lg" variant="floating" />
              {/* <EnhancedLogo size="lg" variant="pulsing" />
              <Globe className="h-16 w-16 text-primary-600 floating-element pulse-glow" />
              <Sparkles className="h-12 w-12 text-secondary-400 floating-element" style={{animationDelay: '0.5s'}} /> */}
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-8 font-['Orbitron']">
              <span className="holographic">WHO WE ARE</span>
            </h1>
            <p className="text-xl md:text-3xl text-primary-100 max-w-5xl mx-auto leading-relaxed">
              Not a scheme, not a startup, not a crowdfunding site
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Who We Are with Background */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Industrial Manufacturing"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black"></div>
        </div>
        <div className="absolute inset-0 matrix-bg opacity-10 z-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <AnimatedSection className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 font-['Orbitron']">
              <span className="cyber-text">WE ARE RAMAERA INDUSTRIES LTD</span>
            </h2>
            <div className="cyber-card p-12 mb-12 data-stream">
              <p className="text-xl text-primary-400 leading-relaxed mb-8">
                Ramaera is not a scheme, not a startup, not a crowdfunding site. We are a 
                <strong className="text-orange-700"> public limited company owned entirely by the community</strong> — 
                building factories, creating jobs, and distributing profits to real people, not corporations.
              </p>
            </div>
            
            <div className="cyber-card p-12 bg-gradient-to-r from-primary-600/10 to-accent-500/10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="assets/buy.jpg"
                  alt="Factory Operations"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-secondary-400 mb-6 font-['Orbitron']">OUR MISSION</h3>
                <p className="text-xl text-gray-200 leading-relaxed">
                  To turn ordinary Indians into co-owners of extraordinary industries — 
                  building India's future from the grassroots up.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Who Can Join with Enhanced Images */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">WHO CAN JOIN</span>
            </h2>
            <p className="text-xl text-gray-300">
              After becoming a Ramaera shareholder, you can:
            </p>
          </AnimatedSection>
          
          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whoCanJoin.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="cyber-card p-0 overflow-hidden card-hover mobile-optimized">
                  <div className="gif-container h-48 relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="p-4 bg-primary-600/20 rounded-xl neon-border">
                          <Icon className="h-10 w-10 text-cyan-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-4 font-['Orbitron']">{item.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </AnimatedSection>
        </div>
      </section>

     

      {/* Journey Timeline with Enhanced Images */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 matrix-bg opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">OUR JOURNEY</span>
            </h2>
            <p className="text-xl text-gray-300">
              From vision to reality, building India's industrial future
            </p>
          </AnimatedSection>
          
          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timeline.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="text-center group mobile-optimized">
                  <div className="cyber-card p-0 overflow-hidden h-full">
                    <div className="gif-container h-48 relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="p-8">
                      <div className="relative mb-8">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-primary-600 text-white rounded-full group-hover:bg-primary-500 transition-all duration-300 shadow-neon pulse-glow">
                          <Icon className="h-12 w-12" />
                        </div>
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-secondary-500 text-black px-4 py-2 rounded-full text-sm font-bold font-['Orbitron']">
                          {item.year}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 mt-8 font-['Orbitron']">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* Impact & Legacy with Background */}
      <section className="py-24 bg-primary-600/5 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Financial Growth"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-primary-600/10 to-black"></div>
        </div>
        <div className="absolute inset-0 cyber-grid-bg opacity-20 z-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">BUILDING INDIA'S INDUSTRIAL LEGACY</span>
            </h2>
            <p className="text-xl text-gray-300">
              Every factory we build creates lasting impact for generations
            </p>
          </AnimatedSection>
          
          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center cyber-card p-12 mobile-optimized relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Factories"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="text-6xl font-bold text-primary-600 mb-6 golden-accent font-['Orbitron']">10,000+</div>
                <h3 className="text-xl font-semibold text-white mb-4 font-['Orbitron']">Target Factories</h3>
                <p className="text-gray-400">Manufacturing units across every industry and region</p>
              </div>
            </div>
            
            <div className="text-center cyber-card p-12 mobile-optimized relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Community"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="text-6xl font-bold text-accent-800 mb-6 golden-accent font-['Orbitron']">200,000</div>
                <h3 className="text-xl font-semibold text-white mb-4 font-['Orbitron']">Community Members</h3>
                <p className="text-gray-400">Shareholders building India's industrial future together</p>
              </div>
            </div>
            
            <div className="text-center cyber-card p-12 mobile-optimized relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Legacy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="text-6xl font-bold text-secondary-600 mb-6 golden-accent font-['Orbitron']">∞</div>
                <h3 className="text-xl font-semibold text-white mb-4 font-['Orbitron']">Generational Impact</h3>
                <p className="text-gray-400">Wealth and ownership passed down through families</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default AboutPage