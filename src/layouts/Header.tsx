import React from 'react';
import styles from './index.less'
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import {Button} from "@material-ui/core";
import {useHistory} from 'react-router-dom';
import ColorBtn from "../common/ColorBtn";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import avatar from 'src/assets/img/timg.png'

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
  color: "#fff900",
  text: "About",
  path: "/about",
}, {
  color: "#2d2dff",
  text: "Blog",
  path: "/blog",
}, {
  color: "#2fff2f",
  text: "Live",
  path: "/live",
}, {
  color: "white",
  text: "Message board",
  path: "/message",
}];

const Header = () => {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  
  return (
    <div className={`${styles.header} ${history.location.pathname === "/about" && styles.about}`}>
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
                    style={{color: item.color || "#fff", margin: "0 10px"}}
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
                <React.Fragment>
                  <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    variant="dot"
                    style={{marginLeft: 20, width: 42, height: 42, position: "relative"}}
                    aria-haspopup="true"
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={avatar}
                    />
                    <button
                      style={{overflow: "hidden", width: 42,opacity: 0, position: "absolute", zIndex: 9, top: 0, left: 0, height: "100%", display: "block", padding: 0}}
                      ref={anchorRef}
                      onClick={() => {setOpen(!open)}}
                    />
                  </StyledBadge>
                  <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({TransitionProps, placement}) => (
                      <Grow
                        {...TransitionProps}
                        style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={() => {setOpen(!open)}}>
                            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                              <MenuItem onClick={() => {setOpen(false)}}>Profile</MenuItem>
                              <MenuItem onClick={() => {setOpen(false)}}>My account</MenuItem>
                              <MenuItem onClick={() => {setOpen(false)}}>Logout</MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </React.Fragment>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
