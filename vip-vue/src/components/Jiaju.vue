<template>
	<div class="jx">
				<mt-swipe :auto="4000" class="lunbo">
				  <mt-swipe-item v-for="item in Nav">
	                	<img :src="item.imgFullPath">
				  </mt-swipe-item>
				</mt-swipe>
				<div class="jx-box1">
					<ul>
						<li v-for="item in list">
							<img :src="item.data.imageUrl">
						</li>
					</ul>
				</div>
				<div class="jx-box2">
					<ul>
						<li v-for="item in list1">
							<img :src="item.data.imageUrl">
						</li>
					</ul>
				</div>
				<div class="jx-box3">
					<ul>
						<li v-for="item in list2">
							<img :src="item.data.imageUrl">
						</li>
					</ul>
				</div>
				<div class="jx-box4">
					<ul>
						<li v-for="item in list3">
							<img :src="item.data.imageUrl">
						</li>
					</ul>
				</div>
		    	<div class="jx-box5">
					<ul>
						<li v-for="item in list4">
							<img :src="item.data.imageUrl">
						</li>
					</ul>
				</div>
		    	<div class="jx-box6">
					<ul>
						<li v-for="item in list5">
							<img :src="item.data.imageUrl">
						</li>
					</ul>
				</div>

		    	<div class="jx-box7">
					<ul>
						<li v-for="item in list6">
							<img :src="item.data.imageUrl">
						</li>
					</ul>
				</div>

		    	<div class="jx-box8">
					<ul>
						<li v-for="item in list7">
							<img :src="item.data.imageUrl">
						</li>
					</ul>
				</div>

		    	<div class="jx-box9">
					<ul>
						<li v-for="item in list8">
							<img :src="item.data.imageUrl">
						</li>
					</ul>
				</div>
		    	<div class="jx-box10">
					<ul>
						<li v-for="item in list9">
							<img :src="item.data.imageUrl">
						</li>
					</ul>
				</div>
				<div class="gx-box1">
	  			今日特卖·每日早10点 晚8点更新
	  		</div>
	  		<div class="gx-box2">
	  			<ul>
	  				<li v-for="item in chl">
	  					<router-link :to="{name:'Detail',params:{ fime_id:item.raw_url}}">
	  					<div>
	  						<img :src="item.index_image2">
	  					</div>
	  						<p>{{item.pms_activetips}}</p>
	  				 <div v-html="item.agio" class="left">
	  						{{item.agio}} 
	  						</div>
	  						<div class="right">{{item.brand_name}}
						</div>
	  				</router-link>
	  				</li>

	  			</ul>
	  		</div>



	</div>
</template>


<script type="text/javascript">
import { Swipe, SwipeItem } from 'mint-ui';
import axios from "axios";

  export default {
			name:"jiaju",
			data:function(){
				return{
						Nav:[],list:[],list1:[],list2:[],list3:[],list4:[],list5:[],list6:[],list7:[],list8:[],list9:[],chl:[]
				}
			},
			mounted:function(){
				var that = this;
         axios.post('/server.html?rpc&method=pageCache&f=&_=1508375384900',[{"method":"getAppDownload","params":{"page":"life.html","query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Alife"},"hash":"d72b273e","id":1508375385417,"jsonrpc":"2.0"},{"method":"getNav","params":{"page":"life.html","query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Alife"},"hash":"cdc17d1d","id":1508375385418,"jsonrpc":"2.0"},{"method":"getMenu","params":{"page":"life.html","query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Alife"},"hash":"9252d206","id":1508375385419,"jsonrpc":"2.0"},{"method":"getAd","params":{"page":"life.html","query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Alife"},"hash":"7f4a742b","id":1508375385420,"jsonrpc":"2.0"},{"method":"getBrandList","params":{"page":"life.html","query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Alife","ep":20,"np":1},"hash":"ac57bab9","id":1508375385421,"jsonrpc":"2.0"},{"method":"getRecommendAddress","params":{"page":"life.html","query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Alife"},"hash":"4018a5b6","id":1508375385422,"jsonrpc":"2.0"},{"method":"getFooterToolbar","params":{"page":"life.html","query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Alife"},"hash":"3d51d573","id":1508375385423,"jsonrpc":"2.0"},{"method":"getFooter","params":{"page":"life.html","query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Alife"},"hash":"d53550e9","id":1508375385424,"jsonrpc":"2.0"},{"method":"getVTM","params":{"page":"life.html","query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Alife"},"hash":"1e9dc56c","id":1508375385425,"jsonrpc":"2.0"},{"method":"getOperate","params":{"page":"life.html","query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Alife"},"hash":"0b3a3bff","id":1508375385426,"jsonrpc":"2.0"},{"method":"getWxShare","params":{"page":"life.html","query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Alife"},"hash":"6bd95e7c","id":1508375385427,"jsonrpc":"2.0"},{"method":"getAppWakeup","params":{"page":"index.html","query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Alife"},"hash":"639526c8","id":1508375385428,"jsonrpc":"2.0"}])
          .then(function(response){
            // console.log(response);

           that.Nav= response.data[3].result.items.topAds;
           that.list = response.data[7].result.items[0].block[0].child;
           that.list1 = response.data[7].result.items[1].block[0].child;
           that.list2 = response.data[7].result.items[2].block[0].child;
           that.list3 = response.data[7].result.items[3].block[0].child;
           that.list4 = response.data[7].result.items[4].block[0].child;
           that.list5 = response.data[7].result.items[5].block[0].child;
           that.list6 = response.data[7].result.items[6].block[0].child;
           that.list7 = response.data[7].result.items[9].block[0].child;
           that.list8 = response.data[7].result.items[10].block[0].child;
           that.list9 = response.data[7].result.items[11].block[0].child;

          })

          .catch(function(error){
            console.log(error)
          });

     
         axios.post('/server.html?rpc&method=getBrandList&f=&_=1508393390805',{"method":"getBrandList","params":{"page":"life.html","np":3,"ep":20,"query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Alife"},"id":1508393334653,"jsonrpc":"2.0"})
          .then(function(response){
            console.log(response);

           that.chl= response.data[0].result.items.brands;

          })

          .catch(function(error){
            console.log(error)
          });
 
			}
		}

</script>

<style type="text/css">
.lunbo{
	height: 200px;
}
.jx ul{
	display: flex;
	 flex-wrap: wrap;
}
.jx-box1 li{
	flex: 5;
}
.jx-box2 li{
	flex: 5;
}
.jx-box3 li{
	flex: 5;
}
.jx-box6 li{
	flex: 3;
}
.jx-box7 li{
	flex: 3;
}
.jx-box9 li{
	flex: 3;
}
	.gx-box2 ul li{
		flex: 100%;
	}
		.gx-box2 ul li{height: 179.42px;flex: 100%; position: relative; margin-top: 42px; display: flex;}
	.gx-box2 div{ color:#000000;  }
	.gx-box2 ul li p{ position: absolute; bottom: 0px; z-index: 5; color:#000000;width: 100%;background:rgba(255,255,255,.7); font-size: 16px; }
.gx-box2 ul li .left{
	color: #e4007f;
	padding-top: 10px;
	padding-left: 20px;
	float: left;
}.gx-box2 ul li .right{
	padding-top: 10px;
padding-left: 20px;
	float: left;

}
</style>