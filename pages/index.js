import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Channels from '../src/components/Channels'

function Home() {
  return (
    <div className={styles.app}>
      <Head>
        <title>Discord Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Channels />
    </div>
  )
}

export default Home
