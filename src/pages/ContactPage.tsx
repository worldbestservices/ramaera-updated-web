import React, { useState } from 'react'
import {
  Mail,
  MessageSquare,
  Send,
  Clock,
  Users,
  Building,
  CheckCircle,
  Smartphone,
  Globe,
  User,
  ArrowRight
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import EnhLogo from '../components/EnhLogo'
import { useContactStore} from '../store/contactStore'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const {
    submitMessage,
    loading,
    success,
    error,
    resetState
  } = useContactStore()

  // Handle success and error states
  React.useEffect(() => {
    if (success) {
      toast.success("Message sent successfully! We'll get back to you within 24 hours.");
      setFormData({ name: '', email: '', subject: '', message: '' });
      resetState();
    }
    
    if (error) {
      toast.error(error || 'Failed to send message. Please try again.');
      resetState();
    }
  }, [success, error, resetState]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submitMessage(formData)
  }

  const contactInfo = [
    {
      icon: Building,
      title: 'Head Office',
      details: ['Ramaera Industries Ltd', 'H77 Sector 63, Noida'],
      color: 'text-primary-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['support@ramaera.in'],
      color: 'text-accent-500'
    },
    {
      icon: Users,
      title: 'WhatsApp',
      details: ['Join Community', 'Click to connect'],
      color: 'text-green-500'
    },
    {
      icon: MessageSquare,
      title: 'Telegram',
      details: ['Investor Channel', 'Real-time updates'],
      color: 'text-blue-500'
    }
  ]

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/ramaeraindustries', color: 'bg-blue-700', description: 'Join Community' },
    { name: 'Instagram', href: 'https://www.instagram.com/ramaeraindustries/', color: 'bg-pink-500', description: 'Behind the scenes' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/83034449', color: 'bg-blue-700', description: 'Professional updates' },
    { name: 'Twitter', href: 'https://twitter.com/Ramaeraltd', color: 'bg-blue-500', description: 'Factory tours & stories' }
  ]

  const subjects = [
    'General Inquiry',
    'Become a Shareholder',
    'Apply for Factory',
    'Investment Questions',
    'Partnership Opportunities',
    'Technical Support',
    'Media & Press',
    'Other'
  ]

  return (
    <div className="animate-fade-in bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-black text-white py-24 relative overflow-hidden" id="hero-section">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-primary-800/80 to-black/60"></div>
        </div>
        <div className="absolute inset-0 cyber-grid-bg opacity-20 z-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <AnimatedSection className="text-center">
            <div className="flex justify-center mb-8">
              <EnhLogo size="lg" variant="floating" />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-8 font-['Orbitron']">
              <span className="holographic">CONTACT US</span>
            </h1>
            <p className="text-xl md:text-3xl text-primary-100 max-w-5xl mx-auto leading-relaxed">
              Get in Touch with the Ramaera Community
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="cyber-card p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <img 
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Contact Form Background"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-8 font-['Orbitron'] cyber-text">Send us a Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                          <User className="mr-2 h-4 w-4 text-accent-400" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                          <Mail className="mr-2 h-4 w-4 text-accent-400" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                        <MessageSquare className="mr-2 h-4 w-4 text-accent-400" />
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40"
                      >
                        <option value="">Select a subject</option>
                        {subjects.map((subject, index) => (
                          <option key={index} value={subject}>{subject}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                        <MessageSquare className="mr-2 h-4 w-4 text-accent-400" />
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40 resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-white to-accent-500 text-black font-bold rounded-xl hover:from-gray-200 hover:to-accent-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-neon"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Info & Social Links */}
            <div className="space-y-8">
              {/* Social Links */}
              <AnimatedSection>
                <div className="cyber-card p-8 hover:border-primary-500 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Social Background"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-6 font-['Orbitron'] cyber-text">
                      CONNECT WITH US
                    </h3>
                    <p className="text-gray-400 mb-8">
                      Join our community on social media for updates, discussions, and networking opportunities.
                    </p>
                    <div className="space-y-4">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          target='_blank'
                          rel="noopener noreferrer"
                          className="cyber-card flex items-center justify-between p-4 hover:border-primary-500 transition-all duration-300 group"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center space-x-4">
                            <div className={`${social.color} text-white p-3 rounded-xl group-hover:scale-110 transition-transform duration-200`}>
                              <Globe className="h-6 w-6" />
                            </div>
                            <div>
                              <h4 className="font-bold text-white">{social.name}</h4>
                              <p className="text-sm text-gray-400">{social.description}</p>
                            </div>
                          </div>
                          <ArrowRight className="h-5 w-5 text-primary-400 group-hover:translate-x-1 transition-transform duration-200" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* App Coming Soon */}
              <AnimatedSection>
                <div className="cyber-card bg-gradient-to-r from-primary-600/20 to-primary-800/20 border border-primary-500/30 p-8 hover:border-primary-500 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="App Background"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <Smartphone className="h-10 w-10 text-primary-400" />
                      <h3 className="text-2xl font-bold text-white font-['Orbitron'] cyber-text">APP COMING SOON</h3>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-6 font-['Orbitron'] golden-accent">RAMAERA MEMBER PORTAL</h4>
                    <p className="text-gray-400 mb-8">
                      Get ready for the Ramaera Investor Dashboard mobile app.
                      Manage your investments, track factory performance, and connect with the community on the go.
                    </p>
                    <motion.button 
                      className="w-full bg-gradient-to-r from-white to-accent-500 text-black px-8 py-4 rounded-xl font-bold hover:from-gray-200 hover:to-accent-400 transition-all duration-300 shadow-neon"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      NOTIFY ME WHEN AVAILABLE
                    </motion.button>
                  </div>
                </div>
              </AnimatedSection>

              {/* Quick Info */}
              <AnimatedSection>
                <div className="cyber-card p-8 hover:border-primary-500 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Info Background"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-8 font-['Orbitron'] cyber-text">
                      QUICK INFORMATION
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Clock className="h-8 w-8 text-primary-500 mt-1" />
                        <div>
                          <h4 className="font-bold text-white mb-2 font-['Orbitron']">RESPONSE TIME</h4>
                          <p className="text-gray-400">We typically respond within 24 hours</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Users className="h-8 w-8 text-accent-500 mt-1" />
                        <div>
                          <h4 className="font-bold text-white mb-2 font-['Orbitron']">COMMUNITY SUPPORT</h4>
                          <p className="text-gray-400">22,000+ members ready to help</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Building className="h-8 w-8 text-secondary-500 mt-1" />
                        <div>
                          <h4 className="font-bold text-white mb-2 font-['Orbitron']">OFFICE HOURS</h4>
                          <p className="text-gray-400">Monday - Friday: 9 AM - 6 PM IST</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage