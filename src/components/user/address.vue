<template>
	<div id="Address">
		<!--头-->
		<mt-header title="收货地址">
		  <router-link to="" v-tap="{methods:linkGo}" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		  <mt-button icon=""  slot="right"></mt-button>
		</mt-header>
		<div class="addressList">
			<ul class="clearfix">
				<li class="clearfix" v-for="(itme,indexs) in dataList" >
					<div class="content clearfix" :dbId='itme.dbId'>
						<div class="listContent clearfix">
							<ul class="clearfix">
								<li  v-tap='{methods:updataCheck,dbid:itme.dbId,index:indexs}'><p v-if="selectBtn" :class="itme.isOK ? 'circle':'circle circleNone' "><i v-bind:hidden="itme.isOK == false" class="icon iconfont">&#xe639;</i></p></li>

								<li>
									<p>
										<span>{{itme.name}}</span>
										<span>{{itme.mobile}}</span>
									</p>
									<p>{{itme.province}}{{itme.address}}</p>
								</li>
								<li v-tap="{methods:editorAddress,dbId:itme.dbId}"><i class="icon iconfont">&#xe6a7;</i></li>
							</ul>
						</div>
						<div class="delet clearfix"  v-tap='{methods:deleteAddress,dbId:itme.dbId,index:indexs}'>
							<div>删除</div>
						</div>
					</div>
				</li>
			</ul>
			<div v-tap='{methods:gotoAddAddress}' class="newAddclassBtn">新增收货地址</div>
		</div>
		
	</div>
</template>

<script>
	import  Api   from '../../API.js'
	import { Toast ,Actionsheet,Popup,Indicator} from 'mint-ui';	
	
	export default{
		data(){
			return{
				tapStyle:false,
				dataList:[],
				selectBtn:false
			}
		},
		methods:{
			updataCheck(params){
				if(this.selectBtn == true){
					this.dataList[params.index].isOK = !this.dataList[params.index].isOK;
					var jsons = {
								userDbId:localStorage.getItem("userDbId"),
								dbId:params.dbid
								}
					Api.address.setDefaultAddress(jsons).then(res=>{
						location.href="#payOrder?openId="+this.$route.query.openId+"&orderDbId="+this.$route.query.orderDbId+"&userDbId="+localStorage.getItem("userDbId")
					},err=>{
						Toast('数据请求错误');
					})
				}
				
			},
			/*删除地址*/
			deleteAddress(params){
				var jsons = {
					userDbId: localStorage.getItem("userDbId"),
					dbId:params.dbId
				};
				var index = params.index; 
				 var that = this;
				
				 Api.address.deleteAddress(jsons).then(res=>{
					$(".addressList ul li").each(function(n,el){
				 	if(params.dbId == $(el).find('.content').attr('dbId')){
					 		el.remove();
					 	}
					 })
				},err=>{
					Toast('数据请求错误');
				})
		
			},
			/*新增地址*/
			gotoAddAddress(){
				if(this.$route.query.dzgl && this.$route.query.dzgl == 'grzx'){
					
					location.href="#newAddress?dzgl=grzx";
				}else{
					
					location.href="#newAddress?openId="+this.$route.query.openId+"&orderDbId="+this.$route.query.orderDbId+"&userDbId="+localStorage.getItem("userDbId");
				}

			},
			/*编辑地址*/
			editorAddress(params){
				if(this.$route.query.dzgl && this.$route.query.dzgl == 'grzx'){
					location.href="#newAddress?dzgl=grzx&dbId="+params.dbId;
					
				}else{
					location.href="#newAddress?dbId="+params.dbId+"&openId="+this.$route.query.openId+"&orderDbId="+this.$route.query.orderDbId+"&userDbId="+localStorage.getItem("userDbId");
					
				}

			},
	        linkGo(){
				this.vurRouterGo();
			}
		},
		mounted(){
			if(this.$route.query.dzgl && this.$route.query.dzgl == 'grzx'){
				this.selectBtn = false;
				 
			}else{	
			
				this.selectBtn = true;
				
			}
			var jsons = {
				userDbId:localStorage.getItem("userDbId"),
				status:1, 
				pageNum:0,
				pageSize:15,
				sort:'createdDt'
			}
			Api.address.addressList(jsons).then(res=>{
				this.dataList = res.data.results;
				console.log(this.dataList)
				for (var i = 0; i < this.dataList.length; i++) {
					if(this.dataList[i].mainAddr  == '是'){
						
						this.dataList[i].isOK = true;
					}else{
						this.dataList[i].isOK = false;	
					}
				}
				//console.log(this.dataList)
				//console.log(res)
				//动态设置删除按钮高度
				function FnsetDelectDivHeight(){
					var delectHeight = [];
					var dom = [];
					$('.listContent').each(function(n,e){
						delectHeight.push($(this).height())
					});
					$('.delet ').each(function(n,e){
						dom.push($(this))
					});
					for(var i=0; i<delectHeight.length;i++){
						dom[i].css({
							'height':delectHeight[i]+'px'
						});
					}
				}
				
				//滑动删除UI  显示删除按钮
				function FndelectTouch(){
					//绑定事件的时候这里不能用click 而要用touchstart
					var expansion = null; //是否存在展开的list
					var container = $('.addressList > ul li .content');
					//console.log(container)
					for(var i = 0; i < container.length; i++){    
					    var x, y, X, Y, swipeX, swipeY;
					    container[i].addEventListener('touchstart', function(event) {
					        x = event.changedTouches[0].pageX;
					        y = event.changedTouches[0].pageY;
					        swipeX = true;
					        swipeY = true ;
					        if(expansion){   //判断是否展开，如果展开则收起
					            expansion.className = "";
					        }        
					    });
					    container[i].addEventListener('touchmove', function(event){  
					    	
					        X = event.changedTouches[0].pageX;
					        Y = event.changedTouches[0].pageY;        
					        // 左右滑动
					        if(swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0){
					            // 阻止事件冒泡
					            event.stopPropagation();
					            if(X - x > 10){   //右滑
					                event.preventDefault();
					                 $(this).animate({left:"0"},1);  //右滑收起
					            }
					            if(x - X > 10){   //左滑
					                event.preventDefault();
					                
					                $(this).animate({left:"-3.78rem"},1);
					               
					               // $(this).addClass('swipeleft');   //左滑展开
					                expansion = $(this);
					            }
					            swipeY = false;
					        }
					        // 上下滑动
					        if(swipeY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
					            swipeX = false;
					        }        
					    });
					}
				}
				setTimeout(function(){
					FnsetDelectDivHeight();
					FndelectTouch();
				},500)
			},err=>{
				Toast('数据请求错误');
			})

		}
	}
</script>
