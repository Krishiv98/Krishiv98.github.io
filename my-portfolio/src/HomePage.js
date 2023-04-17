import React, { Suspense } from 'react';
// const Spline = React.lazy(() => import('@splinetool/react-spline'));
import Spline from "@splinetool/react-spline"
import { Loading } from './LoadingScreen';
export function HomePage(){

    return (
        <Suspense fallback={<Loading />}>    
        <Spline scene="https://prod.spline.design/gNSaTPdyeQnn0rOM/scene.splinecode" />
        {/* <Spline scene='../../sceneHomePage.splinecode' /> */}
    </Suspense>
    )
}