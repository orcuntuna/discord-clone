import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../styles/SectionTitle.module.css'

function SectionTitle({ title, icon }) {
  return (
    <div className={styles.line}>
      <span className={styles.title}>{title}</span>
      {icon && icon}
    </div>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
}

export default SectionTitle
