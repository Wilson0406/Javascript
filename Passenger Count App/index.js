let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

console.log(countEl);
console.log(saveEl);

let count = 0;

function increment() {
    count += 1;
    //countEl.innerText = count;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    //saveEl.innerText += countStr
    saveEl.textContent += countStr;
    console.log(count);
    countEl.textContent = 0;
    count = 0;
}
