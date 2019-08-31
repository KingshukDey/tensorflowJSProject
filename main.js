$(document).ready(function () {
    // Init
    $('.image-section').hide();
    $('.loader').hide();
    $('#result').hide();
	
	async function app() {
	let net;	
	console.log('Loading mobilenet..');

	// Load the model.
	net = await mobilenet.load();
	console.log('Sucessfully loaded model');

	// Make a prediction through the model on our image.
	const imgEl = document.getElementById('img');
	const result = await net.classify(imgEl);
	console.log(result);
	$('.loader').hide();
    $('#result').fadeIn(600);
    $('#result').text(' Result:  ' + result[0].className);
	}
	
    // Predict
    $('#btn-predict').click(function () {
       
        // Show loading animation
        $(this).hide();
        $('.loader').show();
		
		app();		
       
    });

});




