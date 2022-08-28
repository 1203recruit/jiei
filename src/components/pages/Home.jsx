import React, { Suspense, useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

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
    <div className="capibara">
      <Canvas>
        <Suspense fallback={null}>
          <Stage contactShadow={{ resolution: 1000, scale: 100 }}>
            <Capibara />
            <OrbitControls />
            <ambientLight intensity={[1]} />
            <spotLight position={[100, 100, 100]} angle={180} penumbra={1} />
            <pointLight position={[10, 10, 10]} />
          </Stage>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;
