
$("#button1").on('click', function(){
	event.preventDefault();
	$("#page1").css('display', 'none');
	$("#page2").css('display', 'block');
	$("#button1").css('display', 'none');
	$("#button2").css('display', 'block');
});

$("#button2").on('click', function(){
	event.preventDefault();
	$("#page2").css('display', 'none');
	$("#page3").css('display', 'block');
	$("#button2").css('display', 'none');
	$("#button3").css('display', 'block');
});

$("#button3").on('click', function(){
	event.preventDefault();
	$("#page3").css('display', 'none');
	$("#page4").css('display', 'block');
	$("#button3").css('display', 'none');
	$("#button4").css('display', 'block');
});

$("#button4").on('click', function(){
	event.preventDefault();
	$("#page4").css('display', 'none');
	$("#page5").css('display', 'block');
	$("#button4").css('display', 'none');
	$("#button5").css('display', 'block');
});

$("#button5").on('click', function(){
	event.preventDefault();
	$("#page5").css('display', 'none');
	$("#page6").css('display', 'block');
	$("#button5").css('display', 'none');
	$("#button6").css('display', 'block');
});

$("#button6").on('click', function(){
	event.preventDefault();
	$("#page6").css('display', 'none');
	$("#page1").css('display', 'block');
	$("#button6").css('display', 'none');
	$("#button1").css('display', 'block');
});


$( function() {
    $( "#datepicker" ).datepicker();
    $('#ui-datepicker-div').css('background-color', 'white');
  } );

$(document).on('click', '.dropdown-menu li a', function() {
    $('#event-type').val($(this).html());
});


