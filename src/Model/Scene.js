/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: NEYCER (https://sketchfab.com/NEYCER)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/empty-old-garage-room-778f5663b0c244508342bdc0f7a1db38
title: Empty old Garage room
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import scene from './scene.glb';

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(scene)
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-15.11, 0, 20.12]} scale={[1, 6.14, 1]}>
            <mesh geometry={nodes.Object_4.geometry} material={nodes.Object_4.material} />
            <mesh geometry={nodes.Object_5.geometry} material={nodes.Object_5.material} />
          </group>
          <group position={[15.27, 0, 20.12]} scale={[1, 6.14, 1]}>
            <mesh geometry={nodes.Object_7.geometry} material={nodes.Object_7.material} />
            <mesh geometry={nodes.Object_8.geometry} material={nodes.Object_8.material} />
          </group>
          <group position={[15.27, 0, 0.06]} rotation={[0, Math.PI / 2, 0]} scale={[1, 6.14, 1]}>
            <mesh geometry={nodes.Object_10.geometry} material={nodes.Object_10.material} />
            <mesh geometry={nodes.Object_11.geometry} material={nodes.Object_11.material} />
          </group>
          <group position={[-14.83, 0, 0.06]} rotation={[0, Math.PI / 2, 0]} scale={[1, 6.14, 1]}>
            <mesh geometry={nodes.Object_13.geometry} material={nodes.Object_13.material} />
            <mesh geometry={nodes.Object_14.geometry} material={nodes.Object_14.material} />
          </group>
          <group position={[-14.83, 0, -20]} rotation={[0, -Math.PI / 2, 0]} scale={[1, 6.14, 1]}>
            <mesh geometry={nodes.Object_16.geometry} material={nodes.Object_16.material} />
            <mesh geometry={nodes.Object_17.geometry} material={nodes.Object_17.material} />
          </group>
          <group position={[15.27, 0, -19.93]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1, 6.14, 1]}>
            <mesh geometry={nodes.Object_19.geometry} material={nodes.Object_19.material} />
            <mesh geometry={nodes.Object_20.geometry} material={nodes.Object_20.material} />
          </group>
          <group position={[-14.83, 0, -39.98]} scale={[1, 6.14, 1]}>
            <mesh geometry={nodes.Object_22.geometry} material={nodes.Object_22.material} />
            <mesh geometry={nodes.Object_23.geometry} material={nodes.Object_23.material} />
          </group>
          <group position={[15.27, 0, -39.91]} rotation={[0, -Math.PI / 2, 0]} scale={[1, 6.14, 1]}>
            <mesh geometry={nodes.Object_25.geometry} material={nodes.Object_25.material} />
            <mesh geometry={nodes.Object_26.geometry} material={nodes.Object_26.material} />
          </group>
          <group position={[0, 0, -10.19]} scale={[45.47, 5.94, 59.74]}>
            <mesh geometry={nodes.Object_28.geometry} material={materials['Material.002']} />
            <mesh geometry={nodes.Object_29.geometry} material={nodes.Object_29.material} />
          </group>
          <group position={[0, 5.06, 0.12]} rotation={[0, 0, -Math.PI / 2]} scale={[1, 45.47, 1.1]}>
            <mesh geometry={nodes.Object_31.geometry} material={nodes.Object_31.material} />
          </group>
          <group position={[0, 5.06, 20.11]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1.04, 45.47, 1]}>
            <mesh geometry={nodes.Object_33.geometry} material={nodes.Object_33.material} />
          </group>
          <group position={[0, 5.06, -19.97]} rotation={[0, 0, -Math.PI / 2]} scale={[1, 45.47, 1.1]}>
            <mesh geometry={nodes.Object_35.geometry} material={nodes.Object_35.material} />
          </group>
          <group position={[0, 5.06, -40.01]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1.04, 45.47, 1]}>
            <mesh geometry={nodes.Object_37.geometry} material={nodes.Object_37.material} />
          </group>
          <group position={[0.24, -4.27, -40.04]} scale={[14.08, 1.85, 0.58]}>
            <mesh geometry={nodes.Object_39.geometry} material={materials['Material.001']} />
          </group>
          <group position={[0, 5.53, -1.32]} rotation={[0, 0, -Math.PI / 2]} scale={[0.28, 45.55, 0.28]}>
            <mesh geometry={nodes.Object_41.geometry} material={nodes.Object_41.material} />
          </group>
          <group position={[0, 5.53, 18.87]} rotation={[0, 0, -Math.PI / 2]} scale={[0.28, 45.55, 0.28]}>
            <mesh geometry={nodes.Object_43.geometry} material={nodes.Object_43.material} />
          </group>
          <group position={[0, 5.53, 21.51]} rotation={[0, 0, -Math.PI / 2]} scale={[0.28, 45.55, 0.28]}>
            <mesh geometry={nodes.Object_45.geometry} material={nodes.Object_45.material} />
          </group>
          <group position={[0, 5.53, 1.58]} rotation={[0, 0, -Math.PI / 2]} scale={[0.28, 45.55, 0.28]}>
            <mesh geometry={nodes.Object_47.geometry} material={nodes.Object_47.material} />
          </group>
          <group position={[0, 5.53, -18.54]} rotation={[0, 0, -Math.PI / 2]} scale={[0.28, 45.55, 0.28]}>
            <mesh geometry={nodes.Object_49.geometry} material={nodes.Object_49.material} />
          </group>
          <group position={[0, 5.53, -21.44]} rotation={[0, 0, -Math.PI / 2]} scale={[0.28, 45.55, 0.28]}>
            <mesh geometry={nodes.Object_51.geometry} material={nodes.Object_51.material} />
          </group>
          <group position={[0, 5.53, -38.58]} rotation={[0, 0, -Math.PI / 2]} scale={[0.28, 45.55, 0.28]}>
            <mesh geometry={nodes.Object_53.geometry} material={nodes.Object_53.material} />
          </group>
          <group position={[0, 5.53, -41.43]} rotation={[0, 0, -Math.PI / 2]} scale={[0.28, 45.55, 0.28]}>
            <mesh geometry={nodes.Object_55.geometry} material={nodes.Object_55.material} />
          </group>
          <group position={[0, 0, -10.19]} scale={[45.47, 5.94, 59.74]}>
            <mesh geometry={nodes.Object_57.geometry} material={materials.DOOR} />
          </group>
          <group position={[15.25, 0.04, -9.93]} scale={[0.96, 5.95, 9.08]}>
            <mesh geometry={nodes.Object_59.geometry} material={materials.Material} />
            <mesh geometry={nodes.Object_60.geometry} material={nodes.Object_60.material} />
          </group>
          <group position={[15.32, 0, -6.71]} scale={[0.04, 5.17, 0.04]}>
            <mesh geometry={nodes.Object_62.geometry} material={materials.metal_rod} />
          </group>
          <group position={[9.07, -4.8, 0.36]} rotation={[Math.PI / 2, 0, -1.59]} scale={2.42}>
            <mesh geometry={nodes.Object_64.geometry} material={nodes.Object_64.material} />
            <mesh geometry={nodes.Object_65.geometry} material={nodes.Object_65.material} />
          </group>
          <group position={[0.23, -4.8, 0.26]} rotation={[Math.PI / 2, 0, -1.53]} scale={[2.42, 2.42, 2.42]}>
            <mesh geometry={nodes.Object_67.geometry} material={nodes.Object_67.material} />
            <mesh geometry={nodes.Object_68.geometry} material={nodes.Object_68.material} />
          </group>
          <group position={[-8.87, -4.8, 0.15]} rotation={[Math.PI / 2, 0, -1.54]} scale={2.42}>
            <mesh geometry={nodes.Object_70.geometry} material={nodes.Object_70.material} />
            <mesh geometry={nodes.Object_71.geometry} material={nodes.Object_71.material} />
          </group>
          <group position={[-8.79, -4.8, -20.18]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={2.42}>
            <mesh geometry={nodes.Object_73.geometry} material={nodes.Object_73.material} />
            <mesh geometry={nodes.Object_74.geometry} material={nodes.Object_74.material} />
          </group>
          <group position={[9.9, -4.8, -19.97]} rotation={[Math.PI / 2, 0, 1.5]} scale={[2.42, 2.42, 2.42]}>
            <mesh geometry={nodes.Object_76.geometry} material={nodes.Object_76.material} />
            <mesh geometry={nodes.Object_77.geometry} material={nodes.Object_77.material} />
          </group>
          <group position={[0, -4.8, -19.97]} rotation={[Math.PI / 2, 0, 1.61]} scale={2.42}>
            <mesh geometry={nodes.Object_79.geometry} material={nodes.Object_79.material} />
            <mesh geometry={nodes.Object_80.geometry} material={nodes.Object_80.material} />
          </group>
          <group position={[0, 19.56, 0]} rotation={[0, Math.PI / 2, 0]} scale={3.59}>
            <mesh geometry={nodes.Object_82.geometry} material={materials['Material.003']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(scene)