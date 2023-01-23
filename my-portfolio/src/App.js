import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Overlay } from "./Overlay";
function App() {
  const scroll = useRef(0);
  return (
    // <div className="App">
     
    // </div>


    <>
    <Canvas shadows flat linear>
      <Suspense fallback={null}>
        <Scene scroll={scroll} />
      </Suspense>
    </Canvas>
    <Overlay scroll={scroll} />
  </>
  );
}

export default App;
