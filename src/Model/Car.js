/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: rossty3d (https://sketchfab.com/rossty3d)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/lamborghini-huracan-low-poly-9e76ca23dbb24e0a963057d5cfdc3675
title: Lamborghini Huracan (low-poly)
*/
import Car from './car.glb'

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(Car)
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, -0.01]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 1.6, 3.75]} rotation={[-3.13, 0, Math.PI / 2]} scale={[-1.23, 1.22, 1.24]}>
            <mesh geometry={nodes.Object_4.geometry} material={nodes.Object_4.material} />
          </group>
          <group position={[0, 1.6, 3.75]} rotation={[-3.13, 0, Math.PI / 2]} scale={[-1.23, 1.22, 1.24]}>
            <mesh geometry={nodes.Object_6.geometry} material={nodes.Object_6.material} />
          </group>
          <group position={[0, 2.85, -1.7]} rotation={[0.01, 0, Math.PI]} scale={[-0.37, 0.21, 0.21]}>
            <mesh geometry={nodes.Object_8.geometry} material={nodes.Object_8.material} />
          </group>
          <group position={[0, 0.43, 11.32]} rotation={[0.01, 0, Math.PI]} scale={[-0.09, 0.09, 0.09]}>
            <mesh geometry={nodes.Object_10.geometry} material={nodes.Object_10.material} />
          </group>
          <group position={[-0.01, 0.75, 11.09]} rotation={[1.58, 0, 0]} scale={0.56}>
            <mesh geometry={nodes.Object_12.geometry} material={nodes.Object_12.material} />
          </group>
          <group position={[0, 1.88, 10.2]} rotation={[-3.13, 0, -Math.PI]} scale={[0.68, 0.68, 0.68]}>
            <mesh geometry={nodes.Object_14.geometry} material={nodes.Object_14.material} />
          </group>
          <group position={[0, -0.2, 12.59]} rotation={[-3.13, 0, -Math.PI]} scale={[1.34, 1.34, 1.34]}>
            <mesh geometry={nodes.Object_16.geometry} material={nodes.Object_16.material} />
            <mesh geometry={nodes.Object_17.geometry} material={materials.headlights_emission} />
          </group>
          <group position={[0, 1.86, 10.25]} rotation={[-3.13, 0, -Math.PI]} scale={[1.34, 1.34, 1.34]}>
            <mesh geometry={nodes.Object_19.geometry} material={nodes.Object_19.material} />
          </group>
          <group position={[0, 1.54, 10.79]} rotation={[-3.13, 0, Math.PI / 2]} scale={[-1.25, 1.22, 1.24]}>
            <mesh geometry={nodes.Object_21.geometry} material={nodes.Object_21.material} />
          </group>
          <group position={[0, -0.12, 3.97]} rotation={[-3.13, 0, -Math.PI]} scale={[1.34, 1.34, 1.34]}>
            <mesh geometry={nodes.Object_23.geometry} material={nodes.Object_23.material} />
          </group>
          <group position={[0, 1.6, 3.75]} rotation={[-3.13, 0, Math.PI / 2]} scale={[-1.23, 1.22, 1.24]}>
            <mesh geometry={nodes.Object_25.geometry} material={nodes.Object_25.material} />
            <mesh geometry={nodes.Object_26.geometry} material={nodes.Object_26.material} />
          </group>
          <group position={[0, 2.69, 5.61]} rotation={[-3.13, 0, -Math.PI]} scale={[0.23, 0.23, 0.23]}>
            <mesh geometry={nodes.Object_28.geometry} material={nodes.Object_28.material} />
          </group>
          <group position={[0, 1.15, -2.63]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[-1.23, 1.22, 1.24]}>
            <mesh geometry={nodes.Object_30.geometry} material={nodes.Object_30.material} />
          </group>
          <group position={[0, 1.6, 3.75]} rotation={[-3.13, 0, Math.PI / 2]} scale={[-1.23, 1.22, 1.24]}>
            <mesh geometry={nodes.Object_32.geometry} material={nodes.Object_32.material} />
          </group>
          <group position={[0, 1.6, 3.75]} rotation={[-3.13, 0, Math.PI / 2]} scale={[-1.23, 1.22, 1.24]}>
            <mesh geometry={nodes.Object_34.geometry} material={nodes.Object_34.material} />
          </group>
          <group position={[0, 1.6, 3.75]} rotation={[-3.13, 0, Math.PI / 2]} scale={[-1.23, 1.22, 1.24]}>
            <mesh geometry={nodes.Object_36.geometry} material={nodes.Object_36.material} />
          </group>
          <group position={[0, 1.89, 3.79]} rotation={[0.01, 0, Math.PI / 2]} scale={[-1, 1, 1]}>
            <mesh geometry={nodes.Object_38.geometry} material={nodes.Object_38.material} />
          </group>
          <group position={[0, 1.6, 3.75]} rotation={[-3.13, 0, Math.PI / 2]} scale={[-1.23, 1.22, 1.24]}>
            <mesh geometry={nodes.Object_40.geometry} material={nodes.Object_40.material} />
          </group>
          <group position={[0, 1.6, 3.75]} rotation={[-3.13, 0, Math.PI / 2]} scale={[-1.23, 1.22, 1.24]}>
            <mesh geometry={nodes.Object_42.geometry} material={nodes.Object_42.material} />
          </group>
          <group position={[0, 1.46, 10.9]} rotation={[-3.13, 0, Math.PI / 2]} scale={[-1.17, 1.16, 1.18]}>
            <mesh geometry={nodes.Object_44.geometry} material={materials.front_hood_logo} />
          </group>
          <group position={[0, 1.6, 3.75]} rotation={[-3.13, 0, Math.PI / 2]} scale={[-1.23, 1.22, 1.24]}>
            <mesh geometry={nodes.Object_46.geometry} material={nodes.Object_46.material} />
          </group>
          <group position={[0, 1.6, 3.75]} rotation={[-3.13, 0, Math.PI / 2]} scale={[-1.23, 1.22, 1.24]}>
            <mesh geometry={nodes.Object_48.geometry} material={nodes.Object_48.material} />
          </group>
          <group position={[0, 2.59, 5.71]} rotation={[-3.13, 0, Math.PI]} scale={[-1.34, 1.34, 1.34]}>
            <mesh geometry={nodes.Object_50.geometry} material={nodes.Object_50.material} />
          </group>
          <group position={[0, 1.6, 3.75]} rotation={[-3.13, 0, Math.PI / 2]} scale={[-1.23, 1.22, 1.24]}>
            <mesh geometry={nodes.Object_52.geometry} material={materials.headlights_inside_dark_matte} />
          </group>
          <group position={[0, 1.86, 10.25]} rotation={[-3.13, 0, -Math.PI]} scale={[1.34, 1.34, 1.34]}>
            <mesh geometry={nodes.Object_54.geometry} material={nodes.Object_54.material} />
            <mesh geometry={nodes.Object_55.geometry} material={nodes.Object_55.material} />
          </group>
          <group position={[0, 1.6, 3.75]} rotation={[-3.13, 0, Math.PI / 2]} scale={[-1.23, 1.22, 1.24]}>
            <mesh geometry={nodes.Object_57.geometry} material={nodes.Object_57.material} />
          </group>
          <group position={[0, 1.6, 3.75]} rotation={[-3.13, 0, Math.PI / 2]} scale={[-1.23, 1.22, 1.24]}>
            <mesh geometry={nodes.Object_59.geometry} material={nodes.Object_59.material} />
          </group>
          <group position={[0.01, 3.14, -1.1]} scale={[1.54, 1, 1]}>
            <mesh geometry={nodes.Object_61.geometry} material={nodes.Object_61.material} />
          </group>
          <group position={[0.02, 2.62, -3.04]} scale={0.03}>
            <mesh geometry={nodes.Object_63.geometry} material={nodes.Object_63.material} />
          </group>
          <group position={[0, 1.6, 3.75]} rotation={[-3.13, 0, Math.PI / 2]} scale={[-1.23, 1.22, 1.24]}>
            <mesh geometry={nodes.Object_65.geometry} material={nodes.Object_65.material} />
          </group>
          <group position={[0, 1.6, 3.75]} rotation={[-3.13, 0, Math.PI / 2]} scale={[-1.23, 1.22, 1.24]}>
            <mesh geometry={nodes.Object_67.geometry} material={nodes.Object_67.material} />
          </group>
          <group position={[0, 1.6, 3.75]} rotation={[-3.13, 0, Math.PI / 2]} scale={[-1.23, 1.22, 1.24]}>
            <mesh geometry={nodes.Object_69.geometry} material={nodes.Object_69.material} />
          </group>
          <group position={[0, 1.6, 3.75]} rotation={[-3.13, 0, Math.PI / 2]} scale={[-1.23, 1.22, 1.24]}>
            <mesh geometry={nodes.Object_71.geometry} material={nodes.Object_71.material} />
          </group>
          <group position={[0, 1.6, 3.75]} rotation={[-3.13, 0, Math.PI / 2]} scale={[-1.23, 1.22, 1.24]}>
            <mesh geometry={nodes.Object_73.geometry} material={nodes.Object_73.material} />
          </group>
          <group position={[0, 1.6, 3.75]} rotation={[-3.13, 0, Math.PI / 2]} scale={[-1.23, 1.22, 1.24]}>
            <mesh geometry={nodes.Object_75.geometry} material={nodes.Object_75.material} />
          </group>
          <group position={[2.12, 1.2, -2.42]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.2, 0.58, 0.2]}>
            <mesh geometry={nodes.Object_77.geometry} material={materials.exhaust_pipes} />
          </group>
          <group position={[0, 1.39, -3.13]} scale={1.05}>
            <mesh geometry={nodes.Object_79.geometry} material={materials.reg_plate} />
            <mesh geometry={nodes.Object_80.geometry} material={materials.reg_plate_bg} />
          </group>
          <group position={[0, 1.15, -2.63]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[-1.23, 1.22, 1.24]}>
            <mesh geometry={nodes.Object_82.geometry} material={nodes.Object_82.material} />
          </group>
          <group position={[1.85, 2.72, -2.77]} rotation={[-Math.PI, 0, 0]} scale={[-0.02, 0.02, 0.02]}>
            <mesh geometry={nodes.Object_84.geometry} material={materials.Material} />
          </group>
          <group position={[-0.02, 2.77, -3.07]} rotation={[1.2, 0, Math.PI]} scale={[0, 0, 0]}>
            <mesh geometry={nodes.Object_86.geometry} material={materials.logo_rear} />
          </group>
          <group position={[0, 1.6, 3.75]} rotation={[-3.13, 0, Math.PI / 2]} scale={[-1.23, 1.22, 1.24]}>
            <mesh geometry={nodes.Object_88.geometry} material={nodes.Object_88.material} />
          </group>
          <group position={[2.62, 1.18, -0.81]} rotation={[0, 0, -Math.PI / 2]} scale={[0.72, 0.03, 0.72]}>
            <mesh geometry={nodes.Object_90.geometry} material={nodes.Object_90.material} />
          </group>
          <group position={[2.86, 1.19, -0.8]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[-0.04, 0.04, 0.04]}>
            <mesh geometry={nodes.Object_92.geometry} material={nodes.Object_92.material} />
          </group>
          <group position={[2.88, 1.18, -0.8]} rotation={[0, Math.PI / 2, 0]} scale={[0.81, 0.81, 0.89]}>
            <mesh geometry={nodes.Object_94.geometry} material={nodes.Object_94.material} />
          </group>
          <group position={[2.64, 1.18, -0.81]} rotation={[-3.12, 0, 0]} scale={[-0.05, 0.05, 0.05]}>
            <mesh geometry={nodes.Object_96.geometry} material={nodes.Object_96.material} />
          </group>
          <group position={[2.63, 1.36, -0.17]} rotation={[2.81, 0, -Math.PI]} scale={[-3.47, 3.47, 3.47]}>
            <mesh geometry={nodes.Object_98.geometry} material={nodes.Object_98.material} />
          </group>
          <group position={[-2.62, 1.18, -0.81]} rotation={[0, 0, Math.PI / 2]} scale={[-0.72, 0.03, 0.72]}>
            <mesh geometry={nodes.Object_100.geometry} material={nodes.Object_100.material} />
          </group>
          <group position={[-2.87, 1.19, -0.8]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.04}>
            <mesh geometry={nodes.Object_102.geometry} material={nodes.Object_102.material} />
          </group>
          <group position={[-2.88, 1.18, -0.8]} rotation={[0, -Math.PI / 2, 0]} scale={[-0.81, 0.81, 0.89]}>
            <mesh geometry={nodes.Object_104.geometry} material={nodes.Object_104.material} />
          </group>
          <group position={[-2.64, 1.18, -0.81]} rotation={[-3.12, 0, 0]} scale={[0.05, 0.05, 0.05]}>
            <mesh geometry={nodes.Object_106.geometry} material={nodes.Object_106.material} />
          </group>
          <group position={[-2.63, 1.36, -0.17]} rotation={[2.81, 0, -Math.PI]} scale={[3.47, 3.47, 3.47]}>
            <mesh geometry={nodes.Object_108.geometry} material={nodes.Object_108.material} />
          </group>
          <group position={[2.58, 1.12, 7.83]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[-0.73, 0.03, 0.73]}>
            <mesh geometry={nodes.Object_110.geometry} material={nodes.Object_110.material} />
          </group>
          <group position={[2.82, 1.13, 7.8]} rotation={[-1.57, 0, Math.PI / 2]} scale={0.03}>
            <mesh geometry={nodes.Object_112.geometry} material={nodes.Object_112.material} />
          </group>
          <group position={[2.83, 1.12, 7.8]} rotation={[0, Math.PI / 2, 0]} scale={[-0.77, 0.77, 0.85]}>
            <mesh geometry={nodes.Object_114.geometry} material={nodes.Object_114.material} />
          </group>
          <group position={[2.65, 1.12, 7.81]} rotation={[-0.02, 0, -Math.PI]} scale={[0.04, 0.04, 0.04]}>
            <mesh geometry={nodes.Object_116.geometry} material={nodes.Object_116.material} />
          </group>
          <group position={[2.59, 1.3, 7.18]} rotation={[0.33, 0, 0]} scale={[3.53, 3.53, 3.53]}>
            <mesh geometry={nodes.Object_118.geometry} material={nodes.Object_118.material} />
          </group>
          <group position={[-2.59, 1.12, 7.83]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[0.73, 0.03, 0.73]}>
            <mesh geometry={nodes.Object_120.geometry} material={nodes.Object_120.material} />
          </group>
          <group position={[-2.82, 1.13, 7.8]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[-0.03, 0.03, 0.03]}>
            <mesh geometry={nodes.Object_122.geometry} material={nodes.Object_122.material} />
          </group>
          <group position={[-2.84, 1.12, 7.8]} rotation={[0, -Math.PI / 2, 0]} scale={[0.77, 0.77, 0.85]}>
            <mesh geometry={nodes.Object_124.geometry} material={nodes.Object_124.material} />
          </group>
          <group position={[-2.66, 1.12, 7.81]} rotation={[-0.02, 0, -Math.PI]} scale={[-0.04, 0.04, 0.04]}>
            <mesh geometry={nodes.Object_126.geometry} material={nodes.Object_126.material} />
          </group>
          <group position={[-2.6, 1.3, 7.18]} rotation={[0.33, 0, 0]} scale={[-3.53, 3.53, 3.53]}>
            <mesh geometry={nodes.Object_128.geometry} material={nodes.Object_128.material} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(Car)
