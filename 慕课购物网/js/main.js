// JavaScript Document
$(function(){
	$(".topList li").mouseover(function(){
		$(this).addClass("hover_li");
	})
	$(".topList li").mouseout(function(){
		$(this).removeClass("hover_li");
	})
	$(".topList li").click(function(){
		$(".topList li").removeClass("hover_li2");
		$(this).addClass("hover_li2");
	})
	$(".navShow dl").mouseover(function(){
		$(this).css("background-color","#FFF");
		$(this).find("a").css("color","#000");
		$(".alink").css("color","#FFF");
		$(".boxShow").css("visibility","visible");
	})
	$(".navShow dl").mouseout(function(){
		$(".boxShow").css("visibility","hidden");
		$(this).css("background","#4593fd");
		$(this).find("a").css("color","#FFF");
	})
	$(".boxShow").mouseover(function(){
		$(".boxShow").css("visibility","visible");
	})
	$(".boxShow").mouseout(function(){
		$(".boxShow").css("visibility","hidden");
	})
})