import { useEffect, useRef, useState } from "react";

// Instagram embeds are at least 326px wide. This shrinks the whole embed to fit whatever box it is
// placed in (the box's width and height come from the collage), so it can sit in a photo slot.
const NATIVE_WIDTH = 326;
// Instagram's header strip (profile name row) is about this tall at native width; it is pushed out of view so the photo/video fills the slot.
const HEADER_CROP = 58;

export default function ScaledEmbed({ url, title }) {
  const box = useRef(null);
  const [size, setSize] = useState({ w: NATIVE_WIDTH, h: 580 });

  useEffect(() => {
    const el = box.current;
    if (!el || typeof ResizeObserver === "undefined") return undefined;
    const ro = new ResizeObserver(() => setSize({ w: el.clientWidth, h: el.clientHeight }));
    ro.observe(el);
    setSize({ w: el.clientWidth, h: el.clientHeight });
    return () => ro.disconnect();
  }, []);

  const scale = Math.min(1, size.w / NATIVE_WIDTH) || 1;
  return (
    <div ref={box} className="scaled-embed">
      <iframe
        src={`${url}embed/`}
        title={title}
        loading="lazy"
        allowFullScreen
        scrolling="no"
        style={{ width: NATIVE_WIDTH, height: size.h / scale + HEADER_CROP, transform: `translateY(${-HEADER_CROP * scale}px) scale(${scale})` }}
      />
    </div>
  );
}
