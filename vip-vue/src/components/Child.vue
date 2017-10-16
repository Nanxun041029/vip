<template>
	<div class="child-box">
			<div class="child-box1">
				<div class="child-box1-ul">
					 <ul >
					 		<li><!-- <img src="../assets/vip-logo.png"> -->唯品会</li>
					 		<li>辽宁 <i class="iconfont">&#xe6c7;</i></li>
			<li> <input type="text" name="" value="XK-LL 大牌推荐"> </li>
					 		<li><i class="iconfont">&#xe602;</i></li>
					 </ul>
				 </div>
				 <div class="child-box1-header">
				 		<ul>
				 			<li><router-link to="" active-class="sp" exact>
				 				<span>今日推荐</span>
				 			</router-link></li>
				 			<li><router-link to="" active-class="sp" exact>
				 				<span>时尚</span>
				 			</router-link></li>
				 			<li><router-link to="" active-class="sp" exact>
				 				<span>美妆</span>
				 			</router-link></li>
				 			<li><router-link to="" active-class="sp" exact>
				 				<span>居家</span>
				 		    </router-link></li>
				 			<li><router-link to="" active-class="sp" exact>
				 				<span>母婴</span>
				 			</router-link></li>
				 			<li><router-link to="" active-class="sp" exact>
				 				<span>国际</span>
				 			</router-link></li>
				 			<li><router-link to="" active-class="sp" exact>
				 				<span>唯品.奢</span>
				 			</router-link></li>
				 			<li><router-link to="" active-class="sp" exact>
				 				<span>生活</span>
				 			</router-link></li>
				 		</ul>
				 </div>
			<div class="box2">
 
			<mt-swipe :auto="4000" class="lunbo">
				  <mt-swipe-item v-for="item in list">
				  			<img :src="item.filename">
				  </mt-swipe-item>
				</mt-swipe>


			</div>
		</div>

		<div class="child-box5">
			 <div class="child-box5-box">
			 	<ul>
				 	<li v-for="item in listimg">
				 		<img :src="item.data.imageUrl">
				 	</li>
			 	</ul>
			 </div>
			 <div class="child-box5-box1">
			 	<ul>
				 	<li v-for="item in listimgs">
				 		<img :src="item.data.imageUrl">
				 	</li>
			 	</ul>
			 </div>		
		</div>

		<div class="child-box6">
			<router-link to="" v-for="item in shafa">
				<img :src="item.data.imageUrl">
			</router-link>	
			<router-link to="" v-for="item in shafa1" class="child-box6-link">
				<img :src="item.data.imageUrl">
			</router-link>	
		</div>

		<div class="child-box7">
			<ul>
				<li></li>
			</ul>
		</div>

</div>

</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import axios from "axios";


	export default {
			name:"child",
			data:function(){
				return{
					Nav:"",
					list:[],
					listimg:[],
					listimgs:[],
					shafa:[],
					shafa1:[]
				}
				console.log(Nav)
			},
				mounted:function () {
		 var that=this;
         axios.post('/server.html?rpc&method=pageCache&f=&_=1507967221756',[{"method":"getWeixinFollow","params":{"page":"index.html","query":"jump_https=1"},"hash":"34db7fef","id":1507947384086,"jsonrpc":"2.0"},{"method":"getAppDownload","params":{"page":"index.html","query":"jump_https=1"},"hash":"bbc8b261","id":1507947384087,"jsonrpc":"2.0"},{"method":"getNav","params":{"page":"index.html","query":"jump_https=1"},"hash":"5c625483","id":1507947384088,"jsonrpc":"2.0"},{"method":"getMenu","params":{"page":"index.html","query":"jump_https=1"},"hash":"f06ea821","id":1507947384089,"jsonrpc":"2.0"},{"method":"getAd","params":{"page":"index.html","query":"jump_https=1"},"hash":"8103fa41","id":1507947384090,"jsonrpc":"2.0"},{"method":"getOperate","params":{"page":"index.html","query":"jump_https=1"},"hash":"9ac9723b","id":1507947384091,"jsonrpc":"2.0"},{"method":"getBrandList","params":{"page":"index.html","query":"jump_https=1","ep":20,"np":1},"hash":"95a72e53","id":1507947384092,"jsonrpc":"2.0"},{"method":"getFullAdAppDownload","params":{"page":"index.html","query":"jump_https=1"},"hash":"a93a32d8","id":1507947384093,"jsonrpc":"2.0"},{"method":"getPopupAd","params":{"page":"index.html","query":"jump_https=1"},"hash":"7d658758","id":1507947384094,"jsonrpc":"2.0"},{"method":"getRecommendAddress","params":{"page":"index.html","query":"jump_https=1"},"hash":"4018a5b6","id":1507947384095,"jsonrpc":"2.0"},{"method":"getFooterToolbar","params":{"page":"index.html","query":"jump_https=1"},"hash":"3d51d573","id":1507947384096,"jsonrpc":"2.0"},{"method":"getFooter","params":{"page":"index.html","query":"jump_https=1"},"hash":"2683af8b","id":1507947384097,"jsonrpc":"2.0"},{"method":"getVTM","params":{"page":"index.html","query":"jump_https=1"},"hash":"85a23afe","id":1507947384098,"jsonrpc":"2.0"},{"method":"getWxShare","params":{"page":"index.html","query":"jump_https=1"},"hash":"cb9a6f92","id":1507947384099,"jsonrpc":"2.0"},{"method":"IndexRpc.getFavoriteTips","params":{"page":"index.html","query":"jump_https=1"},"hash":"beca76d8","id":1507947384100,"jsonrpc":"2.0"},{"method":"getAppWakeup","params":{"page":"index.html","query":"jump_https=1"},"hash":"12583b30","id":1507947384101,"jsonrpc":"2.0"}])
          .then(function(response){
            console.log(response);

           that.Nav= response.data[1].result.searchTips.show_word;
           that.list= response.data[2].result.items.topAds;
           that.listimg= response.data[3].result.items[0].block[0].child;
           that.listimgs= response.data[3].result.items[0].block[1].child;
           that.shafa= response.data[3].result.items[1].block[0].child;
           that.shafa1= response.data[3].result.items[2].block[0].child;
           that.shafa1= response.data[3].result.items[2].block[0].child;


          })
          .catch(function(error){
            console.log(error)
          });
     

			},

	}
</script>

<style>

	.child-box1{
	width: 100%;
	}
	.child-box1-ul{
		height: 43.98px;
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
		overflow: hidden;

		}
.child-box1-header ul li{
		float: left;
}
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
.lunbo{
	height: 150px;
}
.lunbo img{
	width: 100%;
	height: 100%;
}
.child-box5 ul{
	display: flex;
 
}
.child-box5 ul li{
	flex:20%;
}
.child-box5 ul li img{
		width: 75px;

}
.child-box6{
}
.child-box6 img{
	width: 100%;
	height: 100%;
}
.child-box6-link{
	margin-top:-5px; 
}
</style>

