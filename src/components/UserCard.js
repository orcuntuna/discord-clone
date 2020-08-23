import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../styles/UserCard.module.css'
import StatusCircle from './StatusCircle'

function UserCard({ name, photo, status, customStatus }) {
  return (
    <div className={styles.card}>
      <div className={styles.photoBox}>
        <div className={styles.status}>
          <StatusCircle type={status} />
        </div>
        <img src={photo} alt={name} className={styles.photo} />
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
      </div>
    </div>
  )
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['online', 'idle', 'doNotDisturb', 'offline']).isRequired,
  customStatus: PropTypes.string,
}

export default UserCard
