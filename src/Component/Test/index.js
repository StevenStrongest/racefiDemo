import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useCubeTexture, useTexture } from "@react-three/drei";
import * as THREE from "three";
import "./teststyle.css";
import px from "../../Assets/images/test/px.jpg";
import py from "../../Assets/images/test/py.jpg";
import pz from "../../Assets/images/test/pz.jpg";
import nx from "../../Assets/images/test/nx.jpg";
import ny from "../../Assets/images/test/ny.jpg";
import nz from "../../Assets/images/test/nz.jpg";
import fs01 from "../../Assets/images/test/fs01.png";
import g01 from "../../Assets/images/test/g01.jpg";
import f01 from "../../Assets/images/test/f01.jpg";
import m_01_g_01_g01_js from "./g01.js";
import { useEffect } from "react";

const Test = () => {

  useEffect(() =>{
    const vp = document.createElement("div");
    document.querySelector(".test").appendChild(vp);
    const cam = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1e4
    );
    const s = new THREE.Scene();
    s.add(cam);
    var a = new THREE.AmbientLight(16777215, 1, 100);
    s.add(a);
    var b = new THREE.DirectionalLight(16777215, 1, 700);
    b.position.y = 400;
    s.add(b);
    const cl = new THREE.SpotLight(16777215, 1, 700);
    s.add(cl);
    const d = [px, py, pz, nx, ny, nz];
    var e = THREE.ImageUtils.loadTextureCube(d);
    const garage = new THREE.Object3D();
    var f = new THREE.MeshBasicMaterial({
      map: THREE.ImageUtils.loadTexture(g01),
    });
    const g = new THREE.Loader();
    g.load(m_01_g_01_g01_js, function (a) {
      var b = new THREE.Mesh(a, f);
      b.scale.set(0.9, 0.9, 0.9);
      b.position.y = -15;
      garage.add(b);
    });
    var h = THREE.ImageUtils.loadTexture(f01);
    h.wrapS = h.wrapT = THREE.RepeatWrapping;
    h.repeat.set(10, 10);
    var i = new THREE.Mesh(new THREE.PlaneGeometry(1100, 1100, 1, 1), new THREE.MeshBasicMaterial({
        map: h
    }));
    i.position.y = -17;
    i.rotation.x = -Math.PI / 2;
    garage.add(i);
    var j = new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture(fs01),
        transparent: true
    });
    var k = new THREE.Mesh(new THREE.PlaneGeometry(1100, 1100, 1, 1), j);
    k.position.y = -16;
    k.rotation.x = -Math.PI / 2;
    garage.add(k);
    garage.rotation.y = Math.PI / 2;
    s.add(garage);
  }, [])

  return <div className="test"></div>;
};

export default Test;
