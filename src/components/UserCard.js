import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown, Menu } from 'antd'
import styles from '../../styles/UserCard.module.css'
import StatusCircle from './StatusCircle'

function UserCard({ name, photo, status, customStatus }) {
  function rightClickMenu() {
    return (
      <div className="user-context-menu">
        <Menu>
          <Menu.Item key="1">Profile</Menu.Item>
          <Menu.Item key="2">Call</Menu.Item>
          <Menu.Item key="3">Add Note</Menu.Item>
          <Menu.Item key="4">Close DM</Menu.Item>
          <Menu.Item key="5">Block</Menu.Item>
        </Menu>
      </div>
    )
  }

  return (
    <Dropdown overlay={rightClickMenu} trigger={['contextMenu']}>
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
    </Dropdown>
  )
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['online', 'idle', 'doNotDisturb', 'offline']).isRequired,
  customStatus: PropTypes.string,
}

export default UserCard
