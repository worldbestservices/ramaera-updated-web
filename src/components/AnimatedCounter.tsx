// import React, { useRef, useEffect, useState } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// interface AnimatedCounterProps {
//   target: number
//   duration?: number
//   prefix?: string
//   suffix?: string
//   className?: string
// }

// const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
//   target,
//   duration = 2,
//   prefix = '',
//   suffix = '',
//   className = ''
// }) => {
//   const counterRef = useRef<HTMLSpanElement>(null)
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     const element = counterRef.current
//     if (!element) return

//     const counter = { value: 0 }

//     gsap.to(counter, {
//       value: target,
//       duration,
//       ease: "power2.out",
//       onUpdate: () => {
//         setCount(Math.round(counter.value))
//       },
//       scrollTrigger: {
//         trigger: element,
//         start: "top 0%",
//         toggleActions: "play none none reverse"
//       }
//     })
//   }, [target, duration])

//   return (
//     <span ref={counterRef} className={className}>
//       {prefix}{count.toLocaleString()}{suffix}
//     </span>
//   )
// }

// export default AnimatedCounter


import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'

interface AnimatedCounterProps {
  target: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  duration = 2,
  prefix = '',
  suffix = '',
  className = ''
}) => {
  const counterRef = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const counter = { value: 0 }

    gsap.to(counter, {
      value: target,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        setCount(Math.round(counter.value))
      }
    })
  }, [target, duration])

  return (
    <span ref={counterRef} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export default AnimatedCounter