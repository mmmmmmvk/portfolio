import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(`Navigated to ${pathname}, scrolling to top`);
    window.scrollTo({ top: 0, });
  }, [pathname]);

  return null;
}

export default ScrollToTop;