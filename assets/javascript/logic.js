// These are the starting variables
var eventful = "NpDT6Lg3gwd859Cr.";


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