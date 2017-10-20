<template>
		<div class="mz-box">
				<div class="mz-box-1">
					<ul>
						<li v-for="item in list">
							<img :src="item.data.imageUrl">		
						</li>
					</ul>
				</div>
				<div class="mz-box-2">
					<ul>
						<li v-for="item in list1">
							<img :src="item.data.imageUrl">		
						</li>
					</ul>
				</div>
				<div class="mz-box-3">
					<ul>
						<li v-for="item in list2">
							<img :src="item.data.imageUrl">		
						</li>
					</ul>
				</div>
				<div class="mz-box-4">
					<ul>
						<li v-for="item in list3">
							<img :src="item.data.imageUrl">		
						</li>
					</ul>
				</div>
				<div class="mz-box-5">
					<ul>
						<li v-for="item in list4">
							<img :src="item.data.imageUrl">		
						</li>
					</ul>
				</div>
				<div class="mz-box-6">
					<ul>
						<li v-for="item in list5">
							<img :src="item.data.imageUrl">		
						</li>
					</ul>
				</div>
				<div class="mz-box-7">
					<ul>
						<li v-for="item in list6">
							<img :src="item.data.imageUrl">		
						</li>
					</ul>
				</div>
				<div class="mz-box-8">
					<ul>
						<li v-for="item in list7">
							<img :src="item.data.imageUrl">		
						</li>
					</ul>
				</div>
				<div class="mz-box-9">
					<ul>
						<li v-for="item in list8">
							<img :src="item.data.imageUrl">		
						</li>
					</ul>
				</div>
				<div class="mz-box-10">
					<ul>
						<li v-for="item in list9">
							<img :src="item.data.imageUrl">		
						</li>
					</ul>
				</div>
				<div class="mz-box-11">
					<ul>
						<li v-for="item in list10">
							<img :src="item.data.imageUrl">		
						</li>
					</ul>
				</div>
				<div class="mz-box-12">
					<ul>
						<li v-for="item in list11">
							<img :src="item.data.imageUrl">		
						</li>
					</ul>
				</div>
	  		<div class="gx-box1">
	  			今日特卖·每日早10点 晚8点更新
	  		</div>
	  		<div class="gx-box2">
	  			<ul>
	  				<li v-for="item in wuwu">
	  					<router-link :to="{name:'Detail',params:{ fime_id:item.brand_id}}">
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

<script>
	import axios from "axios";

		export default {
			name:"meizhuang",
			data:function(){
				return{
					list:[],
					list1:[],
					list2:[],
					list3:[],
					list4:[],
					list5:[],
					list6:[],
					list7:[],
					list8:[],
					list9:[],list10:[],list11:[],wuwu:[]

				}
			},mounted:function(){
				var that=this;

			     axios.post('/server.html?rpc&method=pageCache&f=&_=1508321305560',[{"method":"getAppDownload","params":{"page":"newbeauty.html","query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Anewbeauty"},"hash":"9b9ab283","id":1508320859621,"jsonrpc":"2.0"},{"method":"getNav","params":{"page":"newbeauty.html","query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Anewbeauty"},"hash":"cdc17d1d","id":1508320859622,"jsonrpc":"2.0"},{"method":"getMenu","params":{"page":"newbeauty.html","query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Anewbeauty"},"hash":"d8b8c3d7","id":1508320859623,"jsonrpc":"2.0"},{"method":"getAd","params":{"page":"newbeauty.html","query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Anewbeauty"},"hash":"2ec42180","id":1508320859624,"jsonrpc":"2.0"},{"method":"getBrandList","params":{"page":"newbeauty.html","query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Anewbeauty","ep":20,"np":1},"hash":"34f37305","id":1508320859625,"jsonrpc":"2.0"},{"method":"getRecommendAddress","params":{"page":"newbeauty.html","query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Anewbeauty"},"hash":"4018a5b6","id":1508320859626,"jsonrpc":"2.0"},{"method":"getFooterToolbar","params":{"page":"newbeauty.html","query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Anewbeauty"},"hash":"3d51d573","id":1508320859627,"jsonrpc":"2.0"},{"method":"getFooter","params":{"page":"newbeauty.html","query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Anewbeauty"},"hash":"1d350f99","id":1508320859628,"jsonrpc":"2.0"},{"method":"getVTM","params":{"page":"newbeauty.html","query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Anewbeauty"},"hash":"7f66bf6b","id":1508320859629,"jsonrpc":"2.0"},{"method":"getOperate","params":{"page":"newbeauty.html","query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Anewbeauty"},"hash":"4401086d","id":1508320859630,"jsonrpc":"2.0"},{"method":"getWxShare","params":{"page":"newbeauty.html","query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Anewbeauty"},"hash":"6bd95e7c","id":1508320859631,"jsonrpc":"2.0"},{"method":"getAppWakeup","params":{"page":"index.html","query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Anewbeauty"},"hash":"78a65e0d","id":1508320859632,"jsonrpc":"2.0"}])
          .then(function(response){
          	console.log(response)
           that.list= response.data[7].result.items[0].block[0].child;
           that.list1= response.data[7].result.items[1].block[0].child;
           that.list2= response.data[7].result.items[2].block[0].child;
           that.list3= response.data[7].result.items[3].block[0].child;
           that.list4= response.data[7].result.items[4].block[0].child;
           that.list5= response.data[7].result.items[5].block[0].child;
           that.list6= response.data[7].result.items[6].block[0].child;
           that.list7= response.data[7].result.items[7].block[0].child;
           that.list8= response.data[7].result.items[8].block[0].child;
           that.list9= response.data[7].result.items[9].block[0].child;
           that.list10= response.data[7].result.items[10].block[0].child;
           that.list11= response.data[7].result.items[11].block[0].child;


          })
          .catch(function(error){
            console.log(error)
          });
 axios.post('/server.html?rpc&method=getBrandList&f=&_=1508326931405',{"method":"getBrandList","params":{"page":"newbeauty.html","np":2,"ep":20,"query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Anewbeauty"},"id":1508326929211,"jsonrpc":"2.0"})
          .then(function(response){
          	console.log(response)
           that.wuwu= response.data[0].result.items.brands;


          })
          .catch(function(error){
            console.log(error)
          });
			}
		}
</script>

<style type="text/css">
.mz-box ul{
		display: flex;
	  flex-wrap: wrap;
}
.mz-box-2 li{
	flex: 3;
}
.mz-box-4 li{
	flex: 5;
}
.mz-box-3 li{
	flex: 5;
}
.mz-box-7 li{
	flex: 3;
}.mz-box-9 li{
	flex: 50%;
}.mz-box-11 li{
	flex: 50%;
}.mz-box-12 li{
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