$(function () {
	$('.show_link').live('click', function(event) {
		$.get($(this).attr("href"));
		return false;
	});	
	
	$('.close_link').live('click', function(event) {
		$("#showpage").hide();
		return false;
	});
	
	$('.delete_link').live('click', function(event) {
		$.ajax({
			url: $(this).attr("href"),
			type: 'DELETE'
		});
		return false;
	});	
	
	$('.delete_visible_link').live('click', function(event) {
		var arr=$('tr.exception').map(function() { var id = $(this).attr("id"); return parseInt(id.replace(/^\w+_/, '')); }).get();
		$.ajax({
			url: $(this).attr("href"),
			type: 'POST',
			data: $.param({ids: arr}),
			dataType: 'script'
		});	
		return false;
	});	
	
	$('.filter_link').live('click', function(event) {
		$('.filter_link').removeClass('selected');
		$(this).addClass('selected');
		$.ajax({
			url: $(this).attr("href"),
			type: 'POST',
			dataType: 'script'
		});		
		return false;
	});
	
	$('#query-form :submit').live('click', function(event) {
		$.ajax({
			url: $("#query-form").attr("action"),
			type: 'POST',
			data: $("#query-form").serialize(),
			dataType: 'script'
		});		
		return false;
	});
});

