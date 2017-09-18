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
eg.AJAX=function(config,callback){
	var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
	}else if(window.ActiveXObject){
		try{
			xmlhttp=new ActiveXObject("Microsoft.XMLHttp");
		}
		catch(e){
			try{
				xmlhttp=new ActiveXObject("msxml2.XMLHTTP");
			}
			catch(x){
			}
		}
		
	}
	if(xmlhttp){
		if(config.ISASYN){
			xmlhttp.onreadystatechange=function(){
				if (xmlhttp.readyState==4 && xmlhttp.status==200){
					callback(xmlhttp.responseText,xmlhttp.responseXML);
				}
			};
			xmlhttp.open(config.TYPE,config.URL,true);
			xmlhttp.send(config.DATA);
		}else{
			xmlhttp.open(config.TYPE,config.URL,true);
			xmlhttp.send(config.DATA);
			callback(xmlhttp.responseText,xmlhttp.responseXML);
		}
	}
	};