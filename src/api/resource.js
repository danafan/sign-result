import http from "./request.js";
let path = {  
  scanCode:'meeting/scan_code',          //扫码签到    
} 
export default {
  //扫码签到
  scanCode(params) {
    return http.get(path.scanCode, params);
  },
};
