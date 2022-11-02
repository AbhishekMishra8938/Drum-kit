
//detecting button press..

var numberOfDrumButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButton; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    // when you call using function() -> then, when the pageload up, immediately the part of function execute.
    // but in the case of function -> when you click then it will excute..
    // here function() is a anonymous function.

    var buttonInnerHTML = this.innerHTML;  //used so that we can change.

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}

//detecting keyboard press...

// the "event" triggered the function when call(callback method)
document.addEventListener("keydown", function(event){

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key){

  switch (key) {

    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;


    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);  // "." is used to call through class name

  activeButton.classList.add("pressed");   //this is use to add class name

  //now we need to add time so that it remove after key pressed or button pressed
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}
