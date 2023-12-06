/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Austin Beaulier (https://sketchfab.com/Austin.Beaulier)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/concrete-statue-east-jesus-e71dd630874c4a9ab72042e3f1f3e8d8
Title: Concrete Statue (East Jesus)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import jesusScene from '../assets/3d/jesus.glb'
import {a} from '@react-spring/three'

const Jesus = (props) => {
    const jesusRef = useRef()
  const { nodes, materials } = useGLTF(jesusScene);
  return (
    <a.group ref={jesusRef} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
         
          geometry={nodes.Object_2.geometry}
          material={materials.ConcreteStatue4_u1_v1}
        />
        <mesh
          
          geometry={nodes.Object_3.geometry}
          material={materials.ConcreteStatue4_u1_v1}
        />
        <mesh
      
          geometry={nodes.Object_4.geometry}
          material={materials.ConcreteStatue4_u1_v1}
        />
      </group>
    </a.group>
  );
}

export default Jesus