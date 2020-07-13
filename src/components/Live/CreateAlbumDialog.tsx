import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Upload from "../../common/Upload";

interface IProps {
  open: boolean;
  onClose: () => void;
  onOk: () => void;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props: IProps) {
  
  
  return (
    <Dialog
      onClose={props.onClose}
      aria-labelledby="customized-dialog-title"
      open={props.open}
      fullWidth={true}
      maxWidth={"sm"}
    >
      <DialogTitle id="customized-dialog-title" onClose={props.onClose}>
        创建相册
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={3} alignItems={"center"}>
          <Grid item container xs={4} justify={"flex-end"} >
            相册名称：
          </Grid>
          <Grid item xs={8}>
            <Input placeholder="输入相册名称" onChange={e => {
              console.log(e.target.value)}} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item container xs={4} justify={"flex-end"} style={{lineHeight: "36px"}} >
            上传封面图：
          </Grid>
          <Grid item xs={8}>
            <Upload />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={props.onClose}>
          取消
        </Button>
        <Button autoFocus onClick={props.onClose} color="primary">
          确定
        </Button>
      </DialogActions>
    </Dialog>
  );
}