import { Input } from "antd";
// import "./AppLayout.css";
import logo from "../assets/Page-images/cyberpay-page-logo.png";
import {
  QuestionOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Button from "../ui/Button";
import { useState } from "react";

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

function Header() {
  const [showSideNav, setShowSideNav] = useState(false);

  const handleShowSideNav = () => {
    setShowSideNav(!showSideNav);
  };
  const handleCloseSidNav = () => {
    setShowSideNav(false);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.section1}>
          <Link to="/">
            <img
              src={logo}
              width={150}
              alt="cyberpay-logo"
              className="cyberpay-logo"
            />
          </Link>
        </div>

        <div className={styles.section2}>
          <Input
            size="large"
            className={styles.input}
            placeholder="Search products, brands & categories"
            suffix={
              <div className={styles.searchIconBg}>
                <SearchOutlined />
              </div>
            }
          />
        </div>
        <div className={styles.section3}>
          <Button
            textcolor="var(--text-light)"
            bgColor="var(--bg-primary)"
            borderRad="4px"
            padding="4px 25px"
            boxShadow="var(--box-shadow)"
            fontSize="12px"
          >
            <Link to="/shop" className="cta">
            Setup Your Store for Free
            </Link>
          </Button>
          <div className={styles.user}>
            <p>Hello Adanna,</p>
            <span className={styles.icons}>
              <UserOutlined />
              <ShoppingCartOutlined />
              <QuestionOutlined />
            </span>
          </div>
        </div>

        <MenuOutlined className={styles.menu} onClick={handleShowSideNav} />

        {showSideNav && (
          <div className={styles.sidebar}>
            <CloseOutlined
              className={styles.closeMenu}
              onClick={handleCloseSidNav}
            />
            <div className={styles.list}>
              <ul>
                {categories.map((products) => {
                  return (
                    <li className="products-link" key={products}>
                      {products.data}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className={styles.spacer}>&nbsp;</div>
    </>
  );
}

export default Header;
