$(document).ready(function(){
/*    $(".img-slides").mouseover(function() {
        $(this).stop(true).animate({opacity: 0.21}, 333);
      });
    $(".img-slides").mouseout(function() {
        $(this).stop(true).animate({opacity: 1}, 333);
      });*/

	$('#slide0').click(function(){
    	$('#main-image-container').css('background-image', 'url(img/house1_0.jpg)');
    	$(this).animate({opacity: 0.21}, 333);
    	$('#slide1').animate({opacity: 1}, 333);
    	$('#slide2').animate({opacity: 1}, 333);
    	$('#slide3').animate({opacity: 1}, 333);
    	$('#slide4').animate({opacity: 1}, 333);
    	$('#slide5').animate({opacity: 1}, 333);
      });
	$('#slide1').click(function(){
    	$('#main-image-container').css('background-image', 'url(img/house1_1.jpg)');
    	$(this).animate({opacity: 0.21}, 333);
    	$('#slide0').animate({opacity: 1}, 333);
    	$('#slide2').animate({opacity: 1}, 333);
    	$('#slide3').animate({opacity: 1}, 333);
    	$('#slide4').animate({opacity: 1}, 333);
    	$('#slide5').animate({opacity: 1}, 333);
      });
	$('#slide2').click(function(){
    	$('#main-image-container').css('background-image', 'url(img/house1_2.jpg)');
    	$(this).animate({opacity: 0.21}, 333);
    	$('#slide1').animate({opacity: 1}, 333);
    	$('#slide0').animate({opacity: 1}, 333);
    	$('#slide3').animate({opacity: 1}, 333);
    	$('#slide4').animate({opacity: 1}, 333);
    	$('#slide5').animate({opacity: 1}, 333);
      });
	$('#slide3').click(function(){
    	$('#main-image-container').css('background-image', 'url(img/house1_3.jpg)');
    	$(this).animate({opacity: 0.21}, 333);
    	$('#slide1').animate({opacity: 1}, 333);
    	$('#slide2').animate({opacity: 1}, 333);
    	$('#slide0').animate({opacity: 1}, 333);
    	$('#slide4').animate({opacity: 1}, 333);
    	$('#slide5').animate({opacity: 1}, 333);
      });
	$('#slide4').click(function(){
    	$('#main-image-container').css('background-image', 'url(img/house1_4.jpg)');
    	$(this).animate({opacity: 0.21}, 333);
    	$('#slide1').animate({opacity: 1}, 333);
    	$('#slide2').animate({opacity: 1}, 333);
    	$('#slide3').animate({opacity: 1}, 333);
    	$('#slide0').animate({opacity: 1}, 333);
    	$('#slide5').animate({opacity: 1}, 333);
      });
	$('#slide5').click(function(){
    	$('#main-image-container').css('background-image', 'url(img/house1_5.jpg)');
    	$(this).animate({opacity: 0.21}, 333);
    	$('#slide1').animate({opacity: 1}, 333);
    	$('#slide2').animate({opacity: 1}, 333);
    	$('#slide3').animate({opacity: 1}, 333);
    	$('#slide4').animate({opacity: 1}, 333);
    	$('#slide0').animate({opacity: 1}, 333);
      });
});

