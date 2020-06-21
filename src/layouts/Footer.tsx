import React from 'react';
import styles from './index.less';
import {useHistory} from 'react-router-dom';

const Footer = () => {
  const history = useHistory();
  console.log(history.location.pathname === "/about")
  return (
    <div className={`${styles.footer} ${history.location.pathname === "/about" && styles.about}`}>
      <div className={styles.footerContent}>
        <p>Copyright © 2019-2020 www.milksaga.com 个人博客 All Rights Reserved. </p>
        <p>京 IPC 备 19037021-1 号</p>
      </div>
    </div>
  )
}

export default Footer;