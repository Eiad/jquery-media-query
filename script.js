$(document).ready(function() {
    var a = $("#dom-element"); //Create a variable with the DOM element you want to do whatever.
    var b = $(window).width();
    if (b >= 100 && b <= 1025) { //This our min and max breakpoints you want to fire this only within.
        a.removeClass("class1").addClass("class2")
    }
});