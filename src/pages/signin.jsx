import { useState } from "react";
// import { Row, Col } from "antd";
import logo from "../assets/Registration-images/Group2661.png";
import { Typography } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;
import Advert from "../ui/AdvertBg";
import "./CreateCustomer.css";
import styles from "./signin.module.css";
import Button from "../ui/Button";

let allErrorText = document.querySelectorAll(".error-text");
let allInput = document.querySelectorAll("input");

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn(e) {
    e.preventDefault();
    if (!email || !password) {
      allErrorText.forEach(function (val) {
        val.style.visibility = "visible";
      });
      allInput.forEach(function (val) {
        val.style.marginBottom = "0px";
      });
      return;
    }
    allErrorText.forEach(function (val) {
      val.style.visibility = "hidden";
    });
    const form = e.target;
    const formData = new FormData(form);
    const formJSON = Object.fromEntries(formData);
    console.log(formJSON);
  }

  return (
    <div className={styles.container}>
      <div className={styles.advertSection}>
        <Advert />
      </div>
      <div className={styles.formSection}>
        <div className={styles.customerForm}>
          <div>
            <img src={logo} alt="cyberpay-logo" className={styles.logo} />
          </div>
          <div className={styles.header}>
            <Title level={2}>Welcome!</Title>
            <p>Log in to your account</p>
          </div>

          <form method="POST" onSubmit={handleSignIn}>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className={styles.errorText}>
              <small>email is required!</small>
            </div>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="error-text">
              <small>password is required!</small>
            </div>
            <div className={styles.errorText}>
              <small>Forget Password?</small>
            </div>
            <Link to="/">
              <Button
                textcolor="var(--text-light)"
                type="submit"
                width="100%"
                bgColor="var(--bg-secondary)"
                padding="10px 20px"
                mb="20px"
              >
                SIGN IN
              </Button>
            </Link>
            <div style={{ textAlign: "left" }}>
              <p>
                Dont have an account?
                <span style={{ color: "#388ddc", cursor: "pointer" }}>
                  <Link
                    to="/signup"
                    className="cta"
                    style={{ color: "var(--text-black)" }}
                  >
                    <b> Sign Up</b>
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

{
  /* <form method="POST" onSubmit={handleSignIn}>
<input
  type="email"
  name="email"
  value={email}
  placeholder="Email Address"
  onChange={(e) => setEmail(e.target.value)}
/>
<div className="error-text">
  <small>email is required!</small>
</div>
<input
  type="password"
  name="password"
  value={password}
  placeholder="Password"
  onChange={(e) => setPassword(e.target.value)}
/>
<div className="error-text">
  <small>password is required!</small>
</div>
<div className="validate text-start">
  <small>Forget Password?</small>
</div>
<Link to="/">
  <button type="submit" className="submit-btn">
    SIGN IN
  </button>
</Link>
<div style={{ textAlign: "left" }}>
  <p>
    Dont have an account?
    <span
      style={{ color: "#388ddc", cursor: "pointer" }}
      className="sign-in-btn"
    >
      <Link to="/signup">
        <b> Sign Up</b>
      </Link>
    </span>
  </p>
</div>
</form> */
}
