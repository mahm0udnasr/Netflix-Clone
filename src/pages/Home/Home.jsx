// styles
import "./Home.css";
// icons
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
// components
import Navbar from "../../components/Navbar/Navbar";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img
          src={hero_banner}
          alt="hero banner background"
          className="banner-img"
        />
        <div className="hero-caption">
          <img src={hero_title} alt="hero title" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="play video button" />
              Play
            </button>
            <button className="btn btn-dark">
              <img src={info_icon} alt="play video button" />
              More Info
            </button>
          </div>
          <TitleCards title="Now Playing" category="now_playing"/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title="Only on Netflix" category="top_rated" />
        <TitleCards title="Top Pics for You" trendyUrl={true} />
        <TitleCards title="Popular" category="popular"/>
        <TitleCards title="Upcoming" category="upcoming"/>
      </div>
      <Footer/>
    </div>
  );
}
