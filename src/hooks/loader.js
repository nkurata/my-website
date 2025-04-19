import { useState, useEffect } from 'react';

const useLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      setIsLoading(false); // If the page is already loaded
    } else {
      window.addEventListener('load', handleLoad); // Wait for the page to load
    }

    return () => {
      window.removeEventListener('load', handleLoad); // Cleanup the event listener
    };
  }, []);

  return isLoading;
};

export default useLoader;