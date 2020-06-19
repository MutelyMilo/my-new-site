import React, {useEffect} from 'react';
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
import img from 'src/assets/img/WechatIMG10.jpeg'

export default () => {
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
    <div className="swiper-container" style={{borderRadius: "8px", boxShadow: "0 0 10px #6e68bd"}}>
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
      <div className="swiper-pagination"></div>
    
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
  
    </div>
  )
}