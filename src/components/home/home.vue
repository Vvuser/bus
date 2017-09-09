<template>
	<div>
		<header>
			<div class="selectCity">
				<h2>
	 				北京市
	 				<i class="iconfont icon-down-trangle"></i>
	 			</h2>
			</div>
			<div>
				<h2>嘟嘟巴士</h2>
			</div>
		</header>
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
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				homeHeadNum: 0
			}
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

			}
		}
	}
</script>

<style>
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
	
	.homeBox {
		width: 100vw;
		height: 79vh;
		background: #f1f1f1;
		display: flex;
		flex-direction: column;
		align-items: center;
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