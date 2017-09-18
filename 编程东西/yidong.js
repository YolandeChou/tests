// JavaScript Document
var timer=null;
 function startMove(target){
 clearInterval(timer);
 var oDiv=document.getElementById('more');
 /*if (target>oDiv.offsetLeft){
	 speed=10;}else{speed=-10;}
	 */
timer=setInterval(function(){
 var speed=(target-oDiv.offsetLeft)/10;
 speed=speed>0?Math.ceil(speed):Math.floor(speed);

 if(oDiv.offsetLeft==target){
 clearInterval(timer);
 }else{
 oDiv.style.left=oDiv.offsetLeft+speed+'px';
 }
 },30);
 }