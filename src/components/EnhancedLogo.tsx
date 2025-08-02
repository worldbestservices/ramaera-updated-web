import React from 'react'
import { motion } from 'framer-motion'
import { Factory, Sparkles, Zap, Flame } from 'lucide-react'

interface EnhancedLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'static' | 'floating' | 'spinning' | 'pulsing' | 'morphing'
  className?: string
  showText?: boolean
}

const EnhancedLogo: React.FC<EnhancedLogoProps> = ({ 
  size = 'md', 
  variant = 'floating',
  className = '',
  showText = false
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  }

  const logoVariants = {
    static: {},
    floating: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    spinning: {
      rotate: 360,
      scale: [1, 1.1, 1],
      transition: {
        rotate: { duration: 3, repeat: Infinity, ease: "linear" },
        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
      }
    },
    pulsing: {
      scale: [1, 1.2, 1],
      filter: ['brightness(1)', 'brightness(1.3)', 'brightness(1)'],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    morphing: {
      borderRadius: ['50%', '25%', '50%'],
      rotate: [0, 180, 360],
      scale: [1, 1.1, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className={`relative ${className}`}>
      {/* Enhanced background glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 blur-xl opacity-50"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.8, 0.3]
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
        {/* Logo image */}
        <motion.div 
          className="relative w-full h-full"
          whileHover={{ 
            scale: 1.1,
            rotate: 15,
            filter: 'brightness(1.2) saturate(1.3)',
            transition: { duration: 0.3 }
          }}
        >
          <img
            src="/rama.png"
            alt="Ramaera Logo"
            className="w-full h-full object-contain filter drop-shadow-2xl"
            onError={(e) => {
              // Fallback to original logo if new one fails
              (e.target as HTMLImageElement).src = "/ramaeralogo.png"
            }}
          />
          
          {/* Animated flame overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 rounded-full opacity-20 mix-blend-overlay"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Particle effects */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full"
              style={{
                left: '50%',
                top: '50%',
                marginLeft: '-4px',
                marginTop: '-4px'
              }}
              animate={{
                x: [0, Math.cos(i * 45 * Math.PI / 180) * 40],
                y: [0, Math.sin(i * 45 * Math.PI / 180) * 40],
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

      {/* Rotating ring effect */}
      <motion.div
        className="absolute inset-0 border-4 border-transparent border-t-orange-500 border-r-red-500 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Company text */}
      {showText && (
        <motion.div 
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="text-white font-bold text-sm font-['Orbitron'] whitespace-nowrap">
            RAMAERA INDUSTRIES
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default EnhancedLogo