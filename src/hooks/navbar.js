import { useState, useEffect } from 'react';

const useNavBarVisibility = () => {
  const [navHidden, setNavHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setNavHidden(true); // Hide navbar on scroll down
      } else {
        setNavHidden(false); // Show navbar on scroll up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return navHidden;
};

export default useNavBarVisibility;