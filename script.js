var namee = [];
var costt = [];
$(".first-add").click(function() {
    var cost = $(".cost").val();
    var name = $(".name").val();
    $(".cart").append("<li>" + name + " and " + cost + "</li>");
    namee.push(name);
    costt.push(cost);
});
$(".checkout").click(function() {
    var total = 0;
    costt.forEach(function(element){
        console.log(element);
        parseInt(element);
        total = total + parseInt(element);
        
        
    });
    $(".message").text("Don't tell your friend's you owe, $" + total);
});



// var prices = [];
// var totalprice = 0;
// var priceasanumber = parseInt;
// prices.forEach(function() {
// totalprice = totalprice + price as a number;
// });