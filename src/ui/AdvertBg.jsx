import shopping1 from "../assets/Registration-images/shopping-together.png";
import shopping2 from "../assets/Registration-images/shopping-cart.png";
import shopping3 from "../assets/Registration-images/shopping-bag.png";
import trouser from "../assets/Registration-images/Path 2646.png";
import trouser2 from "../assets/Registration-images/Path 2647.png";
import shirt from "../assets/Registration-images/Path 2649.png";
import shirt2 from "../assets/Registration-images/Path 2648.png";
import dress from "../assets/Registration-images/Path 2645.png";
import lshoe from "../assets/Registration-images/Path 2644.png";
import rshoe from "../assets/Registration-images/Path 2643.png";
import styles from "./Advert.module.css";
export default function Advert() {
  return (
    <div className={styles.advertContainer}>
      <div className={styles.clothings}>
        <div className={styles.clothing}>
          <div className={styles.smallRectangle}>
            <span className={styles.circle}></span>
            <span className={styles.circle}></span>
            <span className={styles.circle}></span>
          </div>

          <div className={styles.mainRectangle}>
            <div className={styles.item1}>
              <img src={trouser} />
            </div>
            <div className={styles.item2}>
              <img src={dress} />
            </div>
            <div className={styles.item3}>
              <img src={trouser2} />
            </div>
            <div className={styles.item4}>
              <img src={shirt} />
            </div>
            <div className={styles.item5}>
              <img src={lshoe} />
              <img src={rshoe} />
            </div>
            <div className={styles.item6}>
              <img src={shirt2} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.shopping2}>
        <img src={shopping2} alt="shopping-cart" />
      </div>
      <div className={styles.shopping3}>
        <img src={shopping3} alt="shopping-bag" />
      </div>
      <div className={styles.shopping1}>
        <img src={shopping1} alt="shopping-together" />
      </div>
    </div>
  );
}
