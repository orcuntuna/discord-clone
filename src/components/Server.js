import React from 'react'
import styles from '../../styles/Server.module.css'
import Link from 'next/link'
import cn from 'classnames'
import { Tooltip } from 'antd'

function Server({ name, url, children, isActive = false, isLogo = false, isCustomAction = false }) {
  return (
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
  )
}

export default Server
