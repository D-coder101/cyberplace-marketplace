import { ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import brocade_dress from "../../assets/Page-images/shop-images/brocade_dress.png";
import styles from "./Cart.module.css";
import Button from "../../ui/Button";

function Cart() {
  const [count, setCount] = useState(1);

  function handleInc() {
    setCount((curr) => curr + 1);
  }
  function handleDec() {
    if (count > 1) setCount((curr) => curr - 1);
  }

  return (
    <div className={styles.cart}>
      <div className={styles.cartContainer}>
        <p style={{ fontSize: "13px", marginBottom: "10px", color: "#bdbdbd" }}>
          Home <ArrowRightOutlined />
          &nbsp;
          <strong style={{ color: "var(--text-dark)" }}>Cart</strong>
        </p>

        <div className={styles.cartHeaderContainer}>
          <h2>Your Cart</h2>
          <div className={styles.cartHeader}>
            <h3 className={styles.itemHead}>Item</h3>
            <h3 className={styles.quantityHead}>Quantity</h3>
            <h3 className={styles.totalHead}>Total</h3>
          </div>
        </div>

        <div className={styles.cartItem}>
          <div className={styles.item}>
            <img src={brocade_dress} alt="item" className={styles.cartImg} />
            <div className={styles.itemDetails}>
              <p className={styles.itemName}>Brocade Dress</p>
              <p className={styles.itemSize}>Size: 10</p>
              <p className={styles.itemAmount}>₦50,000</p>
            </div>
          </div>

          <div className={styles.quantity}>
            <div>
              <button onClick={handleDec}>-</button>
              <div className={styles.quantityCount}>{count}</div>
              <button onClick={handleInc}>+</button>
            </div>
            <div className={styles.deleteFromCart}>
              <i className="fa-solid fa-trash-can"></i>
            </div>
          </div>

          <p className={styles.total}>
            <span className={styles.hideTotal}>Total:&nbsp;</span>₦50,000
          </p>
        </div>

        <div className={styles.cartPayContainer}>
          <div className={styles.cartCodeContainer}>
            <form>
              <input type="text" placeholder="Discount Code" />
              <Button
                padding="15px"
                borderRad="5px"
                bgColor="var(--bg-dark)"
                textcolor="var(--text-light)"
              >
                Apply
              </Button>
            </form>
            <div
              className={styles.codeError}
            >
              Invalid code
            </div>
          </div>

          <div className={styles.cartPaySubtotal}>
            <p>Subtotal</p>
            <p>
              <strong>₦150,000</strong>
            </p>
          </div>

          <div className={styles.cartPayDiscount}>
            <p>Discount</p>
            <p style={{ color: "var(--text-fade)" }}>₦0.00</p>
          </div>

          <div className={styles.cartPayTotal}>
            <p>Total</p>
            <p>₦150,000</p>
          </div>
            <Button
              width="100%"
              textcolor="var(--text-light)"
              bgColor="var(--bg-secondary)"
              padding="15px"
              fontWeight="var(--font-bold0"
              borderRad="5px"
              boxShadow="var(--box-shadow)"
            >
              Proceed to Checkout
            </Button>
          
            <p className={styles.cartContinueLink}><Link to="/shop" className={styles.cardCta}>Continue Shopping</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
