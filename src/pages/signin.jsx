// import { Row, Col } from "antd";
import logo from "../assets/Registration-images/Group2661.png";
import { Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
const { Title } = Typography;
import Advert from "../ui/AdvertBg";
import "./CreateCustomer.css";

import styles from "./signin.module.css";
import Button from "../ui/Button";
import { useFormik } from "formik";
import { signInSchema } from "../schemas";


export default function SignIn() {

  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    console.log(values, actions);
    console.log("submitted");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate('/');
    // setUser(values?.firstName)
    actions.resetForm();
  }

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      country: "",
    },
    validationSchema: signInSchema,
    onSubmit, 
  });

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

          <form method="POST" onSubmit={handleSubmit}>
          <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email  && touched.email ? `${styles.inputError}` : ''}
            />
            <div className={styles.errorText}>
            {errors.email && touched.email && <small>{errors.email}</small>}
            </div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.password && touched.password ? `${styles.inputError}` : ''}
            />
            <div className={styles.errorText}>
            {errors.password && touched.password && <small>{errors.password}</small>}
            </div>
            <div>
              <small>Forget Password?</small>
            </div>
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


