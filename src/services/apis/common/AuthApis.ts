import {get} from 'src/services/request';

let baseUrl: string = '';

const GET_INFO = baseUrl + '/staff/v1/user/getInfo';

export const GetInfo = (data: { token: string; }) => {
  return get(GET_INFO, data);
};