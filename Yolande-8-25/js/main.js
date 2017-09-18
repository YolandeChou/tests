$(function(){
   const images=$('.images li');
   const icons=$('.icon ul li span');
   var imagesLeft=[];
   var n = 0;
 images.each(function(index,image){
       var n=$(this).offset().left-$('.images ul').offset().left;
       imagesLeft[index] = n;
   })
    icons.bind('click',function(){
            n = icons.index($(this));
           images.each(function(){
               var m = images.index($(this));
               $(this).animate({left:imagesLeft[m]-683*n + 'px'},1000);
           })
       $(this).addClass('active');
    })
    setInterval(function(){
        icons.each(function(){
            $(this).removeClass('active');
        })
        icons[n].classList.add('active');
        images.each(function(){
            var m = images.index($(this));
            $(this).animate({left:imagesLeft[m]-683*n+'px'},1000);
            })
        n++;
        if(n>=images.length){
            n=0;
        }

    },2000);
})

