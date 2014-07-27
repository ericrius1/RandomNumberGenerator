document.addEventListener( 'mousedown', mousedown, false );
var height = window.innerHeight;
var evens = [2,4,6,8,10];
var odds = [1,3,5,7,9];
var ready = true;
var numberElement = document.getElementById('number');
function mousedown(event){
  if(!ready)return;
  numberElement.innerText = "Generating..."
  ready = false;
  setTimeout(function(){
    ready = true;
    numberElement.innerText= event.clientY < window.innerHeight/2 ? _.sample(evens) : _.sample(odds);
  }, 1100)
}

