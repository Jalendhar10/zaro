jQuery.noConflict();
jQuery(document).ready(function($){

if (jQuery().quicksand) {

 	// Clone applications to get a second collection
	var $data = $(".Interiew-area").clone();
	
	//NOTE: Only filter on the main Interiew page, not on the subcategory pages
	$('.Interiew-categ li').click(function(e) {
		$(".filter li").removeClass("active");	
		// Use the last category class as the category to filter by. This means that multiple categories are not supported (yet)
		var filterClass=$(this).attr('class').split(' ').slice(-1)[0];
		
		if (filterClass == 'all') {
			var $filteredData = $data.find('.item-thumbs');
		} else {
			var $filteredData = $data.find('.item-thumbs[data-type=' + filterClass + ']');
		}
		$(".Interiew-area").quicksand($filteredData, {
			duration: 600,
			adjustHeight: 'auto'
		}	
		$(this).addClass("active"); 			
		return false;
	});
	
}//if quicksand

});