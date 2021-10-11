import * as THREE from "three";
import React, { Suspense, useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, CameraShake } from "@react-three/drei";
import Scene from "../../Model/Scene";
import Car3 from "../../Model/Car3";
import "./backgroundstyle.css";
import { proxy, useSnapshot } from "valtio";
import { HexColorPicker } from "react-colorful";

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return (
    <OrbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
      maxAzimuthAngle={Math.PI / 2}
      maxPolarAngle={Math.PI}
      minAzimuthAngle={-Math.PI / 2}
      minPolarAngle={0}
    />
  );
};

const Background = () => {
  return (
    <>
      <Canvas
        className="background"
        dpr={[1, 2]}
        shadows
        camera={{ position: [0, 0, 2], fov: 75 }}
      >
        <CameraControls />
        <color attach="background" args={["#101010"]} />
        <fog attach="fog" args={["#101010", 10, 50]} />
        <ambientLight />
        <directionalLight
          position={[-5, 5, 5]}
          castShadow
          shadow-mapSize-width={2400}
          shadow-mapSize-height={2400}
        />
        <Car3
          rotation-y={-Math.PI / 2}
          position={[1, -3.9, -10]}
          scale={1.6}
        />
        <Scene />
      </Canvas>
    </>
  );
};

export default Background;
