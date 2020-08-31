import Head from 'next/head'
import Servers from '../../src/components/Servers'
import SideBar from '../../src/components/SideBar'
import ChannelContent from '../../src/components/ChannelContent'

function Home() {
  return (
    <div className="app">
      <Head>
        <title>Discord Channel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main">
        <Servers />
        <SideBar type={'channel'} />
        <ChannelContent />
      </div>
    </div>
  )
}

export default Home
