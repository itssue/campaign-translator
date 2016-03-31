var apiKey = "81566c0b5b9d44dab813f065c2af1baf"

function campaignFn(e) {
	var apiURL = "http://realtime.influenceexplorer.com/api/new_filing/?format=json&page=1&page_size=100&apikey=" + apiKey;
		$.get(apiURL, function(r) {		  
		  context = r.results;
			console.log(context);
		});
}

campaignFn();


// var Rate = 4;

// function convertBTC(){
// 	var fundsValue = document.getElementById("funds").value;
// 	document.getElementById("item").value = convertToItem(fundsValue)
// }

// function convertToItem(dollarAmt) {
// 	return dollarAmt/Rate;
// }
