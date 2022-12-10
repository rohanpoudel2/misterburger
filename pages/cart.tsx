import styles from '../styles/Cart.module.scss';
import Image from 'next/image'

const cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.tr}>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>
                <div className={styles.imageContainer}>
                  <Image src='/img/burger.png' alt='burgerItem' fill />
                </div>
              </td>
              <td>
                <span className={styles.name}>Pork Burger</span>
              </td>
              <td>
                <span className={styles.price}>रू 22</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>रू 44</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.imageContainer}>
                  <Image src='/img/burger.png' alt='burgerItem' fill />
                </div>
              </td>
              <td>
                <span className={styles.name}>Pork Burger</span>
              </td>
              <td>
                <span className={styles.price}>रू 22</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>रू 44</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.imageContainer}>
                  <Image src='/img/burger.png' alt='burgerItem' fill />
                </div>
              </td>
              <td>
                <span className={styles.name}>Pork Burger</span>
              </td>
              <td>
                <span className={styles.price}>रू 22</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>रू 44</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Cart Total</h2>
          <div className={styles.totalText}>
            <strong className={styles.totalTextTitle}>Subtotal:</strong>रू 44
          </div>
          <div className={styles.totalText}>
            <strong className={styles.totalTextTitle}>Discount:</strong>रू 0
          </div>
          <div className={styles.totalText}>
            <strong className={styles.totalTextTitle}>Total:</strong>रू 44
          </div>
          <button className={styles.button}>CheckOut Now</button>
        </div>
      </div>
    </div>
  )
}

export default cart