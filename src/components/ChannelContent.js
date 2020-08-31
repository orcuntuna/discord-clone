import React from 'react'
import styles from '../../styles/ChannelContent.module.css'
import Messages from './Messages'
import ContentHeader from './ContentHeader'
import HastagSVG from '../assets/svg/hastag.svg'

function ChannelContent() {
  return (
    <div className={styles.content}>
      <ContentHeader icon={<HastagSVG />} type={'chat'} />
      <Messages />
    </div>
  )
}

export default ChannelContent
