import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Servers.module.css'
import LogoSVG from '../assets/svg/logo.svg'
import AddSVG from '../assets/svg/add.svg'
import ExploreSVG from '../assets/svg/explore.svg'
import DownloadSVG from '../assets/svg/download.svg'
import Server from './Server'

function Servers() {
  const router = useRouter()
  const [servers, setServers] = useState([])

  async function getServers() {
    const res = await fetch('/api/servers')
    const servers = await res.json()
    setServers(servers)
  }

  useEffect(() => {
    getServers()
  }, [])

  return (
    <div className={styles.container}>
      <Server isActive={router.pathname === '/' && true} isLogo={true} url={'/'} name={'Home'}>
        <LogoSVG className={styles.logoSVG} />
      </Server>
      <div className={styles.separator} />
      {servers.map((server) => (
        <Server
          isActive={router.query.channel_id === server.id && true}
          url={`/channels/${server.id}`}
          name={server.name}
          key={`server-${server.id}`}
          isChannel={true}
        >
          <img src={server.image} />
        </Server>
      ))}
      <Server url={'/channels/y'} name={'Add a Server'} isCustomAction={true}>
        <AddSVG className={styles.iconSVG} />
      </Server>
      <Server url={'/channels/y'} name={'Explore Public Servers'} isCustomAction={true}>
        <ExploreSVG className={styles.iconSVG} />
      </Server>
      <div className={styles.separator} />
      <Server url={'/channels/y'} name={'Explore Public Servers'} isCustomAction={true}>
        <DownloadSVG className={styles.iconSVG} />
      </Server>
    </div>
  )
}

export default Servers
