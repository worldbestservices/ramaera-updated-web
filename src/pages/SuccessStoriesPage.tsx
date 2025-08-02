import React from 'react'
import { 
  MapPin, 
  IndianRupee, 
  Users, 
  Briefcase, 
  TrendingUp, 
  Calendar,
  Award,
  Target,
  CheckCircle,
  Factory,
  ShoppingCart,
  Zap,
  Rocket,
  Quote
} from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import EnhancedLogo from '../components/EnhancedLogo'
import EnhLogo from '../components/EnhLogo'
import MagneticButton from '../components/MagneticButton'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useNavigate } from "react-router-dom";


const SuccessStoriesPage: React.FC = () => {
  const navigate = useNavigate();
  const successStories = [
    {
      title: 'Hajipur Spice Factory',
      location: 'Bihar',
      amount: '₹2.2 Crore',
      investors: '4,000+',
      jobs: '60+',
      timeline: 'Fully operational and profitable',
      status: 'Profitable',
      description: 'State-of-the-art spice processing unit serving North India',
      highlights: [
        'Modern processing equipment installed',
        'Quality certifications obtained',
        'Distribution network established across North India',
        'Monthly profit sharing started for all investors',
        'Local employment opportunities created'
      ],
      image: 'assets/sliderHeader.webp',
      icon: Factory
    },
    {
      title: 'Ramaera Mart',
      location: 'Agra, UP',
      amount: '₹45 Lacs',
      investors: '1,800+',
      jobs: '20+',
      timeline: 'Local retail chain launched',
      status: 'Running',
      description: 'Community supermarket serving local families',
      highlights: [
        'Prime location secured in Agra',
        'Local supplier partnerships established',
        'Digital payment integration completed',
        '20+ local families employed',
        'Customer loyalty program launched'
      ],
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: ShoppingCart
    }
  ]

  const upcomingProjects = [
    {
      title: 'LED Plant',
      location: 'Gujarat',
      amount: '₹1.5 Crore',
      status: 'Coming Soon',
      progress: 75,
      description: 'Modern LED manufacturing facility for growing lighting market',
      icon: Zap,
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Garment Unit',
      location: 'Kolkata',
      amount: '₹1.2 Crore',
      status: 'Coming Soon',
      progress: 40,
      description: 'Textile manufacturing unit for export market',
      icon: Factory,
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Flour Mill',
      location: 'Punjab',
      amount: '₹80 Lacs',
      status: 'Coming Soon',
      progress: 25,
      description: 'Automated flour mill serving agricultural belt',
      icon: Factory,
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Alkaline Water Plant',
      location: 'Jhanshi and Chhapra',
      amount: '₹30 Lacs',
      status: 'Coming Soon',
      progress: 'On Progress',
      description: 'Electrolysis-based water purification plant',
      icon: Factory,
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Frozen Foods',
      location: 'Kashipur Uttrakhand',
      amount: '₹10 Lacs',
      status: 'Coming Soon',
      progress: 'On Progress',
      description: 'Ready-to-Eat Frozen Meal Factory',
      icon: Factory,
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ]

  const impactMetrics = [
    { 
      icon: IndianRupee, 
      label: 'Total Investment', 
      value: '₹2.95 Cr', 
      color: 'text-primary-400',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    { 
      icon: Briefcase, 
      label: 'Jobs Created', 
      value: '80+', 
      color: 'text-accent-400',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    { 
      icon: Users, 
      label: 'Investors Benefited', 
      value: '5,800+', 
      color: 'text-secondary-400',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    { 
      icon: TrendingUp, 
      label: 'Projects Running', 
      value: '2', 
      color: 'text-green-400',
      image: 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section with Background */}
      <section className="bg-gradient-to-br from-primary-600 to-black text-white py-24 relative overflow-hidden" id="hero-section">
        <div className="absolute inset-0 z-0">
          <img
            src="assets/project.jpg"
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
              <span className="holographic">REAL PROJECTS WE'VE LAUNCHED</span>
            </h1>
            <p className="text-xl md:text-3xl text-primary-100 max-w-5xl mx-auto leading-relaxed">
              Factories Funded, Dreams Built, Communities Empowered
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 matrix-bg opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection stagger className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="text-center group"
                >
                  <div className="cyber-card p-8 h-full relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <img 
                        src={metric.image} 
                        alt={metric.label}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative z-10">
                      <motion.div 
                        className="inline-flex items-center justify-center w-16 h-16 bg-black/80 rounded-full mb-4 mx-auto group-hover:bg-white/10 transition-all duration-300 pulse-glow border border-white/20"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className={`h-8 w-8 ${metric.color}`} />
                      </motion.div>
                      <div className="text-3xl md:text-5xl font-bold text-white mb-3 golden-accent font-['Orbitron']">
                        {metric.value}
                      </div>
                      <div className="text-gray-400 font-medium">{metric.label}</div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">OUR SUCCESS STORIES</span>
            </h2>
            <p className="text-xl text-gray-300">
              Real factories, real profits, real impact on communities
            </p>
          </AnimatedSection>
          
          <div className="space-y-12">
            {successStories.map((story, index) => {
              const Icon = story.icon
              return (
                <AnimatedSection key={index} delay={index * 0.2}>
                  <motion.div 
                    className="cyber-card overflow-hidden"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Image */}
                      <motion.div 
                        className="relative h-64 lg:h-auto"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src={story.image} 
                          alt={story.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-neon">
                            {story.status}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="bg-black/80 p-3 rounded-full neon-border">
                            <Icon className="h-6 w-6 text-primary-400" />
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Content */}
                      <div className="p-6 md:p-8">
                        <h3 className="text-2xl font-bold text-white mb-2 font-['Orbitron']">{story.title}</h3>
                        <p className="text-gray-300 mb-6">{story.description}</p>
                        
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-5 w-5 text-gray-400" />
                            <span className="text-gray-300">{story.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <IndianRupee className="h-5 w-5 text-gray-400" />
                            <span className="text-gray-300">{story.amount}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-5 w-5 text-gray-400" />
                            <span className="text-gray-300">{story.investors} investors</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Briefcase className="h-5 w-5 text-gray-400" />
                            <span className="text-gray-300">{story.jobs} jobs</span>
                          </div>
                          <div className="flex items-center space-x-2 col-span-2">
                            <Calendar className="h-5 w-5 text-gray-400" />
                            <span className="text-gray-300">{story.timeline}</span>
                          </div>
                        </div>
                        
                        {/* Highlights */}
                        <div>
                          <h4 className="font-semibold text-white mb-3">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {story.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <CheckCircle className="h-5 w-5 text-accent-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-400">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Coming Soon Projects */}
      <section className="py-24 bg-black relative overflow-hidden">
  <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <AnimatedSection className="text-center mb-20">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
        <span className="cyber-text">COMING SOON</span>
      </h2>
      <p className="text-xl text-gray-300">
        Next wave of factories in development
      </p>
    </AnimatedSection>
    
    <AnimatedSection stagger>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="py-10 px-2"
      >
        {upcomingProjects.map((project, index) => {
          const Icon = project.icon
          return (
            <SwiperSlide key={index}>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="cyber-card p-6 relative overflow-hidden h-full mx-4">
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary-600/20 rounded-lg neon-border">
                          <Icon className="h-6 w-6 text-primary-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white font-['Orbitron']">{project.title}</h3>
                      </div>
                      <span className="bg-secondary-500/20 text-secondary-400 px-3 py-1 rounded-full text-sm font-medium border border-secondary-500/50">
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Location:</span>
                        <span className="font-medium text-white">{project.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Amount:</span>
                        <span className="font-medium text-primary-400">{project.amount}</span>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Progress</span>
                        <span className="font-medium text-white">
                          {typeof project.progress === 'number' ? `${project.progress}%` : project.progress}
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        {typeof project.progress === 'number' && (
                          <motion.div 
                            className="bg-gradient-to-r from-white to-accent-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${project.progress}%` }}
                            transition={{ duration: 2, delay: index * 0.2 }}
                            viewport={{ once: true }}
                          />
                        )}
                      </div>
                    </div>
                    <a href="https://kyc1.ramaera.com/auth/login" target="_blank" rel="noopener noreferrer">
                    <MagneticButton  className="w-full bg-gradient-to-r from-white to-accent-500 text-black py-2 rounded-lg hover:from-gray-200 hover:to-accent-400 transition-all duration-300 font-bold shadow-neon">
                      GET UPDATES
                    </MagneticButton>
                    </a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </AnimatedSection>
  </div>
</section>

      {/* Testimonials */}
      <section className="py-24 bg-black relative overflow-hidden">
  <div className="absolute inset-0 z-0">
    <img
      src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920"
      alt="Business Partnership"
      className="w-full h-full object-cover opacity-20"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black"></div>
  </div>
  <div className="absolute inset-0 cyber-grid-bg opacity-20 z-5"></div>
  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <AnimatedSection className="text-center mb-20">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
        <span className="cyber-text">WHAT OUR COMMUNITY SAYS</span>
      </h2>
      <p className="text-xl text-gray-300">
        Real feedback from real shareholders
      </p>
    </AnimatedSection>

    {/* Testimonial Slider */}
    <AnimatedSection stagger className="mb-16">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
        }}
        className="testimonial-slider"
      >
        {[
          {
            initials: "RK",
            name: "Rajesh Kumar",
            role: "Spice Factory Investor",
            quote: "I invested ₹25,000 in the spice factory and have been receiving yearly returns. The transparency and community support is amazing.",
            bgImage: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
            accent: "primary",
            videoId: "YOUR_VIDEO_ID_1"
          },
          {
            initials: "PS",
            name: "Priya Sharma",
            role: "Supermarket Investor",
            quote: "As a small investor, I never thought I could own part of a business. Ramaera made it possible with just ₹10,000 investment.",
            bgImage: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg",
            accent: "accent",
            videoId: "YOUR_VIDEO_ID_2"
          },
          {
            initials: "AS",
            name: "Singh",
            role: "Production Partner",
            quote: "Running the spice factory with Ramaera's support has been incredible. The community backing and professional guidance made all the difference.",
            bgImage: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
            accent: "secondary",
            videoId: "YOUR_VIDEO_ID_3"
                },
                {
                  initials: "AS",
                  name: "Amit ",
                  role: "Production Partner",
                  quote: "Running the spice factory with Ramaera's support has been incredible. The community backing and professional guidance made all the difference.",
                  bgImage: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
                  accent: "secondary",
                  videoId: "YOUR_VIDEO_ID_3"
                },
                
        ].map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="h-full flex flex-col gap-6">
              {/* Testimonial Card */}
              <motion.div 
                className="cyber-card p-6 relative overflow-hidden flex-grow"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 opacity-20">
                  <img 
                    src={testimonial.bgImage} 
                    alt="Testimonial"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className=" items-center  mb-4">
                  <div className=" items-center  mb-4">
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  <iframe 
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                    title={`${testimonial.name}'s Story`}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                   
                   
                  </div>
                  <Quote className={`h-6 w-6 text-${testimonial.accent}-400 mb-2`} />
                  <p className="text-gray-300 italic flex-grow">
                    "{testimonial.quote}"
                  </p>
                </div>
              </motion.div>

             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
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
              <span className="holographic">BE PART OF THE NEXT SUCCESS STORY</span>
            </h2>
            <p className="text-xl mb-12 text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Join our community and help build the next generation of Indian industries
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <MagneticButton  onClick={() => navigate('/shareholder')} className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-secondary-600 to-secondary-500 text-black font-bold rounded-xl hover:from-secondary-500 hover:to-secondary-400 transition-all duration-300 transform hover:scale-110 shadow-golden mobile-optimized">
                <Award className="mr-4 h-8 w-8" />
                BECOME A SHAREHOLDER
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
  className=" w-auto inline-flex items-center  glow-button btn-hover-lift font-bold mobile-optimized text-black py-3 px-8 rounded-xl hover:from-primary-500 hover:to-accent-400 transition-all duration-300 transform hover:scale-[1.02] shadow-neon  justify-center space-x-2"
>
  <span>APPLY FOR FACTORY</span>
  <Target className="mr-4 h-8 w-8" />
</button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default SuccessStoriesPage