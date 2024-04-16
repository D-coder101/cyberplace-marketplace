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
// import brocade_dress from "../assets/Page-images/shop-images/brocade_dress.png";
import styles from "./Product.module.css";
import { useParams } from "react-router-dom";
import { useCarts } from "../contexts/CartContext";

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
  { name: "Michael Olaolu", date: "Yesterday", id: 1 },
  { name: "Rachael Oni", date: "2 days ago", id: 2 },
  { name: "Rachael Oni", date: "2 days ago", id: 3 },
];

let CartData;

function Product() {
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(null);
  const [isAddToCartModalOpen, setIsAddToCartModalOpen] = useState(false);
  const { handleAddItemsToCart } = useCarts();

  const { id } = useParams();

  if (id === "11920") {
    CartData = [
      {
        name: "Brocade Dress",
        amount: "50000",
        img: "/images/brocade_dress.png",
        size: 10,
        id: crypto.randomUUID(),
        quantity: 1,
      },
    ];
  } else if (id === "11921") {
    CartData = [
      {
        name: "Shoulder Bags",
        amount: "50000",
        img: "/images/bags.png",
        size: 12,
        id: crypto.randomUUID(),
        quantity: 1,
      },
    ];
  } else if (id === "11922") {
    CartData = [
      {
        name: "Heels Sandals",
        amount: "40000",
        img: "/images/shoes.png",
        size: 16,
        id: crypto.randomUUID(),
        quantity: 1,
      },
    ];
  }

  let Amount = new Intl.NumberFormat();
  // function handleDeleteItemsFromCart(id) {
  //   setCart((cart) => cart.filter((item) => item.id !== id))
  // }
  // function handleAddItemsToCart(item) {
  //   setCart((items) => [...items, item]);
  // }

  function ShowAddToCartModal() {
    setIsAddToCartModalOpen(true);
    handleAddItemsToCart(CartData);
  }

  function handleAddToCartCancel() {
    setIsAddToCartModalOpen(false);
  }

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
          <strong style={{ color: "black" }}>ID: {id}</strong>
        </p>
        <Row gutter={100}>
          <Col span={24} md={9}>
            {CartData.map((cart) => {
              return (
                <div className={styles.viewContainer} key={cart}>
                  <div className={styles.section1}>
                    <div className={styles.showcase1}>
                      <img src={cart?.img} alt={cart?.name} />
                    </div>
                  </div>
                  <div className={styles.section2}>
                    <div className={styles.showcase2}>
                      <img src={cart?.img} alt={cart?.name} />
                    </div>
                    <div className={styles.showcase3}>
                      <img src={cart?.img} alt={cart?.name} />
                    </div>
                    <div className={styles.showcase4}>
                      <img src={cart?.img} alt={cart?.name} />
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>

          <Col span={24} md={9}>
            {CartData.map((cart) => (
              <div className={styles.productDetailContainer} key={cart}>
                <div className={styles.vendor}>
                  <div className={styles.vendorDetails}>
                    <div className={styles.vendorId}>JD</div>
                    <p>Vendor jane Doe</p>
                  </div>
                  <h3>{cart?.name}</h3>
                  <p className={styles.rateReview}>
                    <Rate
                      disabled
                      defaultValue={4}
                      style={{ fontSize: "13px" }}
                    />
                    &nbsp; 24 Reviews
                  </p>
                  <h3>₦{Amount.format(`${cart?.amount}`)}</h3>
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
            ))}

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
  setShow: PropTypes.func,
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
          key={content.id}
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
