import { useEffect, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";

/** Hook to wrap resize observer */
const useResizeObserver = (ref: React.MutableRefObject<Element | null>) => {
  const [dimensions, setDimensions] = useState<DOMRectReadOnly | null>(null);
  useEffect(() => {
    if (ref.current) {
      const observeTarget = ref.current;
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          setDimensions(entry.contentRect);
        });
      });
      resizeObserver.observe(observeTarget);
      return () => {
        resizeObserver.unobserve(observeTarget);
      };
    }
  }, [ref]);
  return dimensions;
};

export default useResizeObserver;
