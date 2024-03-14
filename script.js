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