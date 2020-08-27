import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../styles/SideBar.module.css'
import SideBarButton from './SideBarButton'
import HelloSVG from '../assets/svg/hello.svg'
import NitroSVG from '../assets/svg/nitro.svg'
import AddSVG from '../assets/svg/add-mini.svg'
import SectionTitle from './SectionTitle'
import UserCard from './UserCard'
import QuickUserPanel from './QuickUserPanel'
import ChevronDownSVG from '../assets/svg/chevron-down.svg'

function SideBar({ type }) {
  function renderChannelType() {
    return (
      <React.Fragment>
        <div className={styles.top}>
          <div className={styles.channelInfoBar}>
            <div className={styles.channelTitle}>Yazılım Kulübü</div>
            <ChevronDownSVG />
          </div>
        </div>
      </React.Fragment>
    )
  }

  function renderMeType() {
    return (
      <React.Fragment>
        <div className={styles.top}>
          <input
            className={styles.input}
            type={'text'}
            name={'q'}
            placeholder={'Find or start a conversation'}
            autoComplete={'off'}
          />
        </div>
        <div className={styles.buttons}>
          <SideBarButton url={'/'} text={'Friends'} icon={<HelloSVG />} isActive={true} />
          <SideBarButton url={'nitro'} text={'Nitro'} icon={<NitroSVG />} />
        </div>
        <div className={styles.sectionTitle}>
          <SectionTitle title={'Direct Messages'} icon={<AddSVG />} />
        </div>
        <div className={styles.users}>
          <UserCard
            photo={
              'https://cdn.discordapp.com/avatars/318811068824813570/da919aa49e0e42e324cdabf2277cf234.png?size=256'
            }
            name={'Enis'}
            status={'online'}
          />
          <UserCard
            photo={'https://discord.com/assets/1cbd08c76f8af6dddce02c5138971129.png'}
            name={'mustafaisik'}
            status={'offline'}
          />
          <UserCard
            photo={
              'https://cdn.discordapp.com/avatars/286579619119890433/4cf82d90b940e1a859b8a76f289d0edc.png?size=256'
            }
            name={'Rick Sanchez'}
            status={'idle'}
            customStatus={'Playing GTA V'}
          />
          <UserCard
            photo={
              'https://cdn.discordapp.com/avatars/612040334238548073/06248bb9255804d75a2a148604bdc390.png?size=256'
            }
            name={'samet'}
            status={'offline'}
          />
          <UserCard
            photo={'https://discord.com/assets/dd4dbc0016779df1378e7812eabaa04d.png'}
            name={'furkan'}
            status={'doNotDisturb'}
            customStatus={'Playing Minecraft'}
          />
          <UserCard
            photo={
              'https://cdn.discordapp.com/avatars/583054592548274192/cc0395be90cdcb7e117d5451e2c87c4e.png?size=256'
            }
            name={'Yusuf Can'}
            status={'online'}
          />
        </div>
        <div className={styles.quickPanel}>
          <QuickUserPanel
            user_id={8292}
            photo={
              'https://cdn.discordapp.com/avatars/481938565014487041/cdd2b4d773e83c7d74f447ebed7225db.png?size=256'
            }
            name={'orçun'}
            status={'doNotDisturb'}
          />
        </div>
      </React.Fragment>
    )
  }

  return <div className={styles.sidebar}>{type === 'me' ? renderMeType() : renderChannelType()}</div>
}

SideBar.propTypes = {
  type: PropTypes.oneOf(['me', 'channel']).isRequired,
}

export default SideBar
