import HomeSvg from "../assets/images/home.svg";

export default function Home() {
  return (
    <div className="page">
      <div>
        <h1>Visual Arts</h1>
        <h2>Learn about visual content</h2>
        <button className="btn">Join Now</button>
      </div>
      <div className="hero-image">
        <img src={HomeSvg} alt="Home SVG" />
      </div>
    </div>
  );
}
