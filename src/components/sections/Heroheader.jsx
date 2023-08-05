import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";
import WorkspaceModel from "../WorkspaceModel";
import useWindowSize from "../../hook/useWindowSize";

const Heroheader = () => {
  const { isMobile, isTablet, isDesktop } = useWindowSize();

  const position = useMemo(() => {
    if (isMobile) return [0, -4, 0];
    if (isTablet) return [0, -2, 0];
    return [0, -1, 0];
  }, [isMobile, isTablet, isDesktop]);

  const scale = useMemo(() => {
    if (isMobile) return 1.2;
    if (isTablet) return 1.3;
    // >= isDesktop
    return 1.5;
  }, [isMobile, isTablet, isDesktop]);

  const fov = useMemo(() => {
    if (isMobile) return 15;
    if (isTablet) return 20;
    // >= isDesktop
    return 14;
  }, [isMobile, isTablet, isDesktop]);

  return (
    <div className="min-h-screen snap-center h-screen w-full max-w-[1600px] relative flex flex-col md:flex-row items-start md:items-center text-gray-700">
      <div className="z-10 select-none h-2/5 md:h-3/4 px-8 md:px-24 lg:px-32 flex flex-col justify-center md:justify-start lg:justify-center">
        <h1 className="font-extrabold font-serif text-4xl md:text-5xl lg:text-7xl">
          Hello,
          <br /> I'm Thuan
        </h1>
        <p className="text-gray-500 mb-8">
          Welcome to my portfolio and I'm a Frontend Engineer
        </p>
        {/* <Button>
          <a href="mailto:thuannc97@gmail.com">
            Get In Touch &nbsp; <span className="animate-bounce mt-6">→</span>
          </a>
        </Button> */}
      </div>
      <div className="z-0 absolute w-screen bottom-0 lg:w-2/3 top-0 right-0">
        <Canvas camera={{ fov: 15, position: [15, 10, 20] }}>
          <ambientLight intensity={1} />
          <OrbitControls enableZoom={false} />
          <WorkspaceModel position={position} scale={scale} />
        </Canvas>
      </div>
    </div>
  );
};

export default Heroheader;
