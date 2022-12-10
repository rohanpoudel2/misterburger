import styles from '../../styles/Product.module.scss'
import Image from 'next/image'
import { useState } from 'react'

interface burger {
  id: number,
  img: string,
  name: string,
  price: number[],
  desc: string
}

const product = () => {

  const burger: burger = {
    id: 1,
    img: '/img/burger.png',
    name: 'Massive Burger',
    price: [200, 250, 320],
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam aliquid qui itaque quasi pariatur facilis, in architecto ea repellat consequatur asperiores rerum, sint beatae tenetur iure minima. Deleniti, quos praesentium.'
  }

  const [size, setSize] = useState<number>(0)

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={burger.img} alt='burgerImage' fill objectFit='contain' />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{burger.name}</h1>
        <span className={styles.price}>रू{burger.price[size]}</span>
        <p className={styles.desc}>{burger.desc}</p>
        <h3 className={styles.choose}>Choose the size of your 🍔</h3>
        <div className={styles.sizes}>
          <div className={styles.size}>
            <Image src='/img/burgersize.png' alt='Burger Size' width={60} height={50} />
            <span>Small</span>
          </div>
          <div className={styles.size}>
            <Image src='/img/burgersize.png' alt='Burger Size' width={90} height={80} />
            <span>Medium</span>
          </div>
          <div className={styles.size}>
            <Image src='/img/burgersize.png' alt='Burger Size' width={100} height={90} />
            <span>Large</span>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default product