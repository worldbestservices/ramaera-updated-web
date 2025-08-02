import React from 'react'
import { Wheat, Map as Soap, ShoppingCart, Zap, Shirt, Heart, GraduationCap, Hammer, FileText, Truck, ArrowRight, CheckCircle, Car, Ticket as Pickaxe, Sparkles, Globe, Rocket } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import EnhancedLogo from '../components/EnhancedLogo'
import EnhLogo from '../components/EnhLogo'
import { useNavigate } from "react-router-dom";

const IndustriesPage: React.FC = () => {
  const navigate = useNavigate();
  const industries = [
    {
      icon: Soap,
      title: 'FMCG & Personal Care',
      description: 'Soap, oil, snacks, shampoo, cleaners, toothpaste, packaged goods',
      example: 'High demand consumer products with steady returns',
      color: 'bg-blue-600/20 text-blue-400',
      borderColor: 'border-blue-600/50',
      image: 'assets/care.jpg'
    },
    {
      icon: Wheat,
      title: 'Food Processing',
      description: 'Spices, atta mills, pulses, cold storage, dairy processing',
      example: 'Live Example: ₹2 Cr Hajipur Spice Factory - Profitable',
      color: 'bg-primary-600/20 text-primary-400',
      borderColor: 'border-primary-600/50',
      image: 'assets/spice2.jpg'
    },
    {
      icon: Heart,
      title: 'Healthcare & Pharma',
      description: 'Generic pharma, rural hospitals, medical equipment',
      example: 'Essential sector with guaranteed demand and social impact',
      color: 'bg-red-600/20 text-red-400',
      borderColor: 'border-red-600/50',
      image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Shirt,
      title: 'Apparel & Textile',
      description: 'Uniforms, regional wear, clothing manufacturing units',
      example: 'Traditional industry with modern manufacturing techniques',
      color: 'bg-pink-600/20 text-pink-400',
      borderColor: 'border-pink-600/50',
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Zap,
      title: 'Electronics & Appliances',
      description: 'LED, small appliances, electronic components assembly',
      example: 'Growing market with technology advancement opportunities',
      color: 'bg-yellow-600/20 text-yellow-400',
      borderColor: 'border-yellow-600/50',
      image: 'assets/electronic.jpg'
    },
    {
      icon: FileText,
      title: 'Packaging & Paper Products',
      description: 'Sustainable packaging, corrugated boxes, office supplies',
      example: 'Eco-friendly solutions for growing e-commerce market',
      color: 'bg-green-600/20 text-green-400',
      borderColor: 'border-green-600/50',
      image: 'assets/packeging.jpg'
    },
    {
      icon: Hammer,
      title: 'Construction Materials',
      description: 'Bricks, pipes, stone crushers, building materials',
      example: 'Supporting India\'s infrastructure development boom',
      color: 'bg-gray-600/20 text-gray-400',
      borderColor: 'border-gray-600/50',
      image: 'assets/cunstruction.jpg'
    },
    {
      icon: GraduationCap,
      title: 'Education & Skill Centers',
      description: 'Community-owned schools, vocational training centers',
      example: 'Building skilled workforce for industrial growth',
      color: 'bg-indigo-600/20 text-indigo-400',
      borderColor: 'border-indigo-600/50',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: ShoppingCart,
      title: 'Retail & Supermarkets',
      description: 'Community supermarkets across Tier 2–3 cities',
      example: 'Live Example: ₹45 Lakh Agra Supermarket - Running',
      color: 'bg-purple-600/20 text-purple-400',
      borderColor: 'border-purple-600/50',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Truck,
      title: 'Logistics & Cold Storage',
      description: 'Warehousing, cold chains, delivery infrastructure',
      example: 'Critical infrastructure for supply chain optimization',
      color: 'bg-orange-600/20 text-orange-400',
      borderColor: 'border-orange-600/50',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Pickaxe,
      title: 'Mining Support',
      description: 'Mining equipment, processing units, support services',
      example: 'Essential support for India\'s mineral extraction industry',
      color: 'bg-amber-600/20 text-amber-400',
      borderColor: 'border-amber-600/50',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Car,
      title: 'Automobile',
      description: 'Auto parts, components, assembly units, service centers',
      example: 'Growing automotive sector with export potential',
      color: 'bg-blue-600/20 text-blue-400',
      borderColor: 'border-blue-600/50',
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ]

  const successMetrics = [
    { label: 'Industries Covered', value: '12+', icon: Globe, image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { label: 'Active Projects', value: '3', icon: Rocket, image: 'assets/project.jpg' },
    { label: 'Jobs Created', value: '100+', icon: Heart, image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { label: 'Total Investment', value: '₹2.95 Cr', icon: Sparkles, image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section with Background */}
      <section className="bg-gradient-to-br from-primary-600 to-black text-white py-24 relative overflow-hidden" id="hero-section">
        <div className="absolute inset-0 z-0">
          <img
            src="assets/agreeculter.jpg"
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
              {/* <Globe className="h-16 w-16 text-primary-600 floating-element pulse-glow" />
              <EnhancedLogo size="lg" variant="pulsing" />
              <Sparkles className="h-12 w-12 text-secondary-400 floating-element" style={{animationDelay: '0.5s'}} />
              <Rocket className="h-14 w-14 text-accent-400 floating-element" style={{animationDelay: '1s'}} /> */}
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-8 font-['Orbitron']">
              <span className="holographic">OUR FACTORY VISION</span>
            </h1>
            <p className="text-xl md:text-3xl text-primary-100 max-w-5xl mx-auto leading-relaxed">
              A Nation of Factories - From Agriculture to Technology
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

      {/* Industries Grid with Enhanced Images */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">OUR TARGET SECTORS</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We welcome factory proposals across every legal and scalable sector
            </p>
          </AnimatedSection>
          <div className="flex justify-center mb-4">
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
  className="inline-flex w-auto bg-gradient-to-r from-primary-600 to-accent-500 text-white py-3 px-8 rounded-xl hover:from-primary-500 hover:to-accent-400 transition-all duration-300 transform hover:scale-[1.02] font-bold shadow-neon items-center justify-center space-x-2"
>
  <span>APPLY FOR FACTORY</span>
  <ArrowRight className="h-5 w-5" />
</button>
</div>
<AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {industries.map((industry, index) => {
    const Icon = industry.icon;
    return (
      <div key={index} className="cyber-card p-0 overflow-hidden card-hover mobile-optimized">
        <div className="gif-container h-48 relative overflow-hidden">
          <img 
            src={industry.image} 
            alt={industry.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        
        <div className="p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className={`p-4 rounded-xl ${industry.color} neon-border`}>
              <Icon className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold text-white font-['Orbitron']">{industry.title}</h3>
          </div>
          
          <p className="text-gray-400 mb-6 leading-relaxed">
            {industry.description}
          </p>
          
          <div className="cyber-card p-4 mb-6 bg-primary-600/5">
            <p className="text-sm text-primary-400 font-medium">
              {industry.example}
            </p>
          </div>
          
          {/* Fixed button implementation */}
         
        </div>
      </div>
      
    )
  })}
         
          </AnimatedSection>
          
        </div>
      </section>

      {/* Open Invitation with Background */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Business Innovation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black"></div>
        </div>
        <div className="absolute inset-0 matrix-bg opacity-10 z-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">BEYOND THESE SECTORS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              These are just examples. We welcome innovative factory proposals across 
              <strong className="text-orange-700"> every legal and scalable sector</strong>. If you have a manufacturing idea 
              that can create jobs and serve communities, we want to hear from you.
            </p>
          </AnimatedSection>
          
          <AnimatedSection className="cyber-card p-12 text-center backdrop-blur-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img 
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Innovation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <div className="flex justify-center items-center space-x-4 mb-8">
              <EnhLogo size="lg" variant="floating" />
                {/* <Sparkles className="h-16 w-16 text-secondary-400 floating-element pulse-glow" />
                <EnhancedLogo size="lg" variant="morphing" />
                <Globe className="h-12 w-12 text-accent-400 floating-element" style={{animationDelay: '0.5s'}} /> */}
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 font-['Orbitron']">
                HAVE A DIFFERENT INDUSTRY IN MIND?
              </h3>
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                From traditional crafts to cutting-edge technology, from local services to export-oriented manufacturing — 
                if it's legal, scalable, and beneficial to society, we're interested.
              </p>
              <button   onClick={() => navigate('/apply')}
                className="inline-flex items-center px-12 py-6 glow-button btn-hover-lift text-xl font-bold mobile-optimized">
                <Rocket className="mr-4 h-8 w-8" />
                PROPOSE YOUR FACTORY
                <ArrowRight className="ml-4 h-8 w-8" />
              </button>
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
              <span className="holographic">WANT TO OPEN A FACTORY IN ANY INDUSTRY?</span>
            </h2>
            <p className="text-xl mb-12 text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Apply now as a shareholder and let our community help you build your dream factory
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
            
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
  className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-secondary-600 to-secondary-500 text-black font-bold rounded-xl hover:from-secondary-500 hover:to-secondary-400 transition-all duration-300 transform hover:scale-110 shadow-golden mobile-optimized"
>
  <span>APPLY FOR FACTORY</span>
  <ArrowRight className="h-5 w-5" />
</button>
              
              <button  onClick={() => navigate('/shareholder')} className="inline-flex items-center px-12 py-6 glow-button btn-hover-lift font-bold mobile-optimized">
                <CheckCircle className="mr-4 h-8 w-8" />
                BECOME SHAREHOLDER
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default IndustriesPage