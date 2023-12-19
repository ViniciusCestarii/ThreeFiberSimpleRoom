"use client"
import { Canvas } from '@react-three/fiber'
import { Fisheye, CameraControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { Level, Sudo, Camera, Cactus, Box, Yeah } from '@/components/three-fiber/scene'

export default function App() {
  return (
    <Canvas flat>
      <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
      <ambientLight intensity={Math.PI / 2} />
      <group scale={20} position={[5, -11, -5]}>
        <Level />
        <Sudo />
        <Yeah />
        <Camera />
        <Cactus />
        <Box position={[-0.8, 1.4, 0.4]} scale={0.15} />
      </group>
      <Environment preset="city" background blur={1} />
      <PerspectiveCamera makeDefault position={[0, 0, 18.5]} />
    </Canvas>
  )
}
