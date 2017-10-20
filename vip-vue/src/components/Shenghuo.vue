<template>
		<div class="my">
	  		<div class="gx-box2">
	  			<ul>
	  				<li v-for="item in list" v-if="item.index_image2">
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
import axios from "axios"

  export default {
			name:"shenghuo",
			data:function(){
				return{
					list:[]
				}
			},
			mounted:function(){
				var that =this;
	   axios.post('/server.html?rpc&method=getBrandList&f=&_=1508396770043',{"method":"getBrandList","params":{"page":"lifemarket.html","np":3,"ep":20,"query":"f=&tra_from=m%3Ai%3A1508197164000_54854dbcb7ba7d4941fadb375018e523%3Aa%3A%3A%3Alifemarket"},"id":1508396771946,"jsonrpc":"2.0"})
          .then(function(response){
            console.log(response);

           that.list= response.data[0].result.items.brands;

          })

          .catch(function(error){
            console.log(error)
          });

			}
		}

</script>

<style type="text/css">
	
	.gx-box2 ul li{
		flex: 100%;
	}
.gx-box2 ul li{height: 179.42px;flex: 100%; position: relative; margin-top: 42px; display: flex;}
	
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