<template>
  <div id="app">
	 	<transition name="bounce">
	 	<router-view></router-view>
   	</transition>
    <footer v-show="bol">
    	<div>
    		<router-link to="home" tag="div">
    			<div><i :class="{check:tabNum==0}"  @click="tabNum=0" class="iconfont icon-icon-system-fi-ticket iconSize"></i></div>
    			<div :class="{check:tabNum==0}"  @click="tabNum=0">购票</div>
    		</router-link>
    	</div>
    	<div>
    		<router-link to="riding" tag="div">
    			<div><i :class="{check:tabNum==1}"  @click="tabNum=1" class="iconfont icon-icon039 iconSize"></i></div>
    			<div :class="{check:tabNum==1}"  @click="tabNum=1">乘车</div>
    		</router-link>
    	</div>
    	<div>
    		<router-link to="me" tag="div">
    			<div><i :class="{check:tabNum==2}" @click="tabNum=2" class="iconfont icon-womorenzhuangtai iconSize"></i></div>
    			<div :class="{check:tabNum==2}" @click="tabNum=2">我的</div>
    		</router-link>
    	</div>
    </footer>
  </div>
</template>

<script>
export default {
  data(){
  	return {
  		tabNum:0,
  		bol:true
  	}
  },
  created(){
  	window.onhashchange = ()=>{
  		if(window.location.hash.indexOf('Child') > -1){
  			this.bol = false;
  		}else{
  			this.bol = true;
  		}
  	}
  }
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
	font-size: 1rem;
	outline: none;
}

header{
	width: 100vw;
	height: 7vh;
	background: #ff4a39;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	position: relative;
}

header .selectCity{
	position: absolute;
	left: 2vw;
}
footer{
	width: 100vw;
	height: 8vh;
	border-top: 1px solid #cdcdd3;
	position: fixed;
	bottom: 0;
	display: flex;
}
footer>div{
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: #9d9da3;
}
.iconSize{
	font-size: 1.6rem;
	color: #9d9da3;
}
.check{
	color: #ff4a39 !important;
}
.bounce-enter-active {
		transition: all 0.4s;
	}
	
	.bounce-enter,
	.bounce-leave-to {
		opacity: 0;
		transform: translate3d(100%, 0, 0);
	}
</style>
