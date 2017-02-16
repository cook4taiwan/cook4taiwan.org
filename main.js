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
});



