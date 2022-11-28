import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mister Burger Now In Kathmandu</title>
        <meta name="description" content="Best online burger resturant in Kathmandu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Hello World
    </div>
  )
}
