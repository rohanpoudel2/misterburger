import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mister Burger Now In Kathmandu</title>
        <meta name="description" content="Best online burger resturant in Kathmandu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
    </div >
  )
}
