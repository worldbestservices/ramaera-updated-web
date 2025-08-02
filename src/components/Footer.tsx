import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import EnhLogo from './EnhLogo'

const Footer = () => {
  return (
    <footer className="relative z-10 bg-black border-t border-white/10">
      {/* Enhanced Inspirational Quote Section */}
      <div className="bg-gradient-to-r from-black via-white/5 to-black py-16 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-accent-500/30 to-transparent"
            animate={{ x: [0, -50, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Quote className="h-16 w-16 text-secondary-400 mx-auto mb-8 floating-icon pulse-glow" />
          </motion.div>
          <motion.blockquote
            className="text-2xl md:text-4xl font-bold text-white mb-6 holographic leading-tight font-['Orbitron']"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            "Welcome to the New Era of Industrialization — Where Every Shareholder Is an Owner, a User, a Distributor, and a Nation Builder."
          </motion.blockquote>
          <motion.p
            className="text-gray-400 text-xl font-medium golden-accent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Building India's industrial future, one factory at a time.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <EnhLogo size="sm" variant="floating" />
              <div>
                <span className="text-2xl font-bold text-white font-['Orbitron'] glitch-hover">RAMAERA</span>
                <div className="text-sm text-gray-400 font-medium">INDUSTRIES LTD</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              India's first community-owned public limited company building thousands of factories
              across India through shareholder participation.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'Twitter', url: 'https://twitter.com/Ramaeraltd' },
                { name: 'Facebook', url: 'https://www.facebook.com/ramaeraindustries' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/company/83034449' },
                { name: 'Instagram', url: 'https://www.instagram.com/ramaeraindustries/' }
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/5 border border-white/10"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold tracking-wide text-white font-['Orbitron'] mb-4">
              QUICK LINKS
            </h3>

            {/* <ul className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-3"> */}
            <ul className="">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Industries', path: '/industries' },
                { name: 'Success Stories', path: '/success-stories' },
                { name: 'How it Work', path: '/how-it-works' },
                { name: 'Apply', path: '/apply' },
                { name: 'Admin Login', path: '/admin-login' },
                { name: 'Contact', path: '/contact' },
                { name: 'Spacial Spices Subscription', path: 'monthly-spice-subscription' }

              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.path}
                    className="group inline-flex items-center text-gray-400 hover:text-yellow-400 text-base transition-all duration-300"
                  >
                    <span className="mr-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                    <span className="capitalize">{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>





          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 golden-accent font-['Orbitron']">CONTACT</h3>
            <div className="text-gray-400 space-y-3">
              {/* <motion.p 
                  className="flex items-center space-x-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span 
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span>H77 Sector 63, Noida</span>
                </motion.p> */}
              <motion.p
                className="flex items-center space-x-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  className="w-2 h-2 bg-accent-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <span className="text-accent-400">support@ramaera.in</span>
              </motion.p>
              <motion.p
                className="flex items-center space-x-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  className="w-2 h-2 bg-secondary-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <span>App Coming Soon</span>
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Footer Legal / Terms */}
        <motion.div
          className="border-t border-white/10 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center text-gray-400 space-y-4">
            <p className="text-lg">&copy; 2024 Ramaera Industries Ltd. All rights reserved.</p>
            <div className="text-sm space-y-2 max-w-4xl mx-auto">
              <p className="flex items-center justify-center space-x-2">
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span>Profit is not guaranteed. All investments are subject to business risks.</span>
              </p>
              <p className="flex items-center justify-center space-x-2">
                <span className="w-1 h-1 bg-accent-500 rounded-full"></span>
                <span>Shares are currently unlisted. IPO will be announced publicly when ready.</span>
              </p>
              <p className="flex items-center justify-center space-x-2">
                <span className="w-1 h-1 bg-secondary-400 rounded-full"></span>
                <span>Shareholder participation is non-refundable once committed to a project.</span>
              </p>
            </div>
            <motion.p
              className="text-white font-bold text-lg golden-accent"
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
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
