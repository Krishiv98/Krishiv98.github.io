import React from 'react';
import * as THREE from "three";

// const Spline = React.lazy(() => import('@splinetool/react-spline'));
import Spline from "@splinetool/react-spline"
import { Clone, Float, PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useLerpedMouse } from "../hooks";

import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "../scenes/Scene";
import { Overlay } from "../components/Overlay";

const cameraTargetPosition = new THREE.Vector3(0, -10, 211);
export function AboutMe({ scroll, ...props }) {
   
    return (
        <>
         {/* <Spline scene="https://prod.spline.design/8dV3Z68gLHfVRzp4/scene.splinecode" /> */}
        {/* <Spline onWheel={{}} scene='../../sceneAboutMe.splinecode' /> */}
        <Canvas shadows flat linear>
        <Suspense fallback={<p>Loading</p>}>
          <Scene scroll={scroll} />
        </Suspense>
      </Canvas>
      <Overlay scroll={scroll} />
      </>
    )
}