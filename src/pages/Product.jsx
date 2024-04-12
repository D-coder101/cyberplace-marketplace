import {
  ArrowRightOutlined,
  DownOutlined,
  RightOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { Col, Row, Select, ConfigProvider } from "antd";
import { Rate } from "antd";
import Button from "../ui/Button";
import { useState } from "react";
import { AddToCartModal, ReviewModal } from "../ui/Modals";
import PropTypes from "prop-types";
import brocade_dress from "../assets/Page-images/shop-images/brocade_dress.png";
import styles from "./Product.module.css";

// import { Link } from "react-router-dom";
const accordionData = [
  {
    title: "DESCRIPTION",
    id: 1,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae omnis culpa dignissimos ad error quos odit tempora velit fuga ut suscipit et exercitationem sequi eius assumenda, aliquam vitae illo consectetur quae soluta odio aspernatur adipisci.",
  },
  { title: "DELIVERY DETAILS", id: 2 },
  { title: "RETURNS", id: 3 },
  { title: "REVIEWS", id: 4 },
];

const accordionContent = [
  { name: "Michael Olaolu", date: "Yesterday" },
  { name: "Rachael Oni", date: "2 days ago" },
  { name: "Rachael Oni", date: "2 days ago" },
];

function Product() {
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(null);
  const [isAddToCartModalOpen, setIsAddToCartModalOpen] = useState(false);

  const ShowAddToCartModal = () => {
    setIsAddToCartModalOpen(true);
  };

  const handleAddToCartCancel = () => {
    setIsAddToCartModalOpen(false);
  };

  function handleInc() {
    setCount((curr) => curr + 1);
  }
  function handleDec() {
    if (count > 1) setCount((curr) => curr - 1);
  }

  return (
    <div className={styles.product}>
      <div className={styles.productContainer}>
        <p style={{ fontSize: "13px", marginBottom: "10px", color: "#bdbdbd" }}>
          Home <ArrowRightOutlined /> Women&apos;s Fashion{" "}
          <ArrowRightOutlined /> &nbsp;
          <strong style={{ color: "black" }}>Brocade Dress</strong>
        </p>
        <Row gutter={100}>
          <Col span={24} md={9}>
            <div className={styles.viewContainer}>
              <div className={styles.section1}>
                <div className={styles.showcase1}>
                  <img src={brocade_dress} alt="brocade-dress" />
                </div>
              </div>
              <div className={styles.section2}>
                <div className={styles.showcase2}>
                  <img src={brocade_dress} alt="brocade-dress" />
                </div>
                <div className={styles.showcase3}>
                  <img src={brocade_dress} alt="brocade-dress" />
                </div>
                <div className={styles.showcase4}>
                  <img src={brocade_dress} alt="brocade-dress" />
                </div>
              </div>
            </div>
          </Col>

          <Col span={24} md={9}>
            <div className={styles.productDetailContainer}>
              <div className={styles.vendor}>
                <div className={styles.vendorDetails}>
                  <div className={styles.vendorId}>JD</div>
                  <p>Vendor jane Doe</p>
                </div>
                <h3>Brocade Dress</h3>
                <p className={styles.rateReview}>
                  <Rate
                    disabled
                    defaultValue={4}
                    style={{ fontSize: "13px" }}
                  />
                  &nbsp; 24 Reviews
                </p>
                <h3>₦50,000</h3>
              </div>

              <div className={styles.productSelect}>
                <p>Size</p>
                <ConfigProvider
                  theme={{
                    components: {
                      Select: {
                        borderRadiusLG: 0,
                      },
                    },
                  }}
                >
                  <Select
                    defaultValue="SM"
                    size="large"
                    style={{
                      borderRadiusLG: 0,
                    }}
                    options={[
                      {
                        value: "SM",
                        label: "SM",
                      },
                      {
                        value: "MD",
                        label: "MD",
                      },
                      {
                        value: "LG",
                        label: "LG",
                      },
                    ]}
                  />
                </ConfigProvider>
                <p>Quantity</p>
                <div className={styles.quantity}>
                  <button onClick={handleDec}>-</button>
                  <div className={styles.quantityCount}>{count}</div>
                  <button onClick={handleInc}>+</button>
                </div>
                <Button
                  bgColor="#dc1e38"
                  textcolor="white"
                  width="100%"
                  padding="10px 20px"
                  onClick={ShowAddToCartModal}
                  boxShadow="var(--box-shadow)"
                >
                  Add to Cart
                </Button>
              </div>

              <div
                className={styles.productAccordion}
                // style={{ display: "flex", flexDirection: "column" }}
              >
                {accordionData.map((accordion, i) => (
                  <Accordion
                    show={show}
                    setShow={setShow}
                    key={accordion}
                    title={accordion.title}
                    content={accordion?.content}
                    num={i}
                  />
                ))}
              </div>
            </div>

            <AddToCartModal
              isAddToCartModalOpen={isAddToCartModalOpen}
              handleAddToCartCancel={handleAddToCartCancel}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Product;

Accordion.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  num: PropTypes.number,
  setShow: PropTypes.bool,
};

function Accordion({ show, title, num, setShow }) {
  const isOpen = num === show;

  function handleShow() {
    setShow(isOpen ? null : num);
  }
  return (
    <ul>
      <li
        style={{
          padding: "10px 10px 10px 0px",
          borderBottom: "1px solid var(--bg-fade)",
          listStyleType: "none",
        }}
      >
        <span style={{ fontWeight: "var(--font-medium)" }}>
          {title} &nbsp;
          {num === 3 && (
            <Rate disabled defaultValue={4} style={{ fontSize: "13px" }} />
          )}
        </span>
        <span style={{ float: "right" }}>
          {isOpen ? (
            <UpOutlined
              onClick={handleShow}
              style={{ color: "var(--bg-fade)" }}
            />
          ) : (
            <DownOutlined
              onClick={handleShow}
              style={{ color: "var(--bg-fade)" }}
            />
          )}
        </span>
      </li>
      {isOpen && (
        <div
          className="product--accordion-content"
          style={{ padding: "10px 0px", backgroundColor: "white" }}
        >
          {num !== 3 ? (
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae omnis culpa dignissimos ad error quos odit tempora
              velit fuga ut suscipit et exercitationem sequi eius assumenda,
              aliquam vitae illo consectetur quae soluta odio aspernatur
              adipisci.
            </p>
          ) : (
            <AccordionReviews />
          )}
        </div>
      )}
    </ul>
  );
}

function AccordionReviews() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {accordionContent.map((content) => (
        <p
          key={content.name}
          className="border-bottom"
          style={{
            padding: "10px 0px 10px 0px",
            borderBottom: "1px solid var(--border-fade)",
          }}
        >
          <p style={{ fontWeight: "var(--font-medium)", marginBottom: "5px" }}>
            {content.name} &nbsp;&nbsp;&nbsp;
            <span style={{ color: "var(--text-fade)" }}>{content.date}</span>
          </p>
          <Rate
            disabled
            defaultValue={4}
            style={{ fontSize: "13px", marginBottom: "5px" }}
          />{" "}
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          omnis culpa dignissimos ad error quos odit tempora velit fuga ut
          suscipit et exercitationem sequi eius assumenda, aliquam vitae illo
          consectetur quae soluta odio aspernatur adipisci.
        </p>
      ))}
      <p
        style={{
          fontWeight: "bold",
          textAlign: "center",
          paddingTop: "20px",
          cursor: "pointer",
        }}
        onClick={showModal}
      >
        SEE ALL REVIEWS &nbsp; <RightOutlined />
      </p>

      <ReviewModal
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        accordionContent={accordionContent}
      />
    </div>
  );
}
