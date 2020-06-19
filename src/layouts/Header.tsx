import React from 'react';
import styles from './index.less'
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import {Button} from "@material-ui/core";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: 'red',
    color: 'red',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const tabsBtn = ["About", "博文", "生活"]

export default () => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.toolBar}>
          <div className={styles.tabs}>
            {
              tabsBtn.map((item) => {
                return (
                  <Button style={{color: "#fff"}}>{item}</Button>
                )
              })
            }
          </div>
          <div className={styles.userMenu}>
            {
              true && (
                <Button variant="contained" color="primary" style={{marginRight: 20}}>
                  登 录
                </Button>
              )
            }
            {
              true && (
                <StyledBadge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  variant="dot"
                >
                  <Avatar alt="Remy Sharp" src="/public/logo192.png" />
                </StyledBadge>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}