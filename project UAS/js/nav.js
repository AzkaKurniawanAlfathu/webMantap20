var $document = $(document),
	$navbar = $('.navbar'),
	$navit = $('.navit'),
	navlight = 'bg-light';
	bhover = 'bhover';
	whover = 'whover';



$document.scroll(function(){
	if($document.scrollTop() >= 100){
		$navbar.addClass(navlight);
		$navit.removeClass(whover);
		$navit.addClass(bhover);
	}
	else{
		$navbar.removeClass(navlight);
		$navit.addClass(whover);
		$navit.removeClass(bhover);
	}
});