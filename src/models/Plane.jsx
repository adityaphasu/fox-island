import { useAnimations, useGLTF } from "@react-three/drei";
import planeScene from "../assets/3d/plane.glb";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Plane = ({ isRotating, ...props }) => {
  const planeRef = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, planeRef);

  const [hoverTime, setHoverTime] = useState(0);

  useEffect(() => {
    if (isRotating) {
      actions["Main"].play();
    } else {
      actions["Main"].stop();
    }
  }, [actions, isRotating]);

  useFrame(({ clock }) => {
    if (isRotating) {
      const amplitude = 0.3;
      const frequency = 7;

      const offset = Math.sin(frequency * hoverTime) * amplitude;

      planeRef.current.position.x = 2.5 + offset;
      planeRef.current.position.y = 1.5 + offset;
      planeRef.current.rotation.z = 0 + offset;

      setHoverTime((prevHoverTime) => prevHoverTime + clock.getDelta());
    }
  });

  return (
    <mesh
      {...props}
      ref={planeRef}
      rotation={[0, -1, 0]}
      position={[2.5, 1.5, -1.5]}
      scale={[0.8, 0.8, 0.8]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
