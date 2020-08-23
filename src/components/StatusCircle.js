import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from '../../styles/StatusCircle.module.css'

function StatusCircle({ type }) {
  return (
    <div
      className={cn(styles.circle, {
        [styles.online]: type === 'online',
        [styles.idle]: type === 'idle',
        [styles.doNotDisturb]: type === 'doNotDisturb',
        [styles.offline]: type === 'offline',
      })}
    />
  )
}

StatusCircle.propTypes = {
  type: PropTypes.oneOf(['online', 'idle', 'doNotDisturb', 'offline']).isRequired,
}

export default StatusCircle
