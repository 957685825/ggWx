<template>
	<div id="index" style="width: 100%;">
		<div class="diaocha">
			<a href="http://testbuilder.artup.com/test/diaocha/wx/index.html"><i>📃</i>问题反馈</a>
		</div>
		<div class="swipeDiv" style="width: 100%;height: 400px;">
			<mt-swipe  :auto="4000">
			  <mt-swipe-item v-for="img in indexImg">
			  	<a class="a_herf" :href="img.link">		  		
			  		<img :src="img.imgUrl"/>
			  	</a>
			  </mt-swipe-item>
			  <!--<mt-swipe-item style="background: orchid;"></mt-swipe-item>
			  <mt-swipe-item style="background: orange;">3</mt-swipe-item>-->
			</mt-swipe>
		</div>
		<div v-DomHeight class="btn_btn">
			<ul class="btn_ul">
				
				<li>
					<router-link to="huaceMsg?category=huace">
						<i style="font-size: 3.1875rem;" class="icon iconfont">&#xe625;</i>
						<p>故宫时光集</p>
					</router-link>
				</li>
				<li> 
					<router-link to="hbMsg?category=haibao">
						<i style="font-size: 3.1875rem;" class="icon iconfont">&#xe609;</i>
						<p>故宫海报</p>
					</router-link>
				</li>
				<li>
					<router-link to="khMsg?category=kuanghua">
						<i style="font-size: 3.1875rem;" class="icon iconfont">&#xe628;</i>
						<p>故宫框画</p>
					</router-link>
				</li>
				<li>
					<router-link to="cthMsg?category=citiehua">
						 <i style="font-size: 3.1875rem;" class="icon iconfont">&#xe686;</i>
				 		<p>故宫磁贴画</p>
					</router-link>
				</li>
				<li> 
					<router-link to="hjMsg?category=taili">
						<i style="font-size: 3.1875rem;" class="icon iconfont">&#xe7ca;</i>
						<p>故宫影像合集</p>
					</router-link>
				</li>			
				<li> 
					<router-link to="user">
						<i style="font-size: 3.1875rem;" class="icon iconfont">&#xe64b;</i>
						<p>个人中心</p>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Api from '../../API.js'
import { Swipe, SwipeItem,Indicator } from 'mint-ui';
export default {
  data () {
    return {
      indexImg:[]
    }
  },
// //拿到数据
//  computed:mapGetters([
//    'count',
//    'test2'
//  ]),
//  //提交方法
//  methods:mapActions([
//    'add','testBtn'
//  ]),
    methods:{
		fetchData(){
			//alert(this.$route.query.userDbId)
			sessionStorage.setItem('urlQuery',JSON.stringify(this.$route.query))			
			if (this.$route.query.userDbId) {
				localStorage.setItem('userDbId',this.$route.query.userDbId)
			}
		}
    },
    mounted(){

    		Indicator.open({
		  		text: '加载中...',
		  		spinnerType: 'fading-circle'
			}); 
			 
			if (JSON.stringify(this.$route.query)!="{}") {  
				this.fetchData();		
			}else{
				if (localStorage.getItem('userDbId') && localStorage.getItem('userDbId') != null && localStorage.getItem('userDbId') != '' && localStorage.getItem('userDbId') != 'null') {
				} else {
					 //重新登录函数
					 Api.user.getUserDbId().then(res=>{
					 //请求微信授权 
					  	window.location.href=res.data.authorizeCodeUrl
					  })
				}
			}

			//首页请求的数据
			Api.Index.indexImg().then(res=>{ 
				this.indexImg = res.data.data;
				Indicator.close();
			})
	},
	 watch:{
        $route:'fetchData'
     }

}
</script>

<style>
	.a_herf{
		display: block;
		width: 100%;
		height: 100%;
	}
	.a_herf >img{
		display: block;
		width: 100%;
	}
</style>