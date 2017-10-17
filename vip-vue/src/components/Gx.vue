<template>
	  <div class="gx">
	  		<div class="gx-box1">
	  			今日特卖·每日早10点 晚8点更新
	  		</div>
	  		<div class="gx-box2">
	  			<ul  v-infinite-scroll="loadMore"
			  infinite-scroll-disabled="loading"
			  infinite-scroll-distance="10">

	  				<li v-for="item in list.slice(2,20)">
	  					<router-link to="">
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
	  		<li v-for="item in list1.slice(2,20)">
	  					<router-link to="">
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
	  			<li v-for="item in list2.slice(2,20)">
	  					<router-link to="">
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


	  		<div class="gx-box3">
	  			<ul>
	  				<li><i class="iconfont">&#xf0148;</i></li>
	  			</ul>
	  		</div>

	  </div>
</template>

<script >
	import axios from "axios";
    import { InfiniteScroll } from 'mint-ui';

	export default {
			name:"gx",
			data:function(){
			
				return{
					list:[],
					list1:[],
					list2:[]

				}
			}, 
			methods:{
				loadMore: function() {
					  this.loading = true;
					  setTimeout(() => {
					    let last = this.list[this.list.length - 1];
					    for (let i = 1; i <= 10; i++) {
					      this.list.push(last + i);
					    }
					    this.loading = false;
					  }, 2500);
					}
			},
				mounted:function () {
			
		 var that=this;
         axios.post('/server.html?rpc&method=pageCache&f=&_=1507967221756',[{"method":"getWeixinFollow","params":{"page":"index.html","query":"jump_https=1"},"hash":"34db7fef","id":1507947384086,"jsonrpc":"2.0"},{"method":"getAppDownload","params":{"page":"index.html","query":"jump_https=1"},"hash":"bbc8b261","id":1507947384087,"jsonrpc":"2.0"},{"method":"getNav","params":{"page":"index.html","query":"jump_https=1"},"hash":"5c625483","id":1507947384088,"jsonrpc":"2.0"},{"method":"getMenu","params":{"page":"index.html","query":"jump_https=1"},"hash":"f06ea821","id":1507947384089,"jsonrpc":"2.0"},{"method":"getAd","params":{"page":"index.html","query":"jump_https=1"},"hash":"8103fa41","id":1507947384090,"jsonrpc":"2.0"},{"method":"getOperate","params":{"page":"index.html","query":"jump_https=1"},"hash":"9ac9723b","id":1507947384091,"jsonrpc":"2.0"},{"method":"getBrandList","params":{"page":"index.html","query":"jump_https=1","ep":20,"np":1},"hash":"95a72e53","id":1507947384092,"jsonrpc":"2.0"},{"method":"getFullAdAppDownload","params":{"page":"index.html","query":"jump_https=1"},"hash":"a93a32d8","id":1507947384093,"jsonrpc":"2.0"},{"method":"getPopupAd","params":{"page":"index.html","query":"jump_https=1"},"hash":"7d658758","id":1507947384094,"jsonrpc":"2.0"},{"method":"getRecommendAddress","params":{"page":"index.html","query":"jump_https=1"},"hash":"4018a5b6","id":1507947384095,"jsonrpc":"2.0"},{"method":"getFooterToolbar","params":{"page":"index.html","query":"jump_https=1"},"hash":"3d51d573","id":1507947384096,"jsonrpc":"2.0"},{"method":"getFooter","params":{"page":"index.html","query":"jump_https=1"},"hash":"2683af8b","id":1507947384097,"jsonrpc":"2.0"},{"method":"getVTM","params":{"page":"index.html","query":"jump_https=1"},"hash":"85a23afe","id":1507947384098,"jsonrpc":"2.0"},{"method":"getWxShare","params":{"page":"index.html","query":"jump_https=1"},"hash":"cb9a6f92","id":1507947384099,"jsonrpc":"2.0"},{"method":"IndexRpc.getFavoriteTips","params":{"page":"index.html","query":"jump_https=1"},"hash":"beca76d8","id":1507947384100,"jsonrpc":"2.0"},{"method":"getAppWakeup","params":{"page":"index.html","query":"jump_https=1"},"hash":"12583b30","id":1507947384101,"jsonrpc":"2.0"}])
          .then(function(response){
            console.log(response);

           that.list= response.data[4].result.items.brands;


          })
          .catch(function(error){
            console.log(error)
          });
             
             axios.post('/server.html?rpc&method=getBrandList&f=&_=1508221163323',{"method":"getBrandList","params":{"page":"index.html","np":3,"ep":20,"query":""},"id":1508221152748,"jsonrpc":"2.0"})
          .then(function(response){
            console.log(response);

           that.list1= response.data[0].result.items.brands;


          })
          .catch(function(error){
            console.log(error)
          });

                  axios.post('/server.html?rpc&method=getBrandList&f=&_=1508228256474',{"method":"getBrandList","params":{"page":"index.html","np":4,"ep":20,"query":""},"id":1508227579549,"jsonrpc":"2.0"})
          .then(function(response){
            console.log(response);

           that.list2= response.data[0].result.items.brands;


          })
          .catch(function(error){
            console.log(error)
          });

     

			},

	}
</script>

<style scoped>
	.gx-box2 ul li{height: 179.42px; position: relative; margin-top: 42px; display: flex;}
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
.gx-box3 li{
	width: 50px;
	height: 50px;
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
</style>