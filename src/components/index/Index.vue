<template>
	<div id="index" style="width: 100%;height:100%;">
		<div class="gqfhtz">
			<mt-header title="">
				<router-link to="/" slot="left">
					<mt-button @click="handleClose">关闭</mt-button>
				</router-link>
				<mt-button icon="more" slot="right"></mt-button>
			</mt-header>
			<div class="content">
				<h2>关于国庆期间订单生产及发货的通知</h2>
				<div class="wzList">
					<h1>亲爱的用户：</h1>
					<p>中秋国庆假期将至，感谢您一直以来对传给雅昌的鼎力支持。
					为了给您提供更好的服务，传给雅昌在国庆节期间的订单、客服和售后将</p>
					<p>做出如下调整：</p>
				</div>
				<div class="wzList">
					<h1>关于订单：</h1>
					<p>2017年9月27日24点之前付款的框画、海报、台历、挂历、合集、拾光集
					订单，将正常生产并在假期前发货，其它产品将节后发货。2017年9月28
					日-10月8日期间的订单，我们将安排在10月9日开始陆续生产、发货。</p>
				</div>
				<div class="wzList">
					<h1>关于客服：</h1>
					<p>10月1日-10月8日暂停客服值班。
					如遇订单问题可以拨打客服热线留言（4006-600-688）或将问题详细描
					述发送至邮箱yxservice@artron.net，我们将在10月9日开始回复您的问题。</p>

				</div>
				<div class="wzList">
					<h1>关于售后：</h1>
					<p>所有售后问题（退换货、退款等）均推迟至10月9日开始处理。</p>
					<p class="lastP">祝您国庆假期愉快！</p>
				</div>
			</div>
			
		</div>
		<div class="diaocha">
			<a href="http://testbuilder.artup.com/test/diaocha/wx/index.html"><i>📃</i>问题反馈</a>
		</div>
		<div class="swipeDiv" style="width: 100%;height: 400px;">
			<mt-swipe  :auto="4000">
				<!--<mt-swipe-item>
				  	<a class="a_herf" >		  		
				  		<img @click="showGqtz" src="../../assets/img/gqfhtz.jpg"/>
				  	</a>
			  </mt-swipe-item>-->
			  <mt-swipe-item v-for="(img,index) in indexImg">
			  	
			  	<a class="a_herf" :href="img.link">		  		
			  		<img  @click="showGqtz(index)" :src="img.imgUrl"/>
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
		},
		showGqtz(index){
			if(index ==0 ){
				// $('.gqfhtz').show();
			}
           
        },
        handleClose(){
            $('.gqfhtz').hide();
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
//				var obj = {
//					client:'mobile',
//					imgUrl:'http://image2.artup.com/resources/static/pc/images/gqfhtz.jpg'
//				}
//				res.data.data.unshift(obj)
				this.indexImg = res.data.data;
				console.log(this.indexImg)
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
	.gqfhtz{
		width: 100%;
		height: 100%;
		position:fixed;
		z-index: 999;
		display: none;
		overflow-y: auto;
		background-image: url("http://image2.artup.com/resources/static/pc/images/gqfhtz_02.jpg");
	}
	.content{
		width:17.77rem;
		height:100%;
		margin:0 auto;
		margin-bottom: 3rem;
	}
	.content h2{
		width:100%;
		text-align: center;
		font-size: 1.03rem;
		color: #bc1b00;
		height:5.18rem;
		line-height: 5.18rem;
	}
	.content .wzList{
		margin-top: 0.2rem;
	}
	.content .wzList h1{
		font-size:0.8rem;
		line-height: 1.11rem;
		color: #712d00;
		font-weight: 500;
	}
	.content .wzList p{
		text-indent: 0.8rem;
		font-size:0.8rem;
		line-height: 1.1rem;
		color: #712d00;
	}
	.lastP{
		text-align: center;
		/*font-size: 0.648rem !important;*/
		margin-top:2.03rem;
		font-weight: 500;
	}
</style>