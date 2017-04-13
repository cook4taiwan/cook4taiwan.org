$(document).ready(function(){
    
    
    
    function getRandomInt(max,min)  {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    var advice = ["Good choice!",
                  "Are you kidding me?",
                  "I am starving fot that too!",
                  "I believe you deserve better.",
                  "Seems delicious.",
                  "No! Bad!",
                  "Good! Go ahead.",
                  "You should choose something healthier.",
                  "Ok.",
                  "You are having lunch, not trash.",
                  "Your cat said it's not good but acceptable, meow.",
                  "That is totally unacceptable.",
                  "Terrific!",
                  "Gross. ಠ__ಠ",
                  "...... ok. Better than eating nothing.",
                  "It's not health!"]
    
    $("form").submit(function(event){
        event.preventDefault();
        
        var lunch = "You want " + $("#lunch").val().replace(/^\s+|\s+$/g, "") + "?";
        
        $("#food_repeater").text(lunch);
        $("#advice").text(advice[Math.floor(Math.random()*16)]);
        $("#lunch").val("");
    });


});


