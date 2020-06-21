import React from 'react';
import styles from "src/assets/less/Blog.less";

const Blog = () => {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.skills}>
            相关技术
          </div>
        </div>
        <div className={styles.right}>
          <p>最新文章</p>
          <div className={styles.articleList}>
            <div className={styles.articleItem}>
              <p className={styles.title}>alksjdkasjdlkasjd</p>
              <p className={styles.text}>alksjdkasjdlkasjd</p>
            </div>
            <div className={styles.articleItem}>
              <p className={styles.title}>alksjdkasjdlkasjd</p>
              <p className={styles.text}>alksjdkasjdlkasjd</p>
            </div>
            <div className={styles.articleItem}>
              <p className={styles.title}>alksjdkasjdlkasjd</p>
              <p className={styles.text}>alksjdkasjdlkasjd</p>
            </div><div className={styles.articleItem}>
            <p className={styles.title}>alksjdkasjdlkasjd</p>
            <p className={styles.text}>alksjdkasjdlkasjd</p>
          </div>
            <div className={styles.articleItem}>
              <p className={styles.title}>alksjdkasjdlkasjd</p>
              <p className={styles.text}>alksjdkasjdlkasjd</p>
            </div>
            <div className={styles.articleItem}>
              <p className={styles.title}>alksjdkasjdlkasjd</p>
              <p className={styles.text}>alksjdkasjdlkasjd</p>
            </div><div className={styles.articleItem}>
            <p className={styles.title}>alksjdkasjdlkasjd</p>
            <p className={styles.text}>alksjdkasjdlkasjd</p>
          </div>
            <div className={styles.articleItem}>
              <p className={styles.title}>alksjdkasjdlkasjd</p>
              <p className={styles.text}>alksjdkasjdlkasjd</p>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog;