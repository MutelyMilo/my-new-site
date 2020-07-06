import React from 'react';
import styles from 'src/assets/less/MessageBoard.less';
import Divider from '@material-ui/core/Divider';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import TextField from '@material-ui/core/TextField';

const MessageBoard = () => {
  return (
    <div className={styles.messageBoardContainer}>
      <div className={styles.content}>
        <p className={styles.title}>留下小脚印<span role={"img"} aria-label={'foot'}>🦶🦶🦶</span></p>
        <div className={styles.board}>
          <div className={styles.message}>
            <div className={styles.selfMessage}>
              <div className={styles.avatar}>
                <div></div>
              </div>
              <div className={styles.messageInfo}>
                <div style={{padding: "0 0 2px 0"}}>
                  <span>AuthName：</span>
                  <span>这是一条留言</span>
                </div>
                <div className={styles.bottom}>
                  <div className={styles.time}>7月4日 13:01</div>
                  <div className={styles.toolBar}>
                    <div className={styles.items}>回复</div>
                    <Divider orientation="vertical" flexItem style={{background: '#d8d8d8'}} />
                    <div className={styles.items}>
                      <ThumbUpRoundedIcon fontSize={"small"}  />&nbsp;赞
                    </div>
                  </div>
                </div>
  
                <div className={styles.reply}>
                  <TextField
                    style={{width: "100%"}}
                    placeholder={'说点什么吧'}
                    id="outlined-multiline-static"
                    label="回复内容"
                    multiline
                    rowsMax={10}
                    variant="outlined"
                    value={""}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageBoard;