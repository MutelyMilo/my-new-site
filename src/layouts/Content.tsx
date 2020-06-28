import React from 'react';
import styles from './index.less';
import mapRoutes from 'src/routes';
import {useHistory} from 'react-router-dom';

const Content = () => {
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
    <div className={`${styles.content} ${routerStyles()}`}>
      { mapRoutes() }
    </div>
  )
}

export default Content;