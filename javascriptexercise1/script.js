var pageHeader = document.getElementById("mainHeader");
pageHeader.textContent = "javascript sports water";

var	sandwichImageElems = document.getElementsByClassName("sandwichpic");
console.log(sandwichImageElems);

var myButtons = document.getElementsByTagName("button");
console.log(myButtons);

myButtons[0].addEventListener("click",function () {
	
	sandwichImageElems[0].src= "https://wswdelivery.com/wp-content/uploads/2015/05/gatorade-variety-550x515.jpg";
});
