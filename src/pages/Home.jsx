import { Canvas } from "@react-three/fiber";
import { AnimatePresence } from "framer-motion";
import { Suspense, useEffect, useRef, useState } from "react";
import { soundoff, soundon } from "../assets/icons";
import { pageAnimation } from "../utils/animatedVariants";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Birds from "../models/Birds";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";
import soft from "../assets/soft.mp3";
import AnimatedPage from "../components/AnimatedPage";

const Home = () => {
  const audioRef = useRef(new Audio(soft));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    if (isAudioPlaying) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isAudioPlaying]);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screeenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screeenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screeenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1];
      screeenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screeenPosition = [0, -4, -4];
    }

    return [screenScale, screeenPosition];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <AnimatedPage variants={pageAnimation}>
      <div className="relative h-screen w-full">
        <div className="absolute left-0 right-0 top-28 z-10 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {currentStage && <HomeInfo currentStage={currentStage} />}
          </AnimatePresence>
        </div>
        <Canvas
          className={`h-screen w-full bg-transparent ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
          camera={{ near: 0.1, far: 1000, background: "#b1e1ff" }}>
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1.5, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <hemisphereLight sky="#b1e1ff" groundColor="#000000" intensity={1} />
            <Birds isRotating={isRotating} />
            <Sky isRotating={isRotating} />
            <Island
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
            />
            <Plane planeScale={planeScale} planePosition={planePosition} isRotating={isRotating} />
          </Suspense>
        </Canvas>
        <div className="absolute bottom-2 left-2">
          <img
            src={isAudioPlaying ? soundon : soundoff}
            alt="sound"
            className="h-16 w-16 cursor-pointer object-contain"
            onClick={() => setIsAudioPlaying(!isAudioPlaying)}
          />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Home;
