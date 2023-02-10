<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  import * as dd from 'dingtalk-jsapi';
  import resource from './api/resource.js'
  export default {
    created() {
      let c_path = window.location.href;
      var meeting_id = c_path.split('?')[1].split('=')[2].split('#')[0];
      dd.ready(() => {
        dd.runtime.permission.requestAuthCode({
          corpId: 'ding7828fff434921f5b', 
          onSuccess:  (info) => {
            let code = info.code // 通过该免登授权码可以获取用户身份
            //签到
            this.scanCode(code,meeting_id);
          }
        });
      });
    },
    watch:{
      $route:function(n,o){
        document.title = n.name;
      }
    },
    methods: {
      //签到
      scanCode(code,meeting_id){
        let arg = {
          meeting_id:meeting_id,
          code:code
        }
        resource.scanCode(arg).then(res => {
          if(res.data.code == 1){
            let sign_in_time = res.data.data.sign_in_time;
            this.$router.replace(`/result_page?type=1&toast=${sign_in_time}`)
          }else{
            let toast = res.data.msg;
            this.$router.replace(`/result_page?type=0&toast=${toast}`)
          }
        })
      }


    }
  };
</script>