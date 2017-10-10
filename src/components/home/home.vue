<template>
	<div>
		<header>
			<div class="selectCity">
				<h2 @click="cityListBol=!cityListBol">
	 				{{cityName}}
	 				<i class="iconfont icon-down-trangle"></i>
	 			</h2>
			</div>
			<div>
				<h2>嘟嘟巴士</h2>
			</div>
		</header>
		<div class="cityList" v-show="cityListBol">
			<div class="cityListTit">当前城市</div>
			<div class="cityListFlex">
				{{cityName}}
				<i class="iconfont icon-weizhi posi"></i>
			</div>
			<div class="cityListTit">选择城市</div>
			<div v-for="item in cityList" @click="setCity(item.city_name);cityListBol=false">{{item.city_name}}</div>
		</div>
		<div id="homeHead">
			<div>
				<div @click="toRouter('toOffice')" style="border: none;">
					<span :class="{block:homeHeadNum==0}">上下班</span>
				</div>
			</div>
			<div>
				<div @click="toRouter('toBus')">
					<span :class="{block:homeHeadNum==1}">包车</span>
				</div>
			</div>
		</div>
		<div class="homeBox">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>
	import {mapGetters,mapMutations} from 'vuex'
//	console.log(mapGetters,mapMutations)
	export default {
		data() {
			return {
				homeHeadNum: 0,
				cityListBol: false,
				cityList: [],
			}
		},
		computed: {
			...mapGetters([
				'cityName'
			])
		},
		methods: {
			toRouter(hash) {
				this.$router.push({
					path: '/' + hash
				})
				if(hash == 'toOffice') {
					this.homeHeadNum = 0;
				} else {
					this.homeHeadNum = 1;
				}

			},
			...mapMutations({
				setCity: 'setCity'
			})
		},
		created(){
			this.http.get('http://localhost/dudu_bus/city_list.php').then(res=>{
				console.log(res.data)
				this.cityList = res.data
			})
		}
	}
</script>

<style scoped>
	#homeHead {
		display: flex;
		border-bottom: 1px solid #cdcdd3;
	}
	
	#homeHead>div {
		flex: 1;
		height: 6vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	#homeHead>div>div {
		width: 100%;
		border-left: 1px solid #cdcdd3;
		height: 70%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 0.8rem !important;
		font-weight: bold;
		color: #9d9da3;
	}
	.cityListFlex{
		display: flex;
		justify-content: space-between;
	}
	.cityList{
		width: 100vw;
		height: 93vh;
		background: white;
		position: absolute;
		z-index: 10;
	}
	
	.cityList>div{
		height: 5vh;
		border-bottom: 1px solid #cdcdd3;
		line-height: 5vh;
		padding-left: 2vw;
	}
	.cityListTit{
		background: #f1f1f1;
		color: #9e9da3;
	}
	.homeBox {
		width: 100vw;
		height: 79vh;
		background: #f1f1f1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.posi{
		margin-right: 2vw;
		color: #ff4a39;
	}
	.block {
		width: 87%;
		height: 80%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #ff4a39;
		text-align: center;
		color: white;
		border-radius: 0.2rem;
	}
</style>