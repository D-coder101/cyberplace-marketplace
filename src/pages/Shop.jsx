// import { Link } from "react-router-dom";
import { Col, ConfigProvider, Row } from "antd";
import { Rate } from "antd";
import { Pagination } from "antd";
import { Link } from "react-router-dom";
import { Card } from "antd";
import styles from "./Shop.module.css";
import brocade_dress from "../assets/Page-images/shop-images/brocade_dress.png";
import bags from "../assets/Page-images/shop-images/bags.png";
import shoes from "../assets/Page-images/shop-images/shoes.png";

export default function Shop() {
  return (
    <div className={styles.shop}>
      <div className={styles.shopContainer}>
        <h3 style={{ marginBottom: "20px" }}>Women&apos;s Fashion</h3>

        <Row gutter={[30, 30]} style={{ marginBottom: "30px" }}>
          {Array.from({ length: 4 }, (_, i) => (
            <Col xs={24} sm={12} md={12} lg={6} key={i}>
              <Link to="/product">
                <Card
                  bordered={false}
                  hoverable
                  style={{
                    // width: 300,
                    border: 0,
                    borderRadius: 0,
                    fontWeight: "var(--font-medium)",
                  }}
                  cover={
                    <img
                      alt="dress"
                      src={brocade_dress}
                      style={{ borderRadius: "0px" }}
                    />
                  }
                  size="small"
                >
                  <p className={styles.productName}>Brocade Dress</p>
                  <p className={styles.productAmount}>₦50,000</p>
                  <Rate
                    disabled
                    defaultValue={4}
                    style={{ fontSize: "15px" }}
                  />
                </Card>
              </Link>
            </Col>
          ))}

          {Array.from({ length: 4 }, (_, i) => (
            <Col xs={24} sm={12} md={12} lg={6} key={i}>
              <Link to="/product">
                <Card
                  bordered={false}
                  hoverable
                  style={{
                    border: 0,
                    borderRadius: 0,
                    fontWeight: "var(--font-medium)",
                  }}
                  cover={
                    <img
                      alt="dress"
                      src={bags}
                      style={{ borderRadius: "0px" }}
                    />
                  }
                  size="small"
                >
                  <p className={styles.productName}>Shoulder Bag&apos;s</p>
                  <p className={styles.productAmount}>₦50,000</p>
                  <Rate
                    disabled
                    defaultValue={4}
                    style={{ fontSize: "15px" }}
                  />
                </Card>
              </Link>
            </Col>
          ))}
          {Array.from({ length: 4 }, (_, i) => (
            <Col xs={24} sm={12} md={12} lg={6} key={i}>
              <Link to="/product">
                <Card
                  bordered={false}
                  hoverable
                  style={{
                    border: 0,
                    borderRadius: 0,
                    fontWeight: "var(--font-medium)",
                  }}
                  cover={
                    <img
                      alt="dress"
                      src={shoes}
                      style={{ borderRadius: "0px" }}
                    />
                  }
                  size="small"
                >
                  <p className={styles.productName}>Heels Sandals</p>
                  <p className={styles.productAmount}>₦40,000</p>
                  <Rate
                    disabled
                    defaultValue={4}
                    style={{ fontSize: "15px" }}
                  />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <ConfigProvider
            theme={{
              components: {
                Pagination: {
                  itemActiveBg: "#042f46",
                  colorText: "#042f46",
                  colorPrimary: "#f6ffea",
                },
              },
            }}
          >
            <Pagination total={40} />
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
}


