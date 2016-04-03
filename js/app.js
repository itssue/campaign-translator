$(function(){

	var apiKey = "81566c0b5b9d44dab813f065c2af1baf"

	$.get("http://realtime.influenceexplorer.com/api//new_filing/?format=json&page=1&page_size=100&apikey=" + apiKey, function(resp){
		var totalSpent = 0;
		resp.results.forEach(function(child){
			totalSpent += Number(child.tot_spent);
		})
		$('#container').append("<p>" + totalSpent + "</p>");		
	})

})
