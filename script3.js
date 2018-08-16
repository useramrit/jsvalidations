// background: linear-gradient(to right , red , yellow );
var item = document.body;
var firstInput = document.getElementById('gradient-start');
var secondInput = document.getElementById('gradient-end');

function pickColor(){

	var gradientStart = firstInput.value;
	var gradientEnd = secondInput.value;
	document.body.style.background = "linear-gradient(to right , "+gradientStart+" ,"+gradientEnd+" )"; 
	document.getElementsByTagName("h3")[0].innerText = "background: linear-gradient(to right , "+gradientStart+" ,"+gradientEnd+" )";
	
}

firstInput.addEventListener("change",pickColor);
secondInput.addEventListener("change", pickColor);


// var finalChoose = "linear-gradient(to right , "+gradientStart+" ,"+gradientEnd+" )";

// body.document.style = finalChoose;