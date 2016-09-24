function generateMadLib( adjective, noun ) {
    var madlib = 'Today I went to the zoo. ' + 
        'I saw a ' + adjective + ' ' + 
        noun + ' jumping up and down in its tree.';
    
    return madlib;
}

var firstMadLib = generateMadLib('fuzzy', 'panda');
var secondMadLib = generateMadLib( 'large', 'bat' );

var myAdj = 'dimunitive';
var myNoun = 'grizzly bear';

var thirdMadLib = generateMadLib( myAdj, myNoun ); 
console.log( firstMadLib  );


$( ".js-submit" ).click(function() {
	var userAdjective = $( ".js-adj").val();
	console.log( 'user adjective is...', userAdjective );

	var userNoun = $( '.js-noun' ).val();
	console.log( 'user noun is...', userNoun );

	var userMadLib = generateMadLib( userAdjective, userNoun );
	console.log( userMadLib );

	$('.js-madlibs-content').html( 
		"<div class='ui segment'>" +
			"<h1 class='ui header'>" +
				userMadLib +
			"</h1>" +
		"</div>"
	);

	$( ".js-adj").val('');
	$( '.js-noun' ).val('');
});














