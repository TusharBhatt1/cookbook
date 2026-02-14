import { useEffect, useRef } from "react";

export default function useVirtualizer(cb: () => void) {
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!triggerRef.current) return;
    const observer = new IntersectionObserver(async ([entry]) => {
      if (entry.isIntersecting) {
        await new Promise((res) => setTimeout(() => res(null), 1000));
        cb();
      }
    });
    observer.observe(triggerRef.current);

    return () => observer.disconnect();
  }, [cb]);

  return {
    triggerRef,
  };
}
