import React from 'react';
import styles from './index.less';
import mapRoutes from 'src/routes';
import {useHistory} from 'react-router-dom';

const Content = () => {
  const history = useHistory();
  return (
    <div className={`${styles.content} ${history.location.pathname === "/about" && styles.about}`}>
      { mapRoutes() }
    </div>
  )
}

export default Content;