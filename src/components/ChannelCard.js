import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from '../../styles/ChannelCard.module.css'
import HastagSVG from '../assets/svg/hastag.svg'
import VoiceSVG from '../assets/svg/voice.svg'

function ChannelCard({ type, name, isActive = false }) {
  return (
    <div className={cn(styles.card, { [styles.active]: isActive })}>
      {type === 'voice' ? <VoiceSVG /> : <HastagSVG />}
      <span className={styles.name}>{name}</span>
    </div>
  )
}

ChannelCard.propTypes = {
  type: PropTypes.oneOf(['voice', 'text']).isRequired,
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
}

export default ChannelCard
