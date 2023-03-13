import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Overlay } from "./Overlay";
import { HomePage } from "./HomePage"
import { NavBar } from "./NavBar";



function App() {
  const scroll = useRef(0);
  return (
    <>
   
      {/* <HomePage /> */}
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
       
        <HomePage />
        {/* <Scene scroll={scroll} /> */}
      </Suspense>

      {/* <Canvas shadows flat linear>
      <Suspense fallback={null}>
        <Scene scroll={scroll} />
      </Suspense>
    </Canvas>
      <Overlay scroll={scroll} /> */}
    </>
  );
}


export default App;
