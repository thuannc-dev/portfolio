import { useEffect, useMemo, useState } from "react";

const token = {
  screenXS: 320,
  screenSM: 640,
  screenMD: 768,
  screenLG: 1024,
  screenXL: 1280,
  screenXXL: 1536,
};
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const breakpoints = useMemo(
    () => ({
      xs: token.screenXS,
      sm: token.screenSM,
      md: token.screenMD,
      lg: token.screenLG,
      xl: token.screenXL,
      xxl: token.screenXXL,
    }),
    [token]
  );

  const devices = useMemo(() => {
    const windowWidth = windowSize.width;
    return {
      isMobile: windowWidth < breakpoints.xs,
      isTablet: breakpoints.xs < windowWidth && windowWidth <= breakpoints.md,
      isDesktop: breakpoints.md < windowWidth && windowWidth <= breakpoints.xxl,
    };
  }, [windowSize.width]);

  return useMemo(
    () => ({
      breakpoints,
      windowSize,
      ...devices,
    }),

    [breakpoints, windowSize, devices]
  );
};

export default useWindowSize;
