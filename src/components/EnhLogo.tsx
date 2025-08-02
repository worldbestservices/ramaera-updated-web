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
      y: [0, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    spinning: {
      rotate: [0, 360],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    },
    pulsing: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    morphing: {
      borderRadius: ['50%', '30%', '50%'],
      scale: [1, 1.03, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Background glow */}
      <motion.div
        className="absolute rounded-full bg-gradient-to-r from-green-900 via-green-800 to-green-500 blur-lg opacity-30"
        style={{
          width: 'calc(100% + 40px)',
          height: 'calc(100% + 40px)',
          top: '-20%',
          left: '-30%',
          transform: 'translate(-50%, -50%)'
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main logo container */}
      <motion.div
        className={`relative ${sizeClasses[size]} flex items-center justify-center`}
        animate={logoVariants[variant]}
      >
        {/* Logo image */}
        <motion.div 
          className="relative w-full h-full flex items-center justify-center"
          whileHover={{ 
            scale: 1.03,
            transition: { duration: 0.3 }
          }}
        >
          <img
            src="/ramanew.png"
            alt="Ramaera Logo"
            className="object-contain filter drop-shadow-lg"
            style={{
              width: '200%',
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
            className="absolute inset-0 rounded-full opacity-5 mix-blend-overlay"
            animate={{
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Particle effects */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-60"
              style={{
                left: '50%',
                top: '50%',
                marginLeft: '-2px',
                marginTop: '-2px'
              }}
              animate={{
                x: [0, Math.cos(i * 90 * Math.PI / 180) * 20],
                y: [0, Math.sin(i * 90 * Math.PI / 180) * 20],
                opacity: [1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Company text */}
      {showText && (
        <motion.div 
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="text-white font-bold text-sm font-['Orbitron'] whitespace-nowrap">
            RAMAERA INDUSTRIES
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default EnhLogo