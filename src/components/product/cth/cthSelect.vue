<template>
	<div id="khSelect">
		<transition name="fade">
			<div v-if="isImgAlert" class="title_alert">
				<span>🖱️点击上传后的图片可替换图片 ！</span>
			</div>
		</transition>
		<file-load @getImgData="getImg" :extraPostDatas="extraPostData" :sheetVisible="sheetV" ></file-load>
		
		<mt-header :title="tittle">
		  <router-link to=""  v-tap="{ methods:linkGo }" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		  <mt-button icon=""  slot="right"></mt-button>
		</mt-header>
		<div  class="reportNavEdt">		
			！图片像素不足，会导致打印模糊，建议更换图片
		</div>
		<div class="bbsImg">
			<div class="contioner" :style="{width:CaseData.currentWidth,height:CaseData.currentHeight,backgroundImage:CaseData.urls}">
				<div class="hx" :style="{width:CaseData.smallWidth,height:CaseData.smallHeight}">
					<img @click="imgshow" id="updateBtn" :src="imgHost+'static/img/p_sucai_02.jpg'" alt="" />

					<div class="imgBox" >
						<span class="editSpan"  v-bind:hidden="finishWork == true" v-tap='{methods:editer}'>编辑</span>
						<img id="showImg" v-tap='{methods:updataImg}' src="" attrImg='' alt="" />
					</div>
				</div>
			</div>
		</div>
		<dl class="slect_dl" v-bind:hidden="finishWork == true">
			<dt>
				选择尺寸
			</dt>
			<dd>
				<div v-tap='{methods:updataSize}' data-code='300X400'  class="dd_slect size dd_slectWidth dd_active">
					300mmX400mm
				</div>
				<div v-tap='{methods:updataSize}' data-code='400X300' class="dd_slect size dd_slectWidth ">
					
					400mmX300mm
				</div>
				<div v-tap='{methods:updataSize}' data-code='400X600' class="dd_slect size dd_slectWidth ">
					
					400mmX600mm
				</div>
				<div v-tap='{methods:updataSize}' data-code='600X400' class="dd_slect size dd_slectWidth ">
					
					600mmX400mm
				</div>
				
			</dd>
		</dl>
		<dl class="slect_dl" v-bind:hidden="finishWork == true">
			<dt>
				选择框型
			</dt>
			<dd>
				<div data-code= 'ysymk' v-tap='{methods:updataType}' class="dd_slect type dd_slectWidth dd_active">
					原色-原木框
				</div>
				<div data-code= 'hssmk' v-tap='{methods:updataType}'  class="dd_slect type dd_slectWidth ">
					黑色-实木框
				</div>
				
			</dd>
		</dl>
		<i style="height: 2.9375rem; display: block; width: 100%;"></i>
		<div class="addCarBtn" v-bind:hidden="finishWork == false" v-tap="{methods:addCar}">加入购物车</div>
		<div class="cart_btn"><div class="price" style="width: 8rem;">
			价格：<span><b>¥</b>{{price}}</span></div> <div v-bind:hidden="finishWork == true" v-tap="{methods:nextGoCar}" class="crectOrder">
			下一步
		</div></div>
		<edit-img @selectPreview="selectPreview" @editFinish="editFinish"></edit-img>
	</div>
	
</template>
	
<script>
	import selectKh from '../../../../static/js/selectCth.js'
	import fileLoad from '../../component/publicComponent/fileLoad.vue'
    import Api from '../../../API.js'
	import { Toast,Indicator,MessageBox,Picker,Popup } from 'mint-ui';	

	
	export default{
		data(){
			return{
				imgHost:Api.HOST,
				isImgAlert:true,
				isMsgAlert:true,
				CaseData:'',
				size:'',
				type:'',
				sheetV:false, //组件的开关
				imgData:'',
				defDbId:'6afedcf6-b0e4-447d-afd9-c70449f42f50',
				sizeCode:'',
				typeCode:'',
				skuCode:'',
				skuName:'',
				extraCode:'',
				price:'',
				extraPostData:{
					category :"kuanghua",
					client :'mobile',
					channel:'',
					userDbId :"", 
					picPage : 1,
					picNum : 1,
					styleType : 1,
					editCnfName :'',
					templateCode : '',				
					defDbId:''
				},
				 workEdit:{ //给后端保存或者编辑完成下一步传递的对象
                        format:"json",
                        ignore:"true",
                        operator:"add",
                        saveMode:"parallel",
                        edtDbId:'',// 新生成的产品才有的字段
                        tplCode:this.templateCode, //暂时写死,父组件带入
//                      sessionId:localStorage.getItem("sessionId"),
                        userDbId:localStorage.getItem('userDbId'),
//                      client:"mobile",//渠道前端传递，暂时写死
                        category:this.getFromSession("category"),//产品类型这里是宝宝书
                        defDbId:'', //tplCode 模版暂时写死,父组件带入
                        channelCode:"zc",//暂时写死
                        sku:'',//产品调sku
                        editPicture:[],//产品图片
                        thumbnailImageUrl:'',//第一板式的第一张缩略图
                        status:2
                   },
			  editData:{//编辑图片都数据
	                    oSrc:'',
	                    imgSize: {oW:'', oH: ''},
	                    actions:{},
	                    customParams:{
	                        thumbnailScale:''
	                    }
	          	 },
	           finishWork:false,
	           oldImgData:'',
	           skuId:'',
	           updataImgStr:'',
	           tittle:'故宫磁铁画'
			}
		},
		components:{  
	       fileLoad
	    },
		methods:{
			//编辑器点击回传的事件
            selectPreview(){
                //this.imgshow();
            },
            updataImg(){
	            	if(this.finishWork == false){
					this.sheetV =!this.sheetV;
            			this.updataImgStr = 'change';
				}
            		
            },
			imgshow(){ //显示上传
				this.sheetV =!this.sheetV;
				this.updataImgStr = 'upLoad';
			},
			nextGoCar(){
				$('.reportNavEdt').hide();
				this.tittle = '故宫磁铁画预览';
				if($("#showImg").attr('src')){
					Indicator.open({text: '作品保存中...',spinnerType: 'fading-circle'}); 
					this.workEdit.defDbId = this.defDbId;
					if(this.editData.actions.thumbnailScale){
						this.workEdit.editPicture[0].actions = this.editData.actions;
					}
					//this.workEdit.editPicture[0].actions = this.editData.actions ;
					
					this.workEdit.editPicture = '['+JSON.stringify(this.workEdit.editPicture[0])+']';
					this.workEdit.sku = this.skuName;
					this.workEdit.skuCode = this.skuCode;
					//如果session有channelCode 就存入
					if (sessionStorage.getItem("channelCode")) {
						console.log(sessionStorage.getItem("channelCode"))
						this.workEdit.channelCode = sessionStorage.getItem("channelCode")
					}
					if(this.skuId == undefined || this.skuId == 'undefined'){
						this.workEdit.skuId ='';
					}else{
						this.workEdit.skuId = this.skuId;
					}
				   Api.work.workEdit(this.workEdit).then((res)=>{
				   	this.extraCode = res.data.extraCode;
				   	this.workEdit.thumbnailImageUrl = res.data.commandTitle;
				   	this.finishWork = !this.finishWork;
				   	Indicator.close();
				   //	console.log(res.data)
				   
				   },err=>{
				   		Indicator.close();
				   })
			  }else{
			  	
			  	Toast('请先上传图片');
			  }
			
			},
			getImg(val){ //获取组件图片
				
				if(val.dpi== 'false'){
					$(".reportNavEdt").show();
				}else{
					$(".reportNavEdt").hide();	
				}
				this.editData.actions = {};
				$('.hx').css({'background':'none'});
				this.oldImgData = val;
				
				$('#showImg').attr('src',val.previewThumbnailImageUrl);
				$('.imgBox').show();
				$('#updateBtn').show();			
				$('#showImg').attr('attrImg',val.thumbnailUrl);//存原图
				this.imgData = val;
				var picObj = {
				 	"constName":'1_1',
				 	"picDbId" : val.pictureDbId,
				 	"page" :val.picPage,
				 	"editCnfIndex" :val.styleType,
				 	"num" : val.picNum,
				 	 actions : {
				 	 	"thumbnailScale":val.thumbnailScale,
				 	 	"minDpiHeight":val.minDpiHeight,
				 	 	"minDpiWidth":val.minDpiWidth
				 	 },
                     "thumbnailImageUrl":val.thumbnailUrl, 
                     "previewThumbnailImageUrl" :val.previewThumbnailImageUrl,
                     "cropit" : "false",
                     "editCnfName": val.editCnfName,
                     "userDbId":val.userDbId
				 };
				 this.workEdit.editPicture = [];
				 this.workEdit.editPicture.push(picObj);
				 this.workEdit.thumbnailImageUrl = val.thumbnailUrl;
				 this.workEdit.tplCode = this.extraPostData.templateCode; 

				
			},
			updataType(params){//选择框型
				this.type = $(params.event.target).text();
				$(params.event.target).addClass('dd_active').siblings().removeClass('dd_active');
				this.typeCode = $(params.event.target).attr('data-code');
				this.initStyle();				
			},
			updataSize(params){//选择尺寸
				this.size = $(params.event.target).text();
				$(params.event.target).addClass('dd_active').siblings().removeClass('dd_active');
				this.sizeCode =  $(params.event.target).attr('data-code');
				this.initStyle();	
				
			},
			initStyle(){//初始化数据
				this.editData.actions = {};
				var size = this.trimStr(this.size)
				var type = this.trimStr(this.type)
				var datas = selectKh.init.selectK(size,type)
				//
				this.skuName = "磁铁画."+ size+'.'+type;
				this.extraPostData.templateCode = 'citiehua_'+this.sizeCode;
				this.skuCode = 'citiehua.'+this.sizeCode+'.'+this.typeCode;
				this.extraPostData.editCnfName = 'citiehua_'+this.sizeCode;
				console.log(this.extraPostData.editCnfName)
				//console.log(this.skuCode)
				this.CaseData = datas;
				var paramsJson = {
						"category": this.getFromSession("category"),
						"parameter" : this.skuCode
					};
				 	//请求价格:			
				Api.sku.querySku(paramsJson).then((res)=>{ 
					console.log(res)
					 this.price = res.data.price;
					 this.skuId = res.data.skuId;
					 //this.bbsSlsectDate.price = res.data.price;
					 sessionStorage.setItem("hbPrice",this.price)
				})
				if($('#showImg').attr('src')){
					var jsonDpi = {};
					jsonDpi.client = this.oldImgData.client;
					jsonDpi.channel = this.oldImgData.channel;
					jsonDpi.category = this.getFromSession("category");
					jsonDpi.pictureDbId = this.oldImgData.pictureDbId;
					jsonDpi.templateCode = this.extraPostData.templateCode;
					jsonDpi.editCnfName = this.extraPostData.editCnfName;
					jsonDpi.picNum = this.extraPostData.picNum;
					jsonDpi.picPage = this.extraPostData.picPage;
					jsonDpi.styleType = this.extraPostData.styleType;
					jsonDpi.userDbId = localStorage.getItem('userDbId');
					//确认选择
					Indicator.open({
						text: '正在切换画框...',
						spinnerType: 'fading-circle'
					});

					Api.work.checkDPI(jsonDpi).then(res => {
						if(res){
							this.getImg(res.data);
							Indicator.close();
						}
						
					},err=>{
	                		Indicator.close();
	                    Toast('网络错误!');
	                })
				}
			},
			trimStr(str){//字符串去空格
				return str.replace(/(^\s*)|(\s*$)/g,"");
			},
			editer(params){
				$(".reportNavEdt").hide();
			   if ($(params.event.target).hasClass("editSpan")) {
					
			   		this.editData.oSrc = this.imgData.thumbnailUrl;
			   		this.editData.imgSize = {
			   			oW: $('.imgBox').width(), 
			   			oH: $('.imgBox').height()
			   		}
			   		this.customParams = {
			   			thumbnailScale:this.imgData.thumbnailScale,
			   			dpi:this.imgData.dpi
			   		}				   		
			   		this.editData.customParams = this.customParams;			   		
			   		this.editData.actions.minDpiHeight = this.imgData.minDpiHeight;
					this.editData.actions.minDpiWidth = this.imgData.minDpiWidth;
					this.editData.actions.thumbnailScale = this.imgData.thumbnailScale;
					this.editData.actions.dpi = this.imgData.dpi;
			   		this.editorImage(this.editData)
			   }
			},
			editFinish(data){
				if(data.postData.dpi== 'false'){
					$(".reportNavEdt").show()
				}else{
					$(".reportNavEdt").hide()
				}
				$('#showImg').attr('src',data.imgData);
				$('#showImg').css(
					{width:"100%",height:"100%",top:0,left:0}
				);
				this.editData.actions = data.postData;

			},
			addCar(){
				Indicator.open({text: '添加购物车...',spinnerType: 'fading-circle'}); 
				var jsons = {
                    operator:"add",
//                  sessionId:localStorage.getItem("sessionId"),
                    userDbId:localStorage.getItem("userDbId"),
                    client:"mobile",//渠道前端传递，暂时写死
                    category:this.getFromSession("category"),//产品类型这里是宝宝书,暂时写死
                    edtDbId:	this.extraCode,
                    price:'0.01',
                    num:1,
                    discount:'',
                    channelCode:"zc",
                    opSystem:'',
                    thumbnailImageUrl:this.workEdit.thumbnailImageUrl,
                    total:'0.01',
                    sku : this.skuName,
                    skuCode : this.skuCode
                }
				console.log(jsons)
                Api.car.addCar(jsons).then(res=>{
                    //var category = "baobaoshu"
                     Indicator.close();		
                     console.log(res)
                    location.href="#cart?edtDbId="+this.extraCode+"&category="+this.getFromSession("category");
                },err=>{
                 	Indicator.close();
                    Toast('添加购物车出错');
                })
				
			},
			//调起编辑图片组件
			 editorImage(jsons){
	           
	            this.$store.commit(
	                'showEditor',
	                {
	                    imgSrc: jsons.oSrc,
	                    imgSize: {width: jsons.imgSize.oW, height:  jsons.imgSize.oH},
	                    initialCrop:jsons.actions,
	                    customParams:{
	                        thumbnailScale:jsons.customParams.thumbnailScale,
	                        dpi:jsons.customParams.dpi
	                    }
	                }
	            )
	        },
	        linkGo(){
		        	if(this.finishWork == true){
		        		this.finishWork = !this.finishWork;
		        		this.tittle =  '故宫磁铁画';
		        		if((typeof this.workEdit.editPicture) == 'string'){
			        		this.workEdit.editPicture = JSON.parse(this.workEdit.editPicture);
			        	}
		        	}else{
					MessageBox({
					  title: '故宫磁铁画',
					  message: '返回将清空所有数据是否确认返回?',
					  showCancelButton: true
					}).then((res)=>{
						if(res=="confirm"){this.vurRouterGo();}else{return}
						
					})
		        		
		        	}
			}

		},
		mounted(){
			 this.addToSession();
			 this.extraPostData.defDbId = this.defDbId;
			 this.extraPostData.userDbId = localStorage.getItem('userDbId');
			 this.sizeCode = $('.size:nth-child(1)').attr('data-code');
			 this.typeCode = $('.type:nth-child(1)').attr('data-code');
			/*默认画框样式*/
			this.size = this.trimStr($('.size:nth-child(1)').text());
			this.type = this.trimStr($('.type:nth-child(1)').text());
			this.initStyle();
			
			//5秒钟隐藏
			setTimeout(()=>{
				this.isImgAlert = false;
			},5000)
		
		
		}
	}
</script>
	
</script>

<style>
	/*#khSelect .v-modal{background: none;}*/
</style>