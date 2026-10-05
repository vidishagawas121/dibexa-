import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../contexts/ThemeContext';

// An abstract rotating AI core with glowing particles
function AICore({ mouse, theme }: { mouse: React.MutableRefObject<{ x: number, y: number }>, theme: string }) {
  const isLight = theme === 'light';
  const groupRef = useRef<THREE.Group>(null);
  const scatterRef = useRef<THREE.Group>(null);
  
  // 1. Core particles: Uniform spherical halo tightly surrounding the 3D ball
  const corePoints = useMemo(() => {
    const count = 1800;
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Uniform spherical distribution between r = 1.95 and r = 3.3
      const u = Math.random();
      const r = 1.95 + 1.35 * Math.cbrt(u);
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = r * Math.cos(phi);
    }
    return p;
  }, []);

  // 2. Wide scatter particles: Spreading outward to fill gaps on left and right sides
  const scatterPoints = useMemo(() => {
    const count = 3000;
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Wide horizontal spread across left and right (-9.5 to +9.5)
      const sign = Math.random() < 0.5 ? -1 : 1;
      const xDist = Math.pow(Math.random(), 0.75) * 9.5;
      const x = sign * xDist;
      
      // Vertical spread (-3.8 to +3.8)
      const y = (Math.random() - 0.5) * 7.6;
      
      // Depth spread (-2.5 to +2.5) for rich 3D parallax
      const z = (Math.random() - 0.5) * 5.0;
      
      p[i * 3] = x;
      p[i * 3 + 1] = y;
      p[i * 3 + 2] = z;
    }
    return p;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Base rotation over time
      const timeRotationY = t * 0.16;
      const timeRotationZ = t * 0.06;
      
      // Target rotation based on global mouse position
      const targetRotationX = -(mouse.current.y * 0.45);
      const targetRotationY = timeRotationY + (mouse.current.x * 0.45);
      
      // Smoothly interpolate towards target
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05);
      groupRef.current.rotation.z = timeRotationZ;
      
      // Dynamic breathing floating effect enhanced by mouse
      groupRef.current.position.y = Math.sin(t * 0.6) * 0.22 + (mouse.current.y * 0.12);
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, mouse.current.x * 0.22, 0.05);
    }

    if (scatterRef.current) {
      // Gentle counter-drift on outer scatter field for deep cosmic parallax
      scatterRef.current.rotation.y = t * 0.04 + (mouse.current.x * 0.12);
      scatterRef.current.rotation.x = -(mouse.current.y * 0.12);
    }
  });

  return (
    <>
      <group ref={groupRef}>
        {/* Outer 3D Core Sphere (+15% visibility & emissive boost) */}
        <Sphere args={[1.82, 36, 36]}>
          <meshStandardMaterial 
            color={isLight ? "#00529B" : "#0066FF"} 
            wireframe 
            transparent 
            opacity={isLight ? 0.35 : 0.35} 
            emissive={isLight ? "#00529B" : "#00D9E8"}
            emissiveIntensity={isLight ? 0.48 : 0.78}
          />
        </Sphere>
        
        {/* Inner luminous AI nucleus (+15% visibility) */}
        <Sphere args={[1.22, 20, 20]}>
          <meshBasicMaterial 
            color={isLight ? "#F58220" : "#00D9E8"} 
            wireframe 
            transparent 
            opacity={isLight ? 0.65 : 0.50} 
          />
        </Sphere>

        {/* Core neural particle constellation tightly hugging the ball */}
        <Points positions={corePoints} stride={3}>
          <PointMaterial 
            transparent 
            color={isLight ? "#00529B" : "#00D9E8"} 
            size={isLight ? 0.048 : 0.038} 
            sizeAttenuation={true} 
            depthWrite={false}
            blending={isLight ? THREE.NormalBlending : THREE.AdditiveBlending}
            opacity={isLight ? 0.95 : 1}
          />
        </Points>
      </group>

      {/* Wide scatter particles: Spreading outward into left and right gaps */}
      <group ref={scatterRef}>
        <Points positions={scatterPoints} stride={3}>
          <PointMaterial 
            transparent 
            color={isLight ? "#F58220" : "#0066FF"} 
            size={isLight ? 0.042 : 0.032} 
            sizeAttenuation={true} 
            depthWrite={false}
            blending={isLight ? THREE.NormalBlending : THREE.AdditiveBlending}
            opacity={isLight ? 0.85 : 0.9}
          />
        </Points>
      </group>
    </>
  );
}

export default function Hero3DCore() {
  const mouse = useRef({ x: 0, y: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-85 dark:opacity-95 transition-opacity duration-700">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={theme === 'light' ? 0.95 : 0.65} />
        <directionalLight position={[10, 10, 5]} intensity={1.25} />
        <directionalLight position={[-10, -10, -5]} intensity={0.7} color={theme === 'light' ? "#F58220" : "#00D9E8"} />
        <AICore mouse={mouse} theme={theme} />
      </Canvas>
    </div>
  );
}
