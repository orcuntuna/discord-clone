import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../styles/SideBar.module.css'

function SideBar({ type }) {
  function renderChannelType() {
    return <p>channel</p>
  }

  function renderMeType() {
    return (
      <div className={styles.search}>
        <input
          className={styles.input}
          type={'text'}
          name={'q'}
          placeholder={'Find or start a conversation'}
          autoComplete={'off'}
        />
      </div>
    )
  }

  return <div className={styles.sidebar}>{type === 'me' ? renderMeType() : renderChannelType()}</div>
}

SideBar.propTypes = {
  type: PropTypes.oneOf(['me', 'channel']).isRequired,
}

export default SideBar
