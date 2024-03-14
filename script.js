let cannotFirst = ['/', '+', '%', '*'];
let index = 0;
function hitung(symbol) { //to display into screen
    let calculate = document.querySelector(".calculate").innerHTML += symbol;
    if (cannotFirst.includes(calculate.charAt(0))) {del()} //users cannot using /,+,%, or * as the first click
    else if (cannotFirst.includes(calculate.charAt(index)) && cannotFirst.includes(calculate.charAt(index-1))) {del()} //users cannot using using the same cannotFirst twice. Example : ++ or // or ** or %%
    else if (calculate.charAt(index-2) == '-' && calculate.charAt(index-1) == '-') {
        if (calculate.charAt(index) != '-') {null} else {del()}}; //users cannot using - 3x, example : 9---9
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
    // if (calculate.includes('--')) {
    //     calculate = calculate.replace('--', `-(-${calculate.charAt(index)})`);
    //     alert(calculate);
    // }; //error, I tried to handle case if users tried to minus number with minus number. Example : 9--9
    calculates = eval(calculate);
    if (calculates % 1 == 0) {
        document.querySelector(".answer").innerHTML = calculates;
    } else {
        document.querySelector(".answer").innerHTML = calculates.toFixed(2);
    };
}