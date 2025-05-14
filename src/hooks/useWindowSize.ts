import { useLayoutEffect, useState } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', handleSize);

    return (() => window.removeEventListener('resize', handleSize));
  }, []);

  return windowSize;
}
