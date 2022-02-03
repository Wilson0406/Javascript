let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl = document.querySelector("#sum-el") if sum-el is an ID
//let sumEl = document.querySelector(".sum-el") if sum-el is a Class
let sumEl = document.getElementById("sum-el")
function startGame(){
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
