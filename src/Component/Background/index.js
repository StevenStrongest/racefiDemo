import React, { Suspense, useState, useRef, useEffect, useMemo } from "react";
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, CameraShake } from "@react-three/drei";
import Scene from "../../Model/Scene";
import Car3 from "../../Model/Car3";
import "./backgroundstyle.css";
import { proxy, useSnapshot } from "valtio";
import { HexColorPicker } from "react-colorful";
import CameraControls from 'camera-controls'

function Camera() {

  CameraControls.install({ THREE });
  const camera = useThree((state) => state.camera);

  const gl = useThree((state) => state.gl);
  const controls = useMemo(() => new CameraControls(camera, gl.domElement), [])
  
  var ism = false,
  mdx = 0,
  mdy = 0,
  dp = 0,
  dy = 0,
  cam_p = 70,
  cam_y = 270,
  cmx = 0,
  cmy = 0,
  cam_d = 250;
let dirY = "down";
let cam_t = "auto";
  return useFrame((state, delta) =>{

  switch (cam_t) {
    case "auto":
        if (ism) {
            if (Math.abs(mdx - cmx) >= 1) {
                dy = (mdx - cmx) / 6
            }
            dp = (mdy - cmy) / 6
        } else {
            if (cam_p < 89 && dirY == "down") {
                cam_p += .02;
            } else if (cam_p > 88 && dirY == "down") {
                dirY = "up"
            } else if (cam_p > 57 && dirY == "up") {
                cam_p -= .002
            } else if (cam_p < 58 && dirY == "up") {
                dirY = "down"
            }
            cam_y -= .1
        }
        cam_p += dp;
        cam_y -= dy;
        if (cam_p >= 90) {
            cam_p = 89.9
        } else if (cam_p <= 56) {
            cam_p = 56.1
        }
        dy *= .7;
        dp *= .7;
        break;
    case "free":
        if (ism) {
            if (Math.abs(mdx - cmx) >= 1) {
                dy = (mdx - cmx) / 6
            }
            dp = (mdy - cmy) / 6
        }
        cam_p += dp;
        cam_y -= dy;
        if (cam_p >= 90) {
            cam_p = 89.9
        } else if (cam_p <= 56) {
            cam_p = 56.1
        }
        dy *= .7;
        dp *= .7;
        break
}
    state.camera.position.lerp( new THREE.Vector3(cam_d *
      Math.sin((cam_p * Math.PI) / 180) *
     Math.cos((cam_y * Math.PI) / 180),
     cam_d * Math.cos((cam_p * Math.PI) / 1),
     cam_d *
     Math.sin((cam_p * Math.PI) / 180) *
     Math.sin((cam_y * Math.PI) / 180))
   , 0.0001);

  state.camera.updateProjectionMatrix();
  controls.setLookAt({x: 0, y: 0, z: 0});



  })
}

  const Control = () =>{
  //   var ism = false,
  //   mdx = 0,
  //   mdy = 0,
  //   dp = 0,
  //   dy = 0,
  //   cam_p = 70,
  //   cam_y = 270,
  //   cmx = 0,
  //   cmy = 0,
  //   cam_d = 250;
  // var dirY = "down";
  // var cam_t = "auto";

    useThree(({ camera }) => {

    //   switch (cam_t) {
    //     case "auto":
    //         if (ism) {
    //             if (Math.abs(mdx - cmx) >= 1) {
    //                 dy = (mdx - cmx) / 6
    //             }
    //             dp = (mdy - cmy) / 6
    //         } else {
    //             if (cam_p < 89 && dirY == "down") {
    //                 cam_p += .02
    //             } else if (cam_p > 88 && dirY == "down") {
    //                 dirY = "up"
    //             } else if (cam_p > 57 && dirY == "up") {
    //                 cam_p -= .02
    //             } else if (cam_p < 58 && dirY == "up") {
    //                 dirY = "down"
    //             }
    //             cam_y -= .1
    //         }
    //         cam_p += dp;
    //         cam_y -= dy;
    //         if (cam_p >= 90) {
    //             cam_p = 89.9
    //         } else if (cam_p <= 56) {
    //             cam_p = 56.1
    //         }
    //         dy *= .7;
    //         dp *= .7;
    //         break;
    //     case "free":
    //         if (ism) {
    //             if (Math.abs(mdx - cmx) >= 1) {
    //                 dy = (mdx - cmx) / 6
    //             }
    //             dp = (mdy - cmy) / 6
    //         }
    //         cam_p += dp;
    //         cam_y -= dy;
    //         if (cam_p >= 90) {
    //             cam_p = 89.9
    //         } else if (cam_p <= 56) {
    //             cam_p = 56.1
    //         }
    //         dy *= .7;
    //         dp *= .7;
    //         break
    // }

    //   camera.position.x = cam_d *
    //   Math.sin((cam_p * Math.PI) / 180) *
    //  Math.cos((cam_y * Math.PI) * 0.1);

    //  camera.position.y = cam_d * Math.cos((cam_p * Math.PI) * 0.1/ 180);

    //  camera.position.z =  cam_d *
    //  Math.sin((cam_p * Math.PI) / 180) *
    //  Math.sin((cam_y * Math.PI) / 180);
    // setInterval(() =>{
    //   camera.position.lerp(new THREE.Vector3(0,6.12332e-17,1), 1);
    // }, 8000);

    // setInterval(() =>{
    //   camera.position.lerp(new THREE.Vector3(-23,-0.3458167,-6.77777), 1);
    // }, 16000)
    // camera.lookAt(0,0,0);
    })
    return null;
  }

const Background = () => {
  const [aspect, setAspect] = useState(0);
  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const aspect = width / height;
    setAspect(aspect);
  }, []);

  return (
    <>
      <Canvas
        className="background"
        dpr={[1, 2]}
        shadows
        camera={{ fov: 65, aspect: aspect, near: 1, far: 1e4, position: [0,0,1]}}>
        <Camera />
        <color attach="background" args={["#101010"]} />
        <fog attach="fog" args={["#101010", 10, 50]} />
        <ambientLight position={[16777215, 1, 100]} />
        <directionalLight
          position={[-5, 5, 5]}
          castShadow
          shadow-mapSize-width={2400}
          shadow-mapSize-height={2400}
        />
        <pointLight position={[-5, 5, 5]} />
        <Car3 rotation-y={-Math.PI / 2} position={[1, -3.9, -10]} scale={1.6} />
        <Scene />
        {/* <Control /> */}
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default Background;
