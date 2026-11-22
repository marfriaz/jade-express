// Instagram post shown as the full Instagram card (like the Reposada post on the Gallery page),
// filling whatever box the collage gives it.
export default function ScaledEmbed({ url, title }) {
  return (
    <div className="scaled-embed">
      <iframe src={`${url}embed/`} title={title} loading="lazy" allowFullScreen scrolling="no" />
    </div>
  );
}
