import { Col, ConfigProvider, Modal, Rate, Row } from "antd";
import { createStyles, useTheme } from "antd-style";
import PropTypes from "prop-types";
import logo from "../assets/Page-images/cyberpay-page-logo.png";
import brocade_dress from "../assets/Page-images/shop-images/brocade_dress.png";
import { Link } from "react-router-dom";
import { Form, Input } from "antd";
import {
  CalendarOutlined,
  CreditCardOutlined,
  LockOutlined,
} from "@ant-design/icons";
import Button from "./Button";
import { useCarts } from "../contexts/CartContext";

const useStyle = createStyles(({ token }) => ({
  "my-modal-body": {},
  "my-modal-mask": {},
  "my-modal-header": {},
  "my-modal-content": {},
}));

ReviewModal.propTypes = {
  isModalOpen: PropTypes.func,
  handleCancel: PropTypes.func,
  accordionContent: PropTypes.func,
};

export function ReviewModal({ isModalOpen, handleCancel, accordionContent }) {
  const { styles } = useStyle();
  const token = useTheme();

  const classNames = {
    body: styles["my-modal-body"],
    mask: styles["my-modal-mask"],
    header: styles["my-modal-header"],
    content: styles["my-modal-content"],
  };

  const modalStyles = {
    header: {
      borderRadius: 0,
      backgroundColor: "var(--bg-dark)",
      padding: "30px 40px",
      position: "relative",
    },
    body: {
      padding: "10px 40px",
      borderRadius: 0,
    },
    mask: {},
    content: {},
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            titleColor: "white",
          },
        },
      }}
    >
      <Modal
        title="Item Reviews"
        width={700}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}
        okButtonProps={{ disabled: true }}
        cancelButtonProps={{ disabled: true }}
        classNames={classNames}
        styles={modalStyles}
        style={{
          top: 70,
        }}
        // closeIcon={false}
      >
        {Array.from({ length: 2 }, (_, i) => (
          <div key={i}>
            {accordionContent.map((content) => (
              <p
                key={content.name}
                className="border-bottom"
                style={{
                  padding: "10px 0px 10px 0px",
                  borderBottom: "1px solid var(--border-fade)",
                  marginBottom: "20px",
                }}
              >
                <p
                  style={{
                    fontWeight: "var(--font-medium)",
                    marginBottom: "5px",
                  }}
                >
                  {content.name} &nbsp;&nbsp;&nbsp;
                  <span style={{ color: "var(--text-fade)" }}>
                    {content.date}
                  </span>
                </p>
                <Rate
                  disabled
                  defaultValue={4}
                  style={{ fontSize: "15px", marginBottom: "5px" }}
                />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae omnis culpa dignissimos ad error quos odit eius
                assumenda, aliquam vitae illo consectetur quae soluta odio
                aspernatur adipisci.
              </p>
            ))}
          </div>
        ))}
      </Modal>
    </ConfigProvider>
  );
}

// let modalTitle = document.querySelector('ant-modal-title').textContent = `${<CloseOutlined  />} Item added to your cart`

export function AddToCartModal({
  isAddToCartModalOpen,
  handleAddToCartCancel,
}) {
  const { cart } = useCarts();
  const numCart = cart.length;

  return (
    <Modal
      title="Item added to your cart"
      open={isAddToCartModalOpen}
      onCancel={handleAddToCartCancel}
      okButtonProps={{ disabled: true }}
      cancelButtonProps={{ disabled: true }}
      footer={false}
      width={350}
    >
      <div className="cart--modal">
        {cart[0]?.map((cart) => (
          <div
            className="cart--modal-detail"
            style={{ display: "flex" }}
            key={cart.id}
          >
            <div>
              <img
                src={cart?.img}
                alt="cart-modal-img"
                className="cart-modal-img"
              />
            </div>
            <div style={{ lineHeight: "35px" }}>
              <p>{cart.name}</p>
              <p>Size:{cart.size}</p>
            </div>
          </div>
        ))}
        <button className="view-cart-btn">
          <Link to="/cart" style={{ color: "black" }}>
            View Cart ({numCart})
          </Link>
        </button>
        <Button
          className="checkout-btn"
          bgColor="var(--bg-secondary)"
          textcolor="var(--text-light)"
          width="100%"
          padding="10px 20px"
          boxShadow="var(--box-shadow)"
        >
          Check out
        </Button>
        <div className="continue-container">
          <button className="continue-btn">
            <Link to="/shop" style={{ color: "var(--text-dark)" }}>
              {" "}
              Continue Shopping{" "}
            </Link>
          </button>
        </div>
      </div>
    </Modal>
  );
}

AddToCartModal.propTypes = {
  isAddToCartModalOpen: PropTypes.bool,
  handleAddToCartCancel: PropTypes.func,
};

export function PaymentModal({ isPaymentModalOpen, handlePaymentModalCancel }) {
  return (
    <Modal
      // title="Basic Modal"
      open={isPaymentModalOpen}
      closeIcon={false}
      okButtonProps={{ disabled: true }}
      cancelButtonProps={{ disabled: true }}
      footer={false}
      width={1200}
    >
      <Row>
        <div className="shipping--payment-header" style={{ color: "black" }}>
          <Link>
            <img
              src={logo}
              width={150}
              alt="cyberpay-logo"
              className="cyberpay-logo"
            />
          </Link>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <i
              className="fa-solid fa-xmark close-icon fa-2xl"
              onClick={handlePaymentModalCancel}
            ></i>
          </div>
        </div>
        <Col className="" span={24} style={{ padding: "0px 110px" }}>
          <div className="">
            <h3>PAY WITH:</h3>
            <div className="payment--icons-main-container">
              <div className="payment--icons-container">
                <div style={{ display: "flex" }}>
                  <div>
                    <i className="fa-solid fa-credit-card fa-2xl"></i>
                  </div>
                  <h3
                    style={{
                      borderBottom: "5px solid var(--bg-dark)",
                      paddingBottom: "5px",
                    }}
                  >
                    CARD
                  </h3>
                </div>
              </div>
              <div className="payment--icons-container">
                <div style={{ display: "flex" }}>
                  <div>
                    <i className="fa-solid fa-building-columns fa-2xl"></i>
                  </div>
                  <h3>BANK</h3>
                </div>
              </div>
              <div className="payment--icons-container">
                <div style={{ display: "flex" }}>
                  <div>
                    <i className="fa-solid fa-mobile-screen-button fa-2xl"></i>
                  </div>
                  <h3>TRANSFER</h3>
                </div>
              </div>
              <div className="payment--icons-container">
                <div style={{ display: "flex" }}>
                  <div>
                    <i className="fa-solid fa-message fa-2xl"></i>
                  </div>
                  <h3>USSD</h3>
                </div>
              </div>
              <div className="payment--icons-container">
                <div style={{ display: "flex" }}>
                  <div>
                    <i className="fa-solid fa-qrcode fa-2xl"></i>
                  </div>
                  <h3>QR CODE</h3>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div className="payment--icons-container">
                  <div>
                    <i className="fa-solid fa-mobile-retro fa-2xl"></i>
                  </div>
                  <h3>Payattitude</h3>
                </div>
              </div>
            </div>
            <Row className="payment--form-row ">
              <div className="payer--email ">
                <h3>adebayo@gmail.com</h3>
              </div>
              <Col span={16} style={{ margin: "0 auto" }}>
                <div className="pay--form-container ">
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "20px",
                    }}
                  >
                    <strong>Enter your card details to pay</strong>
                    <span className="pay--amount">
                      <strong>
                        Pay{" "}
                        <span style={{ color: "#388dcc" }}> NGN 24,024.24</span>
                      </strong>
                    </span>
                  </p>
                  <div className="payment--form ">
                    <Form
                      style={{
                        maxWidth: 600,
                      }}
                      layout="vertical"
                      autoComplete="off"
                      requiredMark={false}
                    >
                      <Form.Item
                        label="Card Number"
                        name="card number"
                        rules={[
                          {
                            max: 3,
                            required: true,
                            message: "Please input your card number!",
                          },
                        ]}
                        style={{ fontWeight: "bold" }}
                      >
                        <Input
                          placeholder="0000 0000 0000 0000"
                          size="large"
                          style={{ borderRadius: "0px", padding: "14px" }}
                          prefix={<CreditCardOutlined />}
                        />
                      </Form.Item>
                      <Form.Item>
                        <Form.Item
                          label="Valid Till"
                          name="valid till"
                          rules={[
                            {
                              max: 4,
                              required: true,
                              message: "Please input your month/year!",
                            },
                          ]}
                          style={{
                            display: "inline-block",
                            width: "calc(50% - 8px)",
                            fontWeight: "bold",
                          }}
                        >
                          <Input
                            placeholder="MM/YY"
                            size="large"
                            prefix={<CalendarOutlined />}
                            style={{ borderRadius: "0px", padding: "14px" }}
                          />
                        </Form.Item>
                        <Form.Item
                          label="CVV"
                          name="month/year"
                          rules={[
                            {
                              max: 3,
                              required: true,
                              message: "Please input your cvv!",
                            },
                          ]}
                          style={{
                            display: "inline-block",
                            width: "calc(50% - 8px)",
                            fontWeight: "bold",
                            margin: "0 0 0 16px",
                          }}
                        >
                          <Input
                            placeholder="123"
                            size="large"
                            prefix={<LockOutlined />}
                            style={{ borderRadius: "0px", padding: "14px" }}
                          />
                        </Form.Item>
                      </Form.Item>
                      <ConfigProvider
                        theme={{
                          components: {
                            Button: {
                              defaultHoverBg:
                                "linearGradient(#388dcc, #042f46)",
                              defaultActiveBg:
                                "linearGradient(#388dcc, #042f46)",
                            },
                          },
                        }}
                      >
                        <Button
                          htmlType="submit"
                          block
                          size="large"
                          style={{
                            borderRadius: "0px",
                            height: "50px",
                            color: "white",
                          }}
                          className="payment-btn"
                        >
                          Pay NGN24,024.24
                        </Button>
                      </ConfigProvider>
                    </Form>
                  </div>
                </div>
              </Col>
            </Row>
            <p style={{ textAlign: "center", marginTop: "15px" }}>
              <LockOutlined /> Powered by <b>CyberPay</b>
            </p>
          </div>
        </Col>
      </Row>
    </Modal>
  );
}

PaymentModal.propTypes = {
  isPaymentModalOpen: PropTypes.bool,
  handlePaymentModalCancel: PropTypes.func,
};
