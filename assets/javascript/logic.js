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

console.log(database);
  

// These are the button events that move the page
$("#button1").on('click', function(){

	//define variables
	var area; 
    var date; 

         // Capture User Inputs and store them into variables
      var area = $(".newgif").val().trim();
      var date = $("#datepicker").val().trim();

	event.preventDefault();
	$("#page1").css('display', 'none');
	$("#page2").css('display', 'block');
	$('#goBack').css('display', 'block');
	$('#brand').css('margin-left', '0%');
	$("#button1").css('display', 'none');
	$("#button2").css('display', 'block');

	 


  //change what is save in firebase

    database.ref().set({
    	area: area,
    	date: date,
      });

      // Console log each of the user inputs to confirm we are receiving them
      console.log(area);
      console.log(date);
      
    
    });

$("#button2").on('click', function(){
	event.preventDefault();
	$("#page2").css('display', 'none');
	$("#page3").css('display', 'block');
	$("#button2").css('display', 'none');
});

// Note that this function is for any of the #restaurant ids on page 3, there is no button on this page
$("#restaurant").on('click', function(){
	event.preventDefault();
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
	event.preventDefault();
	$("#page5").css('display', 'none');
	$("#page6").css('display', 'block');
	$("#button5").css('display', 'block');
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


// This clears the textbox on page 3
$('.newgif').on('click', function(){
	$('.newgif').val('');
})

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

$(document).on('click', '.dropdown-menu li a', function() {
    $('#food-type').val($(this).html('Choose your cuisine'));
});

var searchTerm = $('.newgif').val().trim();

// Ajax calls to Heroku


// var zip =$("#zip").val().trim();
// var cuisine =$("#cuisine").val().trim();
// var radius = parseInt($("#radius").val()) ;
// var queryURL ="https://still-oasis-47024.herokuapp.com/api" + zip + "/"  + cuisine + "/" + radius;
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).done(function(response) {
//       console.log(response);
//       console.log(zip);
//     console.log(cuisine);
//     console.log(radius);
    
//     });
// m/1,609.344=mi
    $("#button2").on("click", function(){
		var zip =$("#zip").val().trim();
		var cuisine =$("#cuisine").val().trim();
		var radius = parseInt(($("#radius").val())*1609.344);
		var queryURL ="https://still-oasis-47024.herokuapp.com/api" + zip + "/"  + cuisine + "/" + radius;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(response);
      console.log(zip);
    console.log(cuisine);
    console.log(radius);
      // console.log(response.Runtime);
    });
});

    // ($("#radius").val())