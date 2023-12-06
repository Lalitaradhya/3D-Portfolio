import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import skyScene from '../assets/3d/sky.glb'
import { useFrame } from "@react-three/fiber";
const sky = (isRotating) => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef()
    useFrame((_, delta) => {
      if (isRotating) {
        skyRef.current.rotation.y += 0.04 * delta; // Adjust the rotation speed as needed
      }
    });
  return (
    <mesh ref={skyRef}> 
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default sky









