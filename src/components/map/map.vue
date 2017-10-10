<!-- 页面模版 -->
<template>
	<div>
		<header>
			<div class="selectCity">
				<h2 @click="cityListBol=!cityListBol">
	 				{{cityName}}
	 				<i class="iconfont icon-down-trangle"></i>
	 			</h2>
			</div>
			<input class="search" @focus="searchBol=true" @blur="searchBol=false" v-model="search" type="text" />
			<div id="back">
				<h2 @click="$router.go(-1)">取消</h2>
			</div>
		</header>
		<div class="searchList" v-show="searchBol||searchList.length!==0">
			<div v-for="item in searchList" @click="transmit(item)">
				<h3>{{item.name}}</h3>
				<p>{{item.city}}</p>
			</div>
		</div>
		<div class="cityList" v-show="cityListBol">
			<div class="cityListTit">当前城市</div>
			<div class="cityListFlex">
				{{cityName}}
				<i class="iconfont icon-weizhi posi"></i>
			</div>
			<div class="cityListTit">选择城市</div>
			<div v-for="item in cityList" @click="setCity(item.city_name);cityListBol=false">{{item.city_name}}</div>
		</div>
		<div id="container" style="width: 100vw;height: 93vh;overflow:hidden;"></div>
	</div>
</template>
<script>
	import BMap from 'BMap'
	import {mapGetters,mapMutations} from 'vuex'
	import jsonp from '@/components/jsonp.js'
//	console.log(BMap)
	export default {
		data() {
			return {
				cityListBol: false,
				cityList: [],
				search: '',
				searchList:[],
				searchBol:false
			}
		},
		mounted() {
			this.ready()
		},
		computed:{
			...mapGetters([
				'cityName',
				'start',
				'end'
			])
		},
		watch:{
			search(){
				if(this.search !== ''){
					this.http.get('http://localhost/dudu_bus/search.php?wd='+this.search).then(res=>{
						console.log(res.data.result)
						this.searchList = res.data.result
					})
				}else{
					this.searchList = []
				}
			}
		},
		methods: {
			ready: function() {
				var map = new BMap.Map("container");
				map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);    
				map.addControl(new BMap.NavigationControl());    
				map.addControl(new BMap.ScaleControl());    
				map.addControl(new BMap.OverviewMapControl());    
				map.addControl(new BMap.MapTypeControl());
				map.setCurrentCity("北京");
				var point = new BMap.Point(116.404, 39.915);    
				map.centerAndZoom(point, 15);    
				var marker = new BMap.Marker(point); 
				map.addOverlay(marker); 
			},
			transmit:function(key){
				if(this.start == ''){
					this.setStart(key);
				}else{
					this.setEnd(key);
				}
				
				this.$router.go(-1);
			},
			...mapMutations({
				setCity: 'setCity',
				setStart: 'setStart',
				setEnd: 'setEnd'
			})
		},
		created(){
			this.http.get('http://localhost/dudu_bus/city_list.php').then(res=>{
//				console.log(res.data)
				this.cityList = res.data
			})
			
		}
	}
</script>
<style>
	/* 去掉地图左下角的百度LOGO */
	.searchList{
		width: 100vw;
		height: 50vh;
		position: absolute;
		background: white;
		z-index: 10;
		overflow: auto;
	}
	.searchList>div{
		padding: 2vw;
		border-bottom: 1px solid #d2d2d2;
	}
	.anchorBL {
		display: none
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
	
	.search{
		width: 55vw;
		height: 5vh;
		border-radius: 0.5rem;
		border: none;
	}
	
	#back{
		position: absolute;
		right: 2vw;
	}
	
	.posi{
		margin-right: 2vw;
		color: #ff4a39;
	}
</style>