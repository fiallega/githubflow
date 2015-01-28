/**
  * this greeting function takes params greet and person
  * and it greets you.
  *
  */
var greeting = function(greet, person){
    console.log("hello " + person + " " + greet);
};

var periodInDay = function(){
    var periods = ["morning", "afternoon", "night"];
    var time = new Date().getTime();

    return periods[1];
};
