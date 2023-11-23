let date = new Date();
let time = date.getHours();
let name = prompt("enter your name?") || "friend";
let greeting = document.querySelector('h3');
console.log(time);

if (time < 12 && time > 6) {
    greeting.innerText = "Good Morning " + name;
} else if (time < 16) {
    greeting.innerText = "Good After-noon " + name;
} else if (time < 18) {
    greeting.innerText = "Good Evening " +  name;
} else {
    greeting.innerText = "Good night " + name;
}












let clickCount = localStorage.getItem('No of clicks') || 0;
let button = document.querySelector('#click_btn');
let restart = document.querySelector('#restart');

// Function to change the style when clicked
let clickFunction = ()=> {
    button.innerText = `${clickCount} click`;
    if (clickCount%2 == 0){
        button.style.backgroundColor = 'lightseagreen';
    } else {
        button.style.backgroundColor = '#dd114e';
    }
    localStorage.setItem('No of clicks', clickCount);
}


// Giving the style before pressing the button
clickFunction();

// Changing the style according the no of presses
button.addEventListener('click', ()=> {
    clickCount++;
    clickFunction();
});


// Reseting the value of clicks using restart button
restart.addEventListener('click', ()=> {
    clickCount = 0;
    clickFunction();
})
