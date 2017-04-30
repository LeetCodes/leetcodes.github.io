$(document).ready(function() {
	var users = [],
        cp = 1,
      done_scrolling = false;
		
	var getUsers = function() {
		if(!done_scrolling){
            alert('kk' + cp);
			
		$.ajax({
			type: "GET",
			url: "",
			data: {
				pg: cp
			},
			success: function(result) {
				if (result) {
					alert('page ' + cp);
                    cp = cp + 1;
				} else {
					var done_scrolling = 1;
				}
			}
		});
	}}
	
    function listUsers(){
        console.log(users);
    }
	$('#btn').click(getUsers);
});