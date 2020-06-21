import React, {useEffect} from 'react';
import Swiper from 'swiper';
import styles from './index.less';
import "swiper/css/swiper.min.css";
import img from 'src/assets/img/WechatIMG10.jpeg'

interface IProps {
  style: {
    [key: string]: string | number;
  }
}

const SwiperComponent = (props: IProps) => {
  useEffect(() => {
    new Swiper('.swiper-container', {
      loop: true,
      autoplay: true,
      delay: 3000,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  })
  return (
    <div className={styles.swiperContainer} style={{...props.style}}>
      <div className="swiper-container" style={{borderRadius: "4px"}}>
        <div className="swiper-wrapper">
          <div className="swiper-slide" onClick={() => {
            console.log(123)
          }}>
            <img src={img} alt=""/>
          </div>
          <div className="swiper-slide">
            <img src={img} alt=""/>
          </div>
          <div className="swiper-slide">
            <img src={img} alt=""/>
          </div>
        </div>
        <div className="swiper-pagination" />
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </div>
    </div>
  )
}

export default SwiperComponent;