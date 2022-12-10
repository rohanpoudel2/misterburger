import styles from '../../styles/Order.module.scss'
import Image from 'next/image'

const Order = () => {

  const status: number = 0;

  const statusClass = (index: number): string => {
    if (index - status < 1) {
      return styles.done
    }
    if (index - status === 1) {
      return styles.inProgress
    }
    if (index - status > 1) {
      return styles.undone
    }
    return ""
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
              <tr className={styles.tr}>
                <td>
                  <span className={styles.id}>923</span>
                </td>
                <td>
                  <span className={styles.name}>Gohan Poudel</span>
                </td>
                <td>
                  <span className={styles.address}>Kathmandu, Nepal</span>
                </td>
                <td>
                  <span className={styles.total}>रू 44</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" alt="paid" width={30} height={30} />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src='/img/checked.png' alt='checked' width={20} height={20} />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/makingburger.png" alt="paid" width={30} height={30} />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src='/img/checked.png' alt='checked' width={20} height={20} />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/delivery.png" alt="paid" width={30} height={30} />
            <span>On the Way</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src='/img/checked.png' alt='checked' width={20} height={20} />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/delivered.png" alt="paid" width={30} height={30} />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src='/img/checked.png' alt='checked' width={20} height={20} />
            </div>
          </div>
        </div>
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
          <button disabled className={styles.button}>Already Paid</button>
        </div>
      </div>
    </div>
  )
}

export default Order