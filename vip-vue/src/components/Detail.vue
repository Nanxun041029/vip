<template>
		<div>
			<div class="bx">
		<a href="replace" class="bx-2">	<i class="iconfont">&#xe60d;</i>
</a>

				<span class="bx-1">ID:{{this.$route.params.fime_id}}</span>
			</div>
			<ul>
					<li v-for="item in list2">
					<div>
	             	<img :src="item.small_image2">
					</div>
              		<p class="p-1">{{item.name}}</p>	
              		<p class="p-2">
              			<span>￥{{item.sale_price}}</span>
              			<span>￥{{item.market_price}}</span>
              		 	<span>{{item.vip_discount}}</span>

              		</p>			
			</li>

				<li v-for="item in list1">
					<div>
	             	<img :src="item.small_image2">
					</div>
              		<p class="p-1">{{item.productName}}</p>	
              		<p class="p-2">
              			<span>￥{{item.vipshopPrice}}</span>
              			<span>￥{{item.marketPrice}}</span>
              		 	<span>{{item.vipDiscount}}</span>

              		</p>			
			</li>
				<li v-for="item in list">
					<div>
	             	<img :src="item.small_image2">
					</div>
              		<p class="p-1">{{item.productName}}</p>	
              		<p class="p-2">
              			<span>￥{{item.vipshopPrice}}</span>
              			<span>￥{{item.marketPrice}}</span>
              		 	<span>{{item.vipDiscount}}</span>

              		</p>			
			</li>
			</ul>
		</div>

</template>

<script>
	import axios from "axios";

		export default {
			name:"detail",
			data:function(){
				return{
					list1:[],
					list:[],
					list2:[]
				}
			},

	
			mounted:function () {
			
				 var that=this;
		axios.post('/server.html?rpc&method=getProductsByIds&f=&_=1508308050921',{"method":"getProductsByIds","params":{"page":"brand-1781087-0-0-0-1-0-1-20.html","query":"","isPreheatPage":"0","productIds":"305399970,305399973,305399977,305399979,305399982,305399983,305399991,305399994,305399995,305400000,305400001,305400004,305400009,305400012,305400013,305400017,305400020,305400021,305400028,305400029"},"id":1508308045411,"jsonrpc":"2.0"})
          .then(function(response){
            // console.log(response);

           that.list1= response.data[0].result.products;


          })
          .catch(function(error){
            console.log(error)
          });
          		axios.post('/server.html?rpc&method=getProductsByIds&f=&_=1508308797157',{"method":"getProductsByIds","params":{"page":"brand-1781087-0-0-0-1-0-1-20.html","query":"","isPreheatPage":"0","productIds":"305400479,305400481,305400483,305400486,305400493,305400495,305400499,305400501,305400502,305400507,305400509,305400517,305400519,305400524,305400527,305400533,305400546,305400551,305400561,305400569"},"id":1508308738838,"jsonrpc":"2.0"})
          .then(function(response){
            // console.log(response);

           that.list= response.data[0].result.products;


          })
          .catch(function(error){
            console.log(error)
          });

          		axios.post('/server.html?rpc&method=SearchRpc.getSearchList&f=&_=1508312600167',{"method":"SearchRpc.getSearchList","params":{"page":"searchlist.html","channel_id":"","keyword":"衣品天成","np":2,"ep":20,"brand_ids":"","brand_store_sn":"","props":"","size_name":"","sort":0,"price_start":"","price_end":"","category_id_1_show":"","category_id_1_5_show":"","category_id_2_show":"","category_id_3_show":"","query":"q=%E8%A1%A3%E5%93%81%E5%A4%A9%E6%88%90&channel_id="},"id":1508312609534,"jsonrpc":"2.0"})
          .then(function(response){
            console.log(response);

           that.list2= response.data[0].result.data.products;


          })
          .catch(function(error){
            console.log(error)
          });


		}
	}
</script>
<style type="text/css" scoped>
	ul{
		display: flex;
	flex-wrap:wrap; 

	}
	li{
		flex:50%;
		padding: 5px;
			box-sizing: border-box;

	}
	.p-1{
		margin-top: 5px;
		font-size: 10px;
		height: 40px;
	}
	.p-2{
				display: flex;
				font-size: 12px;

	}
	.p-2 span{  flex: 3; }
	.p-2 span:nth-child(1){
		color: red;
	}
	.p-2 span:nth-child(2){
		margin-left: -10px; 
		 text-decoration:line-through
	}
		.p-2 span:nth-child(3){
			background: #000;
			color: #fff;
		}
		.bx-2{
			font-size: 20px;
			color: #de3f97;
			float: left;
		}
		.bx{overflow: hidden;}
	.bx-1{
			font-size: 20px;
			color: #de3f97;
			float: right;
		}


</style>