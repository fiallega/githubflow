var greeting = function(greet, person){
    console.log("hello " + person + " " + greet);
};

var periodInDay = function(){
    var periods = ["morning", "afternoon", "night"];
    var time = new Date().getTime();

    return periods[0];
};
