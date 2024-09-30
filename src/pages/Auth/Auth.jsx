import "./Auth.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { signup, signin } from "../../firebase";
import netflix_spinner from "../../assets/netflix_spinner.gif";
export default function Auth() {
  const [auth, setAuth] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const authStateHandleClick = () => {
    if (auth === "Sign In") {
      setAuth("Sign Up");
    } else {
      setAuth("Sign In");
    }
  };
  async function authUserHandelClick(type, event) {
    event.preventDefault();
    setLoading(true);
    switch (type) {
      case "Sign Up":
        await signup(name, email, password);
        setLoading(false);
        return;
      case "Sign In":
        await signin(email, password);
        setLoading(false);
        return;
      default:
        return null;
    }
  }
  return loading ? (
    <div className="auth-spinner">
      <img src={netflix_spinner} alt="netflix loading spinner" />
    </div>
  ) : (
    <div className="auth">
      <img src={logo} alt="netflx logo" className="auth-logo" />
      <div className="auth-form">
        <h1>{auth}</h1>
        <form>
          {auth == "Sign In" ? null : (
            <input
              type="text"
              placeholder="Joen Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="netflix@netflix.com"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="******G&4h"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={(event) => authUserHandelClick(auth, event)}
          >
            {auth}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="rememberCheckbox" />
              <label htmlFor="rememberCheckbox">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {auth == "Sign In" ? (
            <p>
              New to Netflix?
              <span onClick={authStateHandleClick}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have account?
              <span onClick={authStateHandleClick}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
