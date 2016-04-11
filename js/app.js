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

	var burgerURL;
	var cookieURL;
	var tacoURL;
	var carURL;
	var collegeURL;
	var friesURL;

	function flickrFn() {

		var apiKey = "f95f992fe9c35c4ae05f2829a83524b7"
		// var apiKey = "e598501c59970f467007edd0a7c4bf1f"

		$.get("https://api.flickr.com/services/rest/?method=flickr.favorites.getList&api_key=" + apiKey + "&user_id=141621315%40N04&format=json&nojsoncallback=1&auth_token=72157664700550303-975b5cf3c62e7db8&api_sig=22dadeda9db861a115ab72a7e8e1b9fe", function(resp){
			resp.photos.photo.forEach(function(child){
				if (child.id == 4856283146) {
				  burgerURL = buildPhotoUrl(child)
				  // burgerURL = ('https://farm' + child.farm + '.staticflickr.com/' + child.server + '/' + child.id + '_' + child.secret + '_b.jpg');
				} else if (child.id == 5507704211) {
					cookieURL = buildPhotoUrl(child)
				} else if (child.id == 26078408072) {
					carURL = buildPhotoUrl(child)
				} else if (child.id == 3800730337) {
					tacoURL = buildPhotoUrl(child)
				} else if (child.id == 2607318827) {
					collegeURL = buildPhotoUrl(child)
				} else {
					friesURL = buildPhotoUrl(child)
				}
			})
		})

    function buildPhotoUrl(photo) {
  		return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_b.jpg';
   	}

	}

	flickrFn();



	// On Load Conversion
	function convertToTaco() {
		rate = 4.01;
		item = "tacos";
		footer = "Amount is calculated based off the cost of a taco at Taco Bell in NYC."
		convertToFn(rate, item, footer, tacoURL);
	}

	// Buttons 
	$('#tacos').on('click', function() {
		convertToTaco();
	});

	$('#cookies').on('click', function() {
		rate = 5.00;
		item = "boxes of Girl Scout cookies";
		footer = "Amount is calculated based off the cost of a box of Samoas.";
		convertToFn(rate, item, footer, cookieURL);
	});

	$('#burger').on('click', function() {
		rate = 3.75;
		item = "double-doubles from In N Out";
		footer = "Amount is calculated based off the cost of a double-double from In N Out in Hacienda Heights, CA.";
		convertToFn(rate, item, footer, burgerURL);
	});

	$('#fries').on('click', function() {
		rate = 3.00;
		item = "fries";
		footer = "Amount is calculated based off larger fries from McDonalds in New York City.";
		convertToFn(rate, item, footer, friesURL);
	});

	$('#cars').on('click', function() {
		rate = 35000.00;
		item = "Tesla Model 3s";
		footer = "Amount is calculated based off the cost of a Model 3 as listed on tesla.com.";
		convertToFn(rate, item, footer, carURL);
	});

	$('#college').on('click', function() {
		rate = 40000.00;
		item = "years of college tuition";
		footer = "Amount is calculated based off the cost of one year at NYU.";
		convertToFn(rate, item, footer, collegeURL);
	});

	function convertToFn(rate, item, footer, url) {
		$('#amount').text((Math.floor(totalSpent/rate)).toLocaleString());
		$('#item').text(item);
		$('#footer').text(footer);
		$('body').css('background-image', 'url(' + url +')').css({'background-image': 'linear-gradient(rgba(85,85,85,0.5))'});
		// $('body').css('background-image', 'url(' + url +')');
	}

})


// $('.gradient').css({'background-image': 'linear-gradient(to top,  #2E2E28 0%, #4D4C48 100%)'});




// Flickr API

// Flickr Photo Search: https://www.flickr.com/services/api/flickr.photos.search.html
// https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=e598501c59970f467007edd0a7c4bf1f&user_id=56230114@N05


// Flickr Favorite List
// https://www.flickr.com/services/rest/?method=flickr.favorites.getList&format=json&api_key=e598501c59970f467007edd0a7c4bf1f&user_id=141621315@N04

// https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_b.jpg';