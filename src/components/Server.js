import React from 'react'
import styles from '../../styles/Server.module.css'
import Link from 'next/link'
import cn from 'classnames'
import { Dropdown, Menu, Tooltip } from 'antd'
import PropTypes from 'prop-types'

function Server({ name, url, children, isActive = false, isLogo = false, isCustomAction = false, isChannel = false }) {
  function contextMenu() {
    return (
      <div className="custom-context-menu">
        {isChannel && (
          <Menu>
            <Menu.Item key="1">Mark As Read</Menu.Item>
            <Menu.Item key="2">Invite People</Menu.Item>
            <Menu.Item key="3">Mute Server</Menu.Item>
            <Menu.Item key="4">Server Settings</Menu.Item>
            <Menu.Item key="5">Notification Settings</Menu.Item>
            <Menu.Item key="6">Leave Channel</Menu.Item>
          </Menu>
        )}
      </div>
    )
  }
  return (
    <Dropdown overlay={contextMenu} trigger={['contextMenu']}>
      <div className={styles.item}>
        <Link href={url}>
          <Tooltip
            mouseEnterDelay={0}
            placement={'right'}
            title={<span className={styles.tooltipText}>{name}</span>}
            color={'#000'}
            overlayClassName={styles.tooltip}
          >
            <a
              className={cn(styles.box, {
                [styles.active]: isActive,
                [styles.logo]: isLogo,
                [styles.customBox]: isCustomAction,
              })}
            >
              {isActive && <div className={styles.activeLine} />}
              <div className={styles.hoverLine} />
              {children}
            </a>
          </Tooltip>
        </Link>
      </div>
    </Dropdown>
  )
}

Server.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.element,
  isActive: PropTypes.bool,
  isLogo: PropTypes.bool,
  isCustomAction: PropTypes.bool,
  isChannel: PropTypes.bool,
}

export default Server
