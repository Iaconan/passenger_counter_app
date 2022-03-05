// document.getElementById("count-el").innerText = 7


let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count

}

increment()


function save() {
    let countStr = count  + " - " 
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0

}

save()



// DOM  Document Object Model  (how you use Javascript to modify a website)

