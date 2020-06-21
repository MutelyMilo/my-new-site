import React from 'react';
import {CircularProgress} from "@material-ui/core";

const Loading = () => {
  return (
    <div style={{position: "fixed", top: 100, zIndex: 9}}>
      <CircularProgress color="secondary" />
    </div>
  )
}

export default Loading;