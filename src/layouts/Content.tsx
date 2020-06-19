import React from 'react';
import styles from './index.less';
import SmileImg from 'src/assets/img/timg.png'
import Avatar from 'src/assets/img/avatar.png'

export default () => {
  return (
    <div className={styles.content}>
      <div className={styles.content}>
        <div className={styles.context}>
          <div className={styles.aside}>
            <div className={styles.text}>
              <p>这是一条有韧性，有理想的咸鱼</p>
              <p>从未停止过自己的尾鳍</p>
              <p>在这广阔的大海中寻找生机</p>
              <p>不必花心思鄙夷</p>
              <p>因为我只有 6 秒记忆&nbsp;&nbsp;<img width={24} src={SmileImg} alt=""/></p>
            </div>
            <div>
            
            </div>
          </div>
          <div>
            <img width={400} src={Avatar} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}