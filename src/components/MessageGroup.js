import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../styles/MessageGroup.module.css'

function MessageGroup({ user, ago, children }) {
  return (
    <div className={styles.group}>
      <div className={styles.photo}>
        <a>
          <img src={user.photo} alt={user.name} />
        </a>
      </div>
      <div className="messages">
        <p className={styles.userInfo}>
          <a style={{ color: user.color }}>{user.name}</a>
          <span className={styles.ago}>{ago}</span>
        </p>
        {children}
      </div>
    </div>
  )
}

MessageGroup.propTypes = {
  user: PropTypes.object.isRequired,
  ago: PropTypes.string.isRequired,
}

export default MessageGroup
