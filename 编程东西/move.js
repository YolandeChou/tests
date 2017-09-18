// JavaScript Document

  function startMove(obj,json,fc){
	  clearInterval(obj.timer);
	  
	obj.timer=setInterval(function(){
		var flag=true;
		for(var attr in json){
		
		var wid=null;
		 if(attr=='opacity'){ 
         wid=Math.round(parseFloat(getStyle(obj,attr))*100);
  }else{ wid=parseInt(getStyle(obj,attr))}
		var speed=(json[attr]-wid)/8;
	  speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(wid!=json[attr]){
		flag=false;
		if(attr=='opacity'){

        obj.style.filter='alpha(opacity:'+(wid+speed)+')';

         obj.style.opacity=(wid+speed)/100;}else{
         obj.style[attr]=wid+speed+'px';
         }


}
		if(flag==true){
		clearInterval(obj.timer);
		if(fc){
			fc();}
		 
		}
		}
		},30)
  }
  
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStylr[attr];
	}else{
		return getComputedStyle(obj,"false")[attr];
	}
}