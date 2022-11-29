import Image from 'next/image'
import styles from '../styles/Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            👋 Hello Dear,<br />The Best 🍔 in Town<br /> is Here.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Find Us At</h1>
          <p className={styles.text}>
            Chhetrapati, Thamel,
            <br />
            Kathmandu, Nepal
            <br />
            +977-1234567890
          </p>

          <p className={styles.text}>
            Chhetrapati, Thamel,
            <br />
            Kathmandu, Nepal
            <br />
            +977-1234567890
          </p>

          <p className={styles.text}>
            Chhetrapati, Thamel,
            <br />
            Kathmandu, Nepal
            <br />
            +977-1234567890
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Opening Hours</h1>
          <p className={styles.text}>
            Sun to Fri
            <br />
            8:00 to 22:00
          </p>
          <p className={styles.text}>
            Sat
            <br />
            6:00 to 11:00 & 18:00 to 22:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer