import React from 'react';
import styles from './index.less'
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import {Button} from "@material-ui/core";
import {useHistory} from 'react-router-dom';
import ColorBtn from "../common/ColorBtn";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: 'red',
    color: 'red',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: -1,
      left: -1,
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

const tabsBtn = [{
  color: "",
  text: "About",
  path: "/about",
}, {
  color: "",
  text: "Blog",
  path: "/blog",
}, {
  color: "",
  text: "Live",
  path: "/live",
}];

export default () => {
  const history = useHistory()
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div
          className={styles.logo}
          onClick={() => {
            history.push('/')
          }}
        >
          LOGO
        </div>
        <div className={styles.toolBar}>
          <div className={styles.tabs}>
            {
              tabsBtn.map((item) => {
                return (
                  <Button
                    key={item.text}
                    style={{color: item.color || "#fff"}}
                    onClick={() => {
                      history.push(item.path || '/')
                    }}
                  >
                    {item.text}
                  </Button>
                );
              })
            }
          </div>
          <div className={styles.userMenu}>
            {
              true && (
                <div className={styles.login}>
                  登 录
                </div>
              )
            }
            {
              true && (
                <ColorBtn>
                  注 册
                </ColorBtn>
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
                  style={{marginLeft: 20, width: 42, height: 42}}
                >
                  <Avatar alt="Remy Sharp" src="/public/logo192.png"/>
                </StyledBadge>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}