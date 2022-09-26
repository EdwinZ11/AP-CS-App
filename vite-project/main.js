import "./style.css";

var userSum = 0;
var dealerSum = 0;

var userAceCount = 0;
var dealerAceCount = 0;

var canHit = true;
var canStand = true;

const DOMSelectors = {
  hit: document.querySelector(".hit"),
  stand: document.querySelector(".stand"),
  userHand: document.querySelector(".userText"),
  dealerHand: document.querySelector(".dealerText"),
};

window.onload = function () {
  shuffle(Deck);
  getUserHand();
  getDealerHand();
  hit();
  stand();
};
const Deck = [
  "A-H",
  "2-H",
  "3-H",
  "4-H",
  "5-H",
  "6-H",
  "7-H",
  "8-H",
  "9-H",
  "10-H",
  "J-H",
  "Q-H",
  "K-H",
  "A-C",
  "2-C",
  "3-C",
  "4-C",
  "5-C",
  "6-C",
  "7-C",
  "8-C",
  "9-C",
  "10-C",
  "J-C",
  "Q-C",
  "K-C",
  "A-D",
  "2-D",
  "3-D",
  "4-D",
  "5-D",
  "6-D",
  "7-D",
  "8-D",
  "9-D",
  "10-D",
  "J-D",
  "Q-D",
  "K-D",
  "A-S",
  "2-S",
  "3-S",
  "4-S",
  "5-S",
  "6-S",
  "7-S",
  "8-S",
  "9-S",
  "10-S",
  "J-S",
  "Q-S",
  "K-S",
];

function shuffle(Deck) {
  for (var i = Deck.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = Deck[i];
    Deck[i] = Deck[j];
    Deck[j] = temp;
  }
}

function dealerPart() {
  const card = Deck.pop();
  const splitCard = card.split("-");
  var valueCard = splitCard[0];
  if (isNaN(valueCard)) {
    if (valueCard == "A") {
      dealerAceCount = +dealerAceCount + +1;
      var valueCard = 11;
    } else {
      var valueCard = 10;
    }
  }
  dealerSum = +dealerSum + +valueCard;
  if (dealerSum > 21 && dealerAceCount > 1) {
    dealerSum = +dealerSum - +10;
    dealerAceCount = +dealerAceCount - +1;
  }
  DOMSelectors.dealerHand.insertAdjacentText("afterend", `${card} `);
}

function userPart() {
  const card = Deck.pop();
  const splitCard = card.split("-");
  var valueCard = splitCard[0];
  if (isNaN(valueCard)) {
    if (valueCard == "A") {
      userAceCount = +userAceCount + +1;
      var valueCard = 11;
    } else {
      var valueCard = 10;
    }
  }
  userSum = +userSum + +valueCard;
  console.log(userSum);
  DOMSelectors.userHand.insertAdjacentText("afterend", `${card} `);
}

function userHasAce() {
  while (userSum >= 21 && userAceCount > 0) {
    userSum = +userSum + -10;
    userAceCount = +userAceCount + -1;
    canHit = true;
  }
}

function dealerHasAce() {
  while (dealerSum >= 21 && dealerAceCount > 0) {
    dealerSum = +dealerSum + -10;
    dealerAceCount = +dealerAceCount + -1;
  }
}

function getDealerHand() {
  for (var i = 0; i < 2; i++) {
    dealerPart();
  }
}

function getUserHand() {
  for (var i = 0; i < 2; i++) {
    userPart();
  }
}

function hit() {
  DOMSelectors.hit.addEventListener("click", function () {
    if (canHit === true) {
      userPart();
      if (userSum > 21) {
        canHit = false;
      }
    }
    userHasAce();
  });
}

function stand() {
  DOMSelectors.stand.addEventListener("click", function () {
    if (canStand === true) {
      while (dealerSum < 17) {
        dealerPart();
        dealerHasAce();
      }
      if (userSum > dealerSum && userSum <= 21) {
        DOMSelectors.userHand.insertAdjacentText("afterend", "Y ou Win! ");
      }
      if (userSum < 21 && dealerSum > 21) {
        DOMSelectors.userHand.insertAdjacentText("afterend", " You Win! ");
      }
      if (userSum > 21) {
        DOMSelectors.userHand.insertAdjacentText(
          "afterend",
          " You Lose! Better Luck Next Time! "
        );
      }
      if (userSum < dealerSum && dealerSum <= 21) {
        DOMSelectors.userHand.insertAdjacentText(
          "afterend",
          " You Lose! Better Luck Next Time! "
        );
      }
      if (userSum === dealerSum && userSum < 21) {
        DOMSelectors.userHand.insertAdjacentText("afterend", " No one Wins ");
      }
    }
    canStand = false;
    canHit = false;
  });
}
