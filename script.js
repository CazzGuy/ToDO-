const input = document.querySelector(".input")
const btn = document.querySelector(".btn-1")
const output = document.querySelector("#output")
const arr = []

function check(input, arr) {
    if(input === "") return false
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == input) {
            alert("Already Exsist!!!")
            return false;
        } 
    }
    return true;
}

function display() {
    output.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        output.innerHTML += 
        `<div class="bg-body-secondary p-2 fs-3 rounded-pill mt-3" id='item'>
            <div class="ps-2">${arr[i]}</div>
            <button id='btn-1' onclick='del(${i})'>
                <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/>
                </svg>
            </button>
        </div>
        `
    }
    
}

function add() {
    const title = input.value
    if(check(title.trim(), arr)) {
        arr.push(input.value)
        display()
        input.value = ""
    }
    input.value = ""
}

function del(index) {
    arr.splice(index,1)
    console.log(arr);
    display()
}


btn.addEventListener("click", add)
input.addEventListener('keydown', (e) => {
    if (e.key === "Enter") add()
})