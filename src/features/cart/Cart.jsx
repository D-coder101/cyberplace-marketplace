import { ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// import brocade_dress from "../../assets/Page-images/shop-images/brocade_dress.png";
import styles from "./Cart.module.css";
import Button from "../../ui/Button";
import { useCarts } from "../../contexts/CartContext";

function Cart() {
  // const [count, setCount] = useState(1);
  const { cart, increaseQuantity, decreaseQuantity, handleDeleteItemsFromCart } = useCarts();

let Amount = new Intl.NumberFormat();
let Total = cart.reduce((arr, curr) => {
let innerTotal = curr.reduce((arr, curr) => {
  return arr + (curr.quantity * curr.amount);
}, 0);
return arr + innerTotal
}, 0)

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

        {cart?.map(item => item.map((item) =>
          <div className={styles.cartItem} key={item}>
            <div className={styles.item} key={item?.id}>
              <Link to={item.id}>
              <img
                src={item?.img}
                alt={item?.name}
                className={styles.cartImg}
              />
              </Link>
              <div className={styles.itemDetails}>
                <p className={styles.itemName}>{item?.name}</p>
                <p className={styles.itemSize}>Size: {item?.size}</p>
                <p className={styles.itemAmount}>₦{Amount.format(`${item?.amount}`)}</p>
              </div>
            </div>
            <div className={styles.quantity}>
              <div>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <div className={styles.quantityCount}>{item.quantity}</div>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <div className={styles.deleteFromCart}>
                <i className="fa-solid fa-trash-can" onClick={() => handleDeleteItemsFromCart(item.id)}></i>
              </div>
            </div>
            <p className={styles.total}>
              <span className={styles.hideTotal}>Total:&nbsp;</span>₦
              {Amount.format(`${(item.amount) * (item.quantity)}`)}
            </p>
          </div>
      ))}

        {/* {cart?.map((item) => (
        ))} */}

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
            <div className={styles.codeError}>Invalid code</div>
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
            <p>₦{Amount.format(`${(Total)}`)}</p>
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

          <p className={styles.cartContinueLink}>
            <Link to="/shop" className={styles.cardCta}>
              Continue Shopping
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
