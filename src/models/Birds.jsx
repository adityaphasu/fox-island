import React, { useEffect, useRef } from "react";
import birdsScene from "../assets/3d/birds.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Birds = ({ isRotating }) => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdsScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    if (isRotating) {
      actions["Scene"].play();
    } else {
      actions["Scene"].stop();
    }
  }, [actions, isRotating]);

  useFrame(({ clock }) => {
    if (isRotating) {
      const amplitude = 0.3;
      const frequency = 1.75;

      const offset = Math.sin(frequency * clock.elapsedTime) * amplitude;

      birdRef.current.position.x = -4 + offset;
      birdRef.current.position.y = 7 + offset;
      birdRef.current.rotation.z = offset;
    }
  });

  return (
    <mesh ref={birdRef} position={[-4, 7, -8]} scale={[1.5, 1.5, 1.5]} rotation={[-1.8, -2, 0]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Birds;
