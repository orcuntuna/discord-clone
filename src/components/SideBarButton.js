import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from '../../styles/SideBarButton.module.css'

function SideBarButton({ text, icon, url, isActive = false }) {
  return (
    <Link href={url}>
      <a className={cn(styles.button, {[styles.active]: isActive})}>
        {icon && icon}
        <span>{text}</span>
      </a>
    </Link>
  )
}

SideBarButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
  url: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
}

export default SideBarButton
