$(document).ready(function(){
    alert("aaa");
    
    $("form").submit(function(event){
        event.preventDefault();
        
        var birthday = $("#bday").val();
        var months = ["Jan", "Feb", 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
        var today = new Date();
        
        if(birthday == 0) {
            $("#bdayBanner").text("You were never born ... ");
        } 
        
        
        
        
        else {
        
            
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