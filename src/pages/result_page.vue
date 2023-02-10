<template>
	<div class="container">
		<img class="sign_success" src="../static/sign_success.png" v-if="type == 1">
		<img class="sign_fail" src="../static/sign_fail.png" v-if="type == 0">
		<div class="toast">签到{{type == 1?'成功':'失败'}}</div>
		<div class="sign_time" v-if="type == 1">签到时间</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				type:'1',			//1:成功；2:失败
			}
		},
		created(){
			this.type = this.$route.query.type;
			if(this.type == '1'){
				this.sign_in_time = this.$route.query.sign_in_time;
			}
			
		}
	}
</script>
<style type="text/css" scoped>
.container{
	padding-top: 90px;
	background-color: #F5F7FB;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.sign_success{
	width: 106px;
	height: 101px;
}
.sign_fail{
	width: 94px;
	height: 97px;
}
.toast{
	margin-top: 10px;
	font-size: 14px;
	color: #333333;
}
.sign_time{
	margin-top: 58px;
	font-size: 16px;
	color: #333333;
}
</style>