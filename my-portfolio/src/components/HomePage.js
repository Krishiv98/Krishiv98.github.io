import React, { Suspense } from 'react';
// const Spline = React.lazy(() => import('@splinetool/react-spline'));
import Spline from "@splinetool/react-spline"
import { Loading } from './LoadingScreen';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Scene from '../scenes/HomePageScene'
export function HomePage(){

    return (
            
        <>
        {/* <Spline scene="https://prod.spline.design/gNSaTPdyeQnn0rOM/scene.splinecode" /> */}
        {/* <Spline scene='../../sceneHomePage.splinecode' /> */}
        {/* <Canvas shadows flat linear> */}
        {/* <Scene /> */}
        <Spline  renderOnDemand="true" scene="https://prod.spline.design/Xu6WVGFrCf9szJ0W/scene.splinecode" /> 
        {/* <OrbitControls /> */}
      {/* </Canvas> */}
      </>
    
    )
}