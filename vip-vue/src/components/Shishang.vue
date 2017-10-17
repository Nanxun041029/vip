<template>
		<div class="gx-box2">
			<ul>		  			
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

</template>

<script>
	import axios from "axios";

		export default {
			name:"shishang",
			data:function(){
				return{
					list:[],
					list1:[],
					list2:[]
				}
			},
			mounted:function(){
			
				var that = this;
	axios.post('server.html?rpc&method=getBrandList&f=&_=1508240752483',{"method":"getBrandList","params":{"page":"wearable.html","np":2,"ep":20,"query":""},"id":1508240751957,"jsonrpc":"2.0"})
          .then(function(response){
            console.log(response);

           that.list= response.data[0].result.items.brands;


          })
          .catch(function(error){
            console.log(error)
          });

	axios.post('/server.html?rpc&method=getBrandList&f=&_=1508241349063',{"method":"getBrandList","params":{"page":"wearable.html","np":3,"ep":20,"query":""},"id":1508240751958,"jsonrpc":"2.0"})
          .then(function(response){
            console.log(response);

           that.list1= response.data[0].result.items.brands;


          })
          .catch(function(error){
            console.log(error)
          });
        
          	axios.post('/server.html?rpc&method=getBrandList&f=&_=1508241724989',{"method":"getBrandList","params":{"page":"wearable.html","np":4,"ep":20,"query":""},"id":1508240751959,"jsonrpc":"2.0"})
          .then(function(response){
            console.log(response);

           that.list2= response.data[0].result.items.brands;


          })
          .catch(function(error){
            console.log(error)
          });

			}
		}
</script>

<style type="text/css">
		.gx-box2 ul li{height: 179.42px; position: relative; margin-top: 42px; display: flex;}
		.gx-box2 ul li:nth-child(1){
			margin-top: 0;
		}
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