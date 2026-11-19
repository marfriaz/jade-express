import site from "../data/site.js";
import Leasing from "../components/Leasing.jsx";

export default function About() {
  return (
    <>
      <section className="section section--page">
        <div className="container stack stack--xl">
          <span className="label">Who we are</span>
          <p className="statement statement--xl">{site.whoWeAre}</p>
          {site.about.map((p) => (
            <p key={p} className="body-text">
              {p}
            </p>
          ))}
          <img
            className="wide-img"
            src="/images/home/who-we-are.webp"
            alt="Colorful street art on the brick walls of the Wilson & Bay campus"
            loading="lazy"
          />
        </div>
      </section>
      <Leasing />
    </>
  );
}
