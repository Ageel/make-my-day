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
  console.log(firebase);

//	Get a reference to the databse service 
  var database = firebase.database();


  

// These are the button events that move the page
$("#button1").on('click', function(){
	event.preventDefault();
	$("#page1").css('display', 'none');
	$("#page2").css('display', 'block');
	$('#goBack').css('display', 'block');
	$('#brand').css('margin-left', '0%');
	$("#button1").css('display', 'none');
	$("#button2").css('display', 'block');
    });


// Ageel - this is the button for the Yelp ajax call
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
      			console.log(response);
    			console.log(zip);
    			console.log(cuisine);
    			console.log(radius);
    			console.log(response.businesses);

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
       				var restImage = $('<img id="rest-image">')
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
                    // console.log(response.Runtime);
    }});
});


    			



// Note that this function is for any of the #restaurant ids on page 3, there is no button on this page
$(document).on('click', '.restaurant', function(){
	event.preventDefault();
    latChoice = $(this).find('#latt').text();
    lngChoice = $(this).find('#long').text();
    var thisName = $(this).find('#name').text();
    var thisPhone = $(this).find('#phone').text();
    var thisAddress = $(this).find('#address').text();

    console.log(latChoice);
    console.log(lngChoice);
    console.log(thisName);
    console.log(thisPhone);
    console.log(thisAddress);
    console.log(this);

    $('#activities').html('<div>1. ' + thisName + '  -  ' + thisPhone + '</div>');
    $('#location1').html('<div>' + thisName + ' - ' + thisAddress + '</div>');

	$("#page3").css('display', 'none');
	$("#page4").css('display', 'block');
	$("#button3").css('display', 'block');
});

$("#button3").on('click', function(){
	event.preventDefault();
	$("#page4").css('display', 'none');
	$("#page5").css('display', 'block');
	$("#button3").css('display', 'none');
});

$("#events").on('click', function(){

	//define variables
	var area; 
    var date; 

         // Capture User Inputs and store them into variables
      var area = $(".zip").val().trim();
      var date = $("#datepicker").val().trim();

	event.preventDefault();
	$("#page5").css('display', 'none');
	$("#page6").css('display', 'block');
	$("#button5").css('display', 'block');




  //change what is save in firebase

    database.ref().set({
    	area: area,
    	date: date,
      });

      // Console log each of the user inputs to confirm we are receiving them
      console.log(area);
      console.log(date);
});

$("#button5").on('click', function(){
	event.preventDefault();
	$("#page6").css('display', 'none');
	$("#page1").css('display', 'block');
	$('#goBack').css('display', 'none');
	$('#brand').css('margin-left', '22%');
	$("#button5").css('display', 'none');
	$("#button1").css('display', 'block');
});


// This handles the goBack function

// $('#goBack').on('click', function(){
// 	$("#page1").css('display', 'block');
// 	$("#page2").css('display', 'none');
// 	$('#goBack').css('display', 'none');
// 	$('#brand').css('margin-left', '22%');
// 	$("#button1").css('display', 'block');
// 	$("#button2").css('display', 'none');
// });


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



// $(document).on("click", "#button3", function() {
// document.getElementById('event-type').innerHTML = "";
//       var animal = $(this).text();
//       console.log(animal);
//       var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         animal + "&api_key=dc6zaTOxFJmzC&limit=12";
//       $.ajax({
//           url: queryURL,
//           method: "GET"
//         })
//         .done(function(response) {
//         	var results = response.data;
//         	for (var i = 0; i < 12; i++) {
//             	var gifDiv = $("<div class='item'>");
//             	var rating = results[i].rating;
//             	var p = $("<p>").text("Rating: " + rating);
//             	var animalImage = $("<img>");
//             		animalImage.attr("src", results[i].images.fixed_height_still.url);
//             		animalImage.attr("data-still", results[i].images.fixed_height_still.url);
//             		animalImage.attr("data-animate", results[i].images.fixed_height.url);
//             		animalImage.attr("data-state", 'still');
//             		animalImage.attr("id", 'gif');
//             		gifDiv.attr("style", "float: left");
//             		p.attr("id", "rating");
//             		gifDiv.prepend(p);
//             		gifDiv.prepend(animalImage);
//             		$("#putithere").prepend(gifDiv);

// };


