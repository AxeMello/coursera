function compare (x, y) {
    return x > y;
}
var x = compare (5,3);

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
