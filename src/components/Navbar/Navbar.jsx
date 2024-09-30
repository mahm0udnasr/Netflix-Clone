import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { useState, useRef, useEffect } from "react";
// firebase signout
import { signout } from "../../firebase";
export default function Navbar() {
  const [showDropDown, setShowDropDown] = useState(false);
  const showDropDownHandle = () => {
    setShowDropDown(!showDropDown);
  };
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (navRef.current) {
        if (window.scrollY >= 80) {
          navRef.current.classList.add("nav-dark");
        } else {
          navRef.current.classList.remove("nav-dark");
        }
      }
    });
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Netflix Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="search icon" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="bell icon" className="icons" />
        <div className="navbar-profile" onClick={showDropDownHandle}>
          <img
            src={profile_img}
            alt="profile image children"
            className="profile"
          />
          <img src={caret_icon} alt="profile dropdown icon" />
          {showDropDown && (
            <div className="dropdown">
              <p>Profile</p>
              <p>
                <a href="https://wa.me/+201005566102" target="_blank">
                  Subscribe
                </a>
              </p>
              <p onClick={signout}>Sign Out</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
