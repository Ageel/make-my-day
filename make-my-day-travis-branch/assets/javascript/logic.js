$("#button1").on('click', function(){
	event.preventDefault();
	console.log('Click, damn it');
	$("#page1").css('display', 'none');
	console.log('Click, damn it')
	$("#page2").css('display', 'block');
	console.log('Click, damn it')
	$("#button1").css('display', 'none');
	console.log('Click, damn it')
	$("#button2").css('display', 'block');
	console.log('Click, damn it')
});

$("#button2").on('click', function(){
	event.preventDefault();
	console.log('Click, damn it');
	$("#page2").css('display', 'none');
	console.log('Click, damn it')
	$("#page3").css('display', 'block');
	console.log('Click, damn it')
	$("#button2").css('display', 'none');
	console.log('Click, damn it')
	$('#main-content').css('height', '550px')
	$('#main-content').css('background-image', 'url("../images/nightlife.jpg")');
});