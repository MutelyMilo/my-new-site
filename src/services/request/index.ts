import axios, {AxiosRequestConfig} from 'axios';

const authCode = [401, 403];
// axios 终止句柄
var CancelToken = axios.CancelToken;
let cancelTokenMap: any = { get: {} };

/**
 * 创建xhr实例
 * 路径前缀
 * 超时失败时间
 */
const service = axios.create({
  //baseURL: baseurl,
  timeout: 50000,
  // headers: {
  //   Accept: '*/*',
  //   'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  // },
});
/**
 * @desc 设置服务请求拦截器
 * 定义token请求设置
 */
service.interceptors.request.use(config => {
    return {
      ...config,
      headers: {
        ...config.headers,
        // "Authorization": config.headers.token || localStorage.getItem('token'),
        // "x-user-id": localStorage.getItem('userId'),
      },
    };
  },
  error => {
    Promise.reject(error).then(r => console.log(r));
  }
);

/**
 * @desc 设置服务响应拦截器
 * 截取返回状态 统一定义成功失败
 */
service.interceptors.response.use(
  (response) => {
    let data = response.data;
    const code = data.errcode | 0;
    if (authCode.includes(code)) {
      console.log('errcode is:' + code);
      // messageInfo.show(code, 'warn', data.errmsg);
      window.location.href = "#/login";
    } else {
      // let total = response.headers['x-total-count'];
      data = {
        ...data,
        // totalCount: cusParseInt(total || 0)
      };
      if (code === 0) {
        // todo
        if (!data.data) {
          data.data = []
        }
      } else {
        // todo
        // message.warn(response.data.errmsg)
      }
      // 上传逻辑
      if (response.config.url === "https://hetao-console.oss-cn-beijing.aliyuncs.com/") {
        data = {
          status: response.status
        }
      }
    }
    return data
  },
  error => {
    if (error.response) {
      const res = error.response;
      const status = res.status;
      switch (status) {
        case 401:
          window.location.href = "#/login";
          break;
        case 504:
          console.log(504);
          break;
        // todo
        default:
          break;
      }
    }
    return Promise.reject(error);
  }
);

/**
 * 封装get请求
 * @param {*} url
 * @param {*} params
 * @param _cancelToken is boolean
 * @param header
 */
const get = (url: string, params?: any, _cancelToken = false, header = {}) => {
  let _config: AxiosRequestConfig = {
    url: url,
    method: 'get',
    headers: {
      ...header
    }
  };
  if (params) {
    if(params.hasOwnProperty('data') && params.hasOwnProperty('json')) {
      _config['data'] = params.data
    } else {
      _config['params'] = params
    }
    if (_cancelToken) {
      let _key = url;
      let _arr=[];
      var entries = Object.entries(params);
      for(let [key,value] of entries){
        _arr.push(key + '=' + value)
      }
      _key=_key+'?'+_arr.join('&');
      let _token = cancelTokenMap['get'][_key];
      if (!_token) {
        cancelTokenMap['get'][_key] = {};
        _token = cancelTokenMap['get'][_key]
      }
      _token['token'] = _token['token'] || new CancelToken(function executor(c) {
        // executor 函数接收一个 cancel 函数作为参数
        _token['cancel'] = c;
      });
      _token['count'] = _token['count'] ? _token['count'] + 1 : 1;
      _config['cancelToken'] = _token['token']
    }
  }
  return service(_config).then(res => {
    return res;
  }, rj => {
    return rj;
  })
  // 低版本浏览器不支持promise的finally，加垫片(promise.prototype.finally)or放弃。
  // .finally(() => {
  //   if (_cancelToken) {
  //     const _item = cancelTokenMap['get'][url]
  //     if (_item && _item.count <= 1) {
  //       delete cancelTokenMap['get'][url]
  //     }
  //     _item && _item.count--
  //   }
  // });
};

const post = (url: string, data = {}, headers = {}) => {
  return service({
    url: url,
    method: 'post',
    data,
    headers: {
      ...headers,
    }
  }).then(rs => {
    return rs;
  }, rj => {
    return rj;
  });
};

/**
 * 封装put请求
 * @param url
 * @param data
 * @param header
 * @returns {Promise}
 */

const put = (url: string, data = {}, header = {}) => {
  let _config: AxiosRequestConfig = {
    url: url,
    method: 'put',
    data,
    headers: {
      ...header
    }
  };
  return service( _config).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

const _delete = (url: string, data = {}, header = {}) => {
  let _config: AxiosRequestConfig = {
    url: url,
    method: 'delete',
    data,
    headers: {
      ...header
    }
  };
  return service(_config).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 终止未完成的axios请求
 * @param {*} url axios请求地址
 * @param params
 * @param {*} type 方法类型 get/post or other
 */
const cancelAxiosToken = (url: string, params = {}, type: string | number) => {
  if (type) {
    let item = cancelTokenMap[type];
    let _key = url;
    let _arr=[];
    var entries = Object.entries(params);
    for(let [key,value] of entries) {
      _arr.push(key + '=' + value)
    }
    _key=_key+'?'+_arr.join('&');
    if (item[_key]) {
      if (typeof item[_key]['cancel'] === 'function') {
        item[_key]['cancel']()
      }
      delete cancelTokenMap[type][_key]
    }
  }
};
const postFile = (url: string, data = {}) => {
  let config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Accept': '*/*'
    },
  };
  return service.post(url, data, config).then((res) => {
    return res;
  });
};

export {get, post, _delete, put, postFile, cancelAxiosToken,};