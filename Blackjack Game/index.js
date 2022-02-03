let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl = document.querySelector("#sum-el") if sum-el is an ID
//let sumEl = document.querySelector(".sum-el") if sum-el is a Class
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function startGame(){
  renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    // for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    } 
  sumEl.textContent = "Sum: " + sum;
  
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "You're out of the game! 😭"
    isAlive = false
}
  messageEl.textContent = message
console.log(message)
}

function newCard() {
    let card = 6
    console.log("Drawing a new card from the deck!")
    sum += card
    // Push the card to the cards array
    cards.push(card)
    console.log(cards)
    renderGame()
}
