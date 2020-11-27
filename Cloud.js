function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function addedToCart() {
    confirm("Added to Cart!");
}

//Showing time and greeting

const time = document.getElementById("time"),
    greeting = document.getElementById('greeting');

//Show time
function showTime() {
    var today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();

    //AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12 Hour Format

    hour = hour % 12 || 12;

    //Output time
    document.getElementById("time").innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

//Add Zero
function addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//Set Greeting
function setGreeting() {
    var today = new Date();
    var hour = today.getHours();

    if (hour < 12) {
        //Morning
        document.getElementById("greeting").innerHTML = "Good Morning"
    } else if (hour < 18) {
        //Afternoon
        document.getElementById("greeting").innerHTML = "Good Afternoon"
    } else {
        //Evening
        document.getElementById("greeting").innerHTML = "Good Evening"
    }
}

function apply() {
    document.getElementById("submit-button").innerHTML = `Thank you for your application!<br> We will get back to you as soon as possible`
}