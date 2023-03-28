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
    const camera = useRef();
    const sceneContent = useRef();
    const mouse = useLerpedMouse();
    const size = useThree((state) => state.size);
    const isMobile = size.width < 768;
  
    const lerpedScroll = useRef(0);
    useFrame(() => {
        // lerp the scroll
        lerpedScroll.current += (scroll.current - lerpedScroll.current) * 0.08;
    
        // animate the camera
        const zStart = isMobile ? 2000 : 1100;
        const zEnd = isMobile ? -300 : -40;
        const xMin = isMobile ? -600 : -800;
        const xMax = isMobile ? -200 : 0;
        const targetX = isMobile ? -50 : -300;
        const yBase = isMobile ? 50 : 200;
        const yRange = isMobile ? 100 : 200;
        const t = lerpedScroll.current;
        const arc = Math.sin(t * Math.PI);
        camera.current.position.set(
          THREE.MathUtils.lerp(xMax, xMin, arc),
          arc * yRange + yBase,
          THREE.MathUtils.lerp(zStart, zEnd, t)
        );
        cameraTargetPosition.x = THREE.MathUtils.lerp(0, targetX, arc);
        camera.current.lookAt(cameraTargetPosition);
    
        // rotate the model on mousehover
        sceneContent.current.position.x = (1 - t) * 150;
        sceneContent.current.rotation.y = mouse.current.x * Math.PI * 0.03;
      });
    return (
        // <Spline scene="https://prod.spline.design/8dV3Z68gLHfVRzp4/scene.splinecode" />
        <Spline scene='../../sceneAboutMe.splinecode' />
        
    )
}