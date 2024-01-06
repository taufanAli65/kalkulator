function hitung(symbol) {
    let calculate = document.querySelector(".calculate").innerHTML += symbol;
}

function del() {
    let user_input = document.querySelector(".calculate").innerText;
    user_input = user_input.slice(0, -1);
    let temporary = document.querySelector(".calculate").innerHTML = user_input;
}

function deleteAll() {
    let calculate = document.querySelector(".calculate").innerHTML = "";
    let answer = document.querySelector(".answer").innerHTML = "";
}

function process() {
    let calculate = document.querySelector(".calculate").innerText;
    let calculates = eval(calculate);
    document.querySelector(".answer").innerHTML = calculates;
}