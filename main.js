document.addEventListener( 'mousedown', mousedown, false );
var height = window.innerHeight;
var evens = [2,4,6,8,10];
var odds = [1,3,5,7,9];
var numElement = document.getElementById('number');
function mousedown(event){
  if(event.clientY < window.innerHeight/2)
    numElement.innerText = _.sample(evens, 1)
  if(event.clientY > window.innerHeight/2)
    numElement.innerText = _.sample(odds, 1)
    ;
}

