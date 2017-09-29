<template>
	<div id="hbMsg">
		<mt-header title="故宫海报">
		   <router-link to=""  v-tap="{ methods:linkGo }" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<div id="index">
			<div class="banner">
				<img src="../../../assets/image/banner01.jpg" alt="" />
			</div>

			<ul class="detail">
				<li>
					<span>画质</span>
					<h2>色彩的深度演绎</h2>
					<p>艺术微喷级输出，画质细腻，色彩层次丰富。</p>
					<img src="../../../assets/image/poster01.jpg" alt="" />
				</li>
				<li>
					<h2>留住故宫影像</h2>
					<p>
						游故宫、赏故宫、玩故宫、拍故宫、<br /> 喜欢的、欣赏的、爱上的、回忆的。
					</p>
					<img src="../../../assets/image/poster02.jpg" alt="" />
				</li>
				<li>
					<span>包装</span>
					<h2>典雅包装，贴心设计</h2>
					<p class="font-lf">
						采用三角瓦楞或圆筒纸盒包装，确保海报在长途跋涉的过程中免去折叠挤压。
					</p>
					<img src="../../../assets/image/poster03.jpg" alt="" />
				</li>
			</ul>
		</div>
	<div id="btn_box">
    	<router-link to="hbSelect?category=haibao">
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
		}
    },
    mounted(){
    	    //更改session
    		this.addToSession();
	}
}
</script>

<style>

	
</style>