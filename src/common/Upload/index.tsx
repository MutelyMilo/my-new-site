import React, {useState} from 'react';



const Upload = () => {
  const [file, setFile] = useState<any>(null)
  
  
  function upload() {
    const input = document.createElement("input");
    input.type = "file";
    input.click()
    input.onchange = function() {
      const file = input.files[0];
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
      if (!isJpgOrPng) {
        console.error('You can only upload JPG/PNG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        console.error('Image must smaller than 2MB!');
      }
      setFile(file)
      return isJpgOrPng && isLt2M;
    }
  }
  return (
    <div onClick={() => {upload()}}>照片墙     选择相册
      <div onClick={(e) => {
        e.stopPropagation()
        console.log(file)}}>
        上传
      </div>
    </div>
  )
};

export default Upload;