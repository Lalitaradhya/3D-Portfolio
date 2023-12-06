/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: glasgowmuseums (https://sketchfab.com/glasgowmuseums)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/knight-in-prayer-4425-no-background-2aacb306a9d6488bb68fea6a1320a5c6
Title: Knight in Prayer (44.25) - no background
*/

import React, { useRef,useEffect } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import knightScene from '../assets/3d/knight.glb' 
import {a} from '@react-spring/three'

const Knight = (props) =>  {
    const knightRef = useRef()
  const { nodes, materials } = useGLTF(
    (knightScene)
  );
  return (
    <a.group ref={knightRef}{...props}>
      <group position={[1.525, 0, 0.075]} rotation={[-Math.PI / 2, 0, -1.164]}>
        <group
          position={[1.328, -0.64, -2.96]}
          rotation={[-0.093, -0.201, 2.184]}
        >
          <mesh
          
            geometry={nodes.mesh_0.geometry}
            material={materials.Material_0}
          />
          <mesh
         
            geometry={nodes.mesh_0_1.geometry}
            material={materials.Material_0}
          />
          <mesh
         
            geometry={nodes.mesh_0_2.geometry}
            material={materials.Material_0}
          />
          <mesh
            
            geometry={nodes.mesh_0_3.geometry}
            material={materials.Material_0}
          />
          <mesh
           
            geometry={nodes.mesh_0_4.geometry}
            material={materials.Material_0}
          />
        </group>
      </group>
    </a.group>
  );
}

export default Knight