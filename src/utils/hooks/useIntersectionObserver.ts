/* eslint-disable consistent-return */
/* eslint-disable no-multi-assign */
import { MutableRefObject, useState, useRef, useEffect } from "react";

export function useIntersectionObserver(
  ref: MutableRefObject<Element | null>,
  options: IntersectionObserverInit = {},
  alwaysConnected = true
) {
  const [element, setElement] = useState<Element | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useRef<null | IntersectionObserver>(null);

  const cleanOb = () => {
    if (observer.current) {
      observer.current.disconnect();
    }
  };

  useEffect(() => {
    setElement(ref.current);
  }, [ref]);

  useEffect(() => {
    if (!element) return;
    cleanOb();
    const ob = (observer.current = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        if (alwaysConnected) {
          setIsIntersecting(isElementIntersecting);
        } else if (
          !alwaysConnected &&
          !isIntersecting &&
          isElementIntersecting
        ) {
          setIsIntersecting(isElementIntersecting);
          cleanOb();
        }
      },
      { ...options }
    ));
    ob.observe(element);

    return () => {
      cleanOb();
    };
  }, [element, options, alwaysConnected, isIntersecting]);

  return isIntersecting;
}
