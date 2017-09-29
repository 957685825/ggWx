<template>
	<div id="khMsg">
		<mt-header title="故宫框画">
		   <router-link to=""  v-tap="{ methods:linkGo }" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>	

            <div id="index">
                <div class="banner">
                    <img src="../../../assets/image/banner02.jpg" alt="" />
                </div>

                <ul class="detail">
                    <li>
                        <h2>装裱工艺</h2>
                        <p>我们的工匠秉承“我在故宫修文物”的专业精神，严格检测流程，全手工装裱、加工、组装，以打造专属于您的故宫记忆。</p>
                        <img src="../../../assets/image/poster04.jpg" alt="" />
                        <img src="../../../assets/image/poster05.jpg" alt="" />
                    </li>
                    <li>
                        <h2>您专属的故宫记忆</h2>
                        <p>
                            重温故宫印象，把故宫带回家。
                            独具匠心手工打造，完美衬托光影细节，
                            呈现故宫记忆。
                        </p>
                        <img src="../../../assets/image/poster06.jpg" alt="" />
                    </li>
                    <li>
                        <span>包装</span>
                        <h2>安全环保，典雅包装</h2>
                        <p class="font-lf">
                            环保无异味的背板材料与精细礼盒包装相辅相成，将故宫完美品质一次性呈现于您。
                        </p>
                        <img src="../../../assets/image/poster07.jpg" alt="" />
                        <img src="../../../assets/image/poster08.jpg" alt="" />
                    </li>
                </ul>
            </div>
        <div id="btn_box">
            <router-link to="khSelect?category=kuanghua">
                <div class="made_btn" id="art_album" style="color: #333;">开始定制</div>
            </router-link>
        </div>
	</div>
</template>

<script>
	import Api from '../../../API.js'
	import { Swipe, SwipeItem } from 'mint-ui'
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
	    		this.addToSession()
	    		if(this.$route.query.channelCode){
	    			var jsons = {
	    				"channelCode": this.$route.query.channelCode
	    			}
	    			sessionStorage.setItem("channelCode",this.$route.query.channelCode)
	    			Api.work.editNumber(jsons).then(res=>{
                  console.log(res)
                },err=>{
                 	
                })
	    		sessionStorage.setItem('urlQuery',JSON.stringify(this.$route.query))
				if (this.$route.query.userDbId) {
					localStorage.setItem('userDbId',this.$route.query.userDbId)
				}
	    		}
	    		
	}
}
</script>

<style>
</style>