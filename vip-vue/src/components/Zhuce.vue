<template>
	<div class="gw">
		<div class="gw-2">
			<ul>
					<router-link to="javascript:history.back(-1)" class="lin">

				<li>
					<i class="iconfont">X</i>

				</li>
									</router-link>
			</ul>
		</div>
		<div class="gw-1"></div>
		<div class="gw-3">
		
				<span>登入名</span><input type="tel" v-model="username"  placeholder="手机号或邮箱"  class="in-1">

				
				<hr>
				<span>密&nbsp;&nbsp;&nbsp;码</span><input type="password" v-model="password"  placeholder="请输入密码" class="in-2">
				<hr>
				<button class="btn-1" @click="reg()">登入</button>
								<p>忘记密码？</p>

		

				<div class="order">
					<span class="line"></span>
					<span class="tet">或</span>
					<span class="line"></span>
				</div>
				<button>
					<router-link to="/login">
				手机注册登入
			</router-link>
				</button>

		</div>
	</div>
</template>

<script type="text/javascript">
import axios from "axios";

			export default {
			name:"zhuce",
			data:function(){
				return{
					username:"",
					password:""
				}
			},
		methods:{	reg:function(){
			var that = this
	 axios.post('/api/zhuce',"username="+this.username+"&password="+this.password)
          .then(function(res){
            if(res.data){
            	alert("登入成功")
            that.$router.replace({ path: '/meizhuang'})

            }else{
            	alert('出错了')
            }


          })

          .catch(function(error){
            console.log(error)
          });

				}
			}
		}
</script>

<style type="text/css" scoped>
	
.gw{width: 100%;
	height: 100%;
	position: fixed;
	top: -10px;
	z-index: 999999;
	color: #000000;
}
.gw-2 ul{
	margin-top: 10px;
	overflow: hidden;
	height: 43.98px;
}
.gw-2 ul li{
	font-size: 0px;
	float: right;
	line-height: 43.98px;
	text-align: center;
	color: #000000;

}
.gw-2{
	width: 100%;
	height: 150px;
	background: url(../assets/7.png) no-repeat ;
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
	.lin{
		float: right;
	}
	.lin i{
		font-size: 30px;
		color: #5c5c5c;
	}
	.gw-3 input{
		width: 176px;
		height: 51px;
		border:none;
		color: #dbdbdb;
		font-size: 16px;
	}
	.gw-3 span{
		margin: 0 10px;
		font-size: 16px;
	}
	.s2{
		width: 100px;
	}
	.gw-3 input{
		width: 280px;
		border: 0;
		outline: none;
	}
/*	.gw-3 .in-2{
		width: 290px;
	}*/
	.gw-3 .s1{
		display: inline-block;

		border-left: 1px solid #b9b9b9;
		height: 51px;
		position: absolute;
		top: 213px;
		line-height: 51px;
		padding: 0 10px; 
		right: 0;
		color: #b9b9b9;
	}
	.gw-3 .btn-1{
		width: 345px;
		height: 44px;
		background: #de3d96;
		border-radius:3px;
		color: #ee9eca; 
		font-size: 16px;
		margin-top: 30px;

	}
	button{
		margin-top: 30px;
	}
	p{
		padding: 10px 15px;
		font-size: 16px;
		color: #cccccc;
	
	}
	a{color: #157efa;}
	button a{
		color:#e4007f;
	}
	 .order .line {  
   display: inline-block;  
   width: 100px;  
   border-top: 1px solid #ccc ;  
}  
.order .txt {  
   color: #686868;  
   vertical-align: middle;  
}  
</style>