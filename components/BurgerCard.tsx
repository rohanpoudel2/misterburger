import styles from '../styles/BurgerCard.module.scss'
import Image from 'next/image'

const BurgerCard = () => {
  return (
    <div className={styles.container}>
      <Image src='/img/burger.png' alt='Burger' width='300' height='300' />
      <h1 className={styles.title}>Massive Burger</h1>
      <span className={styles.price}>रू 230</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur
      </p>
    </div>
  )
}

export default BurgerCard