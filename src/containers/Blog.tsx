import React from 'react';
import styles from "src/assets/less/Blog.less";

const Blog = () => {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h4>
            相关技术
          </h4>
          <div className={styles.tagList}>
            <div className={styles.tagItem}>javascript</div>
            <div className={styles.tagItem}>javascript</div>
            <div className={styles.tagItem}>javascript</div>
            <div className={styles.tagItem}>javascript</div>
            <div className={styles.tagItem}>javascript</div>
            <div className={styles.tagItem}>javascript</div>
          </div>
        </div>
        <div className={styles.right}>
          <h4 className={styles.title}>最新文章</h4>
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