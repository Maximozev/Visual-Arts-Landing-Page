import ContactSvg from "../assets/images/Contact.svg";

export default function Contact() {
  return (
    <div className="page">
      <div>
        <h1>Contact</h1>
        <h2>Learn about visual content</h2>
        <button className="btn">Join Now</button>
      </div>
      <div className="hero-image">
        <img src={ContactSvg} alt="Contact SVG" />
      </div>
    </div>
  );
}
