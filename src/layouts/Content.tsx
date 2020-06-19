import React from 'react';
import styles from './index.less';
import mapRoutes from 'src/routes'

export default () => {
  
  return (
    <div className={styles.content}>
      { mapRoutes() }
    </div>
  )
}