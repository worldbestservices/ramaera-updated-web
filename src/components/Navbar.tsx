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
        { name: 'Apply for Factory', href: '/apply', icon: FileText },
        { name: 'Contact', href: '/contact', icon: Phone },
    ]

    const isActive = (path: string) => location.pathname === path

    return (
        <motion.header
            className="sticky z-50 bg-black/30 backdrop-blur-xl border-b border-white/10 top-0 p-3"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div
                className=" absolute inset-0 rounded-b-[20px]"
                style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 50%, rgba(173,102,255,0.05) 100%)',
                    pointerEvents: 'none' // Prevent interaction with the gradient layer
                }}
            ></div>
            <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16"> {/* Reduced height */}
                    {/* Enhanced Logo */}
                    <Link to="/" className="flex items-center space-x-2 group shrink-0"> {/* Reduced space-x */}
                        {/* <EnhancedLogo size="sm" variant="floating" />  */}
                        <EnhLogo size="sm" variant="floating" />
                        <motion.div
                            className="flex flex-col"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="text-lg font-bold text-white group-hover:text-accent-400 transition-colors font-['Orbitron'] glitch-hover">
                                RAMAERA
                            </span>
                            <span className="text-[0.65rem] text-gray-400 font-medium tracking-wider"> {/* Smaller text */}
                                INDUSTRIES LTD
                            </span>
                        </motion.div>
                    </Link>

                    {/* Enhanced Desktop Navigation */}
                    <div className="flex-1 flex items-center justify-between px-4 lg:px-8">
                        <nav className="hidden md:flex space-x-1"> {/* Removed scrollbar and hide on mobile */}
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
                                            className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${isActive(item.href)
                                                ? 'text-white bg-white/20 border border-white/30 shadow-neon'
                                                : 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-neon'
                                                }`}
                                            style={{
                                                backdropFilter: 'blur(10px)',
                                                WebkitBackdropFilter: 'blur(10px)'
                                            }}
                                        >
                                            <Icon className="h-3 w-3" /> {/* Smaller icon */}
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
                                to="https://kyc1.ramaera.com/auth/signup" target="_blank" rel="noopener noreferrer"
                                className="flex items-center space-x-1 px-3 py-1.5 glow-button btn-hover-lift text-xs font-bold rounded-full" // Smaller button
                                style={{
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)'
                                }}
                            >
                                <Zap className="h-3 w-3" /> {/* Smaller icon */}
                                <span className="hidden sm:inline">JOIN NOW</span>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile menu button */}
                    <motion.button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 border border-white/20 ml-2" // Smaller button
                        style={{
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)'
                        }}
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
                                    <X className="h-5 w-5" /> {/* Smaller icon */}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="h-5 w-5" /> {/* Smaller icon */}
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
                        className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            borderBottomLeftRadius: '20px',
                            borderBottomRightRadius: '20px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
                        }}
                    >
                        <div className="px-3 pt-3 pb-4 space-y-1"> {/* Reduced padding */}
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
                                            className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive(item.href)
                                                ? 'text-white bg-white/20 border border-white/30'
                                                : 'text-gray-300 hover:text-white hover:bg-white/10'
                                                }`}
                                            onClick={() => setIsMenuOpen(false)}
                                            style={{
                                                backdropFilter: 'blur(10px)',
                                                WebkitBackdropFilter: 'blur(10px)'
                                            }}
                                        >
                                            <Icon className="h-4 w-4" /> {/* Smaller icon */}
                                            <span>{item.name}</span>
                                        </Link>
                                    </motion.div>
                                )
                            })}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navigation.length * 0.1, duration: 0.3 }}
                            >
                                <Link
                                    to="/join"
                                    className="flex items-center justify-center space-x-1 px-4 py-2 glow-button btn-hover-lift text-xs font-bold mt-2 rounded-full" // Smaller button
                                    onClick={() => setIsMenuOpen(false)}
                                    style={{
                                        backdropFilter: 'blur(10px)',
                                        WebkitBackdropFilter: 'blur(10px)'
                                    }}
                                >
                                    <Zap className="h-3 w-3" /> {/* Smaller icon */}
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
