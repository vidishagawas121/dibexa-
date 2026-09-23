import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../contexts/ThemeContext';

// An abstract rotating AI core with glowing particles
function AICore({ mouse, theme }: { mouse: React.MutableRefObject<{ x: number, y: number }>, theme: string }) {
  const isLight = theme === 'light';
  const groupRef = useRef<THREE.Group>(null);
  
  // Generate random points on a sphere surface for the neural/particle effect
  const points = useMemo(() => {
    const p = new Float32Array(3000);
    for (let i = 0; i < 3000; i++) {
      const r = 2.5 + Math.random() * 0.2; // radius with slight variation
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      p[i * 3] = x;
      p[i * 3 + 1] = y;
      p[i * 3 + 2] = z;
    }
    return p;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Base rotation over time
      const timeRotationY = state.clock.getElapsedTime() * 0.15;
      const timeRotationZ = state.clock.getElapsedTime() * 0.05;
      
      // Target rotation based on global mouse position
      const targetRotationX = -(mouse.current.y * 0.5);
      const targetRotationY = timeRotationY + (mouse.current.x * 0.5);
      
      // Smoothly interpolate towards target
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05);
      groupRef.current.rotation.z = timeRotationZ;
      
      // Slight floating effect enhanced by mouse
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2 + (mouse.current.y * 0.1);
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, mouse.current.x * 0.2, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Inner solid/wireframe geometric core */}
      <Sphere args={[1.8, 32, 32]}>
        <meshStandardMaterial 
          color={isLight ? "#0033CC" : "#0055FF"} 
          wireframe 
          transparent 
          opacity={isLight ? 0.15 : 0.15} 
          emissive={isLight ? "#0055FF" : "#00F0FF"}
          emissiveIntensity={isLight ? 0.2 : 0.5}
        />
      </Sphere>
      
      <Sphere args={[1.2, 16, 16]}>
        <meshBasicMaterial 
          color={isLight ? "#6B21A8" : "#8A2BE2"} 
          wireframe 
          transparent 
          opacity={isLight ? 0.4 : 0.3} 
        />
      </Sphere>

      {/* Outer neural particle cloud */}
      <Points positions={points} stride={3}>
        <PointMaterial 
          transparent 
          color={isLight ? "#0055FF" : "#00F0FF"} 
          size={isLight ? 0.04 : 0.03} 
          sizeAttenuation={true} 
          depthWrite={false}
          blending={isLight ? THREE.NormalBlending : THREE.AdditiveBlending}
          opacity={isLight ? 0.7 : 1}
        />
      </Points>
    </group>
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
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60 dark:opacity-80">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={theme === 'light' ? 0.8 : 0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color={theme === 'light' ? "#0055FF" : "#8A2BE2"} />
        <AICore mouse={mouse} theme={theme} />
      </Canvas>
    </div>
  );
}
