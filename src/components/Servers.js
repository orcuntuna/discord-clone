import React from 'react'
import styles from '../../styles/Servers.module.css'
import LogoSVG from '../assets/svg/logo.svg'
import AddSVG from '../assets/svg/add.svg'
import ExploreSVG from '../assets/svg/explore.svg'
import DownloadSVG from '../assets/svg/download.svg'
import Server from './Server'

function Servers() {
  return (
    <div className={styles.container}>
      <Server isActive={true} isLogo={true} url={'/'} name={'Home'}>
        <LogoSVG className={styles.logoSVG} />
      </Server>
      <div className={styles.separator} />
      <Server url={'channels/x'} name={'moneo'}>
        <img src={'https://pbs.twimg.com/profile_images/1103913745053413378/PRPaN4jJ_400x400.png'} />
      </Server>
      <Server url={'channels/y'} name={'Miky Away'}>
        <img
          src={'https://cdn.discordapp.com/icons/520783646039474189/5fa468515c1b397e7d4e139ccab6b5dd.png?size=256'}
        />
      </Server>
      <Server url={'channels/y'} name={'KTÜ Yazılım Kulübü'}>
        <img src={'https://pbs.twimg.com/profile_images/845441682799767556/DUXAu58G_400x400.jpg'} />
      </Server>
      <Server url={'channels/y'} name={'Add a Server'} isCustomAction={true}>
        <AddSVG className={styles.iconSVG} />
      </Server>
      <Server url={'channels/y'} name={'Explore Public Servers'} isCustomAction={true}>
        <ExploreSVG className={styles.iconSVG} />
      </Server>
      <div className={styles.separator} />
      <Server url={'channels/y'} name={'Explore Public Servers'} isCustomAction={true}>
        <DownloadSVG className={styles.iconSVG} />
      </Server>
    </div>
  )
}

export default Servers
