import React from 'react';
import styles from 'src/assets/less/Live.less';
import SwiperComponent from "../common/Swiper";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const Live = () => {
  return (
    <div className={styles.liveContainer}>
      <div className={styles.content}>
        <div className={styles.title}>
          <p>生活不只是眼前的轻易，还有诗和远方的田野。</p>
          <p>你赤手空拳来到人世间，为找到那片海不顾一切。</p>
        </div>
        <div className={styles.contentTop}>
          <SwiperComponent style={{width: "70%"}} />
          <div className={styles.funBar}>
            最新相册
          </div>
        </div>
        <ArrowDownwardIcon className={styles.arrowDown} fontSize={"large"} />
        <div className={styles.photoWall}>
        
        </div>
      </div>
    </div>
  )
};

export default Live;