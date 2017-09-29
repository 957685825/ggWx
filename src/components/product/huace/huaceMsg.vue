<template>
	<div id="hcMsg">
		<mt-header title="故宫时光集">
		   <router-link to=""  v-tap="{ methods:linkGo }" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>

		<div id="setPick-upLight">
			<div class="banner">
				<img src="../../../assets/image/banner03.jpg" alt="" />
			</div>

			<ul class="upLight-detai">
				<li>
					<p class="font-lf">曾经的皇宫大内，如今的人民博物院；晕染着太多的浮世沧桑。一键上传传给故宫，将紫禁城中的感动梳理成册，每一次的紫禁行摄都有不同的味道，经历了600个春夏秋冬，周而复始中去发现与众不同的每一束光影。选择多种故宫纹饰元素模版，随意组合照片，轻松编辑故宫定制行摄画册。</p>
					<img src="../../../assets/image/detail01.jpg" alt="" />
				</li>
				<li>
					<h2>红色  祥云飞扬吉祥的云彩</h2>
					<p>
						祥云吉祥庄重深宫倩影中行摄的笔记
					</p>
					<img src="../../../assets/image/detail02.jpg" alt="" />
				</li>
				<li>
					<h2>红色·殿宇之海玺授之宝</h2>
					<p>
						殿宇楼台之雄，烟雨朦胧中品皇家气派
					</p>
					<img src="../../../assets/image/detail03.jpg" alt="" />
				</li>
				<li>
					<h2>黄色·太和重檐十兽迎宾</h2>
					<p>
						金銮宝顶之威，中轴王者建极绥猷
					</p>
					<img src="../../../assets/image/detail04.jpg" alt="" />
				</li>
				<li>
					<h2>黄色·窗棂之下时光之隧</h2>
					<p>
						殿宇窗棂之花，皇家祈福折射传统文化
					</p>
					<img src="../../../assets/image/detail05.jpg" alt="" />
				</li>
				<li>
					<h2>多彩封面国学之美随心选择</h2>
					<p>
						行摄紫禁之巅，纵览传统东方美学,红色殿宇、 红色祥云、黄色太和、黄色窗棂4种故宫主题 封面可供选择为你的行摄增色几分文艺情怀
					</p>
					<img src="../../../assets/image/detail06.jpg" alt="" />
				</li>
				<li>
					<ul class="list">
						<li>
							<div class="list-img">
								<img src="../../../assets/image/detail11.jpg" alt="" />
							</div>
							<span>浮生半日，时光匆匆，烫银与烫金的结合增显层次与质感  </span>
						</li>
						<li>
							<div class="list-img">
								<img src="../../../assets/image/detail12.jpg" alt="" />
							</div>
							<span>烫印故宫元素线描图，含蓄不失华丽</span>
						</li>
						<li>
							<div class="list-img">
								<img src="../../../assets/image/detail13.jpg" alt="" />
							</div>
							<span>烫印窗花底纹，皇家风范</span>
						</li>
						<li>
							<div class="list-img">
								<img src="../../../assets/image/detail14.jpg" alt="" />
							</div>
							<span>简约大气，皇家贵族</span>
						</li>
					</ul>
				</li>
				<li>
					<h2>随心操作随拍随传</h2>
					<p>
						简单易操作的微信定制平台使用流畅，随拍随传，轻松编辑你的行摄笔记 封面可供选择为你的行摄增色几分文艺情怀
					</p>
					<img src="../../../assets/image/detail07.jpg" alt="" />
				</li>
				<li>
					<h2>多种照片模板可选择</h2>
					<span>随心搭配</span>
					<p>
						多种照片模板可供选择，满足你的不同需求24页内文图模板自由搭配，一键轻松搞定
					</p>
					<img src="../../../assets/image/detail08.jpg" alt="" />
				</li>
				<li>
					<h2>图片清晰色彩真实</h2>
					<p>
						采用顶尖数码输出设备，真实呈现银盐照片之感，层次清晰，色彩艳丽，百年不褪色
					</p>
					<img src="../../../assets/image/detail09.jpg" alt="" />
				</li>
				<li>
					<h2>制作工艺装帧精美</h2>
					<p>
						质感硬壳封面，封面设计考究，烫金文字与东方美学完美搭配，内页为高品质意大利进口亚光滑面真粉纸；超高白度，极高挺度，无酸不易泛黄，将故宫行摄之旅永久保存；纸张具有轻微丝质触感，时尚高级；踩线精装，平整美观。
					</p>
					<img src="../../../assets/image/detail10.jpg" alt="" />
				</li>

			</ul>
		</div>
		<div id="btn_box">
	       <a href="#huaceSelect"> <div class="made_btn" id="art_album" style="color: #333;">开始定制</div></a>
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
			this.vurRouterGo()
			
		}
    },
    mounted(){
    	    //更改session
    		this.addToSession();
	}
}
</script>
