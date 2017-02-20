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
    
    
    
    
});



