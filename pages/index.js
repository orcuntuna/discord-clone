import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Servers from '../src/components/Servers'

function Home() {
  return (
    <div className={styles.app}>
      <Head>
        <title>Discord Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Servers />
    </div>
  )
}

export default Home
