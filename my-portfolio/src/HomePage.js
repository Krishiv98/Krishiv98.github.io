import React from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));
// import Spline from "@splinetool/react-spline"
export function HomePage(){

    return (
        // <Spline scene="https://prod.spline.design/8dV3Z68gLHfVRzp4/scene.splinecode" />
        <Spline scene='../../sceneHomePage.splinecode' />
        
    )
}