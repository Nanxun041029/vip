<template>
	<div class="child-box">
		<div class="child-box1">
				<div class="child-box1-ul">
					 <ul >
					 		<li><!-- <img src="../assets/vip-logo.png"> -->唯品会</li>
					 		<li>辽宁 <i class="iconfont">&#xe6c7;</i></li>
			<li> <input type="text" name="" value="XK-LL 大牌推荐"> </li>
					 		<li class="ico"><i class="iconfont">
					 		<router-link to="/login">
					 		&#xe602;
					 	</router-link>
					 	</i></li>
					 </ul>
				 </div>
				 <div class="child-box1-header">
				 		<ul>
				 			<li><router-link to="/" active-class="sp" exact>
				 				<span>今日推荐</span>
				 			</router-link></li>
				 			<li><router-link to="/shishang" active-class="sp" exact>
				 				<span>时尚</span>
				 			</router-link></li>
				 			<li><router-link to="/meizhuang" active-class="sp" exact>
				 				<span>美妆</span>
				 			</router-link></li>
				 			<li><router-link to="/jiaju" active-class="sp" exact>
				 				<span>居家</span>
				 		    </router-link></li>
				 			<li><router-link to="muying" active-class="sp" exact>
				 				<span>母婴</span>
				 			</router-link></li>
				 			<li><router-link to="guoji" active-class="sp" exact>
				 				<span>国际</span>
				 			</router-link></li>
				 			<li><router-link to="weipin" active-class="sp" exact>
				 				<span>唯品.奢</span>
				 			</router-link></li>
				 			<li><router-link to="shenghuo" active-class="sp" exact>
				 				<span>生活</span>
				 			</router-link></li>
				 		</ul>
				 </div>
	</div>
		  		<div class="gx-box3">
	  			<ul>
	  				<router-link to="/gw"><li><i class="iconfont">&#xf0148;</i></li></router-link>
	  			</ul>
	  		</div>

</div>
</template>

<script type="text/javascript">
	export default {
			name:"daohang"
		}
</script>

<style type="text/css">
		.child-box1{
	width: 100%;
	}
	.child-box1-ul{
		background: #ffffff;
		width: 100%;
		height: 43.98px;
	    position: fixed;
	   z-index: 99999;
	   top: 0;

	}
	.child-box1-ul ul{
		display: flex;
	}
	.child-box1-ul li{
		flex: 25%;
		height: 43.98px;
		text-align:center;
		line-height: 43.98px;
	}
	.child-box1-ul li:nth-child(1){
	color: #de3f97;
	font-size: 22px;
	font-weight: bold;
	}
	.child-box1-ul li:nth-child(2) i{
		font-size:10px; 
	}
	.child-box1-ul li:nth-child(3) input{
		width: 172px;
		height: 28px;
		border-radius: 15px;
		border: 0;
		background:#efefef;
		text-align: center;
		color: #c2c3c5;
	}
    .child-box1-ul li:nth-child(4) i{
		font-size:28px; 
	}

/*-------------以上是第一个ul  -------------------*/
	.child-box1-header{
		background: #39424a;
		height: 40px;

	}
	.child-box1-header ul{
		height: 35px;
		width: 100%;
    white-space: nowrap;
/*    overflow: hidden;
*/    overflow-x: auto;


   }
    .child-box1-header ul::-webkit-scrollbar{
    height:0.1rem;
    width:3rem;


		}

.child-box1-header{			
 margin-top:43.97px; }

.child-box1-header ul li{

	    width:84px;
   		 /*margin-right: 10px;*/
   		 display: inline-block;
/*    overflow-x: auto;
*//*    height: 4.2133333333rem;
*/}
.child-box1-header ul li a{
            border-right:1px solid #4a5259;
     		padding: 6px 20px;
     		line-height: 10px;
     		font-size: 14px;
     		height: 20px;
     		text-align: center;
     		margin-top: 13px;
     		color: #cfd3da;
     		box-sizing: border-box;
}
.sp span{
		border-bottom: 2px solid #f02387;
}
.gx-box3 ul{
	margin-top: -20px;
}
.gx-box3 li{
	height: 50px;
	width: 50px;
	border-radius: 50%;
	background: #000;
	position: fixed;
	bottom: 40px;
	left: 15px;
	z-index: 10;


}
.gx-box3 li i{
	font-size: 30px;
	line-height: 50px;
	color: #fff;
}
.ico a{
	color: #000;
}
</style>


