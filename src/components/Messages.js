import React from 'react'
import cn from 'classnames'
import styles from '../../styles/Messages.module.css'
import MessageGroup from './MessageGroup'
import Message from './Message'
import PlusCircleSVg from '../assets/svg/plus-circle.svg'
import GiftSVG from '../assets/svg/gift.svg'
import GifSVG from '../assets/svg/gif.svg'
import EmojiSVG from '../assets/svg/emoji.svg'

function Messages() {
  return (
    <React.Fragment>
      <div className={cn('scrollable', styles.messages)}>
        <MessageGroup
          user={{ photo: '/img/user-1.png', name: 'Enis Keskin', color: 'rgb(46, 204, 113)' }}
          ago={'Yesterday at 14:04'}
        >
          <Message>Hello world!</Message>
          <Message>I'm here..</Message>
        </MessageGroup>
        <MessageGroup
          user={{ photo: '/img/user-1.png', name: 'Enis Keskin', color: 'rgb(46, 204, 113)' }}
          ago={'Yesterday at 14:04'}
        >
          <Message>Hello world!</Message>
          <Message>I'm here..</Message>
        </MessageGroup>
        <MessageGroup
          user={{ photo: '/img/user-1.png', name: 'Enis Keskin', color: 'rgb(46, 204, 113)' }}
          ago={'Yesterday at 14:04'}
        >
          <Message>Hello world!</Message>
          <Message>I'm here..</Message>
        </MessageGroup>
        <MessageGroup
          user={{ photo: '/img/user-1.png', name: 'Enis Keskin', color: 'rgb(46, 204, 113)' }}
          ago={'Yesterday at 14:04'}
        >
          <Message>Hello world!</Message>
          <Message>I'm here..</Message>
        </MessageGroup>
        <MessageGroup
          user={{ photo: '/img/user-1.png', name: 'Enis Keskin', color: 'rgb(46, 204, 113)' }}
          ago={'Yesterday at 14:04'}
        >
          <Message>Hello world!</Message>
          <Message>I'm here..</Message>
        </MessageGroup>
        <MessageGroup
          user={{ photo: '/img/user-1.png', name: 'Enis Keskin', color: 'rgb(46, 204, 113)' }}
          ago={'Yesterday at 14:04'}
        >
          <Message>Hello world!</Message>
          <Message>I'm here..</Message>
        </MessageGroup>
        <MessageGroup
          user={{ photo: '/img/user-1.png', name: 'Enis Keskin', color: 'rgb(46, 204, 113)' }}
          ago={'Yesterday at 14:04'}
        >
          <Message>Hello world!</Message>
          <Message>I'm here..</Message>
        </MessageGroup>
        <MessageGroup
          user={{ photo: '/img/user-1.png', name: 'Enis Keskin', color: 'rgb(46, 204, 113)' }}
          ago={'Yesterday at 14:04'}
        >
          <Message>Hello world!</Message>
          <Message>I'm here..</Message>
        </MessageGroup>
        <MessageGroup
          user={{ photo: '/img/user-1.png', name: 'Enis Keskin', color: 'rgb(46, 204, 113)' }}
          ago={'Yesterday at 14:04'}
        >
          <Message>Hello world!</Message>
          <Message>I'm here..</Message>
        </MessageGroup>
        <MessageGroup
          user={{ photo: '/img/user-1.png', name: 'Enis Keskin', color: 'rgb(46, 204, 113)' }}
          ago={'Yesterday at 14:04'}
        >
          <Message>Hello world!</Message>
          <Message>I'm here..</Message>
        </MessageGroup>
      </div>
      <div className={styles.new}>
        <div className={styles.box}>
          <a className={styles.button}>
            <PlusCircleSVg />
          </a>
          <input type={'text'} placeholder={'Message #sun'} />
          <a className={cn(styles.button, styles.buttonRight)}>
            <GiftSVG />
          </a>
          <a className={cn(styles.button, styles.buttonRight)}>
            <GifSVG />
          </a>
          <a className={cn(styles.button, styles.buttonRight)}>
            <EmojiSVG style={{width: 22, height: 22}} />
          </a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Messages
