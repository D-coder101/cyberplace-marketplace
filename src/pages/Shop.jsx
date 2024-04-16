// import { Link } from "react-router-dom";
import { Col, ConfigProvider, Row } from "antd";
import { Rate } from "antd";
import { Pagination } from "antd";
import { Link } from "react-router-dom";
import { Card } from "antd";
import styles from "./Shop.module.css";
import { useCarts } from "../contexts/CartContext";
// import { useCarts } from "../contexts/CartContext";
// import brocade_dress from "../assets/Page-images/shop-images/brocade_dress.png";
// import bags from "../assets/Page-images/shop-images/bags.png";
// import shoes from "../assets/Page-images/shop-images/shoes.png";


export default function Shop() {
const  {products} = useCarts()

  return (
    <div className={styles.shop}>
      <div className={styles.shopContainer}>
        <h3 style={{ marginBottom: "20px" }}>Women&apos;s Fashion</h3>

        <Row gutter={[30, 30]} style={{ marginBottom: "30px" }}>
          {Array.from({ length: 4 }, (_, i) =>
            products?.map((product) => (
              <Col xs={24} sm={12} md={12} lg={6} key={product.id}>
                <Link to={`${product.id}`}>
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
                        alt={product?.name}
                        src={product?.img}
                        style={{ borderRadius: "0px" }}
                      />
                    }
                    size="small"
                  >
                    <p className={styles.productName}>{product?.name}</p>
                    <p className={styles.productAmount}>₦{product?.amount}</p>
                    <Rate
                      disabled
                      defaultValue={4}
                      style={{ fontSize: "15px" }}
                    />
                  </Card>
                </Link>
              </Col>
            ))
          )}
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
