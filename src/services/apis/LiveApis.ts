import {get} from 'src/services/request';

const GET_PHOTO_ALBUM = '/api/v1/photo-album';

export const GetPhotoAlbum = () => {
  return get(GET_PHOTO_ALBUM)
}