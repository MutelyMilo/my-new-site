import React from 'react';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import styles from './index.less'
import Player from "../common/Player";

export default () => {
  return (
    <div className={styles.layoutsContainer}>
      <Player />
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}