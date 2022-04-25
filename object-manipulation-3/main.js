console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [{ name: 'Esther', hand: [] }, { name: 'Andrew', hand: [] }, { name: 'Charles', hand: [] }, { name: 'Daniel', hand: [] }];

var ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];

var suits = ['club', 'diamond', 'heart', 'spade'];

var deck = [];

function createDeck() {
  for (let i = 0; i < ranks.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      let values = parseInt(ranks[i]);
      if (ranks[i] === 'jack' || ranks[i] === 'queen' || ranks[i] === 'king') {
        values = 10;
      } else if (ranks[i] === 'ace') {
        values = 11;
      }
      let card = {};
      card = { rank: ranks[i], suit: suits[j], value: values };
      deck.push(card);
    }
  }
}

function shuffleDeck() {
  for (let i = deck.length; i > 0; i--) {
    let j = 0;
    let tmp = {};
    j = Math.floor(Math.random() * i);
    tmp = deck[i];
    deck[i] = deck[j];
    deck[j] = tmp;
  }
}

function dealHand() {
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < players.length; j++) {
      const card = deck.pop();
      players[j].hand.push(card);
    }
  }
}

function calcScore() {
  for (let i = 0; i < players.length; i++) {
    players[i].total = players[i].hand[0].value + players[i].hand[1].value;
  }
}

function winner() {
  var currScore = 0;
  var winner = '';
  for (let i = 0; i < players.length; i++) {
    if (players[i].total > currScore) {
      currScore = players[i].total;
      winner = players[i].name;
    } else {
      continue;
    }
  }
  console.log('Winner:', winner);
}

function startPlay() {
  createDeck();
  shuffleDeck();
  dealHand();
  calcScore();
  winner();
}

startPlay();
