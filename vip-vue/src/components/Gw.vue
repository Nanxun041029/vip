<template>
	<div class="gw">
		<div class="gw-2">
			<ul>
					<router-link to="javascript:history.back(-1)" class="lin">

				<li>
					<i class="iconfont">&#xe60d;</i>

				</li>
									</router-link>


				<li>购物车</li>
			</ul>
		</div>
		<div class="gw-1"></div>
		<div class="gw-3">
			<p>购物车空空如也</p>
			<router-link to="/meizhuang">	
			<button>去抢购</button>
		</router-link>
		</div>
	</div>
</template>

<script type="text/javascript">
			export default {
			name:"gw"
		}
</script>

<style type="text/css" scoped>
	
.gw{width: 100%;
	height: 100%;
	background: #fff;
	position: fixed;
	top: -10px;
	z-index: 999999;
	color: #000000;
}
.gw-2 ul{
	margin-top: 10px;
	overflow: hidden;
	height: 43.98px;
	background: #fbfbfa;
}
.gw-2 ul li{
	font-size: 20px;
	float: left;
	line-height: 43.98px;
	text-align: center;
	color: #000000;

}
.gw-2 li:nth-child(1){
	width: 46px;
	font-size: 24px;
}.gw-2 li:nth-child(2){
	width: 329px;
}
.gw-1{
	width: 100%;
	height: 250px;
	background: url(../assets/3.png) no-repeat ;
	background-size:100%; }
	button{
		width: 180px;
		background: #ffffff;
		border: 1px solid #e4007f;
		height: 32px;
		color: #e4007f;
		border-radius: 5px;
		margin-top: 10px;
	}
	.lin{float:left;}
</style>