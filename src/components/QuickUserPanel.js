import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from '../../styles/QuickUserPanel.module.css'
import StatusCircle from './StatusCircle'
import HeadphoneOnSVG from '../assets/svg/headphone-on.svg'
import HeadphoneOffSVG from '../assets/svg/headphone-off.svg'
import MicrophoneOnSVG from '../assets/svg/microphone-on.svg'
import MicrophoneOffSVG from '../assets/svg/microphone-off.svg'
import SettingsSVG from '../assets/svg/settings.svg'

function QuickUserPanel({ name, user_id, photo, status }) {
  const [isActiveMicrophone, setIsActiveMicrophone] = useState(false)
  const [isActiveSound, setIsActiveSound] = useState(true)

  return (
    <div className={styles.panel}>
      <div className="photo">
        <div className={styles.photoBox}>
          <div className={styles.status}>
            <StatusCircle type={status} />
          </div>
          <img src={photo} alt={name} className={styles.photo} />
        </div>
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.userId}>#{user_id.toString()}</span>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => setIsActiveMicrophone(!isActiveMicrophone)} className={styles.button}>
          {isActiveMicrophone ? <MicrophoneOnSVG /> : <MicrophoneOffSVG />}
        </button>
        <button onClick={() => setIsActiveSound(!isActiveSound)} className={styles.button}>
          {isActiveSound ? <HeadphoneOnSVG /> : <HeadphoneOffSVG />}
        </button>
        <button className={styles.button}>
          <SettingsSVG />
        </button>
      </div>
    </div>
  )
}

QuickUserPanel.propTypes = {
  name: PropTypes.string.isRequired,
  user_id: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['online', 'idle', 'doNotDisturb', 'offline']).isRequired,
}

export default QuickUserPanel
