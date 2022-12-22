// The addEventListener helps to give functionality to a site when a particular is taken
// by the user or maybe clicks something

// var numDrumButton = document.querySlectorAll(".set").length;
//
// for(var i = 0; i < numDrumButton; i++)  //loops through each button which is clicked
// {
//   document.querySelector(".set")[i].addEventListener("click", function () {
//     alert("I got clicked!");
//
//   });
// }

// The addEventListener helps to give functionality to a site when a particular is taken
// by the user or maybe clicks something

// document.querySelector(".drum").addEventListener("click", function() {
  // this.style.color = "white";


// This section is responsible for the button press
var numDrumButton = document.querySelectorAll(".drum").length;

for(var i = 0; i < numDrumButton; i++)  //loops through each button which is clicked
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // alert("I got clicked!");
// this,textContenr, this.innerHTM, this.innerText
  var buttonFunc = this.innerHTML;

  makeSound(buttonFunc);

  buttonAnimation(buttonFunc);

});
}

//This part is responsible for detecting key board press   (previous version, the "keypress" keyword is used)
document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);

});

function makeSound(key){

  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    case "k":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "l":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    default: console.log(buttonFunc);

  }
}

function buttonAnimation(currentkey){
  //creates the dot signe which is unique to the key values of the drums letters
  var activeButton = document.querySelector("." + currentkey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed")
  }, 100);
}



// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();

// document.getElementById('change').onclick = changeColor;
//
//     function changeColor() {
//         document.body.style.color = "purple";
//         return false;
//     }
