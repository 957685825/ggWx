 import Api from '../../src/API.js'

   var jsons = {
  		results:[
  			{
  				type:'原色-原木框',
  				index:1,
  				data:[
  						{
  							Size:'300mmX400mm',
  							width:'8.43716rem',
  							height:'10.5464rem',
  							smallBoxWidth:'6rem',
  							smallBoxHeight:'8.1rem',
  							imgUrl:"url("+Api.HOST+"static/img/citiehua/300x400-yms.jpg)"
  							
  						},
						{
  							Size:"400mmX300mm",
  							width:'11.1792rem',
  							height:'15.6087rem',
  							smallBoxWidth:'9rem',
  							smallBoxHeight:'13.64rem',
  							imgUrl:"url("+Api.HOST+"static/img/citiehua/400x300-yms.jpg)"
  						},	
  						{
  							Size:"400mmX600mm",
  							width:'10.5464rem',
  							height:'10.5464rem',
  							smallBoxWidth:'7.5464rem',
  							smallBoxHeight:'7.5464rem',
  							imgUrl:"url("+Api.HOST+"static/img/citiehua/400x600-yms.jpg)"
  						},
  						{
  							Size:"600mmX400mm",
  							width:'10.5464rem',
  							height:'8.43716rem',
  							smallBoxWidth:'8em',
  							smallBoxHeight:'5.88rem',
  							imgUrl:"url("+Api.HOST+"static/img/citiehua/600x400-yms.jpg)"

  						}
  					]
  			},
  			{
  				type:'黑色-实木框',
  				index:2,
  				data:[
  						{
  							Size:'300mmX400mm',
  							width:'8.43716rem',
  							height:'10.5464rem',
  							smallBoxWidth:'6rem',
  							smallBoxHeight:'8.1rem',
  							imgUrl:"url("+Api.HOST+"static/img/citiehua/300x400-hs.jpg)"
  							
  						},
						{
  							Size:"400mmX300mm",
  							width:'11.1792rem',
  							height:'15.6087rem',
  							smallBoxWidth:'9rem',
  							smallBoxHeight:'13.64rem',
  							imgUrl:"url("+Api.HOST+"static/img/citiehua/400x300-hs.jpg)"
  						},	
  						{
  							Size:"400mmX600mm",
  							width:'10.5464rem',
  							height:'10.5464rem',
  							smallBoxWidth:'7.5464rem',
  							smallBoxHeight:'7.5464rem',
  							imgUrl:"url("+Api.HOST+"static/img/citiehua/400x600-hs.jpg)"
  						},
  						{
  							Size:"600mmX400mm",
  							width:'10.5464rem',
  							height:'8.43716rem',
  							smallBoxWidth:'8em',
  							smallBoxHeight:'5.88rem',
  							imgUrl:"url("+Api.HOST+"static/img/citiehua/600x400-hs.jpg)"

  						}
  					]
  			}
  		]
  	}

export default {	
  	init:{
  		selectK:function(size,type){  		
	  		 var data = jsons.results;
	  		 var datas ={
	  		 	currentWidth:'',
	  		 	currentHeight:'',
	  		 	urls:'',
	  		 	smallWidth:'',
	  		 	smallHeight:''
	  		 }
	  		 for(var i=0; i<data.length; i++){
	  		 	if(data[i].type == type){
	  		 		for(var j=0;j<data[i].data.length; j++){
	  		 			if(size ==data[i].data[j].Size){
	  		 				datas.currentHeight = data[i].data[j].height;
	  		 				datas.currentWidth = data[i].data[j].width;
	  		 				datas.urls = data[i].data[j].imgUrl;
	  		 				datas.smallWidth = data[i].data[j].smallBoxWidth;
	  		 				datas.smallHeight = data[i].data[j].smallBoxHeight;
	  		 			}
	  		 		}
	  		 	}
	  		 }
	  		 return datas;
  		}
  	}
  }