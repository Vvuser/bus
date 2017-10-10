<template>
	<div>
		<div class="office">
			<div class="offSearch">
				<div>
					<i style="font-size: 1.5rem;color: #7bcf37;" class="iconfont icon-weizhi"></i>
					<input v-model="fromMsg" @click="$router.push({path:'/mapChild'});setStart('')" style="border: none;" type="text" id="from" placeholder="请输入起点" />
					<i @click="cleanVal(1)" v-show="fromMsg" style="font-size: 1.5rem;color: #c9c9d0;" class="iconfont icon-guanbi close"></i>
				</div>
				<div>
					<i style="font-size: 1.5rem;color: #ff4a39;" class="iconfont icon-weizhi"></i>
					<input v-model="toMsg" @click="$router.push({path:'/mapChild'});setEnd('')" type="text" id="to" placeholder="请输入终点" />
					<i @click="cleanVal(2)" v-show="toMsg" style="font-size: 1.5rem;color: #c9c9d0;" class="iconfont icon-guanbi close"></i>
				</div>
			</div>
			<div class="ex">
				<i @click="ex" style="font-size: 2rem;color: #ff4a39;" class="iconfont icon-jiaohuan"></i>
			</div>
		</div>
		<button @click="$router.push({path:'/resultChild'})" class="officeBtn">查询</button>
	</div>
</template>

<script>
	import {mapGetters,mapMutations} from 'vuex';
	export default{
		data(){
			return{
				fromMsg:'',
				toMsg:''
			}
		},
		computed:{
			...mapGetters([
				'start',
				'end'
			])
		},
		methods:{
			cleanVal(num){
				if(num == 1){
					this.fromMsg = ''
				}else{
					this.toMsg = ''
				}
			},
			ex(){
				let t = this.fromMsg;
				this.fromMsg = this.toMsg;
				this.toMsg = t;
			},
			toMap(){
				this.$router.push({
					path:'/map'
				})
			},
			...mapMutations({
				setStart:'setStart',
				setEnd:'setEnd'
			})
		},
		mounted(){
			console.log(this.fromMsg)
			this.fromMsg = this.start.name
			this.toMsg = this.end.name
			
		}
	}
</script>

<style>
	.office{
		margin-top: 1vh;
		width: 96vw;
		height: 13vh;
		background: white;
		display: flex;
		justify-content: center;
		border-radius: 1vw;
	}
	.offSearch{
		flex:4;
		display: flex;
		flex-direction: column;
	}
	.offSearch>div{
		position: relative;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.offSearch input{
		width: 60vw;
		height: 100%;
		border:none;
		border-top: 1px solid #cdcdd3;
	}
	.ex{
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.officeBtn{
		margin-top: 3vh;
		width: 96vw;
		height: 6vh;
		background: #ff4a39;
		border: none;
		color: white;
		font-weight: bold;
		border-radius: 1vw;
	}
	.close{
		position: absolute;
		right: 0;
	}
</style>