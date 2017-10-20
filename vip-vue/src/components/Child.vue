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
				 <div class="child-box-99">

				<div class="child-box2">
						<ul>
							<li v-for="item in list">
								<img :src="item.data.imageUrl">
							</li>
						</ul>
				</div>
				<div class="child-box3">
						<ul>
							<li v-for="item in list1">
								<img :src="item.data.imageUrl">
							</li>
						</ul>
				</div>
				<div class="child-box4">
						<ul>
							<li v-for="item in list2">
								<img :src="item.data.imageUrl">
							</li>
						</ul>
				</div>

				<div class="child-box5">
						<ul>
							<li v-for="item in list3">
								<img :src="item.data.imageUrl">
							</li>
						</ul>
				</div>
				<div class="child-box6">
						<ul>
							<li v-for="item in list4">
								<img :src="item.data.imageUrl">
							</li>
						</ul>
				</div>
				<div class="child-box7">
						<ul>
							<li v-for="item in list5">
								<img :src="item.data.imageUrl">
							</li>
						</ul>
				</div>

				<div class="child-box8">
						<ul>
							<li v-for="item in list6">
								<img :src="item.data.imageUrl">
							</li>
						</ul>
				</div>
				<div class="child-box9">
						<ul>
							<li v-for="item in list7">
								<img :src="item.data.imageUrl">
							</li>
						</ul>
				</div>
				<div class="child-box10">
						<ul>
							<li v-for="item in list8">
								<img :src="item.data.imageUrl">
							</li>
						</ul>
				</div>
				<div class="child-box11">
						<ul>
							<li v-for="item in list9">
								<img :src="item.data.imageUrl">
							</li>
						</ul>
				</div>


				</div>

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
					list:[],list1:[],list2:[],list3:[],list4:[],list5:[],list6:[],list7:[],
					list8:[],list9:[],list10:[]
				}
			},
				mounted:function () {
		 var that=this;

         axios.post('/server.html?rpc&method=pageCache&f=&_=1508458256710',[{"method":"getWeixinFollow","params":{"page":"index.html","query":"jump_https=1"},"hash":"34db7fef","id":1508458262757,"jsonrpc":"2.0"},{"method":"getAppDownload","params":{"page":"index.html","query":"jump_https=1"},"hash":"7cbf69f5","id":1508458262758,"jsonrpc":"2.0"},{"method":"getNav","params":{"page":"index.html","query":"jump_https=1"},"hash":"f62c53ed","id":1508458262759,"jsonrpc":"2.0"},{"method":"getMenu","params":{"page":"index.html","query":"jump_https=1"},"hash":"42897d21","id":1508458262760,"jsonrpc":"2.0"},{"method":"getAd","params":{"page":"index.html","query":"jump_https=1"},"hash":"d25531f3","id":1508458262761,"jsonrpc":"2.0"},{"method":"getOperate","params":{"page":"index.html","query":"jump_https=1"},"hash":"238d31a8","id":1508458262762,"jsonrpc":"2.0"},{"method":"getBrandList","params":{"page":"index.html","query":"jump_https=1","ep":20,"np":1},"hash":"c7531326","id":1508458262763,"jsonrpc":"2.0"},{"method":"getFullAdAppDownload","params":{"page":"index.html","query":"jump_https=1"},"hash":"a93a32d8","id":1508458262764,"jsonrpc":"2.0"},{"method":"getPopupAd","params":{"page":"index.html","query":"jump_https=1"},"hash":"7d658758","id":1508458262765,"jsonrpc":"2.0"},{"method":"getRecommendAddress","params":{"page":"index.html","query":"jump_https=1"},"hash":"4018a5b6","id":1508458262766,"jsonrpc":"2.0"},{"method":"getFooterToolbar","params":{"page":"index.html","query":"jump_https=1"},"hash":"3d51d573","id":1508458262767,"jsonrpc":"2.0"},{"method":"getFooter","params":{"page":"index.html","query":"jump_https=1"},"hash":"2683af8b","id":1508458262768,"jsonrpc":"2.0"},{"method":"getVTM","params":{"page":"index.html","query":"jump_https=1"},"hash":"85a23afe","id":1508458262769,"jsonrpc":"2.0"},{"method":"getWxShare","params":{"page":"index.html","query":"jump_https=1"},"hash":"cb9a6f92","id":1508458262770,"jsonrpc":"2.0"},{"method":"IndexRpc.getFavoriteTips","params":{"page":"index.html","query":"jump_https=1"},"hash":"edd6c982","id":1508458262771,"jsonrpc":"2.0"},{"method":"getAppWakeup","params":{"page":"index.html","query":"jump_https=1"},"hash":"aad1388a","id":1508458262772,"jsonrpc":"2.0"}])
          .then(function(response){
            console.log(response);

           that.list= response.data[1].result.items[0].block[0].child;
           that.list1= response.data[1].result.items[1].block[0].child;
           that.list2= response.data[1].result.items[2].block[0].child;
           that.list3= response.data[1].result.items[3].block[0].child;
           that.list4= response.data[1].result.items[3].block[1].child;
           that.list5= response.data[1].result.items[4].block[0].child;
           that.list6= response.data[1].result.items[5].block[0].child;
           that.list7= response.data[1].result.items[6].block[0].child;
           that.list8= response.data[1].result.items[7].block[0].child;
           that.list9= response.data[1].result.items[8].block[0].child;
   


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
 top:43.97px; }

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
.lunbo{
	height: 150px;
/*	margin-top:10.97px; 
*/}
.lunbo img{
	width: 100%;
	height: 100%;
}
.child-box-99 ul{
	display: flex;
	flex-wrap: wrap;
}
.child-box5 li{
	flex: 5;
}.child-box6 li{
	flex: 5;
}.child-box9 li{
	flex: 2;
}.child-box10 li{
	flex: 3;
}
</style>

