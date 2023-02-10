import axios from "axios";
const baseURL = `${location.origin}/api`;

// 创建axios实例，可以自定义配置
const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
  );
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response) {
      switch (error.response.status) {
        case 404:
        window.alert("参数错误");
        break;
        case 500:
        window.alert("服务器故障");
        break;
        case 504:
        window.alert("没有网络");
        break;
      }
    }
  }
  );

export default instance;
