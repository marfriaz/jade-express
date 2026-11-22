// Instagram post shown as the full Instagram card (handle, photo, like count), shrunk with CSS so it
// takes less room. The card's height (--h, at Instagram's native 326px width, cut off under the
// like count) is set on the collage item; the scale (--s) is set in styles.css.
export default function ScaledEmbed({ url, title }) {
  return (
    <div className="scaled-embed">
      <iframe src={`${url}embed/`} title={title} loading="lazy" allowFullScreen scrolling="no" />
    </div>
  );
}
