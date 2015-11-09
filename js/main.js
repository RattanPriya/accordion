$(function(){
	$('.accordion-header').on('click', function(e){
		$(e.target).next().toggle();
	});
});