function compare (x, y) {
    return x > y;
}
// var x = compare (5,3);
console.log(compare(6,3));

function global () {
    var message = "global";
    console.log(message);
    function local () {
        var message = "local";
        console.log(message);
    }
    local();
}
global();

var string = "Hello";
string += " World";
console.log(string + "!");

var x = 5, y = 2;
var z = x + y /2;
console.log(z);

x = 200;
y = "100";

if ( x >= y || x <= y) {
    console.log("hot or cold?");
}
else {
    console.log("bingo!");
}

function name () {
    return {
        name : "Aksel"
    };
}
console.log(name());    

//for loop
sum = 0;
for (var i = 0; i <10; i++) {
    sum += i;
}
console.log(sum);


var a = new Object();
a.name = new Object;
a.name.fullname = "Aksel Cruses";
a.name["weight count"] = 64;

console.log(a);
console.log(a.name.fullname);
console.log(a.name["weight count"]);

var better = {
    name: "Aksel",
    birthday: "9th October",
    status: "single",
    color: {
        first: "black",
        second: "gray",
    },
    number: 9 
};

console.log(window.better);


function makemul(smthn) {
    var func = function(x) {
        return smthn * x;
    };
    return func
};

var make5 = makemul(5);
console.log(make5(3));

var a = 5;
var b = 20;
var c = {x: 5};

a = b;
console.log(a);
b.x = 7;
console.log(b);
console.log(a);

// Function constructors
function Circle (radius) { 
    this.radius = radius;
}
Circle.prototype.getArea =
    function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    
var myCircle = new Circle(10);
console.log(myCircle.getArea());
var myOtherCircle = new Circle(20); console.log(myOtherCircle);

var arr = new Array();
arr[0] = "Aksel";
arr[1] = "Cruses";
// can also use like arr = ["Aksel", "Cruses"]; and use sub arrays inside { name: { sd}}

console.log(arr);


// browser

console.log(document.getElementById("head"));


document.addEventListener("DOMContentLoaded",
    function(event) {
        console.log(event);
        // function clickbut() {
//     var name = document.getElementById("name").value;
//     var message = "Hello " + name;
//     if (name === "axe") {
//        // document.getElementById("send").textContent = message;
//         // document.getElementById("wel").innerHTML = "<h2>" + message + "</h2>";
//         var mi = document.querySelector("#mi").textContent;
//         mi += "ultra!";
//         document.getElementById("mi").textContent = mi;
//     };

    function testing (event) {
        var name = document.getElementById("test").value;
        var message = "Hello " + name;
        if (name === "axe") {
           // document.getElementById("send").textContent = message;
            // document.getElementById("wel").innerHTML = "<h2>" + message + "</h2>";
            var test = document.querySelector("#test").textContent;
            test += "ultra!";
            document.getElementById("tast").textContent = test;
        };
    };
    
    // document.querySelector('button').addEventListener("click", testing);
    document.querySelector("button").onclick = testing;


    document.querySelector("body").addEventListener("mousemove",
    function (event) {
        if (event.shiftKey === true) {
            console.log("x: " + event.clientX + " & y: " + event.clientY);
        }
    })
});