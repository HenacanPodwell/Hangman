function easy() {
    words = ["Hello", "Test", "Food", "Money"];
    min=0; 
    max=words.length;  
    i =Math.floor(Math.random() * (+max - +min)) + +min;
    word = words[i];
    x = word.length
    w = word.length
}
function medium() {
    words = ["Hello There", "It is okay", "Central court", "Laptop bag"];
    min=0; 
    max=words.length;  
    i =Math.floor(Math.random() * (+max - +min)) + +min;
    word = words[i];
    x = word.length
    w = word.length
}
function hard() {
    words = ["Nice to meet you", "Little duck on a pond", "He is a boy", "Coffee contains caffeine"];
    min=0; 
    max=words.length;  
    i =Math.floor(Math.random() * (+max - +min)) + +min;
    word = words[i];
    x = word.length
    w = word.length
}
function random () {
    while (x>0) {
        var y = x - 1
        var letter = word.substring(y,x)
        console.log(letter);
        
        if (letter === " ") {
            let ans = document.getElementById('ans' + x)
            document.getElementById('ans' + x).innerHTML = `<h5>space</h5>`
            ans.classList.add("space");
            let bracket = document.getElementById('bracket' + x)
            bracket.classList.add('show')
            w--;
            myFunc()
        }
        else {
            let ans = document.getElementById('ans' + x)
            document.getElementById('ans' + x).innerHTML = `<h1>${letter}</h1>`
            ans.classList.add(`${letter}`);
            let bracket = document.getElementById('bracket' + x)
            bracket.classList.add('show')
            let answer = document.getElementById(`${letter}`)
            console.log(answer)
            answer.classList.add('correct')
        } 
        x--;
    }
    var wa = document.querySelectorAll("#answer button:not([class])")
    for (let i = 0; i < wa.length; i++) {
        wa[i].addEventListener('click', wrong) 
    }
}
var z = 7
function wrong() {
    if (z === 0) {
        alert("You have exhausted all the chances, you may refresh the page to reset.")
        let wr = document.querySelectorAll("#display div div")
        for (let i = 0; i < wr.length; i++) {
            wr[i].classList.add('show')
        }
    }     
    if (z === 1) {
        rightleg.classList.add('showhangman')
        z--;
    }
    if (z === 2) {
        leftleg.classList.add('showhangman')
        z--;
    }
    if (z === 3) {
        righthand.classList.add('showhangman')
        z--;
    }
    if (z === 4) {
        tummy.classList.add('showhangman')
        z--;
    }
    if (z === 5) {
        lefthand.classList.add('showhangman')
        z--;
    }
    if (z === 6) {
        head.classList.add('showhangman')
        z--;
    }
    if (z === 7) {
        rope.classList.add('showhangman')
        z--;
    }
}
function myFunc(id) {
    console.log(w)
    var we = document.getElementsByClassName(id);
    for (let i = 0; i < we.length; i++) {
        we[i].classList.add('show')
        w--;
    }
    if (w === 0) {
        setTimeout(function() {alert("Congratulation, you have guessed the word correctly.")},100)
    }
}