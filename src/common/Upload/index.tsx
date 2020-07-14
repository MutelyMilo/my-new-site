import React, {useEffect, useState} from 'react';
import {Button} from "@material-ui/core";
import styles from './index.less'
import {getBase64} from "src/utils";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import {get, postFile} from "../../services/request";
import { v4 as uuidv4 } from 'uuid';

const Upload = () => {
  const [file, setFile] = useState<any>(null)
  const [canUpload, setCanUpload] = useState<boolean>(true)
  const [imageUrl, setImageUrl] = useState<string>('')
  
  useEffect(() => {
    console.log(uuidv4())
  }, [])
  
  const selectFile = (): void => {
    setFile(null)
    const input = document.createElement("input");
    input.type = "file";
    input.click()
    input.onchange = function() {
      const file = input.files[0];
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
      if (!isJpgOrPng) {
        console.error('You can only upload JPG/PNG file!');
        input.remove()
        return
      }
      const isLt2M = file.size / 1024 / 1024 < 10;
      if (!isLt2M) {
        console.error('Image must smaller than 10MB!');
        input.remove()
        return
      }
      setFile(file)
      getBase64(file, imageUrl => {
        setImageUrl(imageUrl)
        setCanUpload(false)
      })
    }
  }
  
  const handleSubmit = () => {
    get("/api/v1/qiniu-token").then(res => {
      if (res.statusCode === 0) {
        const type = file.type.substr(file.type.indexOf('/') + 1);
        const fileName = uuidv4() + '.' + type
        console.log(fileName)
        const formData: any = new FormData();
        formData.append('file', file);
        formData.append('key', fileName);
        formData.append('token', res.data.token);
        postFile("https://upload-z1.qiniup.com", formData).then((res: any) => {
          console.log(res)
          // url
          const url = "http://cdn.milksaga.com/" + res.key;
          console.log(url)
        })
      }
    })
    console.log(imageUrl)
    
  }
  
  return (
    <div className={styles.uploadWrapper}>
      <Button startIcon={<PhotoSizeSelectActualIcon />} variant="outlined" style={{marginRight: 20}} onClick={() => {
        selectFile()
      }}>选择文件</Button>
      <Button endIcon={<CloudUploadIcon />} disabled={canUpload} variant="contained" color="primary" onClick={(e) => {
        e.stopPropagation()
        handleSubmit()
        console.log(file)
      }}>
        上 传
      </Button>
      {
        file && <div className={styles.fileInfo}>
          {file.name}
        </div>
      }
    </div>
  );
};

export default Upload;