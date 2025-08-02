import React, { useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useSpring, animated } from 'react-spring'
import { gsap } from 'gsap'

interface AnimatedLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'floating' | 'spinning' | 'pulsing' | 'morphing'
  className?: string
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ 
  size = 'md', 
  variant = 'floating',
  className = '' 
}) => {
  const logoRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  }

  // React Spring animation
  const springProps = useSpring({
    from: { transform: 'scale(0) rotate(0deg)', opacity: 0 },
    to: async (next) => {
      await next({ transform: 'scale(1) rotate(360deg)', opacity: 1 })
      while (true) {
        await next({ transform: 'scale(1.1) rotate(360deg)' })
        await next({ transform: 'scale(1) rotate(720deg)' })
      }
    },
    config: { tension: 200, friction: 20 }
  })

  // GSAP animations
  useEffect(() => {
    const logo = logoRef.current
    if (!logo) return

    const tl = gsap.timeline({ repeat: -1 })

    switch (variant) {
      case 'floating':
        tl.to(logo, {
          y: -20,
          duration: 2,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1
        })
        .to(logo, {
          rotation: 360,
          duration: 8,
          ease: "none",
          repeat: -1
        }, 0)
        break

      case 'spinning':
        tl.to(logo, {
          rotation: 360,
          duration: 3,
          ease: "power2.inOut",
          repeat: -1
        })
        .to(logo, {
          scale: 1.2,
          duration: 1.5,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1
        }, 0)
        break

      case 'pulsing':
        tl.to(logo, {
          scale: 1.3,
          duration: 1,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1
        })
        .to(logo, {
          filter: 'brightness(1.5) saturate(1.5)',
          duration: 1,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1
        }, 0)
        break

      case 'morphing':
        tl.to(logo, {
          borderRadius: '50%',
          duration: 2,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1
        })
        .to(logo, {
          rotation: 180,
          duration: 2,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1
        }, 0)
        break
    }

    return () => {
      tl.kill()
    }
  }, [variant])

  // Framer Motion variants
  const logoVariants = {
    initial: { 
      scale: 0, 
      rotate: -180, 
      opacity: 0,
      filter: 'blur(10px)'
    },
    animate: { 
      scale: 1, 
      rotate: 0, 
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.1,
      rotate: 15,
      filter: 'brightness(1.2) saturate(1.3)',
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className={`relative ${className}`}>
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 blur-xl opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main logo container */}
      <motion.div
        ref={logoRef}
        className={`relative ${sizeClasses[size]} flex items-center justify-center`}
        variants={logoVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        {/* Logo image with React Spring */}
        <animated.div style={springProps} className="relative w-full h-full">
          <img
            src="/ramaeralogo.png"
            alt="Ramaera Logo"
            className="w-full h-full object-contain filter drop-shadow-2xl"
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
        </animated.div>

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
    </div>
  )
}

export default AnimatedLogo