import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from 'antd'
import cn from 'classnames'
import styles from '../../styles/StatusCircle.module.css'

const typeNames = {
  online: 'Online',
  idle: 'Idle',
  doNotDisturb: 'Do Not Disturb',
  offline: 'Offline',
}

function StatusCircle({ type }) {
  return (
    <Tooltip placement="top" title={<span>{typeNames[type]}</span>} color={'#000'} mouseEnterDelay={0}>
      <div
        className={cn(styles.circle, {
          [styles.online]: type === 'online',
          [styles.idle]: type === 'idle',
          [styles.doNotDisturb]: type === 'doNotDisturb',
          [styles.offline]: type === 'offline',
        })}
      />
    </Tooltip>
  )
}

StatusCircle.propTypes = {
  type: PropTypes.oneOf(['online', 'idle', 'doNotDisturb', 'offline']).isRequired,
}

export default StatusCircle
