infinity_scroll("loaded_content", "/top_rated/female/weekly", 1 );

$.ajax({
	type: "GET",
	url: "/top_rated/female/weekly",
	data: {
		pg: 1
	},
	success: function(result) {
		if (result) {
			console.log(result);
		} else {
			var done_scrolling = 1;
		}
	}
});
