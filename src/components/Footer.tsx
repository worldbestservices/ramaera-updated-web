import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Quote, Sparkles, Globe, Heart, Shield, Rocket, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import EnhLogo from './EnhLogo'

const Footer = () => {
  return (
    <footer className="relative z-10 bg-black border-t border-white/20">
      {/* Enhanced Inspirational Quote Section */}
      <div className="bg-gradient-to-r from-black via-primary-600/10 to-black py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Industrial Vision"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-primary-600/20 to-black"></div>
        </div>
        <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Quote className="h-16 w-16 text-accent-400 mx-auto pulse-glow" />
          </motion.div>
          
          <motion.blockquote
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-8 holographic leading-tight font-['Orbitron']"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            "Welcome to the New Era of Industrialization — Where Every Shareholder Is an Owner, a User, a Distributor, and a Nation Builder."
          </motion.blockquote>
          
          <motion.p
            className="text-gray-300 text-xl font-medium golden-accent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Building India's industrial future, one factory at a time.
          </motion.p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Enhanced Company Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="cyber-card p-8 h-full relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Company Background"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <EnhLogo size="sm" variant="floating" />
                  <div>
                    <span className="text-2xl font-bold text-white font-['Orbitron'] holographic">RAMAERA</span>
                    <div className="text-sm text-gray-400 font-medium">INDUSTRIES LTD</div>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  India's first community-owned public limited company building thousands of factories
                  across India through shareholder participation. Join the industrial revolution.
                </p>

                {/* Contact Information */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-accent-400" />
                    <span className="text-gray-300">support@ramaera.in</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-accent-400" />
                    <span className="text-gray-300">H77 Sector 63, Noida, India</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-accent-400" />
                    <span className="text-gray-300">Business Hours: Mon-Fri 9AM-6PM IST</span>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Twitter', url: 'https://twitter.com/Ramaeraltd', icon: Globe },
                    { name: 'Facebook', url: 'https://www.facebook.com/ramaeraindustries', icon: Heart },
                    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/83034449', icon: Shield },
                    { name: 'Instagram', url: 'https://www.instagram.com/ramaeraindustries/', icon: Sparkles }
                  ].map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/10 border border-white/20 hover:border-white/40 cyber-card group"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <social.icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{social.name}</span>
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="cyber-card p-8 h-full relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Links Background"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold tracking-wide text-white font-['Orbitron'] mb-6 cyber-text">
                  QUICK LINKS
                </h3>

                <div className="space-y-2">
                  {[
                    { name: 'Home', path: '/' },
                    { name: 'About Us', path: '/about' },
                    { name: 'Industries', path: '/industries' },
                    { name: 'Success Stories', path: '/success-stories' },
                    { name: 'How it Works', path: '/how-it-works' },
                    { name: 'Join Community', path: '/join' },
                    { name: 'Apply Factory', path: '/apply' },
                    { name: 'Contact', path: '/contact' },
                    { name: 'Spice Subscription', path: '/monthly-spice-subscription' }
                  ].map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        to={link.path}
                        className="group flex items-center text-gray-400 hover:text-accent-400 text-sm transition-all duration-300 p-3 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20"
                      >
                        <motion.span 
                          className="mr-3 transform transition-transform duration-300 group-hover:translate-x-1"
                          whileHover={{ scale: 1.2 }}
                        >
                          →
                        </motion.span>
                        <span className="capitalize font-medium">{link.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Contact & App Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="cyber-card p-8 h-full relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Contact Background"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-6 golden-accent font-['Orbitron'] cyber-text">
                  CONNECT & GROW
                </h3>
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-200"
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-3 h-3 bg-accent-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                    <div>
                      <p className="text-accent-400 font-medium text-sm">Email Support</p>
                      <p className="text-gray-400 text-xs">24/7 Community Help</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-200"
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-3 h-3 bg-secondary-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    />
                    <div className="flex items-center space-x-2">
                      <Rocket className="h-4 w-4 text-secondary-400" />
                      <div>
                        <p className="text-gray-300 text-sm font-medium">Mobile App</p>
                        <p className="text-gray-400 text-xs">Coming Soon</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-200"
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-3 h-3 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                    />
                    <div>
                      <p className="text-green-400 font-medium text-sm">22,000+ Members</p>
                      <p className="text-gray-400 text-xs">Growing Community</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Footer Legal */}
        <motion.div
          className="border-t border-white/20 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center text-gray-400 space-y-8">
            {/* Copyright */}
            <motion.p 
              className="text-lg font-medium text-white font-['Orbitron']"
              animate={{
                textShadow: [
                  '0 0 10px rgba(255, 255, 255, 0.3)',
                  '0 0 20px rgba(255, 255, 255, 0.5)',
                  '0 0 10px rgba(255, 255, 255, 0.3)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              &copy; 2024 Ramaera Industries Ltd. All rights reserved.
            </motion.p>
            
            {/* Legal Disclaimers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Shield,
                  title: "Investment Risk",
                  text: "Profit is not guaranteed. All investments are subject to business risks.",
                  color: "text-yellow-400",
                  bgColor: "bg-yellow-600/10",
                  borderColor: "border-yellow-600/30"
                },
                {
                  icon: Globe,
                  title: "Share Status",
                  text: "Shares are currently unlisted. IPO will be announced publicly when ready.",
                  color: "text-accent-400",
                  bgColor: "bg-accent-600/10",
                  borderColor: "border-accent-600/30"
                },
                {
                  icon: Heart,
                  title: "Commitment Policy",
                  text: "Shareholder participation is non-refundable once committed to a project.",
                  color: "text-red-400",
                  bgColor: "bg-red-600/10",
                  borderColor: "border-red-600/30"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`cyber-card p-6 text-center ${item.bgColor} ${item.borderColor}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <item.icon className={`h-8 w-8 ${item.color} mx-auto mb-4`} />
                  <h4 className={`font-bold ${item.color} mb-2 font-['Orbitron']`}>{item.title}</h4>
                  <p className="text-sm leading-relaxed text-gray-300">{item.text}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Mission Statement */}
            <motion.div
              className="cyber-card p-8 bg-gradient-to-r from-primary-600/10 to-accent-500/10 max-w-4xl mx-auto relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Mission Background"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <Sparkles className="h-8 w-8 text-secondary-400" />
                  <Rocket className="h-8 w-8 text-accent-400" />
                  <Sparkles className="h-8 w-8 text-secondary-400" />
                </div>
                <motion.p
                  className="text-white font-bold text-xl golden-accent font-['Orbitron']"
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(251, 191, 36, 0.5)',
                      '0 0 20px rgba(251, 191, 36, 0.8)',
                      '0 0 10px rgba(251, 191, 36, 0.5)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Building generational wealth through community-owned industries.
                </motion.p>
                <p className="text-gray-400 mt-4 text-sm">
                  Not just investment — it's industrial partnership for life.
                </p>
              </div>
            </motion.div>

            {/* Additional Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/admin-login" className="text-gray-500 hover:text-gray-300 transition-colors">
                Admin Portal
              </Link>
              <span className="text-gray-600">•</span>
              <a href="mailto:support@ramaera.in" className="text-gray-500 hover:text-gray-300 transition-colors">
                Support
              </a>
              <span className="text-gray-600">•</span>
              <Link to="/contact" className="text-gray-500 hover:text-gray-300 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer