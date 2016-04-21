window.onload = $(function() {
	
	var totalSpent;
	var rate;

	var burgerURL;
	var cookieURL;
	var tacoURL;
	var carURL;
	var collegeURL;
	var friesURL;

	// flickr API Key -- this changes often
	var flickrKey = "bb0743ec1df4ea2f3a99248d551e115e"

	function flickrFn() {

    $.get("https://api.flickr.com/services/rest/?method=flickr.favorites.getList&api_key=" + flickrKey + "&user_id=141621315%40N04&format=json&nojsoncallback=1&auth_token=72157665113239143-0dda4dd3bc8ffc34&api_sig=9cf6032319f4e211aa998588e6a493f4", function(resp){
      resp.photos.photo.forEach(function(child){
          if (child.id == 4856283146) {
            burgerURL = buildPhotoUrl(child)
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
      });

      totalSpentFn();

    })
  }

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

  flickrFn();

  function buildPhotoUrl(photo) {
		return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_b.jpg';
	}

	// Find images based off the term entered
	function flickrSearchFn(item, callback) {
    $.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + flickrKey + "&tags=" + item + "&format=json&nojsoncallback=1", function(resp){

    	// eventually make this be a random image
      if (callback) {
          callback(buildPhotoUrl(resp.photos.photo[0]));
      }
      
    })
  }

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
		footer = "Amount is calculated based off the cost of a base model Tesla Model 3.";
		convertToFn(rate, item, footer, carURL);
	});

	$('#college').on('click', function() {
		rate = 40000.00;
		item = "years of college tuition";
		footer = "Amount is calculated based off the cost of one year at NYU.";
		convertToFn(rate, item, footer, collegeURL);
	});

	// user generated
	$('.submit').on('click', function() {
    item = $('.search-term').val();
    rate = $('.rate-input').val();
    footer = "";

    flickrSearchFn(item, function(url) {
        convertToFn(rate, item, footer, url);
      $('.search-term').val('')
      $('.rate-input').val('')
    });

  })

	function convertToFn(rate, item, footer, url) {
		$('#amount').text((Math.floor(totalSpent/rate)).toLocaleString());
		$('#item').text(item);
		$('#footer').text(footer);
		$('body').css('background-image', 'url(' + url +')');
	}

})
