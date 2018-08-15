// // make array with object (username & password)

// var users = [
// 	{
// 		username: "Amrit",
// 		password: "12345"
// 	},
// 	{
// 		username: "Hari",
// 		password: "12456"
// 	},
// 	{
// 		username: "Shyam",
// 		password: "45621"
// 	}
// ];

// // make array with object username & timeline

// var timeline = [
// 	{
// 		username: "Ram",
// 		post: "wHATS ON YOUR MIND ?"
// 	},
// 	{
// 		username: "Krisna",
// 		post: " It is summer !!"
// 	},
// 	{
// 		username: "Uttam",
// 		post: "It gonna be lit ass year"
// 	},
// ];

// // prompt user for username & password

// var inputUser = prompt("Enter your username ?");
// var inputPass = prompt("Enter your password ?");

// // make function to check if the username is valid

// // function isValid(user, pass){
// // 	for (var i = 0; i < users.length; i++) {
// // 		if (user === users[i].username && pass === users[i].password) {
// // 			return true;
// // 		}
// // 	}
// // 	return false;
// // };

// // another approach using for each to check validation

// function isValid(username, password){
// 	// var result = false;

// 	// users.forEach(function(user){
// 	// 	if (username === user.username && password === user.password) {
// 	// 		result = true;
// 	// 		return ;
// 	// 	}
		
// 	// })
// 	// return result;

// 	return users.some(function(user){
// 		return (username === user.username && password === user.password)
		
// 	})


// }


// // test
// signIn();
// // make functin using the valid function to console the time line

// function signIn (){
// 	if (isValid(inputUser,inputPass)) {
// 		console.log(timeline);
// 	}else{
// 		alert("Wrong username & password !!");
// 	}
// }

// adding click event to button
// var button = document.getElementsByTagName("button")[0];
 
//  button.addEventListener('click', function () {
// 	console.log("click!!!!") 	
//  });
		// var errMsg = document.createElement("div");
		// errMsg.appendChild(document.createTextNode("Please enter the Car model !!"));
		// container.appendChild(errMsg);
		// errMsg.classList.add("errorMsg");

// var carModel = document.getElementById('carModel');
// var cars = document.getElementById('cars');
// var button = document.getElementById('enter');
// var displayError = document.getElementsByClassName('hide')[0];
// var inputBox = document.querySelector(".input-box");

// button.addEventListener('click', function() {
// 	console.log("clicking !!!!");
// 	if (carModel.value.length <= 0) {
// 		inputBox.classList.add("error");
// 		return
// 	}
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(carModel.value));
// 	cars.appendChild(li);
// 	carModel.value = "";
// 	inputBox.classList.remove("error");
// });


var requiredFields = document.querySelectorAll(".required");
console.log(requiredFields);
var button = document.getElementById('enter');

button.addEventListener('click', function() {
	
	requiredFields.forEach(function(item){
		if (item.value.length <=0) {
			item.parentElement.classList.add("error");
		}
	})
});