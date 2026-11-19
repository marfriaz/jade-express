import { useEffect, useRef } from "react";

export default function Lightbox({ images, index, onClose, onChange }) {
  const closeRef = useRef(null);
  const touchStart = useRef(null);
  const count = images.length;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onChange((index + 1) % count);
      else if (e.key === "ArrowLeft") onChange((index - 1 + count) % count);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, count, onClose, onChange]);

  const img = images[index];
  if (!img) return null;

  function next() {
    onChange((index + 1) % count);
  }
  function prev() {
    onChange((index - 1 + count) % count);
  }

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        className="lightbox__btn lightbox__close"
        aria-label="Close"
        onClick={onClose}
      >
        &times;
      </button>
      {count > 1 && (
        <>
          <button
            type="button"
            className="lightbox__btn lightbox__prev"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            &larr;
          </button>
          <button
            type="button"
            className="lightbox__btn lightbox__next"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            &rarr;
          </button>
        </>
      )}
      <figure
        className="lightbox__figure"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => {
          touchStart.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStart.current == null) return;
          const dx = e.changedTouches[0].clientX - touchStart.current;
          touchStart.current = null;
          if (dx > 50) prev();
          else if (dx < -50) next();
        }}
      >
        <img src={img.src} alt={img.alt} />
        <figcaption>
          {index + 1} / {count}
          {img.area ? ` · ${img.area}` : ""}
        </figcaption>
      </figure>
    </div>
  );
}
