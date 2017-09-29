<template>
	<div>
		
	</div>
</template>

<script>
   import { Toast ,Actionsheet,Popup,Indicator} from 'mint-ui';	
   import Api from '../../API.js'
    export default {
        data() {
            return {
             
            }
        },
        methods: {
        	
         
        },

        mounted() {   
             
            

    		var jsons = {
        		paymentType:this.$route.query.paymentType,
        		addressId:this.$route.query.addressId,
        		dbId:this.$route.query.dbId,
        		userDbId:this.$route.query.userDbId,
        		openId:this.$route.query.openId,
                client:'mobile',
        		subject:'微信支付'
        	};
        	Api.car.orderPay(jsons).then(res=>{ 
            //alert(res.data.code); 
    		  if(res.data.code === 'success'){

					//手机微信支付 
					wxpay(res.data,function callback(res){ 
                        //alert(res.errMsg);
						if(res.errMsg=="chooseWXPay:fail"){
							Toast('调起支付失败');
							Api.car.updataOrderStatus2Pay({dbId:jsons.dbId, status:1}).then(res=>{
								if(res.data.code == 'success'){
                                    var stateObj = { foo: "bar" }; 
                                    history.pushState(stateObj, "", "#user");
									location.href="#orderList"
								}
								
							},err=>{
								Toast('请求数据失败');
							})
							
						}else if(res.errMsg == "chooseWXPay:cancel" ) {//用户取消订单
                            
							Api.car.updataOrderStatus2Pay({dbId:jsons.dbId, status:1}).then(res=>{
								if(res.data.code == 'success'){
									//this.$router.replace({path:"/orderList"})
//												this.$router.replace({path:"/orderList"})
                                    var stateObj = { foo: "bar" }; 
                                    history.pushState(stateObj, "", "#user");

									location.href="#orderList"
								}
								
							},err=>{

                                 var stateObj = { foo: "bar" }; 
                                history.pushState(stateObj, "", "#user");
               
								Toast('请求数据失败');
                                location.href="#orderList";
							})

                            var stateObj = { foo: "bar" }; 
                            history.pushState(stateObj, "", "#user");

							Toast('用户取消支付');
							location.href="#orderList";
							
						}else{
							Toast('支付成功');
//	                                    this.$router.replace({path:"/orderList"})
                            var stateObj = { foo: "bar" }; 
                            history.pushState(stateObj, "", "#user");

                            location.href="#orderList";
						}
					}); 
					
				} else {
					
                    if(res.data.acquireOpenId && res.data.acquireOpenId === 'Y'){ 
                        window.location.href= res.data.codeUrl;
                    } else if(res.data.pay && res.data.pay === 'Y'){ 
                        window.location.href="#user";
                    }
                    else {
                        Toast('支付失败');
                        Api.car.updataOrderStatus2Pay({dbId:jsons.dbId, status:1}).then(res=>{
                        if(res.data.code == 'success'){ 
                            var stateObj = { foo: "bar" }; 
                            history.pushState(stateObj, "", "#user");

                           window.location.href="#orderList"
                        }
                        
                        },err=>{
                            Toast('请求数据失败');
                        })
                    }
    				
				}
    	   },err=>{ 
    		Toast('请求数据失败');
    	   })
        }
    }
</script>

<style>
</style>