import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

gsap.registerPlugin(ScrollTrigger, TextPlugin)

export const useGSAP = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // (Your entire GSAP animations code here — same as before)
      // [ trimmed for brevity ]
      // Enhanced hero animations, floating icons, card reveals, counters, parallax etc.
      // Including the createParticle / particleInterval setup

      const createParticle = () => {
        const particle = document.createElement('div')
        particle.className = 'absolute w-1 h-1 bg-white rounded-full opacity-60'
        particle.style.left = Math.random() * 100 + '%'
        particle.style.top = '100%'

        document.body.appendChild(particle)

        gsap.to(particle, {
          y: -window.innerHeight - 100,
          x: (Math.random() - 0.5) * 300,
          opacity: 0,
          scale: Math.random() * 2 + 0.5,
          duration: Math.random() * 4 + 3,
          ease: "none",
          onComplete: () => particle.remove()
        })
      }

      const particleInterval = setInterval(createParticle, 300)

      return () => clearInterval(particleInterval)

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return containerRef
}

export const useScrollAnimations = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1.2,
      touchMultiplier: 2.5,
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    gsap.to('.parallax-bg', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    })

    return () => lenis.destroy()
  }, [])
}

export const useParticleSystem = () => {
  useEffect(() => {
    const createAdvancedParticle = () => {
      const particle = document.createElement('div')
      const size = Math.random() * 4 + 1
      const color = ['#ffffff', '#06b6d4', '#fbbf24'][Math.floor(Math.random() * 3)]

      particle.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        left: ${Math.random() * 100}vw;
        top: 100vh;
        box-shadow: 0 0 ${size * 2}px ${color};
      `

      document.body.appendChild(particle)

      gsap.to(particle, {
        y: -window.innerHeight - 200,
        x: (Math.random() - 0.5) * 400,
        opacity: 0,
        scale: Math.random() * 3 + 0.5,
        rotation: Math.random() * 360,
        duration: Math.random() * 5 + 4,
        ease: "none",
        onComplete: () => particle.remove()
      })
    }

    const interval = setInterval(createAdvancedParticle, 150)
    return () => clearInterval(interval)
  }, [])
}
