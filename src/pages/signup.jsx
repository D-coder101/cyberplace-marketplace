import { CheckOutlined } from "@ant-design/icons";
import logo from "../assets/Registration-images/Group2661.png";
import { Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Advert from "../ui/AdvertBg";
import styles from "./signup.module.css";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
// import { useCarts } from "../contexts/CartContext";

const { Title } = Typography;

export default function SignUp() {
  // const {user, setUser } = useCarts()
  // console.log(user)

  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    console.log(values, actions);
    console.log("submitted");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate('/login');
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
    validationSchema: basicSchema,
    onSubmit, 
  });
  // console.log(errors);
  

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

          <form method="POST" onSubmit={handleSubmit}>
            <select
              value={values.country}
              onChange={handleChange}
              id="country"
            >
              <option value="nigeria">Nigeria</option>
              <option value="australia">Australia</option>
              <option value="usa">USA</option>
            </select>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.firstName && touched.firstName ? `${styles.inputError}` : ''}
            />
            <div className={styles.errorText}>
            {errors.firstName && touched.firstName && <small>{errors.firstName}</small>}
            </div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              id="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.lastName && touched.lastName ? `${styles.inputError}` : ''}
            />
            <div className={styles.errorText}>
            {errors.lastName && touched.lastName && <small>{errors.lastName}</small>}
            </div>
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
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Phone Number"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.phoneNumber && touched.phoneNumber ? `${styles.inputError}` : ''}
            />
            <div className={styles.errorText}>
            {errors.phoneNumber && touched.phoneNumber && <small>{errors.phoneNumber}</small>}
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
            <button
              type="submit"
              // width="100%"
              // bgColor="var(--bg-secondary)"
              // padding="10px 20px"
              // mb="20px"
            >
              {/* <Link to="/login" className="cta"></Link> */}
              CREATE YOUR ACCOUNT
            </button>
            <div style={{ textAlign: "left" }}>
              <p>
                Already have an account?{" "}
                <span style={{ color: "#388ddc", cursor: "pointer" }}>
                  <Link
                    to="/login"
                    className="cta"
                    style={{ color: "var(--text-black)" }}
                  >
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


