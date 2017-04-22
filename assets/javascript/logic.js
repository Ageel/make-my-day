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

$("#button2").on('click', function(){
	event.preventDefault();
	$("#page2").css('display', 'none');
	$("#page3").css('display', 'block');
	$("#button2").css('display', 'none');
});


$( function() {
    $( "#datepicker" ).datepicker();
    $('#ui-datepicker-div').css('background-color', 'white');
  } );

$('document').on('click', 'li', function(){
	var choice = $(this).val();
	$('button').text(choice);

});