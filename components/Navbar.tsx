import styles from '../styles/Navbar.module.scss'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src='/img/telephone.png' alt='telephoneIcon' width='32' height='32' />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order Now</div>
          <div className={styles.text}>+977-1234567890</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Menu</li>
          <div className={styles.logo}>
            <Image src='/img/logo.png' alt='MisterBurgerLogo' width='160' height='100' style={{ objectFit: 'cover' }} />
          </div>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src='/img/cart.png' width='32' height='32' alt='cartImage' />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar