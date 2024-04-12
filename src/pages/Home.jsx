import { Col, Row } from "antd";
import bannerLogo from "../assets/Page-images/main-banner.png";
import { useState } from "react";
import styles from "./Home.module.css";
import Button from "../ui/Button";
import women from "../assets/Page-images/women.jpg";
import men from "../assets/Page-images/men.jpg";
import home from "../assets/Page-images/home.jpg";
import phone from "../assets/Page-images/phones.png";
import { Link } from "react-router-dom";

const categories = [
  { data: "Fashion" },
  { data: "Beauty" },
  { data: "Baby, Kids & Toys" },
  { data: "Food" },
  { data: "Home & Kitchen" },
  { data: "Phones & Tablets" },
  { data: "Electronics" },
  { data: "Computers & Acc." },
  { data: "Other Categories" },
];

const fashions = [
  { text: "WOMEN'S FASHION" },
  { text: "MEN'S FASHION" },
  { text: "KID'S FASHION" },
  { text: "ACCESSORIES FASHION" },
];

let banner = document.querySelector(".banner-logo");
let advertText = document.querySelector(".advert-text");

function Home() {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow((s) => !s);
    banner.style.display = "none";
    advertText.style.display = "none";
  }

  return (
    <div className={styles.home}>
      <div className={styles.nav}>
        <div className={styles.list}>
          <ul>
            {categories.map((products) => {
              return (
                <li
                  onClick={handleShow}
                  className="products-link"
                  key={products}
                >
                  {products.data}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className={styles.banner}>
        {!show && (
          <>
            <img src={bannerLogo} alt="banner-logo" className="banner-logo" />

            <div className={styles.adverttext}>
              SELLING JUST GOT EASIER WITH CYBERPAY.
            </div>
          </>
        )}

        {show && (
          <Row justify="center">
            {Array.from({ length: 2 }, (_, i) => (
              <div key={i} style={{ display: "flex" }}>
                {fashions.map((fashion) => (
                  <Col
                    style={{ padding: "8px", textAlign: "center" }}
                    key={fashion}
                    span={6}
                  >
                    <h3>{fashion.text}</h3>
                    <ul>
                      <li style={{ listStyleType: "none" }}>
                        {Array.from({ length: 5 }, (_, i) => (
                          <p key={i}>Lorem ipsum</p>
                        ))}
                      </li>
                    </ul>
                  </Col>
                ))}
              </div>
            ))}
          </Row>
        )}
      </div>
      <div className={styles.showcase1}>
        <img src={women} alt="women" />
        <ShowCaseBtn><Link to="/shop" className="cta">WOMEN&apos;S FASHION</Link></ShowCaseBtn>
      </div>
      <div className={styles.showcase2}>
        <img src={men} alt="men" />
        <ShowCaseBtn><Link to="/shop" className="cta">MEN&apos;S FASHION</Link></ShowCaseBtn>
      </div>
      <div className={styles.showcase3}>
        <img src={home} alt="home" />
        <ShowCaseBtn><Link to="/shop" className="cta">HOME & KITCHEN</Link></ShowCaseBtn>
      </div>
      <div className={styles.showcase4}>
        <img src={phone} alt="phone" />
        <ShowCaseBtn>PHONES & TABLETS</ShowCaseBtn>
      </div>
    </div>
  );
}

export default Home;

function ShowCaseBtn({ children }) {
  return (
    <Button
      bgColor="var(--bg-secondary)"
      textcolor="var(--text-light)"
      fontWeight="var(--font-bold)"
      width="100%"
      padding="15px 10px"
    >
      {children}
    </Button>
  );
}
