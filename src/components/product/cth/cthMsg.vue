<template>

	  <div id="magneticstickers">
		<mt-header title="故宫磁贴画">
		   <router-link to=""  v-tap="{ methods:linkGo }" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<div class="banner">
			<img src="../../../assets/image/banner04.jpg" alt="" />
		</div>

		<ul class="magnet-list">
			<p>给已成不变的生活找点乐趣，一撕一贴就是告别重复的方式。</p>
			<li>
				<span>一撕一贴</span>
				<h2>磁力魔法<br />
让您故宫的记忆更为鲜活</h2>
				<p>多款尺寸，多种材质，多样颜色，专业品质输出工艺采用环保材料，呈现您故宫游赏中灵动多彩的珍贵瞬间。</p>
				<img src="../../../assets/image/magnet01.jpg" alt="" />
			</li>
			<li>
				<h2>五彩缤纷<br />
这是您填满回忆的万花筒</h2>
				<p>
					上传您自己的故宫影像，打造一套属于自己的磁贴画。 只需一个画框，随时更换画芯，对生活充满好奇，让记忆年轻。
				</p>
				<img src="../../../assets/image/magnet02.jpg" alt="" />
			</li>
		</ul>
		<div id="btn_box">
		    	<a href="http://builder.artup.com/test/magnet-index-20170920.html">
		        <div class="made_btn" id="art_album" style="color: #333;">开始定制</div>
		    </a>   
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