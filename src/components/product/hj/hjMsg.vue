<template>
	<div id="hbMsg">
		<mt-header title="故宫影像合集">
		   <router-link to=""  v-tap="{ methods:linkGo }" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<div id="gghj">
			<div class="banner">
				<img src="../../../assets/image/hjbanner_01.jpg" alt="" />
			</div>
			<div class="content">
				<div class="ggyxhj">
					<h1>故宫影像合集</h1>
					<p>无论使用高光、绒面、珍珠面还是哑光无酸相纸，都会
						为每张作品带来锐利的色彩。优质纸基与吸墨层协同作用，
						确保输出的作品色域宽广、明暗分明、丝毫尽显。
					</p>
					<img src="../../../assets/image/yxhj01_02.png" alt="" />
				</div>
				<div class="ggyxhj cz">
					<p class="cz">材质</p>
					<h1>不同相纸，相同品质</h1>
					<p>无论使用高光、绒面、珍珠面还是哑光无酸相纸，都会
						为每张作品带来锐利的色彩。优质纸基与吸墨层协同作用，
						确保输出的作品色域宽广、明暗分明、丝毫尽显。
					</p>
					<img src="../../../assets/image/gghjcz_02.png" alt="" />
				</div>
				<div class="ggyxhj cz">
					<p class="cz">画质</p>
					<h1>超越传统银盐照片</h1>
					<p>艺术微喷输出，采用全球专业数码输出设备，保留
						优异宽阔的色调层次及细节。
					</p>
					<img src="../../../assets/image/gghjhz_02.png" alt="" />
				</div>
				<div class="ggyxhj cz">
					<p class="cz">包装</p>
					<h1>精美和纸+质感信封盒+精美礼盒</h1>
					<p>合集由精美故宫图案和纸包装，皇家富贵、典雅精致；
						由无酸、耐老化纸板制成的信封盒，有效保护故宫影像
						作品不受灯光灰尘和环境的影响；
						外包装采用精美礼盒，美观大方，方便运输。
					</p>
					<img src="../../../assets/image/gghjbz_02.png" alt="" />
				</div>
			</div>
		</div>
		
	<div id="btn_box">
    	<router-link  to='hjSelect?category=heji'>
        <div class="made_btn" id="art_album" style="color: #333;">开始定制</div>
    </router-link>   
    </div>
	</div>
</template>
<script>
	import Api from '../../../API.js'
import { Swipe, SwipeItem } from 'mint-ui';
export default {
	  data () {
	    return {
	      imgHost:Api.HOST
	    }
	  },
    methods:{
		linkGo(){
			this.vurRouterGo();
		},
		fun(){
			alert("产品升级中")
		}
    },
    mounted(){
    	    //更改session
    		this.addToSession();
	}
}
</script>

<style>

	
