let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl = document.querySelector("#sum-el") if sum-el is an ID
//let sumEl = document.querySelector(".sum-el") if sum-el is a Class
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

console.log(cards)

// object for player
let player = {
    name: "Wilson",
    chips: 100
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

//to generate random numbers
function getRandomCard() {
    // let randomNumer = Math.ceil( Math.random()*13 ) - same as below
    let randomNumer = Math.floor( Math.random()*13 ) + 1 //random number between (0 and 12)+1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startGame() {
    if(player.chips >0){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame();
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    // Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    } 
  sumEl.textContent = "Sum: " + sum;
  
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
    player.chips += 20
    playerEl.textContent = player.name + ": $" + player.chips
} else {
    message = "You're out of the game! 😭"
    isAlive = false
    player.chips -= 20
    playerEl.textContent = player.name + ": $" + player.chips
}
  messageEl.textContent = message
console.log(message)
}

function newCard() {
    if(isAlive === true && hasBlackJack === false && player.chips > 0){
    let card = 6
    console.log("Drawing a new card from the deck!")
    sum += card
    // Push the card to the cards array
    cards.push(card)
    console.log(cards)
    renderGame()}
}
