import { useState, useEffect } from 'react';

const useNavBarVisibility = () => {
  const [navHidden, setNavHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
        if (window.scrollY < 100) { // show nav when at the top
            setNavHidden(false);
        } else if (window.scrollY > lastScrollY) { // hide nav when scrolling down
            setNavHidden(true);
        } else {
            setNavHidden(false);
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