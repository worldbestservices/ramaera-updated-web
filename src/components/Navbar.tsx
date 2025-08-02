import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, Info, Building, Cog, Trophy, UserPlus, FileText, Phone, Zap } from 'lucide-react'
import EnhLogo from './EnhLogo'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    const navigation = [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: Info },
        { name: 'Industries', href: '/industries', icon: Building },
        { name: 'How It Works', href: '/how-it-works', icon: Cog },
        { name: 'Success Stories', href: '/success-stories', icon: Trophy },
        { name: 'Join Us', href: '/join', icon: UserPlus },
        { name: 'Apply Factory', href: '/apply', icon: FileText },
        { name: 'Contact', href: '/contact', icon: Phone },
    ]

    const isActive = (path: string) => location.pathname === path

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Enhanced Logo */}
                    <Link to="/" className="flex items-center space-x-3 group shrink-0">
                        <EnhLogo size="sm" variant="floating" />
                        <motion.div
                            className="flex flex-col"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="text-xl font-bold text-white group-hover:text-accent-400 transition-colors font-['Orbitron'] glitch-hover">
                                RAMAERA
                            </span>
                            <span className="text-xs text-gray-400 font-medium tracking-wider">
                                INDUSTRIES LTD
                            </span>
                        </motion.div>
                    </Link>

                    {/* Enhanced Desktop Navigation */}
                    <div className="flex-1 flex items-center justify-between px-8">
                        <nav className="hidden lg:flex space-x-2">
                            {navigation.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className="shrink-0"
                                    >
                                        <Link
                                            to={item.href}
                                            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${isActive(item.href)
                                                ? 'text-white bg-white/20 border border-white/30 shadow-neon'
                                                : 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-neon border border-transparent hover:border-white/20'
                                                }`}
                                        >
                                            <Icon className="h-4 w-4" />
                                            <span>{item.name}</span>
                                        </Link>
                                    </motion.div>
                                )
                            })}
                        </nav>

                        {/* Enhanced CTA Button */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="shrink-0"
                        >
                            <Link
                                to="https://kyc1.ramaera.com/auth/signup" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 px-6 py-3 glow-button btn-hover-lift text-sm font-bold rounded-xl"
                            >
                                <Zap className="h-4 w-4" />
                                <span>JOIN NOW</span>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile menu button */}
                    <motion.button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 border border-white/20 ml-4"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <AnimatePresence mode="wait">
                            {isMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="h-6 w-6" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="h-6 w-6" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="lg:hidden bg-black/90 backdrop-blur-xl border-t border-white/10"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-4 pt-4 pb-6 space-y-2">
                            {navigation.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.3 }}
                                    >
                                        <Link
                                            to={item.href}
                                            className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${isActive(item.href)
                                                ? 'text-white bg-white/20 border border-white/30'
                                                : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20'
                                                }`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <Icon className="h-5 w-5" />
                                            <span>{item.name}</span>
                                        </Link>
                                    </motion.div>
                                )
                            })}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navigation.length * 0.1, duration: 0.3 }}
                                className="pt-4"
                            >
                                <Link
                                    to="https://kyc1.ramaera.com/auth/signup"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center space-x-2 px-6 py-3 glow-button btn-hover-lift text-sm font-bold rounded-xl"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Zap className="h-4 w-4" />
                                    <span>JOIN NOW</span>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}

export default Navbar