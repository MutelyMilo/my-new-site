import React from 'react';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {
  withStyles,
  Theme,
} from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const ColorButton = withStyles((_: Theme) => ({
  root: {
    color: "white",
    backgroundColor: purple[400],
    '&:hover': {
      backgroundColor: purple[500],
    },
  },
}))(Button);


const ColorBtn = (props) => {
  return (
    <ColorButton style={{width: 100}} size={"large"} color="primary" endIcon={<AccountCircleIcon />}>
      {props.children}
    </ColorButton>
  )
}

export default ColorBtn