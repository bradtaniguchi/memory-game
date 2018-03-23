//declare variables
let card = document.querySelectorAll(".card");
const deck = document.querySelector(".deck");


//add event listener for each card
for(var i = 0; i< card.length;i++){
  card[i].addEventListener("click", function(){
    this.classList.toggle("open");
    this.classList.toggle("show");
  });
};

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
function start() {
  // This shuffle function shuffles the cards
  let allCards = shuffle(objects);
}

start();
