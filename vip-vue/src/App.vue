<template>
  <div id="app">
    <daohang></daohang>
    <router-view/>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'app',
  data:function(){
    return {
        list:[]
    }
  },
      mounted:function () {

         // axios.post('/server.html?rpc&method=Cart.getCartExpireAndNumber&f=&_=1507967222265',{"method":"Cart.getCartExpireAndNumber","params":{"page":"index.html","query":""},"id":1507967227663,"jsonrpc":"2.0"})
         //  .then(function(response){
         //    console.log(response);
         //    // this.list = response.data.

         //  })
         //  .catch(function(error){
         //    console.log(error)
         //  });
      

    
        }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>


