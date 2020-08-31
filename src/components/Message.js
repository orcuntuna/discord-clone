import React from 'react'
import styles from '../../styles/Message.module.css'

function Message({ children }) {
  return <div className={styles.message}>{children}</div>
}

export default Message
