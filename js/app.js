$(function(){

	var apiKey = "81566c0b5b9d44dab813f065c2af1baf"

	$.get("http://realtime.influenceexplorer.com/api//new_filing/?format=json&page=1&page_size=100&apikey=" + apiKey, function(resp){
		resp.results.forEach(function(child){
			$('#container').append("<p>" + child.tot_spent + "</p>")
		})			
	})

})


// var apiKey = "81566c0b5b9d44dab813f065c2af1baf"

// function campaignFn() {
// 	var apiURL = "http://realtime.influenceexplorer.com/api/new_filing/?format=json&page=1&page_size=100&apikey=" + apiKey;
// 		$.get(apiURL, function(r) {
// 			var data = r.results;

// 			data.forEach(function() {
// 				var spent = tot_spent;
// 				$('#funds').text(spent);
// 			});
		

// 		});
// }

// campaignFn();


