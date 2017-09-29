<template>
	<div id="user">
		<mt-header title="个人中心">
		   <router-link to=""  v-tap="{ methods:linkGo }" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		  <mt-button icon="" slot="right"></mt-button>
		</mt-header>
		<a class="telePhone" href="tel:400-6600-688">客服电话：400-6600-688</a>
		<ul class="userList">
			<li>
				<router-link to="cart">
					 <i style="font-size: 3.1875rem;" class="icon iconfont">&#xe608;</i>
				 	<p>购物车</p>
				 </router-link>
			</li>
			<li>
				<router-link to="orderList">
					 <i class="icon iconfont">&#xe609;</i>
					 <p>订单列表</p>		
				 </router-link>
			</li>
			<li>
				<router-link to="Address?dzgl=grzx">
					 <i class="icon iconfont">&#xe601;</i>
				 	<p>地址管理</p>
				 </router-link>
			</li>
			<li v-tap="{methods:clearStore}">
				<router-link to="">
				 	<i class="icon iconfont">&#xe620;</i>
					 <p >返回首页</p>
				 </router-link>
			</li>
			<li>
				<router-link to="material">
					 <i class="icon iconfont">&#xe603;</i>
				 	<p>我的素材库</p>
				 </router-link>
			</li>
			<li>
				<router-link to="worklist">
					<i style="font-size:1.6875rem;" class="icon iconfont">&#xe7ca;</i>
				 	<p>我的作品库</p>
				 </router-link>
			</li>
		</ul>
		
	</div>
</template>

<script>
import Api from '../../API.js'
import { Swipe, SwipeItem, Indicator } from 'mint-ui';
export default {
	  data () {
	    return {
	     
	    }
	  },
    methods:{
		linkGo(){
			//this.vurRouterGo();
			location.href="";
		},
		clearStore(){	
			Indicator.open({text: '跳转中...',spinnerType: 'fading-circle'}); 
			sessionStorage.clear();
			localStorage.clear();
			
			 Api.user.getUserDbId().then(res=>{
			 	Indicator.close();  
				//请求微信授权
				window.location.href=res.data.authorizeCodeUrl
			},err=>{
               	 	Indicator.close(); 
               	 	
                })
		}
    },
    mounted(){
    	   
	}
}
</script>

<style>
	
</style>