$(document).ready(function(){
	$("#links p a").click(function(){
		event.preventDefault();
		var selected = $(this).attr('href');	
		$.scrollTo(selected, 2000);		
		return false;
	});	
});