// import React, { useEffect, useState } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// const ScrollProgress: React.FC = () => {
//   const [progress, setProgress] = useState(0)

//   useEffect(() => {
//     const updateProgress = () => {
//       const scrollTop = window.pageYOffset
//       const docHeight = document.documentElement.scrollHeight - window.innerHeight
//       const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
//       setProgress(scrollPercent)
//     }

//     window.addEventListener('scroll', updateProgress)
//     window.addEventListener('resize', updateProgress)

//     // Initialize progress on mount
//     updateProgress()

//     return () => {
//       window.removeEventListener('scroll', updateProgress)
//       window.removeEventListener('resize', updateProgress)
//     }
//   }, [])

//   return (
//     <>
//       {/* Top Progress Bar */}
//       <div className="fixed top-0 left-0 w-full h-1 bg-black/20 z-50">
//         <div
//           className="h-full bg-gradient-to-r from-white via-accent-500 to-secondary-400 transition-all duration-300 ease-out"
//           style={{ width: `${progress}%` }}
//         />
//       </div>

//       {/* Circular Progress Indicator */}
//       <div className="fixed bottom-8 right-8 z-50">
//         <div className="relative w-16 h-16">
//           <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
//             <circle
//               cx="32"
//               cy="32"
//               r="28"
//               stroke="rgba(255, 255, 255, 0.1)"
//               strokeWidth="4"
//               fill="none"
//             />
//             <circle
//               cx="32"
//               cy="32"
//               r="28"
//               stroke="url(#progressGradient)"
//               strokeWidth="4"
//               fill="none"
//               strokeLinecap="round"
//               strokeDasharray={`${2 * Math.PI * 28}`}
//               strokeDashoffset={`${2 * Math.PI * 28 * (1 - progress / 100)}`}
//               className="transition-all duration-300 ease-out"
//             />
//             <defs>
//               <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                 <stop offset="0%" stopColor="#ffffff" />
//                 <stop offset="50%" stopColor="#06b6d4" />
//                 <stop offset="100%" stopColor="#fbbf24" />
//               </linearGradient>
//             </defs>
//           </svg>
//           <div className="absolute inset-0 flex items-center justify-center">
//             <span className="text-xs font-bold text-white">
//               {Math.round(progress)}%
//             </span>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default ScrollProgress



