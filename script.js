let cannotFirst = ['/', '+', '%', '*'];
let index = 0;
function hitung(symbol) { //to display into screen
    let calculate = document.querySelector(".calculate").innerHTML += symbol;
    if (cannotFirst.includes(calculate.charAt(0))) {del()}
    else if (cannotFirst.includes(calculate.charAt(index)) && cannotFirst.includes(calculate.charAt(index-1))) {del()}
    else if (calculate.charAt(index-1) == '-' && calculate.charAt(index) == '-') {del()};
    index += 1;
}

function del() { //delete button function
    let user_input = document.querySelector(".calculate").innerText;
    user_input = user_input.slice(0, -1);
    let temporary = document.querySelector(".calculate").innerHTML = user_input;
    index -= 1
}

function deleteAll() { //AC button function, which delete all calculating process
    let calculate = document.querySelector(".calculate").innerHTML = "";
    let answer = document.querySelector(".answer").innerHTML = "";
    index = 0;
}

function process() { //to calculate the answer
    let calculate = document.querySelector(".calculate").innerText;
    let calculates = eval(calculate);
    if (calculates % 1 == 0) {
        document.querySelector(".answer").innerHTML = calculates;
    } else {
        document.querySelector(".answer").innerHTML = calculates.toFixed(2);
    };
}