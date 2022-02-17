/*
 * DOTS: Level One
 *
 */
let score = 0;
let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');

ballEl.addEventListener("click",function () {
  score = score + 10;

  if ( score < 100 ) {
    scoreEl.innerText = score;
  } else {
    declareWinner();
  }

});

function declareWinner() {
  document.body.classList.add('game-over');
}




//listen for click
//if(click == true) {
 // document.querySelector(.js-score)
//}
//add 10 points for each click(when click happens, increase score)

//when points=100, win level and start next level