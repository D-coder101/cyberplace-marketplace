// import { ArrowRightOutlined } from "@ant-design/icons";
// import { Badge, Col, ConfigProvider, Row } from "antd";
// import { Form, Input, Select } from "antd";
// import { useState } from "react";
// // import { Link } from "react-router-dom";
// import { PaymentModal } from "../ui/Modals";
// import { Link } from "react-router-dom";

// const { TextArea } = Input;
// const { Option } = Select;

// const shippingData = [
//   { name: "Brocade Dress", size: 10, id: 1, img: "brocade_dress.png" },
//   { name: "Brocade Dress", size: 16, id: 2, img: "brocade_dress.png" },
//   { name: "Brocade Dress", size: 12, id: 3, img: "red_dress.png" },
// ];

// let codeInput = document.querySelector(".code-input");
// let codeError = document.querySelector(".code-error");

// export default function Shipping() {
//   const [value, setValue] = useState("");
//   const [isOpen, setIsModalOpen] = useState(false);

//   const showPaymentModal = () => {
//     setIsModalOpen(true);
//   };

//   const handlePaymentModalCancel = () => {
//     setIsModalOpen(false);
//   };

//   const prefixSelector = (
//     <Form.Item name="prefix" noStyle>
//       <Select>
//         <Option value="234">+234</Option>
//         <Option value="227">+227</Option>
//       </Select>
//     </Form.Item>
//   );

//   const onFinish = (values) => {
//     console.log("Success:", values);
//   };
//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (codeInput.value !== "Coupon-XYZ") {
//       codeInput.style.border = "1px solid red";
//       codeError.style.visibility = "visible";
//     } else {
//       codeInput.style.border = "1px solid lightgrey";
//       codeError.style.visibility = "hidden";
//     }
//   }

//   return (
//     <div className="shipping-container">
//       <p style={{ fontSize: "13px", marginBottom: "10px", color: "#bdbdbd" }}>
//         Home <ArrowRightOutlined /> Cart <ArrowRightOutlined />{" "}
//         <strong style={{ color: "black" }}>Shipping</strong>
//       </p>
//       <Row>
//         <div className="shipping--header-container">
//           <h2>Contact</h2>
//         </div>
//         <Col lg={10}>
//           <div className="contact--form-container">
//             <ConfigProvider
//               theme={{
//                 components: {
//                   Input: {
//                     paddingBlockLG: 12,
//                   },
//                   Select: {
//                     singleItemHeightLG: 50,
//                   },
//                 },
//               }}
//             >
//               <Form
//                 name="basic"
//                 style={{
//                   maxWidth: 600,
//                 }}
//                 onFinish={onFinish}
//                 onFinishFailed={onFinishFailed}
//                 autoComplete="off"
//               >
//                 <Form.Item
//                   name="firstname"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Please input your firstname!",
//                     },
//                   ]}
//                 >
//                   <Input placeholder="First Name" size="large" />
//                 </Form.Item>
//                 <Form.Item
//                   name="lastname"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Please input your lastname!",
//                     },
//                   ]}
//                 >
//                   <Input placeholder="Last Name" size="large" />
//                 </Form.Item>
//                 <Form.Item
//                   name="email"
//                   rules={[
//                     {
//                       type: "email",
//                       message: "The input is not valid E-mail!",
//                     },
//                     {
//                       required: true,
//                       message: "Please input your email!",
//                     },
//                   ]}
//                 >
//                   <Input placeholder="Email Address" size="large" />
//                 </Form.Item>
//                 <Form.Item
//                   name="phone"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Please input your phone number!",
//                     },
//                   ]}
//                 >
//                   <Input
//                     addonBefore={prefixSelector}
//                     style={{
//                       width: "100%",
//                     }}
//                     placeholder="Phone Number"
//                     size="large"
//                   />
//                 </Form.Item>

//                 {/* <Form.Item>
//                   <Button type="primary" htmlType="submit">
//                     Submit
//                   </Button>
//                 </Form.Item> */}
//               </Form>
//             </ConfigProvider>
//           </div>
//           <div className="shipping--form-container">
//             <h2>Shipping Details</h2>
//             <Form.Item style={{ marginTop: "5px" }}>
//               <Select size="large" defaultValue="Country">
//                 <Select.Option value="Country">Country</Select.Option>
//                 <Select.Option value="Nigeria">Nigeria</Select.Option>
//                 <Select.Option value="USA">USA</Select.Option>
//                 <Select.Option value="SIERRA LEONE">USA</Select.Option>
//               </Select>
//             </Form.Item>
//             <Form.Item
//               name="shipping address"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input the shipping address!",
//                 },
//               ]}
//             >
//               <Input placeholder="Shipping Address" size="large" />
//             </Form.Item>
//             <Form.Item>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <Form.Item
//                   name="city"
//                   rules={[
//                     {
//                       required: true,
//                     },
//                   ]}
//                   style={{
//                     width: "calc(30%)",
//                     display: "inline-block",
//                   }}
//                 >
//                   <Input
//                     placeholder="City"
//                     size="large"
//                     style={{ textAlign: "center" }}
//                   />
//                 </Form.Item>
//                 <Form.Item
//                   name="state"
//                   rules={[
//                     {
//                       required: true,
//                     },
//                   ]}
//                   style={{
//                     display: "inline-block",
//                     width: "calc(30%)",
//                   }}
//                 >
//                   <Input
//                     placeholder="State"
//                     size="large"
//                     style={{ textAlign: "center" }}
//                   />
//                 </Form.Item>
//                 <Form.Item
//                   name="postal"
//                   rules={[
//                     {
//                       required: true,
//                     },
//                   ]}
//                   style={{
//                     display: "inline-block",
//                     width: "calc(30%)",
//                     //   margin: "0 8px",
//                   }}
//                 >
//                   <Input
//                     placeholder="Postal"
//                     size="large"
//                     style={{ textAlign: "center" }}
//                   />
//                 </Form.Item>
//               </div>
//             </Form.Item>
//             <Form.Item>
//               <Select size="large" defaultValue="Select Shipping Rate">
//                 <Select.Option value="Rates">
//                   Select Shipping Rate
//                 </Select.Option>
//                 <Select.Option value="Rate1">Rate1</Select.Option>
//                 <Select.Option value="Rate1">Rate1</Select.Option>
//                 <Select.Option value="Rate1">Rate1</Select.Option>
//               </Select>
//             </Form.Item>
//             <TextArea
//               value={value}
//               onChange={(e) => setValue(e.target.value)}
//               placeholder="Controlled autosize"
//               autoSize={{ minRows: 5, maxRows: 5 }}
//             />
//           </div>
//         </Col>
//         <Col lg={8} offset={6}>
//           <div className="shipping--product-container">
//             {shippingData.map((ship) => (
//               <div className="shipping--product-details" key={ship.id}>
//                 <div className="shipping--img-container">
//                   <Badge count={1} offset={[-10, 0]}>
//                     <img
//                       src={ship.img}
//                       alt="ship-product"
//                       className="shipping-img"
//                     />
//                   </Badge>
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       justifyContent: "space-evenly",
//                     }}
//                   >
//                     <p>{ship.name}</p>
//                     <p>Size: {ship.size}</p>
//                   </div>
//                 </div>
//                 <div className="shipping--product-prize">₦50,000</div>
//               </div>
//             ))}
//             <div className="shipping-pay-container">
//               <div className="cart-code-container">
//                 <form className="cart-form" onSubmit={handleSubmit}>
//                   <input
//                     type="text"
//                     placeholder="Discount Code"
//                     className="code-input"
//                   />
//                   <button className="code-apply-btn">Apply</button>
//                   <div
//                     style={{ padding: "5px 0px 0px 0px", color: "red" }}
//                     className="code-error"
//                   >
//                     Invalid code
//                   </div>
//                 </form>
//               </div>
//               <div className="shipping-pay-estimated">
//                 <p>Estimated Total</p>
//                 <p>₦150,000</p>
//               </div>
//               <div className="shipping-pay-discount">
//                 <p>Discount</p>
//                 <p>₦10,000</p>
//               </div>
//               <div className="shipping-pay-shipping">
//                 <p>Shipping</p>
//                 <p>₦5,000</p>
//               </div>
//               <div className="shipping-pay-total">
//                 <p>Total</p>
//                 <p>₦135,000</p>
//               </div>
//               {/* <Link to="/payment"> */}
//               <button className="cart-checkout-btn" onClick={showPaymentModal}>
//                 Continue to Payment
//               </button>
//               {/* </Link> */}
//               <div className="cart-continue-container">
//                 <button className="cart-continue-btn">
//                   <Link to="/shop">Continue Shopping</Link>
//                 </button>
//               </div>

//               <PaymentModal
//                 isPaymentModalOpen={isOpen}
//                 handlePaymentModalCancel={handlePaymentModalCancel}
//               />
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// }
