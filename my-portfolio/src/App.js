import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./scenes/Scene";
import { Overlay } from "./components/Overlay";
import { HomePage } from "./components/HomePage"
import { NavBar } from "./components/NavBar";
import { AboutMe } from "./components/AboutMe";
import { Parallax, ParallaxLayer, IParallax} from '@react-spring/parallax'
import { Loading } from "./components/LoadingScreen";

function App() {
  const scroll = useRef(0);
  // Little helpers ...
const url = (name, wrap = false) =>
`${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const parallax = useRef()



  return (
    <>
   
   <Canvas shadows flat linear>
        <Suspense fallback={null}>
          <Scene scroll={scroll} />
        </Suspense>
      </Canvas>
      <Overlay scroll={scroll} />
  
   
    {/* <HomePage /> */}
      {/* <AboutMe /> */}
    </>
  );
}


export default App;
