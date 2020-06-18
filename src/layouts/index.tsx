import React from 'react';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import styles from './index.less'

export default () => {
  return (
    <div className={styles.layoutsContainer}>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}