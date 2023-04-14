import React from 'react';
import * as THREE from "three";
import { useRef } from "react";
// const Spline = React.lazy(() => import('@splinetool/react-spline'));
import Spline from "@splinetool/react-spline"
import { Clone, Float, PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useLerpedMouse } from "./hooks";

const cameraTargetPosition = new THREE.Vector3(0, -10, 211);
export function AboutMe({ scroll, ...props }) {
   





  
    return (
        // <Spline scene="https://prod.spline.design/8dV3Z68gLHfVRzp4/scene.splinecode" />
        <Spline onWheel={{}} scene='../../sceneAboutMe.splinecode' />
        
    )
}