window.scrollTo(0,1);
document.addEventListener( 'mousedown', mousedown, false );
var height = window.innerHeight;
var evens = [2,4,6,8,10];
var odds = [1,3,5,7,9];
var numberElement = document.getElementById('number');
function mousedown(event){
  numberElement.innerText = "Generating..."
  setTimeout(function(){
    numberElement.innerText= event.clientY < window.innerHeight/2 ? _.sample(evens) : _.sample(odds);
  }, 1100)
}

