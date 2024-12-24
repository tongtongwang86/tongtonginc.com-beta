import { useEffect, useState, RefObject } from "react";

export function useIsVisible(ref: RefObject<HTMLElement>): boolean {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasBeenVisible(true); // Keep the element visible once it has appeared
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return hasBeenVisible;
}
