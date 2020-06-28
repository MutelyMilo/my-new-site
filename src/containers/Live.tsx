import React, {useState} from 'react';
import styles from 'src/assets/less/Live.less';
import SwiperComponent from "../common/Swiper";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Upload from "../common/Upload";
import CreateAlbumDialog from "../components/Live/CreateAlbumDialog";
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const Live = () => {
  const [open, setOpen] = useState<boolean>(false)
  const classes = useStyles();
  return (
    <div className={styles.liveContainer}>
      <div className={styles.content}>
        <div className={styles.title}>
          <p>生活不只是眼前的轻易，还有诗和远方的田野。</p>
          <p>你赤手空拳来到人世间，为找到那片海不顾一切。</p>
        </div>
        <div className={styles.contentTop}>
          <SwiperComponent className={styles.swiperContainer} />
          <div className={styles.funBar}>
            最新日记    <span>添加日记</span>
          </div>
        </div>
        <ArrowDownwardIcon className={styles.arrowDown} fontSize={"large"} />
  
        
        
        
        <Upload />
        <div className={styles.photoWallBar}>
          <div>照片墙</div>
          <div onClick={() => {setOpen(true)}}>
            创建相册
              <AddIcon />
          </div>
        </div>
  
  
        <div className={styles.photoWall}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
          </Grid>
        </div>
      </div>
      <CreateAlbumDialog onOk={() => {}} open={open} onClose={() => {setOpen(false)}} />
    </div>
  )
};

export default Live;