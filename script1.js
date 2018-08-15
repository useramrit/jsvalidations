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


var company = document.getElementById("carname");
var model = document.getElementById("carModel");
var color = document.getElementById("carColor");
var carList = document.getElementById("cars");

function checkRequiredFields(){
	/*document.querySelectorAll(".required").forEach(function(item){
		if (item.value.length <=0) {
			item.parentElement.classList.add("error");

		}
	})*/

	var result = [];
	document.querySelectorAll(".required").forEach(function(item){
		if (item.value.length <=0) {
			// value is empty
			item.parentElement.classList.add("error");
			result.push(false)
		} else {
			result.push(true);
			item.parentElement.classList.remove("error");
		}

	})

	return result;
};

function enterKeyHandler(event) {
	if (event.keyCode === 13) {
			checkRequiredFields();
	}
};

function addList(){

	var brand = document.createElement("li");
	var details = document.createElement("ul");
	var modelName = document.createElement("li");
	var carColor = document.createElement("li");
	var deleteBtn = document.createElement("button");
	brand.appendChild(document.createTextNode(company.value));
	deleteBtn.appendChild(document.createTextNode("Delete"));
	brand.appendChild(deleteBtn);

	modelName.appendChild(document.createTextNode(model.value));
	carColor.appendChild(document.createTextNode(color.value));
	details.appendChild(modelName).appendChild(carColor);
	brand.appendChild(details);
	carList.appendChild(brand);

	deleteBtn.addEventListener('click', function(e) {
		carList.removeChild(brand);	
	});
};

function clearPlaceholder(){
	company.value = "";
	model.value = "";
	color.value = "";
	
};

document.getElementById('enter').addEventListener('click', function() {
	var validation = checkRequiredFields();
	if (validation.indexOf(false) < 0) {
		addList();
		clearPlaceholder();
	}
});

document.querySelectorAll("input").forEach(function(input){	
	input.addEventListener("keypress", enterKeyHandler);
})



