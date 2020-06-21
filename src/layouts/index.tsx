import React from 'react';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import styles from './index.less'
import Player from "../common/Player";

const Layouts = () => {
  return (
    <div className={styles.layoutsContainer}>
      <Header/>
      <Content/>
      <Footer/>
      <Player />
    </div>
  );
}

export default Layouts;