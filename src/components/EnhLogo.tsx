import React from 'react'
import { motion } from 'framer-motion'

interface EnhLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'static' | 'floating' | 'spinning' | 'pulsing' | 'morphing'
  className?: string
  showText?: boolean
}

const EnhLogo: React.FC<EnhLogoProps> = ({ 
    size = 'md', 
    variant = 'floating',
    className = '',
    showText = false
  }) => {
    const sizeClasses = {
      sm: 'w-12 h-12 md:w-16 md:h-16', // Added mobile sizes
      md: 'w-16 h-16 md:w-24 md:h-24',
      lg: 'w-20 h-20 md:w-32 md:h-32',
      xl: 'w-28 h-28 md:w-48 md:h-48'
    }
  
  const logoVariants = {
    static: {},
    floating: {
      y: [0, 3, 0], // Reduced movement for mobile
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    spinning: {
      scale: [1, 1.05, 1], // Reduced scale for mobile
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    pulsing: {
      scale: [1, 1.1, 1], // Reduced scale for mobile
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    morphing: {
      borderRadius: ['50%', '20%', '50%'], // Reduced morph for mobile
      scale: [1, 1.05, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Background glow - responsive adjustments */}
      <motion.div
        className="absolute rounded-full bg-gradient-to-r from-green-900 via-green-800 to-green-500 blur-lg md:blur-xl opacity-40 md:opacity-50"
        style={{
          width: 'calc(100% + 60px)',
          height: 'calc(100% + 60px)',
          top: '-20%',
          left: '-30%',
          transform: 'translate(-50%, -50%)'
        }}
        animate={{
          scale: [1, 1.1, 1], // Reduced scale for mobile
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main logo container */}
      <motion.div
        className={`relative ${sizeClasses[size]} flex items-center justify-center`}
        animate={logoVariants[variant]}
      >
        {/* Logo image - responsive sizing */}
        <motion.div 
          className="relative w-full h-full flex items-center justify-center"
          whileHover={{ 
            scale: 1.05, // Reduced hover effect for mobile
            transition: { duration: 0.3 }
          }}
        >
          <img
            src="/ramanew.png"
            alt="Ramaera Logo"
            className="object-contain filter drop-shadow-lg md:drop-shadow-2xl"
            style={{
              width: '240%', // Smaller on mobile
              height: '200%',
              maxWidth: 'none',
              maxHeight: 'none',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = "/ramaeralogo.png"
              target.style.width = '100%'
              target.style.height = '100%'
            }}
          />
          
          {/* Flame overlay */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-5 md:opacity-10 mix-blend-overlay"
            animate={{
              scale: [1, 1.03, 1] // Reduced effect for mobile
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Particle effects - responsive */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => ( // Fewer particles on mobile
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-400 rounded-full"
              style={{
                left: '50%',
                top: '50%',
                marginLeft: '-3px',
                marginTop: '-3px'
              }}
              animate={{
                x: [0, Math.cos(i * 60 * Math.PI / 180) * 30], // Reduced distance
                y: [0, Math.sin(i * 60 * Math.PI / 180) * 30],
                opacity: [1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Company text - responsive */}
      {showText && (
        <motion.div 
          className="absolute -bottom-6 md:-bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: 10 }} // Reduced initial movement
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="text-white font-bold text-xs md:text-sm font-['Orbitron'] whitespace-nowrap">
            RAMAERA INDUSTRIES
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default EnhLogo