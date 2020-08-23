import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../styles/SideBar.module.css'
import SideBarButton from './SideBarButton'
import HelloSVG from '../assets/svg/hello.svg'
import NitroSVG from '../assets/svg/nitro.svg'

function SideBar({ type }) {
  function renderChannelType() {
    return <p>channel</p>
  }

  function renderMeType() {
    return (
      <React.Fragment>
        <div className={styles.search}>
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
      </React.Fragment>
    )
  }

  return <div className={styles.sidebar}>{type === 'me' ? renderMeType() : renderChannelType()}</div>
}

SideBar.propTypes = {
  type: PropTypes.oneOf(['me', 'channel']).isRequired,
}

export default SideBar
