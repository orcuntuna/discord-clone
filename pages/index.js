import Head from 'next/head'
import Servers from '../src/components/Servers'
import SideBar from '../src/components/SideBar'

function Home() {
  return (
    <div className="app">
      <Head>
        <title>Discord Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Servers />
      <SideBar type={'me'} />
    </div>
  )
}

export default Home
