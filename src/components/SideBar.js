import React, { useEffect, useState } from 'react'
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
  const [directMessages, setDirectMessages] = useState([])

  useEffect(() => {
    type === 'me' && getDirectMessages()
  }, [])

  async function getDirectMessages() {
    const res = await fetch('/api/me')
    const me = await res.json()
    setDirectMessages(me.direct_messages)
  }

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
          {directMessages.map((item) => (
            <UserCard
              key={`dm-${item.id}`}
              photo={item.photo}
              name={item.name}
              status={item.status}
              customStatus={item.customStatus}
            />
          ))}
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
