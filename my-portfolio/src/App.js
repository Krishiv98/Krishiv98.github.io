import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./scenes/Scene";
import { Overlay } from "./components/Overlay";
import { HomePage } from "./components/HomePage"
import { NavBar } from "./components/NavBar/NavBar";

import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import { Loading } from "./components/LoadingScreen";
import { OrbitControls, useProgress } from "@react-three/drei";
import * as Loader from 'react-loader-spinner';

function App() {
  const scroll = useRef(0);
  // Little helpers ...
  const url = (name, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
  const parallax = useRef()

  const target = useRef();
  const { active, loaded, total } = useProgress();
  const isLoaded = !active && total > 0 && loaded === total;

  return (
    <>
      <Suspense fallback={
        <Loading />
      }>
        <NavBar />
        <Canvas shadows flat linear>

          <Scene scroll={scroll} />

        </Canvas>
        <Overlay scroll={scroll} />
      </Suspense>


      {/* <HomePage /> */}

    </>
  );

}




export default App;
