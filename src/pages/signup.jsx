import { useState } from "react";
import { CheckOutlined } from "@ant-design/icons";
import logo from "../assets/Registration-images/Group2661.png";
import { Typography } from "antd";
const { Title } = Typography;
import { Link } from "react-router-dom";
// import "./CreateCustomer.css";
import Advert from "../ui/AdvertBg";
import styles from "./signup.module.css";
import Button from "../ui/Button";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("Nigeria");

  let allErrorText = document.querySelectorAll(".errorText");
  let allInput = document.querySelectorAll("input");
  let formContainer = document.querySelector(".form-container");
  let Email = document.querySelector(".email");

  function handleSignUp(e) {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phoneNumber || !password) {
      allErrorText.forEach(function (val) {
        val.style.visibility = "visible";
      });
      allInput.forEach(function (val) {
        val.style.marginBottom = "0px";
      });
      return;
    }

    //hiding error-text
    allErrorText.forEach(function (val) {
      val.style.visibility = "hidden";
    });
    //hiding form-container
    formContainer.style.display = "none";
    // //showing email notification
    Email.style.display = "block";

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
            <Title level={2}>Create An Account</Title>
            <p>Let&apos;s get started!</p>
          </div>

          <form method="POST" onSubmit={handleSignUp}>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="nigeria">Nigeria</option>
              <option value="australia">Australia</option>
              <option value="usa">USA</option>
            </select>
            <input
              type="text"
              name="firstName"
              value={firstName}
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <div className={styles.errorText}>
              <small>firstname is required!</small>
            </div>
            <input
              type="text"
              name="lastName"
              value={lastName}
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <div className={styles.errorText}>
              <small>lastname is required!</small>
            </div>
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
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              placeholder="Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div className={styles.errorText}>
              <small>phonenumber is required!</small>
            </div>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.errorText}>
              <small>password is required!</small>
            </div>
            <div className={styles.validate}>
              <small>
                Use: {<CheckOutlined style={{ color: "green" }} />}
                8-20 characters
                <CheckOutlined style={{ color: "green" }} />
                Upper & Lowercase
                <CheckOutlined style={{ color: "green" }} />
                Number(s) <CheckOutlined />
                Special Characters
              </small>
            </div>
            <Button type="submit" width="100%" bgColor="var(--bg-secondary)"  padding="10px 20px" mb="20px">
              <Link to="/login" className="cta"> CREATE YOUR ACCOUNT</Link>
            </Button>
            <div style={{ textAlign: "left" }}>
              <p>
                Already have an account?{" "}
                <span
                  style={{ color: "#388ddc", cursor: "pointer" }}
                >
                  <Link to="/login" className="cta" style={{color: 'var(--text-black)'}}>
                    <b>Sign In</b>
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
