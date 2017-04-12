$(document).ready(function(){
    
    function randomColor (){
        return "#" + Math.random().toString(16).slice(2,8);
    };
    
    $("#button").click(function(){
        $("body").css("background-color",randomColor());
            
    });
    
    
    $("#red").click(function(){
        $(".row").click(function(){
            $(this).css("background-color","#cc0000"); 
        })    
    });
    
    $("#yellow").click(function(){
        $(".row").click(function(){
            $(this).css("background-color","#ffec00"); 
        })    
    });
    
    $("#blue").click(function(){
        $(".row").click(function(){
            $(this).css("background-color","#0000cc"); 
        })    
    });
    
    $("#white").click(function(){
        $(".row").click(function(){
            $(this).css("background-color","white"); 
        })    
    });
    
    
    $(".box").mouseenter(function(){
        $(this).css("background-color",randomColor());
        $(this).css("box-shadow","0 0 8px white");    
    });
    $(".box").mouseleave(function(){
        $(this).css("box-shadow","none");
    });
    
    var animations = ["shake",
                     "grow",
                     "hooray",
                     "spin",
                     "hop"]
    
    function getRandomInt(max,min)  {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    
    
    $(".sushi").click(function(){
            
        var animation = animations[getRandomInt(4,0)];
        var sushi = this;
        
        $(sushi).addClass(animation);
        
        setTimeout(function(){
            $(sushi).removeClass(animation);
        },2100);
    });
    
    $(".pip4").hide();
    $("#shaker").mousedown(function(){
        $(this).addClass("btn_down");
        $(this).removeClass("btn_up");
    });
    $("#shaker").mouseup(function(){
        $(this).removeClass("btn_down");
        $(this).addClass("btn_up");
    });
    $("#shaker").click(function(){
        $("h1").text("Shake, shake, shake ...");
        $("h1").addClass("shake");
        
        setTimeout(function(){
            
            var roll1 = makeDiceFace("#dice1");
            var roll2 = makeDiceFace("#dice2");
            
            $("h1").removeClass("shake");
            
            if (roll1 + roll2 == 2) {
                $("h1").text("Snake eyes!")
            } else {
                $("h1").text(roll1 + roll2);
            }
            
        },500);
    
    
    function makeDiceFace(dieId) {
        var roll = Math.floor(Math.random() * 6 + 1);
        var all = dieId + " .pip";
        var pip_1 = dieId + "_pip_1";
        var pip_2 = dieId + "_pip_2";
        var pip_3 = dieId + "_pip_3";
        var pip_4 = dieId + "_pip_4";
        var pip_5 = dieId + "_pip_5";
        var pip_6 = dieId + "_pip_6";
        var pip_7 = dieId + "_pip_7";
        
        
        if (roll == 1) {
            $(all).hide();
            $(pip_4).show();
        }
        if (roll == 2) {
            $(all).hide();
            $(pip_1).show();
            $(pip_7).show();
        }
        if (roll == 3) {
            $(all).hide();
            $(pip_4).show();
            $(pip_1).show();
            $(pip_7).show();
        }
        if (roll == 4) {
            $(all).hide();
            $(pip_1).show();
            $(pip_3).show();
            $(pip_5).show();
            $(pip_7).show();
        }
        if (roll == 5) {
            $(all).hide();
            $(pip_4).show();
            $(pip_1).show();
            $(pip_3).show();
            $(pip_5).show();
            $(pip_7).show();
        }
        if (roll == 6) {
            $(all).show();
            $(pip_4).hide();
        }
        return roll;
    }
    
    });
    
    
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
    
    $("form").submit(function(event){
        event.preventDefault();
        
        var birthday = $("#bday").val();
        var months = ["Jan", "Feb", 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
        var today = new Date();
        
        
        if(birthday == 0) {
            $("#bdayBanner").text("You were never born ... ");
        } else {
            
            if(birthday.indexOf("/") >= 0 ) {
                birthday = birthday.split("/");
                var year  = birthday[2];
				var month = (birthday[0])-1;
                var day   = birthday[1];
					
            } else {
				birthday = birthday.split('-');   
                var year  = birthday[0];
                var month = (birthday[1])-1;
                var day   = birthday[2];		
            };
            
            
            
            var bday = new Date(year, month, day);
            
            if (today.getMonth() == bday.getMonth() && today.getDate() == bday.getDate()) {
                $("#bdayBanner").text("Today's your birthday?!");
                
                if(bday.getMonth() + 1 == "1" &&　bday.getDate() == "10") {
                    $("#happyBday").text("叔叔生日快樂!!!");
                }　else if (bday.getMonth() + 1 == "3" &&　bday.getDate() == "8") {
                    $("#happyBday").text("皓皓生日快樂!!!");
                } else if (bday.getMonth() + 1 == "6" &&　bday.getDate() == "3") {
                    $("#happyBday").text("鈣鈣生日快樂!!!");
                } else if (bday.getMonth() + 1 == "8" &&　bday.getDate() == "27") {
                    $("#happyBday").text("俊俊生日快樂!!!");
                } else if (bday.getMonth() + 1 == "7" &&　bday.getDate() == "7") {
                    $("#happyBday").text("阿雪生日快樂!!!");
                } else if (bday.getMonth() + 1 == "8" &&　bday.getDate() == "3") {
                    $("#happyBday").text("玄如生日快樂!!!");
                }
                
                else {
                    $("#happyBday").text("Happy Birthday!!!");
                };
                
                
            } else {
                $("#bdayBanner").text("Your birthday is " + months[month] + " " + day + ".");
                
                if(bday.getMonth() + 1 == "1" &&　bday.getDate() == "10") {
                    $("#happyBday").text("You are Shaune's boyfriend!");
                }　else if (bday.getMonth() + 1 == "3" &&　bday.getDate() == "8") {
                    $("#happyBday").text("景皓是你");
                } else if (bday.getMonth() + 1 == "6" &&　bday.getDate() == "3") {
                    $("#happyBday").text("Mary, you are a nice 鈣.");
                } else if (bday.getMonth() + 1 == "8" &&　bday.getDate() == "27") {
                    $("#happyBday").text("創辦人，是你嗎?!!!");
                } else if (bday.getMonth() + 1 == "7" &&　bday.getDate() == "7") {
                    $("#happyBday").text("I guess you are 雪菁.");
                } else if (bday.getMonth() + 1 == "8" &&　bday.getDate() == "3") {
                    $("#happyBday").text("You are Andy's girlfriend!");
                } else {
                    $("#happyBday").text("");
                }:
            }:
        };

    });

});


