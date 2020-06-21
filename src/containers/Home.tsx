import React from 'react';
import styles from "src/assets/less/Home.less";
import SmileImg from "../assets/img/timg.png";
import Avatar from "../assets/img/homeAvatar.jpeg";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {useHistory} from 'react-router-dom';

const Home = () => {
  const history = useHistory()
  return (
    <div className={styles.homeContainer}>
      <div className={styles.content}>
        <div className={styles.context}>
          <div className={styles.aside}>
            <div className={styles.text}>
              <p>这是一条有韧性，有理想的咸鱼</p>
              <p>从未停止过自己的尾鳍</p>
              <p>在这广阔的大海中寻找生机</p>
              <p>不必花心思鄙夷</p>
              <p>因为我只有 6 秒记忆&nbsp;&nbsp;<img width={24} src={SmileImg} alt=""/></p>
              <p className={styles.animate}
                 onClick={() => {
                   history.push("/about")
                 }}
              >
                About Me &nbsp;&nbsp;
                <ArrowForwardIcon style={{color: "#6e68bd"}}/>
              </p>
            </div>
          </div>
          <div className={styles.photo}>
            <img width={400} src={Avatar} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;