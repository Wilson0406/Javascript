let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    console.log(myLeads)
    renderLeads();
})

function renderLeads(){
  let listItems = ""
  for (let i = 0; i < myLeads.length; i++) {
      listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
      //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
      /* create element set text content append to ul
      const li = document.createElement("li")
      li.textContent = myLeads[i]
      ulEl.append(li)*/
  }
  ulEl.innerHTML = listItems
}
