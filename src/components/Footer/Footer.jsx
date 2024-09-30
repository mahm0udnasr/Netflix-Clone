import "./Footer.css";
// import youtube_icon from "../../assets/youtube_icon.png";
// import twitter_icon from "../../assets/twitter_icon.png";
// import instagram_icon from "../../assets/instagram_icon.png";
// import facebook_icon from "../../assets/facebook_icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <a
          href="https://github.com/mahm0udnasr"
          target="_blank"
          aria-label="github"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/mahm0udnasr"
          target="_blank"
          aria-label="linkedin"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://www.facebook.com/mhm0udnasr"
          aria-label="facebook"
          target="_blank"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://t.me/mahm0udnasr"
          aria-label="telegram"
          target="_blank"
        >
          <i className="fa-brands fa-telegram"></i>
        </a>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>lnvestor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">© 1997-2023 Netflix, Inc.</p>
    </div>
  );
}
