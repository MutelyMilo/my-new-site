import React, {useEffect} from 'react';
import styles from './index.less';
import SmileImg from 'src/assets/img/timg.png'
import Avatar from 'src/assets/img/avatar.png'
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';
import audio from 'src/assets/mp3/Pedro Capo,Alan Walker,Farruko-Calma (Alan Walker Remix).mp3'

export default () => {
  useEffect(() => {
    const ap = new APlayer({
      container: document.getElementById('playerContainer'),
      theme: "#74b2ef",
      autoplay: true,
      audio: [{
        name: 'xxxxx',
        artist: 'xxxxxxxxxxxxxx',
        url: audio,
        cover: Avatar
      }, {
        name: 'xxxxx',
        artist: 'xxxxxxxxxxxxxx',
        url: audio,
        cover: Avatar
      }, {
        name: 'xxxxx',
        artist: 'xxxxxxxxxxxxxx',
        url: audio,
        cover: Avatar
      }, {
        name: 'xxxxx',
        artist: 'xxxxxxxxxxxxxx',
        url: audio,
        cover: Avatar
      }]
    });
    console.log(ap)
  })
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
            <div className={styles.player}>
              <div id="playerContainer" />
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