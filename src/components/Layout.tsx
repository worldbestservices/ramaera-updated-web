import React, { Suspense, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import PageTransition from './PageTransition'
import { useScrollAnimations } from '../hooks/useGSAP'
import { AnimatePresence, motion } from 'framer-motion'

const Layout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  useScrollAnimations()

  // Scroll behavior on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  // Simulated loading effect
  useEffect(() => {
    setIsLoading(true)

    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => {
      clearTimeout(loadingTimer)
    }
  }, [location])

  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -10 }
  }

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.3
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Simple Loader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 bg-black z-[100] flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
              <span className="text-white text-lg">Loading...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-gray-900/20"></div>
      </div>

      <motion.main
        className="relative z-10 flex-1"
        variants={pageVariants}
        initial="initial"
        animate="in"
        exit="out"
        transition={pageTransition}
      >
        <PageTransition>
          <Outlet />
        </PageTransition>
      </motion.main>
    </div>
  )
}

export default Layout
