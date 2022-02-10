const possibleHands = ["🗿", "📜", "✂️"]

let hand = document.getElementById("Player")
let computer = document.getElementById("Computer")
let winnerText = document.getElementById("winner_text")

// Create a function that returns a random item from the array
function pick(display) {
    resetHands()
    let randomNum = Math.floor(Math.random() * 3) 
    let currentHand = possibleHands[randomNum]
    display.textContent = currentHand
}

document.getElementById("rock").addEventListener("click", rock)
document.getElementById("paper").addEventListener("click", paper)
document.getElementById("scissors").addEventListener("click", scissors)

function rock() {
    pick(computer)
    resetHands()
    let currentHand = possibleHands[0]
    hand.textContent = currentHand
    declareWinner()
}

function paper() {
    pick(computer)
    resetHands()
    let currentHand = possibleHands[1]
    hand.textContent = currentHand
    declareWinner()
}

function scissors() {
    pick(computer)
    resetHands()
    let currentHand = possibleHands[2]
    hand.textContent = currentHand
    declareWinner()
}

function declareWinner() {
    const pick1 = possibleHands.indexOf(hand.textContent);
    const pick2 = possibleHands.indexOf(computer.textContent);
    console.log(pick1, pick2)
    if (pick1 == pick2) {
        renderDraw()
        return
    } 
    
    if (pick1 == 0 && pick2 == possibleHands.length - 1) {
        renderWinner(hand)
        return
    } else if (pick2 == 0 && pick1 == possibleHands.length - 1) {
        renderWinner(computer)
        return
    }
    
    if (pick1 < pick2) {
        renderWinner(computer)
        return
    } else {
        renderWinner(hand)
        return
    }
}

function renderWinner(winner) {
  
    winnerText.textContent = `${winner.id} wins! 🥳`
    winner.classList.add("winner")
}

function renderDraw() {
    hand.classList.add("draw")
    computer.classList.add("draw")
    winnerText.textContent = "It's a draw! ⚖️"
}

function resetHands() {
    hand.classList.remove("winner", "draw")
    computer.classList.remove("winner", "draw")
    winnerText.textContent = ""
}
