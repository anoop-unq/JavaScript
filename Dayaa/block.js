let alphabet = '';
for (let i = 65; i <= 90; i++) {
    alphabet += String.fromCharCode(i) + ' ';
}

function more(){
    let result = document.getElementById('result');
    result.textContent = alphabet.trim();
    result.classList.add("para");

}

let alphabets = '';
for (let i = 97; i <= 122; i++) {
    alphabets += String.fromCharCode(i) + ' ';
}

function moreless(){
    let resultless = document.getElementById('resultless');
    resultless.textContent = alphabets.trim();
    resultless.classList.add("para");
   
}
function reset(){
    // let result = document.getElementById('result');
    // let resultless = document.getElementById('resultless');
    result.textContent="Task 4: Click the button for capital alphabets";
    result.classList.add("head-00");
    resultless.textContent="Task 4: Click the button for small alphabets";
    resultless.classList.add("head-00");
    // more();
    // moreless();
}


