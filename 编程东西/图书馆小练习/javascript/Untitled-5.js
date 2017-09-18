// JavaScript Document
var eg={};
eg.$=function(id){
	return document.getElementById(id);
}
eg.addListener=function(target,type,handler){
	if(target.addEventListener){
		target.addEventListener(type,handler,false);
	}else if(target.attachEvent){
		target.attachEvent("on"+type,handler);
	}else{
		target["on"+type]=handler;
	}
}
eg.data=[
	  ["1b.jpg","1a.jpg"],
	  ["2b.jpg","2a.jpg"],
	  ["3b.jpg","3a.jpg"],
	  ["4b.jpg","4a.jpg"],
	  ["5b.jpg","5a.jpg"],
	  ["6b.jpg","6a.jpg"],
	  ["7b.jpg","7a.jpg"],
	  ["8b.jpg","8a.jpg"],
	  ["9b.jpg","9a.jpg"],
	  ["10b.jpg","10a.jpg"],
	  ["11b.jpg","11a.jpg"]
]
eg.showNumber=0;
eg.groupNumber=1;
eg.groupSize=6;
eg.showThumb=function(group){
	var ul=eg.$("smallPhotoList");
	ul.innerHTML='';
	var start=(eg.groupNumber-1)*eg.groupSize;
	var end=eg.groupNumber*eg.groupSize;
	for(var i=start;i<end&&i<eg.data.length;i++){
		var li=document.createElement("li");
		li.innerHTML='<img src="'+eg.data[i][1]+'"id="thumb'+i+'"width="80" height="40"/>';
		//eg.data[i][0].id="pic"+i;
		(function(i){
			eg.addListener(li,"click",function(){
				eg.showNumber=i;
				eg.showBig();
			});
			
		})(i);
		ul.appendChild(li);
	}
};
eg.init=function(){
	eg.showThumb(1);
	eg.addListener(eg.$('next'),'click',function(){
		eg.nextThumb;
	});
	eg.addListener(eg.$('prve'),'click',function(){
		eg.prveThumb;
	});
}
eg.init();
eg.showBig=function(){
	eg.$('bigPictureSrc').src=eg.$('thumb'+eg.showNumber).src.replace('a','b');
}

eg.nextThumb=function(){
	if(eg.groupNumber*eg.groupSize+1<=eg.data.length){
		eg.showThumb(eg.groupNumber+1);
		eg.showNumber=eg.groupNumber*eg.groupSize;
		eg.showBig();
		eg.groupNumber++;
	}
}
eg.prveThumb=function(){
	if(eg.groupNumber-1>=1){
		eg.showThumb(eg.groupNumber-1);
		eg.groupNumber--;
		eg.showNumber=eg.groupNumber*eg.groupSize-eg.groupSize;
		eg.showBig();
		
	}
}