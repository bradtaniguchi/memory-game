//declare variables
let card = document.querySelectorAll(".card");
let cards = [];
// function to convert a nodelist to array from https://stackoverflow.com/questions/3199588/fastest-way-to-convert-javascript-nodelist-to-array
for(var i = card.length; i--; cards.unshift(card[i]));
console.log(cards);
const deck = document.querySelector(".deck");


//add event listener for each card
for(var i = 0; i< card.length;i++){
  card[i].addEventListener("click", function(){
    this.classList.toggle("open");
    this.classList.toggle("show");
  });
};

//Call the startGame function to start the game and shuffle cards
window.onload = startGame();


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//shuffle cards
function startGame(){
   var shuffledCards = shuffle(cards);
   for (var i= 0; i < shuffledCards.length; i++){
      [].forEach.call(shuffledCards, function(item){
         deck.appendChild(item);
      });
   }
}
