export const Deck = [];

var deck1 = [A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, K, L];
var deck2 = [C, S, D, H];

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
