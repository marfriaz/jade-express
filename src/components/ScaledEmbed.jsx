import { useEffect, useRef, useState } from "react";

// Instagram post shown as the full Instagram card (handle, photo, like count) inside a collage slot.
// The card is 326px wide and `height` px tall (cut off under the like count); it is shrunk to fit the
// slot's height, and centered if the slot is wider.
const NATIVE_WIDTH = 326;

export default function ScaledEmbed({ url, title, height = 600 }) {
  const box = useRef(null);
  const [size, setSize] = useState({ w: NATIVE_WIDTH, h: height });

  useEffect(() => {
    const el = box.current;
    if (!el || typeof ResizeObserver === "undefined") return undefined;
    const measure = () => setSize({ w: el.clientWidth, h: el.clientHeight });
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    measure();
    return () => ro.disconnect();
  }, []);

  const scale = Math.min(1, size.h / height, size.w / NATIVE_WIDTH) || 1;
  const x = Math.max(0, (size.w - NATIVE_WIDTH * scale) / 2);
  return (
    <div ref={box} className="scaled-embed">
      <iframe
        src={`${url}embed/`}
        title={title}
        loading="lazy"
        allowFullScreen
        scrolling="no"
        style={{ width: NATIVE_WIDTH, height, transform: `translateX(${x}px) scale(${scale})` }}
      />
    </div>
  );
}
