import styles from '../styles/Featured.module.scss'
import Image from 'next/image'
import { useState } from 'react'

const Featured = () => {

  const images: string[] = [
    '/img/featured.png',
    '/img/featured2.png',
    '/img/featured3.png',
  ]

  const [index, setIndex] = useState<number>(0);

  const handleArrow = (direction: string): void => {
    if (direction === 'l') {
      setIndex(index !== 0 ? index - 1 : 2)
    } else if (direction === 'r') {
      setIndex(index !== 2 ? index + 1 : 0)
    }
    console.log(index)
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleArrow('l')}>
        <Image src='/img/left-arrow.png' alt='Left Arrow Img' layout='fill' objectFit='contain' />
      </div>
      <div className={styles.wrapper} style={{ transform: `translateX(${-100 * index}vw)` }}>
        {images.map((image, index) => {
          return (
            <div key={index} className={styles.imgContainer}>
              <Image src={image} alt='Featured Image' layout='fill' objectFit='contain' />
            </div>
          )
        })}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => handleArrow('r')}>
        <Image src='/img/right-arrow.png' alt='Right Arrow Img' layout='fill' objectFit='contain' />
      </div>
    </div>
  )
}

export default Featured