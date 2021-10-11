import * as THREE from "three";
import React, { Suspense, useState, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, CameraShake } from "@react-three/drei";
import Car3 from "../../Model/Car3";
import "./garagestyle.css";
import { MdFormatColorFill } from "react-icons/md";
import { FaGasPump } from "react-icons/fa";
import { GiWideArrowDunk } from "react-icons/gi";
import { proxy, useSnapshot } from "valtio";
import { HexColorPicker } from "react-colorful";

const state = proxy({
  current: null,
  color: "#ffffff",
  open: false,
});

function Picker() {
  const snap = useSnapshot(state);
  return (
    <div>
      <HexColorPicker
        className="picker"
        color={snap.color}
        onChange={(color) => (state.color = color)}
      />
    </div>
  );
}

const Garage = () => {
  const snap = useSnapshot(state);
  useEffect(() => {
    const fillColor = document.querySelector(".fillColor");
    fillColor.addEventListener("click", () => {
      state.open = !state.open;
    });
  }, []);
  return (
    <div className="garage-car">
      <Canvas
        className="background"
        dpr={[1, 2]}
        shadows
        camera={{ position: [0, 0, 2.5], fov: 75 }}
      >
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
          color={snap.color}
          rotation-y={Math.PI / 1.6}
          position={[1, 0, 0]}
          scale={0.3}
        />
      </Canvas>
      <div className="parameter">
        <div className="para">
          <div className="stickText">
            <p>Speed</p>
            <p>123km/h</p>
          </div>
          <div className="measuringStick"></div>
        </div>
        <div className="para">
          <div className="stickText">
            <p>Speed</p>
            <p>123km/h</p>
          </div>
          <div className="measuringStick"></div>
        </div>
        <div className="para">
          <div className="stickText">
            <p>Speed</p>
            <p>123km/h</p>
          </div>
          <div className="measuringStick"></div>
        </div>
        <div className="para">
          <div className="stickText">
            <p>Speed</p>
            <p>123km/h</p>
          </div>
          <div className="measuringStick"></div>
        </div>
        <div className="para">
          <div className="stickText">
            <p>Speed</p>
            <p>123km/h</p>
          </div>
          <div className="measuringStick"></div>
        </div>
      </div>

      {/* Update */}
      <div className="updateCar">
        <div className="updateItem fillColor">
          <MdFormatColorFill />
          {snap.open && <Picker onClick={(e) => e.stopPropagation()} />}
        </div>
        <div className="updateItem">
          <FaGasPump />
        </div>
        <div className="updateItem">
          <GiWideArrowDunk />
        </div>

        <div className="updateBtn">
          <button>Update Now</button>
        </div>
      </div>
    </div>
  );
};

export default Garage;
