import { useState, useEffect } from "react";

//? used to remove flickering effect on load
//? for smoother page transition
function useLoadingDelay(loading) {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    let timer;
    if (loading && loading < 100) {
      // Add loading delay only if loading time is less than 500ms
      timer = setTimeout(() => {
        setShowLoading(true);
      }, 100);
    } else {
      setShowLoading(false); // Hide loading state when data is loaded
    }

    return () => {
      clearTimeout(timer);
    };
  }, [loading]);

  return showLoading;
}

export default useLoadingDelay;
