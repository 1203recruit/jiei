import React, { Suspense, useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

function Capybara() {
  const materials = useLoader(MTLLoader, "model/Capybara/Capybara.mtl");
  const obj = useLoader(OBJLoader, "model/Capybara/Capybara.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <primitive object={obj} />
    </mesh>
  );
}

const Home = () => {
  return (
    <div className="container">
      <div className="capybara">
        <Suspense fallback={<span className="normal-text">loading...</span>}>
          <Canvas>
            <Stage contactShadow={{ resolution: 1000, scale: 100 }}>
              <Capybara />
              <OrbitControls />
              <ambientLight intensity={[1]} />
            </Stage>
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
