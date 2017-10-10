<template>
	<div>
		<header>
			<div class="selectCity">
				<h2>
	 				<i class="iconfont icon-fanhui"></i>
	 			</h2>
			</div>
			<div>
				<h2>搜索结果</h2>
			</div>
			<div id="back">
				<h2>发起路线</h2>
			</div>
		</header>
		<div id="resTab">
			<div>
				<div style="border: none;">
					<span :class="{resultTab:num==0}" @click="num=0;">已开通</span>
				</div>
			</div>
			<div>
				<div><span :class="{resultTab:num==1}" @click="num=1;">待开通</span></div>
			</div>
		</div>
		<div>
			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				num:0
			}
		}
	}
</script>

<style>
	#back{
		position: absolute;
		right: 2vw;
	}
	#back h2{
		font-size: 0.6rem;
	}
	#resTab{
		width: 100vw;
		height: 6vh;
		display: flex;
		border-bottom: 1px solid #cdcdd3;
	}
	#resTab>div{
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#resTab>div>div{
		width: 100%;
		text-align: center;
		border-left: 1px solid #cdcdd3;
	}
	.resultTab{
		color: #ff4a39 !important;
	}
</style>