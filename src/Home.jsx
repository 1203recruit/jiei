import "./App.css";
import React, { Suspense, useRef } from "react";

import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import {
  EffectComposer,
  Outline,
  Select,
  Selection,
} from "@react-three/postprocessing";

function Capibara() {
  const materials = useLoader(MTLLoader, "model/Capibara/Capibara.mtl");
  const obj = useLoader(OBJLoader, "model/Capibara/Capibara.obj", (loader) => {
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
    <div className="container capibara">
      <Canvas>
        <Suspense fallback={null}>
          <Stage contactShadow={{ resolution: 1000, scale: 100 }}>
            <Selection>
              <EffectComposer>
                <Outline
                  visibleEdgeColor="black"
                  edgeStrength={100}
                  width={500}
                />
              </EffectComposer>
              <Select enabled>
                <Capibara />
              </Select>
              <OrbitControls />
              <ambientLight intensity={[1]} />
              <spotLight position={[100, 100, 100]} angle={180} penumbra={1} />
              <pointLight position={[10, 10, 10]} />
            </Selection>
          </Stage>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;
