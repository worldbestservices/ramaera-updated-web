import React, { useRef, useEffect, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'
import { Text, Float, Environment, Sphere, Box, Torus } from '@react-three/drei'
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing'
import * as THREE from 'three'
import { Vector2 } from 'three'

import { gsap } from 'gsap'

// Custom particle system component
const ParticleSystem: React.FC = () => {
  const particlesRef = useRef<THREE.Points>(null)
  const particleCount = 2000

  const { positions, colors, sizes } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      // Create particles in a sphere around the center
      const radius = Math.random() * 15 + 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)

      // Gradient colors from orange to blue to white
      const colorVariant = Math.random()
      if (colorVariant < 0.33) {
        colors[i * 3] = 1 // R
        colors[i * 3 + 1] = 0.4 + Math.random() * 0.4 // G
        colors[i * 3 + 2] = 0 // B
      } else if (colorVariant < 0.66) {
        colors[i * 3] = 0.2 + Math.random() * 0.3 // R
        colors[i * 3 + 1] = 0.6 + Math.random() * 0.4 // G
        colors[i * 3 + 2] = 1 // B
      } else {
        colors[i * 3] = 1 // R
        colors[i * 3 + 1] = 1 // G
        colors[i * 3 + 2] = 1 // B
      }

      sizes[i] = Math.random() * 3 + 1
    }

    return { positions, colors, sizes }
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      const time = state.clock.elapsedTime

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3

        // Create flowing motion
        positions[i3] += Math.sin(time * 0.5 + i * 0.01) * 0.02
        positions[i3 + 1] += Math.cos(time * 0.3 + i * 0.01) * 0.02
        positions[i3 + 2] += Math.sin(time * 0.4 + i * 0.01) * 0.02

        // Reset particles that go too far
        const distance = Math.sqrt(positions[i3] ** 2 + positions[i3 + 1] ** 2 + positions[i3 + 2] ** 2)
        if (distance > 25) {
          const radius = Math.random() * 5 + 2
          const theta = Math.random() * Math.PI * 2
          const phi = Math.random() * Math.PI

          positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
          positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
          positions[i3 + 2] = radius * Math.cos(phi)
        }
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true
      particlesRef.current.rotation.y = time * 0.1
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particleCount}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <shaderMaterial
        vertexColors
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexShader={`
          attribute float size;
          varying vec3 vColor;
          
          void main() {
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `}
        fragmentShader={`
          varying vec3 vColor;
          
          void main() {
            float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
            float alpha = 1.0 - smoothstep(0.0, 0.5, distanceToCenter);
            gl_FragColor = vec4(vColor, alpha * 0.8);
          }
        `}
      />
    </points>
  )
}

// Enhanced connecting lines component
const ConnectingLines: React.FC = () => {
  const linesRef = useRef<THREE.Group>(null)
  const lineCount = 50

  const lines = useMemo(() => {
    const linesArray = []
    for (let i = 0; i < lineCount; i++) {
      const points = []
      const startRadius = 2 + Math.random() * 3
      const endRadius = 8 + Math.random() * 10

      // Create curved lines from center outward
      for (let j = 0; j <= 20; j++) {
        const t = j / 20
        const radius = startRadius + (endRadius - startRadius) * t
        const angle = (Math.random() - 0.5) * Math.PI * 2
        const height = (Math.random() - 0.5) * 10 * t

        points.push(new THREE.Vector3(
          radius * Math.cos(angle + t * Math.PI),
          height,
          radius * Math.sin(angle + t * Math.PI)
        ))
      }

      linesArray.push(points)
    }
    return linesArray
  }, [])

  useFrame((state) => {
    if (linesRef.current) {
      const time = state.clock.elapsedTime
      linesRef.current.rotation.y = time * 0.2

      linesRef.current.children.forEach((line, index) => {
        const material = (line as THREE.Line).material as THREE.LineBasicMaterial
        material.opacity = 0.3 + Math.sin(time * 2 + index * 0.5) * 0.3
      })
    }
  })

  return (
    <group ref={linesRef}>
      {lines.map((points, index) => (
        <line key={index}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={points.length}
              array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color={index % 3 === 0 ? "#ff6b00" : index % 3 === 1 ? "#00d4ff" : "#ffffff"}
            transparent
            opacity={0.6}
          />
        </line>
      ))}
    </group>
  )
}

// Enhanced central logo structure
const CentralStructure: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null)
  const innerRingRef = useRef<THREE.Group>(null)
  const outerRingRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const time = state.clock.elapsedTime

    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.3
      groupRef.current.position.y = Math.sin(time * 2) * 0.2
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.x = time * 0.5
      innerRingRef.current.rotation.z = time * 0.3
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.x = -time * 0.3
      outerRingRef.current.rotation.y = time * 0.4
    }
  })

  return (
    <group ref={groupRef}>
      {/* Central core */}
      <Sphere args={[1.5, 32, 32]}>
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.9}
          roughness={0.1}
          emissive="#ff6b00"
          emissiveIntensity={0.5}
        />
      </Sphere>

      {/* Inner rotating ring */}
      <group ref={innerRingRef}>
        <Torus args={[3, 0.2, 16, 100]}>
          <meshStandardMaterial
            color="#00d4ff"
            metalness={0.8}
            roughness={0.2}
            emissive="#00d4ff"
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </Torus>

        {/* Inner ring elements */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2
          return (
            <Box
              key={i}
              args={[0.3, 0.3, 0.8]}
              position={[Math.cos(angle) * 3, 0, Math.sin(angle) * 3]}
              rotation={[0, angle, 0]}
            >
              <meshStandardMaterial
                color="#ffffff"
                metalness={0.9}
                roughness={0.1}
                emissive="#ff6b00"
                emissiveIntensity={0.4}
              />
            </Box>
          )
        })}
      </group>

      {/* Outer rotating ring */}
      <group ref={outerRingRef}>
        <Torus args={[5, 0.15, 16, 100]}>
          <meshStandardMaterial
            color="#ff6b00"
            metalness={0.8}
            roughness={0.2}
            emissive="#ff6b00"
            emissiveIntensity={0.2}
            transparent
            opacity={0.6}
          />
        </Torus>

        {/* Outer ring elements */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2
          return (
            <Sphere
              key={i}
              args={[0.2, 16, 16]}
              position={[Math.cos(angle) * 5, Math.sin(angle * 2) * 0.5, Math.sin(angle) * 5]}
            >
              <meshStandardMaterial
                color="#ffffff"
                metalness={1}
                roughness={0}
                emissive="#00d4ff"
                emissiveIntensity={0.6}
              />
            </Sphere>
          )
        })}
      </group>

      {/* Floating geometric elements */}
      {Array.from({ length: 6 }).map((_, i) => {
        const radius = 7 + Math.random() * 3
        const angle = (i / 6) * Math.PI * 2
        return (
          <Float
            key={i}
            speed={2 + Math.random() * 2}
            rotationIntensity={0.5 + Math.random() * 0.5}
            floatIntensity={0.5 + Math.random() * 0.5}
          >
            <Box
              args={[0.5, 0.5, 2]}
              position={[
                Math.cos(angle) * radius,
                (Math.random() - 0.5) * 4,
                Math.sin(angle) * radius
              ]}
              rotation={[Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]}
            >
              <meshStandardMaterial
                color="#ffffff"
                metalness={0.9}
                roughness={0.1}
                emissive="#ffffff"
                emissiveIntensity={0.3}
                transparent
                opacity={0.8}
              />
            </Box>
          </Float>
        )
      })}
    </group>
  )
}

// Main animated logo component
const AnimatedLogo: React.FC = () => {
  return (
    <>
      <CentralStructure />
      <ParticleSystem />
      <ConnectingLines />

      {/* Enhanced lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ff6b00" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#00d4ff" />
      <spotLight
        position={[0, 15, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        color="#ffffff"
        castShadow
      />

      {/* RAMAERA text */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        <Text
          position={[0, -8, 0]}
          fontSize={1.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Orbitron-Bold.woff"
        >
          RAMAERA
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.8}
            roughness={0.2}
            emissive="#ff6b00"
            emissiveIntensity={0.3}
          />
        </Text>
      </Float>
    </>
  )
}

const Logo3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-32 h-32 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#000000']} />
        <fog attach="fog" args={['#000000', 10, 50]} />

        <AnimatedLogo />
        <Environment preset="night" />

        {/* Post-processing effects */}
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            intensity={1.5}
            radius={0.8}
          />
          <ChromaticAberration
            offset={new Vector2(0.001, 0.001)}
            radialModulation={false}
            modulationOffset={0}
          />

        </EffectComposer>
      </Canvas>
    </div>
  )
}

export default Logo3D