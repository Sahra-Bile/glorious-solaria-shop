import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function TrackLastPage() {
  const location = useLocation();

  useEffect(() => {
    const excludedPaths = ['/login', '/register'];
    if (!excludedPaths.includes(location.pathname)) {
      localStorage.setItem('lastVisitedPage', location.pathname);
    }
  }, [location]);

  return null;
}


