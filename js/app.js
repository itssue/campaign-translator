$(function(){

	var apiKey = "81566c0b5b9d44dab813f065c2af1baf"

	var totalSpent;

	function totalSpentFn() {
		$.get("http://realtime.influenceexplorer.com/api//new_filing/?format=json&page=1&page_size=100&apikey=" + apiKey, function(resp){
			totalSpent = 0;
			// loop through the API data and adds on to totalSpent
			resp.results.forEach(function(child){
				totalSpent += Number(child.tot_spent);
			})
			// prints totalSpent on screen
			totalSpent = totalSpent.toFixed(2)
			$('#spending-total').text("$" + totalSpent)
		})
	}

	totalSpentFn();


	$('#convert').on('click', function() {
		var tacoRate = 4.01;
		var tacoValue = Math.floor(converToTacos(totalSpent));
		$('#tacos').text(tacoValue);

		function converToTacos(dollarAmt) {
			return dollarAmt/tacoRate;
		}
	});

})

	// function convertBTC(){
	// 	var spendingValue = document.getElementById("spending-total-static").textContent;
	// 	var tacoValue = converToBTC(spendingValue);
	// 	console.log(tacoValue);
	// 	document.getElementById("tacos").textContent = converToBTC(spendingValue)
	// }

	// function converToBTC(dollarAmt) {
	// 	return dollarAmt/tacoRate;
	// }







// function convertBTC(){
// 	var usdValue = document.getElementById("usd").value;
// 	var converted = usdValue/btcRate;

// 	document.getElementById("btc").value = converted
// }

