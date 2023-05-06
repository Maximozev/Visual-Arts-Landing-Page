import AboutSvg from "../assets/images/About.svg";

export default function About() {
  return (
    <div className="page">
      <div>
        <h1>About</h1>
        <h2>Learn about visual content</h2>
        <button className="btn">Join Now</button>
      </div>
      <div className="hero-image">
        <img src={AboutSvg} alt="About SVG" />
      </div>
    </div>
  );
}
