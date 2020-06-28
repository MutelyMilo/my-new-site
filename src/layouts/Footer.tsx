import React from 'react';
import styles from './index.less';
import {useHistory} from 'react-router-dom';

const Footer = () => {
  const history = useHistory();
  const pathname = history.location.pathname;
  const routerStyles = () => {
    if (pathname === "/about") {
      return styles.about
    } else if (pathname === "/live") {
      return  styles.live
    } else if (pathname === "/blog") {
      return styles.blog
    } else if (pathname === "/message") {
      return styles.message
    } else {
      return ""
    }
  }
  return (
    <div className={`${styles.footer} ${routerStyles()}`}>
      <div className={styles.footerContent}>
        <p>Copyright © 2019-2020 www.milksaga.com 个人博客 All Rights Reserved. </p>
        <p>京 IPC 备 19037021-1 号</p>
      </div>
    </div>
  )
}

export default Footer;