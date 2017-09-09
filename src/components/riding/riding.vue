<template>
	<div>
		<header>
			<h2 @click="ridModel=!ridModel">
	 			<span>{{title}}</span>
	 			<i class="iconfont icon-down-trangle"></i>
	 		</h2>
		</header>
		<transition name="fade">
		<div class="ridList" v-show="ridModel">
			<div :class="{titleColor:title=='上下班'}" @click="titleChange('上下班')">上下班</div>
			<div :class="{titleColor:title=='周边游'}" @click="titleChange('周边游')">周边游</div>
			<div :class="{titleColor:title=='直通车'}" @click="titleChange('直通车')">直通车</div>
			<div :class="{titleColor:title=='机场快线'}" @click="titleChange('机场快线')">机场快线</div>
		</div>
		</transition>
		<div @click="ridModel=false" class="ridModel" v-show="ridModel">
			
		</div>
		<div class="ridingBox">
			<div>
				<div>
					<i style="font-size: 10rem;" class="iconfont icon-icon039"></i><br />
					<p>咦！这里什么都没有哦~</p>
					<p>快去左下角购票吧~</p>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				ridModel:false,
				title:'上下班'
			}
		},
		methods:{
			titleChange(str){
				this.title = str
				this.ridModel = false
			}
		}
	}
</script>

<style>
.ridList{
	width: 100vw;
	height: 20vh;
	background: white;
	display: flex;
	flex-direction: column;
	position: fixed;
	z-index: 11;
}
.ridList>div{
	flex: 1;
	display: flex;
	align-items: center;
	padding-left: 2vw;
	border-bottom: #cdcdd3 1px solid;
	color: #9d9da3;
}
.ridModel{
	width: 100vw;
	height: 93vh;
	background: black;
	position: fixed;
	z-index: 10;
	opacity: 0.7;
}
.ridingBox{
	width: 100vw;
	height: 85vh;
	background: #f1f1f1;
	
}
.ridingBox>div{
	width: 100vw;
	height: 85vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
.ridingBox>div>div{
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #c9c9d0;
}
.fade-enter-active {
  animation: bounce-in .5s
}
.fade-leave-active {
	animation: bounce-out .5s
}
.fade-enter, .fade-leave-to{
	opacity: 0;
}
@keyframes bounce-in {
  0% {
    height: 0vh;
    opacity: 0;
  }
  100% {
    height: 20vh;
    opacity: 1;
  }
}
@keyframes bounce-out {
  0% {
    height: 20vh;
    opacity: 1;
  }
  100% {
    height: 0vh;
    opacity: 0;
  }
}
.titleColor{
	color: #ff4a39 !important;
}
</style>