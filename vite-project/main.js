import "./style.css";

var userSum = 0;
var dealerSum = 0;

var deck = [];
var win = false;
var lose = false;

const DOMSelectors = {
  hit: document.querySelector(".hit"),
  stand: document.querySelector(".stand"),
  winLose: document.querySelector(".userHand"),
};

function Lose() {
  DOMSelectors.hit.addEventListener("click", function () {
    if (userSum > 21) {
      return (lose = true);
    } else {
      console.log("error");
    }
  });
  if ((lose = true)) {
    DOMSelectors.winLose.insertAdjacentText("afterbegin", `You Lose!`);
  } else {
    console.log("error");
  }
}

DOMSelectors.stand.addEventListener("click", console.log(lose));
