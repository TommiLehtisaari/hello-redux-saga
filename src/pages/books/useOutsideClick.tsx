import { useEffect, createRef } from "react";

type AnyEvent = MouseEvent | TouchEvent;

export const useOutsideClick = <T extends HTMLElement = HTMLElement>(
  handler: () => void,
): React.RefObject<T> => {
  const ref = createRef<T>();

  useEffect(() => {
    const handleEvent = (event: AnyEvent) => {
      const el = ref?.current;

      // Do nothing if clicking ref's element or descendent elements
      if (!el || el.contains(event.target as Node)) {
        return;
      }

      handler();
    };
    document.addEventListener("mousedown", handleEvent);
    return () => {
      document.removeEventListener("mousedown", handleEvent);
    };
  }, [handler, ref]);

  return ref;
};
