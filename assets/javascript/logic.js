// These are the starting variables
var eventful = "NpDT6Lg3gwd859Cr";

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAKvc4KYlF38kGUwoiaBdMT4Ofy0Qd3Hb4",
    authDomain: "make-my-day-a494b.firebaseapp.com",
    databaseURL: "https://make-my-day-a494b.firebaseio.com",
    projectId: "make-my-day-a494b",
    storageBucket: "make-my-day-a494b.appspot.com",
    messagingSenderId: "1064955567723"
  };
  firebase.initializeApp(config);

//	Get a reference to the databse service 
  var database = firebase.database();

// This button displays page 2
$("#button1").on('click', function(){
	event.preventDefault();
	$("#page1").css('display', 'none');
	$("#page2").css('display', 'block');
	$('#goBack').css('display', 'block');
	$('#brand').css('margin-left', '0%');
	$("#button1").css('display', 'none');
	$("#button2").css('display', 'block');
    });

// This button displays page 3 and calls the Yelp API
$("#button2").on("click", function(){
	event.preventDefault();
	$("#page2").css('display', 'none');
	$("#page3").css('display', 'block');
	$('#goBack').css('display', 'block');
	$('#brand').css('margin-left', '0%');
	$("#button2").css('display', 'none');

		var zip = $("#zip").val();
		var cuisine = $("#cuisine").val();
		var radius = 7500;
		var queryURL = "https://still-oasis-47024.herokuapp.com/api/" 
						+ zip + "/"  + cuisine + "/" + radius;
    		$.ajax({
      			url: queryURL,
      			method: "GET"
    		}).done(function(response) {

    			var results = response.businesses;
        			for (var i = 0; i < 5; i++) {

       				// These variables hold the query results
       				var bizPic = results[i].image_url;
            		var name = results[i].name;
       				var distance = Math.round((results[i].distance*0.0006214)*100)/100;
       				var rating = results[i].rating;
       				var reviewCount = results[i].review_count;
       				var foodCost = results[i].price;
       				var neighborhood = results[i].location.address1 + ' ' + results[i].location.address2 + ', ' + results[i].location.city;
       				var foodType = results[i].categories[0].title;
       				var foodLat = results[i].coordinates.latitude;
       				var foodLng = results[i].coordinates.longitude;
       				var phone = results[i].display_phone;

       				// These variables hold the different dividers
            		var eatMe = $("<div class='row'>");
       				var foodButton = $("<button class='restaurant' class='col-md-12'>")
       				var restImage = $('<img id="rest-image" onerror="this.src=assets/images/default.png">')
       					restImage.attr('src', bizPic);
       				var restClose = $('</img>');
       				var bizName = $('<p id="name">' + name + '<p/>');
       				var distDiv = $('<p id="distance">' + distance + ' miles' + '</p>');
       				var starPower = $('<img id="star-rating">')
       				var reviews = $('<p id="review-count">' + reviewCount + '</p>');
       				var cost = $('<p id="cost">' + foodCost + '</p>');
       				var foodLocation = $('<p id="address">' + neighborhood + '</p>');
       				var foodCat = $('<p id="category">' + foodType + '</p>');
       				var buttonClose = $('</button>');
       				var latFood = $("<p id='latt' style='display:none;'>" + foodLat + "</p>");
       				var lngFood = $("<p id='long' style='display:none;'>" + foodLng + "</p>");
       				var disPhone = $("<p id='phone' style='display:none;'>" + phone + "</p>");
       				var eatClose = $('</div>');

       				// This puts everything together and displays it on page 3
       					foodButton.append(restImage);
       					foodButton.append(restClose);
       					foodButton.append(bizName);
       					foodButton.append(distDiv);
       					foodButton.append(starPower);
       					foodButton.append(reviews);
       					foodButton.append(cost);
       					foodButton.append(foodLocation);
       					foodButton.append(foodCat);
       					foodButton.append(latFood);
       					foodButton.append(lngFood);
       					foodButton.append(disPhone);
       					foodButton.append(buttonClose);
       					eatMe.append(foodButton);
       					eatMe.append(eatClose);
            					$("#page3").append(eatMe);
    }});
});
    			
// This function is for any of the restaurants on page 3, and displays page 4
$(document).on('click', '.restaurant', function(){
	event.preventDefault();
    latChoice = $(this).find('#latt').text();
    lngChoice = $(this).find('#long').text();
    var thisName = $(this).find('#name').text();
    var thisPhone = $(this).find('#phone').text();
    var thisAddress = $(this).find('#address').text();

    $('#activities').append('<div>1. ' + thisName + '  -  ' + thisPhone + '</div>');
    $('#location1').html('<div>' + thisName + ' - ' + thisAddress + '</div>');

	$("#page3").css('display', 'none');
	$("#page4").css('display', 'block');
	$("#button3").css('display', 'block');
});

// This button displays page 5 and runs the Eventful API call
$("#button3").on('click', function(){
	event.preventDefault();

	// This creates the API search
      var area = $(".zip").val().trim();
      var date = $("#datepicker").val().trim();
      var funEvent = $('#event-type').val().trim();
      function dateParser () {
      		var timeArray = date.split('/');
      		timeArray.push('00');
      		var dateReturn;
      		var dateReturn = timeArray[2] + timeArray[0] + timeArray[1] + timeArray[3];
      		return dateReturn;
      };
      var date13 = dateParser();
      console.log(date13);
      var queryURL2 = "https://still-oasis-47024.herokuapp.com/api/eventful/" + area + "/" + funEvent + "/" + date13;
    		$.ajax({
      			url: queryURL2,
      			method: "GET"
    		}).done(function(response) {
      			console.log(response);
    			console.log(area);
    			console.log(date);
    			console.log(funEvent);

    			var results2 = response.events.events;

    				for (var i = 0; i < 5; i++) {

    				// This sets up the results into variables
    				var eventPic = results2[i].image.url;
    				var name2 = results2[i].title;
    				var date1 = results2[i].start_time;
    				var address2 = results2[i].venue_address;
    				var url1 = results2[i].url;
    				var catEvent = funEvent;
    				var eventLat1 = results2[i].latitude;
    				var eventLng1 = results2[i].longitude;

    				// These are the display variables 
            		var thrillMe = $("<div class='row'>");
       				var eventButton = $("<button class='events' class='col-md-12'>")
       				var eventImage = $('<img id="rest-image">')
       					eventImage.attr('src', eventPic);
       				var eventImgClose = $('</img>');
       				var eventName = $('<p id="name2">' + name2 + '<p/>');
       				var dateDiv = $('<p id="date1">' + date1 + '</p>');
       				var eventLocation = $('<p id="address">' + address2 + '</p>');
       				var eventCat = $('<p id="category">' + catEvent + '</p>');
       				var latEvent = $("<p id='latt2' style='display:none;'>" + eventLat1 + "</p>");
       				var lngEvent = $("<p id='long2' style='display:none;'>" + eventLng1 + "</p>");
       				var disURL = $("<p id='url2' style='display:none;'>" + url1 + "</p>");
       				var eventButtonClose = $('</button>');
       				var thrillClose = $('</div>');

       				// This puts the event buttons together
       				eventButton.append(eventImage);
       				eventButton.append(eventImgClose);
       				eventButton.append(eventName);
       				eventButton.append(dateDiv);
       				eventButton.append(eventLocation);
       				eventButton.append(eventCat);
       				eventButton.append(latEvent);
       				eventButton.append(lngEvent);
       				eventButton.append(disURL);
       				eventButton.append(eventButtonClose);
       				thrillMe.append(eventButton);
       				thrillMe.append(thrillClose);
       					$("#page5").append(thrillMe);

    				}});

	$("#page4").css('display', 'none');
	$("#page5").css('display', 'block');
	$("#button3").css('display', 'none');
});

// This sets up the event buttons and displays the final page
$(document).on('click', '.events', function(){
	event.preventDefault();

    eventLat = $(this).find('#latt2').text();
    eventLng = $(this).find('#long2').text();
    var conName = $(this).find('#name2').text();
    var conTix = $(this).find('#url2').text();
    var conAddress = $(this).find('#address2').text();

    console.log(latChoice);
    console.log(lngChoice);
    console.log(thisName);
    console.log(thisPhone);
    console.log(thisAddress);
    console.log(this);

    $('#activities').append('<div>1. ' + conName + ' - buy tickets here: ' + conTix + '</div>');
    $('#location2').html('<div>' + conName + ' - ' + conAddress + '</div>');

	$("#page5").css('display', 'none');
	$("#page6").css('display', 'block');
	$("#button5").css('display', 'block');

  //change what is save in firebase
    database.ref().set({
    	area: area,
    	date: date,
      });
});

// This button resets the application
$("#button5").on('click', function(){
	window.location.reload();
});


// This is the datepicker function
$( function() {
    $("#datepicker").datepicker();
    $('#datepicker').on('click', function() {
    $('#ui-datepicker-div').css('background-color', 'white');
});
  } );


// This allows the dropdown selection to be added to the input field
$(document).on('click', '.dropdown-menu li a', function() {
    $('#event-type').val($(this).html());
});