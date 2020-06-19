import React, {useEffect} from 'react';
import APlayer from 'aplayer';
import 'aplayer/dist/APlayer.min.css';
import styles from './index.less';
import audio from "../../assets/mp3/Pedro Capo,Alan Walker,Farruko-Calma (Alan Walker Remix).mp3";
import Avatar from "../../assets/img/avatar.png";

const Player = () => {
  useEffect(() => {
    new APlayer({
      container: document.getElementById('player-container'),
      theme: "#24ec90",
      autoplay: true,
      fixed: true,    // 吸底模式
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
  }, [])
  return (
    <div className={styles.player}>
      <div id="player-container" />
    </div>
  )
}
export default Player;