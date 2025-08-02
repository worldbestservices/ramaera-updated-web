import React, { Suspense, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
// import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from './PageTransition'
import { useScrollAnimations, useParticleSystem } from '../hooks/useGSAP'
import { AnimatePresence, motion } from 'framer-motion'

const Layout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const location = useLocation()

  useScrollAnimations()
  useParticleSystem()

  // Scroll behavior on route change
  useEffect(() => {
    if (location.pathname === '/') {
      const hero = document.getElementById('hero-section')
      if (hero) {
        hero.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }

    // fallback scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  // Simulated loading effect
  useEffect(() => {
    setIsLoading(true)
    setLoadingProgress(0)

    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 100)

    const loadingTimer = setTimeout(() => {
      setLoadingProgress(100)
      clearInterval(progressInterval)
      setTimeout(() => setIsLoading(false), 500)
    }, 1500)

    return () => {
      clearTimeout(loadingTimer)
      clearInterval(progressInterval)
    }
  }, [location])

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  }

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    // duration: 0.5
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Loader */}
      

<AnimatePresence>
  {isLoading && (
    <motion.div
      key="loader"
      className="fixed inset-0 bg-black z-[100] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Add your loader here */}
      <span className="text-white text-xl">Loading...</span>
    </motion.div>
  )}
</AnimatePresence>


      {/* Background effects */}
      <div className="fixed inset-0 z-0">
        {/* your background elements */}
      </div>

      <motion.main
        className="relative z-10 flex-1"
        variants={pageVariants}
        initial="initial"
        animate="in"
        exit="out"
        transition={pageTransition}
        key={location.pathname}
      >
        <PageTransition>
          <Outlet />
        </PageTransition>
      </motion.main>
    </div>
  )
}

export default Layout

