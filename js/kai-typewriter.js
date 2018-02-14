// change the array (eg: ["helo","lol","hi"])
var kaiString = ["game?", "website?", "app for Android?","app for IOS?", "something amazing ;)"],

// =====================
	typed, // inner
	step = 0, // words
	tick = 0, // letters
	intervalID = 0, // type
	intervalID2 = 0, // delete type
	arrLetter = []; // new array

// =====================

creatTypewriter();
getLetter();

//breaks words into letters and creates a new array
function getLetter(){
	if( intervalID == 0 ){
		intervalID = setInterval( function (){
			if( step == kaiString.length ){
				step = 0;
			}
			arrLetter.push(kaiString[step][tick]);
			tick++;
			if( tick == kaiString[step].length ){
				tick = kaiString[step].length;
				setTimeout(deleteLetter, 1000);
			}
			typed.innerHTML = arrLetter.join('');
		}, 500 );
	}
}
//delete letters and creates a null array
function deleteLetter(){
	clearInterval(intervalID);
	intervalID2 = setInterval( function (){
		tick--;
		if( tick == 0){
			tick = 0;
			step++;
			intervalID = 0;
			clearInterval(intervalID2);
			setTimeout(getLetter, 1500);
		}
		arrLetter.pop();
		typed.innerHTML = arrLetter.join('');
	}, 300 );

}
// create in DOM kai-typewriter
function creatTypewriter(){
	var typewriter = document.querySelector('.kai-typewriter'),
		cursor = creatEl('span');
		typed = creatEl('span');

		typed.className = 'typed';
		cursor.className = 'typed-cursor';

		typewriter.appendChild(typed);
		typewriter.appendChild(cursor);
		document.querySelector('.typed-cursor').innerHTML = '|';
}

function creatEl(el){
	return document.createElement(el);
}