import {action, observable} from "mobx";
import * as Apis from 'src/services/apis/LiveApis';

export default class LiveStore {
  @observable photoAlbumList: any[] = [];
  
  @action handlePhotoAlbumListChange = () => {
    const _this = this;
    _this.photoAlbumList = [1, 2, 3]
  }
  @action init = () => {
    Apis.GetPhotoAlbum().then(res => {
      console.log(res)
    })
  }
}