import React from 'react'
import { motion } from 'framer-motion'
import { Factory, Sparkles, Zap } from 'lucide-react'

const LoadingFallback: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Animated logo fallback */}
      <motion.div
        className="relative w-32 h-32 mb-8"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{
          rotate: { duration: 3, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        {/* Main circle */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 flex items-center justify-center"
          animate={{
            boxShadow: [
              '0 0 20px rgba(255, 107, 0, 0.5)',
              '0 0 40px rgba(255, 107, 0, 0.8)',
              '0 0 20px rgba(255, 107, 0, 0.5)'
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Factory className="h-16 w-16 text-white" />
        </motion.div>

        {/* Orbiting elements */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white rounded-full"
            style={{
              top: '50%',
              left: '50%',
              marginTop: '-8px',
              marginLeft: '-8px'
            }}
            animate={{
              rotate: 360,
              x: Math.cos((i * 60) * Math.PI / 180) * 50,
              y: Math.sin((i * 60) * Math.PI / 180) * 50
            }}
            transition={{
              rotate: { duration: 4, repeat: Infinity, ease: "linear" },
              delay: i * 0.2
            }}
          />
        ))}
      </motion.div>

      {/* Animated text */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-3xl font-bold text-white mb-4 font-['Orbitron']"
          animate={{
            textShadow: [
              '0 0 10px rgba(255, 255, 255, 0.5)',
              '0 0 20px rgba(255, 255, 255, 0.8)',
              '0 0 10px rgba(255, 255, 255, 0.5)'
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          RAMAERA INDUSTRIES
        </motion.h2>
        
        <motion.div
          className="flex items-center justify-center space-x-2 text-gray-300"
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="h-5 w-5" />
          <span>Loading Industrial Future...</span>
          <Zap className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default LoadingFallback