window.onload = $(function() {

	var totalSpent;
	var rate;

	// Sunlight Foundation API
	function totalSpentFn() {

		var apiKey = "81566c0b5b9d44dab813f065c2af1baf"

		$.get("http://realtime.influenceexplorer.com/api//new_filing/?format=json&page=1&page_size=100&committee_class=p&apikey=" + apiKey, function(resp){
			totalSpent = 0;
			// loop through the API data and adds on to totalSpent
			resp.results.forEach(function(child){
				totalSpent += Number(child.tot_spent);
			})
			// changes number to only display 2 decimal places
			// toFixed changes Number to String
			totalSpent = Number(totalSpent.toFixed(2));
			// prints totalSpent on screen
			// toLocaleString changed Number to String
			$('#spending-total').text("$" + totalSpent.toLocaleString())

			convertToTaco();

		})
	}

	totalSpentFn();

	// On Load Conversion
	function convertToTaco() {
		rate = 4.01;
		item = "tacos.";
		footer = "a taco at Taco Bell in New York City."
		convertToFn(rate, item, footer);
	}

	// Buttons 
	$('#tacos').on('click', function() {
		convertToTaco();
	});

	$('#cookies').on('click', function() {
		rate = 5.00;
		item = "boxes of Girl Scout cookies.";
		footer = "a box of Samoas.";
		convertToFn(rate, item, footer);
	});

	$('#burger').on('click', function() {
		rate = 3.75;
		item = "Double-doubles from In N Out.";
		footer = "a double-double from In N Out in Hacienda Heights, CA.";
		convertToFn(rate, item, footer);
	});

	$('#bikes').on('click', function() {
		rate = 510.00;
		item = "bikes.";
		footer = "a bike from Amazon.com.";
		convertToFn(rate, item, footer);
	});

	$('#cars').on('click', function() {
		rate = 35000.00;
		item = "Tesla Model 3s (just the base model).";
		footer = "a Model 3 as listed on tesla.com.";
		convertToFn(rate, item, footer);
	});

	$('#college').on('click', function() {
		rate = 40000.00;
		item = "years of college tuition.";
		footer = "one year at NYU.";
		convertToFn(rate, item, footer);
	});

	function convertToFn(rate, item, footer) {
		$('#amount').text((Math.floor(totalSpent/rate)).toLocaleString());
		$('#item').text(item);
		$('#footer').text(footer);
	}

})

// Flickr API

// Flickr Photo Search: https://www.flickr.com/services/api/flickr.photos.search.html
// https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=e598501c59970f467007edd0a7c4bf1f&user_id=56230114@N05


// Flickr Favorite List
// https://www.flickr.com/services/rest/?method=flickr.favorites.getList&format=json&api_key=e598501c59970f467007edd0a7c4bf1f&user_id=141621315@N04


// https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_b.jpg';