import { useEffect, useState } from 'react';

export default function useMobile(width: number) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= width);
  function handleSizeChange() {
    return setIsMobile(window.innerWidth <= width);
  }
  useEffect(() => {
    window.addEventListener('resize', handleSizeChange);

    return () => {
      window.removeEventListener('resize', handleSizeChange);
    };
  }, [isMobile]);

  return isMobile;
}
