import "./style.css";

var userSum = 22;
var dealerSum = 0;

var win = false;
var lose = false;

const DOMSelectors = {
  hit: document.querySelector(".hit"),
  stand: document.querySelector(".stand"),
  userHand: document.querySelector(".userHand"),
};

function Lose() {
  function clickLose() {
    DOMSelectors.hit.addEventListener("click", function () {
      if (userSum > 21) {
        DOMSelectors.userHand.insertAdjacentText("afterend", `You Lose!`);
      } else {
        console.log("error");
      }
    });
  }
  clickLose();
}

Lose();

const Deck = [];

var deck1 = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var deck2 = ["C", "H", "S", "D"];

async function createDeck() {
  try {
    for (let i = 0; i < 1; i++) {
      Deck.push(deck1);
    }
  } catch {
    console.log("errror");
  }
}
createDeck();

console.log(Deck);
/* function userLose() {
  if ((lose = true)) {
    DOMSelectors.winLose.insertAdjacentText("afterend", `You Lose!`);
  } else {
    console.log("error");
  }
}
function userWin() {
  if ((win = ture)) {
    DOMSelectors.winLose.insertAdjacentText("afterend", `You Win!`);
  }
}
*/
