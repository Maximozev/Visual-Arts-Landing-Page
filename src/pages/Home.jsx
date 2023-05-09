import JoinButton from "../Components/JoinButton";
import HomeSvg from "../assets/images/home.svg";
import { motion as m } from "framer-motion";

export default function Home() {
  return (
    <m.div
      className="page"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      exit={{ x: -300, opacity: 0 }}
    >
      <div>
        <h1>Visual Arts</h1>
        <h2>Learn about visual content</h2>
        <JoinButton />
      </div>
      <div className="hero-image">
        <img src={HomeSvg} alt="Home SVG" />
      </div>
    </m.div>
  );
}
