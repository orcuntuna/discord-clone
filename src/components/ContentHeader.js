import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../styles/ContentHeader.module.css'

function ContentHeader({ type, icon }) {
  function renderHomeHeader() {
    return <p>home</p>
  }

  function renderChatHeader() {
    return (
      <React.Fragment>
        <div className={styles.icon}>{icon}</div>
        <span className={styles.title}>Milky Way</span>
      </React.Fragment>
    )
  }

  return (
    <div className={styles.header}>
      {type === 'home' && renderHomeHeader()}
      {type === 'chat' && renderChatHeader()}
    </div>
  )
}

ContentHeader.propTypes = {
  type: PropTypes.oneOf(['home', 'chat']).isRequired,
  icon: PropTypes.element.isRequired,
}

export default ContentHeader
