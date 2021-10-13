import * as THREE from "three";
import React, { Suspense, useState, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, CameraShake, Stage } from "@react-three/drei";
import Car3 from "../../Model/Car3";
import Scene from "../../Model/Scene";
import "./garagestyle.css";
import { MdFormatColorFill } from "react-icons/md";
import { FaGasPump } from "react-icons/fa";
import { GiWideArrowDunk } from "react-icons/gi";
import { proxy, useSnapshot } from "valtio";
import { HexColorPicker } from "react-colorful";
import Background from "../Background";
import Loading from "../Loading";
import Car from "../../Model/Car";
import { BiChevronsDown } from "react-icons/bi";

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
  const [aspect, setAspect] = useState(0);
  const snap = useSnapshot(state);
  const listCar = [
    <Car3
      color={snap.color}
      rotation-y={-Math.PI / 2}
      position={[1, -3.9, -10]}
      scale={1.6}
    />,
    <Car
      color={snap.color}
      rotation-y={Math.PI / 2}
      position={[-2, -3.9, -10]}
      scale={0.8}
    />,
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const fillColor = document.querySelector(".fillColor");
    fillColor.addEventListener("click", (e) => {
      state.open = !state.open;
      e.stopPropagation();
    });
    const width = window.innerWidth;
    const height = window.innerHeight;
    const aspect = width / height;
    setAspect(aspect);
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      <div className="garage-car">
        <Canvas
          className="background"
          dpr={[1, 2]}
          shadows
          camera={{
            fov: 65,
            aspect: aspect,
            near: 1,
            far: 1e4,
            position: [0, 0, 1],
          }}
        >
          {/* <Camera /> */}
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
          {/* Show car */}
          {listCar[index] ? listCar[index] : listCar[0]}
          <Scene />
          {/* <Control /> */}
          <OrbitControls />
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

      <div className="SwapCar">
        <div className="btnSwap up">
          <BiChevronsDown onClick={() => {
            if(index < listCar.length)
            setIndex(index + 1) 
          }} />
        </div>
        <div className="btnSwap down">
          <BiChevronsDown onClick={() => {
            if(index > 0)
            setIndex(index - 1)
          }} />
        </div>
      </div>
    </Suspense>
  );
};

export default Garage;
