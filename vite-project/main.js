import "./style.css";

const DOMSelectors = {
  button: document.querySelector(".startBtn"),
  title: document.querySelector(".title"),
  mainDisplay: document.querySelector(".mainBody"),
  getCard: document.querySelector(".getCard"),
};

function getGame() {
  DOMSelectors.button.addEventListener("click", function () {
    DOMSelectors.mainDisplay.innerHTML = "";
    DOMSelectors.mainDisplay.insertAdjacentHTML(
      "afterend",
      `<button class="getCard">Get Card!</button>
    <div class="dealHand">
    <h2 class="text">Dealer's Hand</h2>
    </div>
    <div class="userHand">
    <h2 class="text">Your Hand</h2>
    </div>`
    );
  });

  const getCard = document.querySelector(".getCard");
  getCard.addEventListener("click", function () {
    console.log("yes");
  });
}
