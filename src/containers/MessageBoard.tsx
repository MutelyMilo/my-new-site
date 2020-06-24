import React from 'react';
import styles from 'src/assets/less/MessageBoard.less'

const MessageBoard = () => {
  return (
    <div className={styles.messageBoardContainer}>
      <div className={styles.content}>
        <p className={styles.title}>留下小脚印<span role={"img"} aria-label={'foot'}>🦶🦶🦶</span></p>
      </div>
    </div>
  )
}

export default MessageBoard;