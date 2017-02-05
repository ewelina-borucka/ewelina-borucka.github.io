// -----------------------------------------------------------------------//
// ------------------------------  TweenMax  ------------------------------//
// -----------------------------------------------------------------------//


// ------------------------  Info Page  -----------------------//

TweenLite.set(".secondary", {visibility: "visible"});
var tl = new TimelineMax();

tl.staggerFrom(".skills li", 0.9, {
  opacity: 0,
  cycle: {
    rotationX: [-90, 90],
    transformOrigin: ["50% top -100", "50% bottom 100"]
  }
}, 0.4);

TweenLite.set(".main-header", {visibility: "visible"});
var tl = new TimelineMax();

tl.staggerFrom(".main-nav li", 0.9, {
  opacity: 0,
  cycle: {
    rotationX: [-90, 90],
    transformOrigin: ["50% top -100", "50% bottom 100"]
  }
}, 0.1);



var touch = new TimelineMax({reapet: 1, reapetDelay: 1});
touch.staggerTo(".contact", 2, {y: 30, ease: Bounce.easeOut}, 0.4);

// ------------------------  Home Page  -----------------------//


TweenMax.to(".rocket", 2, {
  x: function(index, target) {
    return (index + 3) * 100;
  }
});

// --------------------  Portfolio Page  -----------------------//
// random letters

function randomChar(type){
	var pool = "";

	if (type == "lowerLetter"){
		pool = "abcdefghijklmnopqrstuvwxyz0123456789";
	}
	else if (type == "upperLetter"){
		pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	}
	else if (type == "symbol"){
		pool = ",.?/\\(^)![]{}*&^%$#'\"";
	}

	var arr = pool.split('');
	return arr[Math.floor(Math.random() * arr.length)];
}

$.fn.shuffleLetters = function(prop){

	var options = $.extend({
		"step"	: 5,	// How many times should the letters be changed
		"fps"	: 25,	// Frames Per Second
	}, prop);

	return this.each(function(){

		var el = $(this),
			str = "";

		if(options.text) {
			str = options.text.split('');
		}
		else {
			str = el.text().split('');
		}

		// The types array holds the type for each character;
		// Letters holds the positions of non-space characters;

		var types = [],
			letters = [];

		// Looping through all the chars of the string
		for(var i = 0; i < str.length; i += 1){

			var ch = str[i];

			if(ch == " "){
				types[i] = "space";
				continue;
			}
			else if(/[a-z]/.test(ch)){
				types[i] = "lowerLetter";
			}
			else if(/[A-Z]/.test(ch)){
				types[i] = "upperLetter";
			}
			else {
				types[i] = "symbol";
			}

			letters.push(i);
		}

		el.html("");

		// Self executing named function expression:
		(function shuffle(start){

			// This code is run options.fps times per second
			// and updates the contents of the page element

			var i,
				len = letters.length,
				strCopy = str.slice(0);	// Fresh copy of the string

			if(start>len){
				return;
			}

			// All the work gets done here
			for(i = Math.max(start, 0); i < len; i += 1){

				// The start argument and options.step limit

				if( i < start + options.step){

					// Generate a random character at this position
					strCopy[letters[i]] = randomChar(types[letters[i]]);
				}
				else {
					strCopy[letters[i]] = "";
				}
			}

			el.text(strCopy.join(""));

			setTimeout(function(){

				shuffle(start+1);

			},1000/options.fps);

		})(-options.step);

	});
}; // end shuffleLogic


var shiftChars = function( el ){
	// container is the DOM element;
	// userText is the textbox

	var container = $( el );
		userText = $( $thisText );

	// Shuffle the contents of container
	container.shuffleLetters();

	setTimeout(function(){
		// Shuffle the container with custom text
		container.shuffleLetters({
			"text": $thisText
		});

	},1000);
};

var $thisText;

// mouseEnter
$(".box").mouseenter(function(){
	$thisText = $(this).children("h4").text();
	$currentEl = $(this).children("h4");
  shiftChars( $currentEl );

});

// end hover
$("h4").mouseleave(function(){
  $(this).text( $thisText );

});

// -----------------------------------------------------
