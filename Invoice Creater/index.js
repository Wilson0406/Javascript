const cost = [10,20,30];
const input = document.getElementById("input");
const washCar = document.getElementById("wash");
const mowLawn = document.getElementById("mow");
const pullWeed = document.getElementById("weed");
const remove = document.getElementById("remove");
const totalInvoice = document.getElementById("total");
const service = ['Wash Car', 'Mow Lawn', 'Pull Weed'];
let listItems = "";
let total = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;

// remove.addEventListener("click", function(){
  
// })
function render(num) {
        listItems += `
            <tr class="row-data">
              <td colspan="2">${service[num]} <span><button id="remove"> Remove</button></span></td>
              <td>$${cost[num]}</td>
            </tr>
            `
        totalInvoice.innerHTML = `$${total}`;
    // input.innerHTML = listItems;
}

washCar.addEventListener("click", function() {
  if(count1 == 0){
    total += 10;
    render(0);
  input.innerHTML = listItems;}
  count1 += 1;
})

mowLawn.addEventListener("click", function() {
  if(count2 == 0){
    total += 20;
    render(1);
  input.innerHTML = listItems;}
  count2 += 1;
})

pullWeed.addEventListener("click", function() {
  if(count3 == 0){
    total += 30;
    render(2);
  input.innerHTML = listItems;}
  count3 += 1;
})

/*listItems += `<tr class="calc-row">
              <td colspan ="2">Total<td>
              <td>$${total}</td>`
input.innerHTML = listItems;*/
