$(document).ready(function(){
    
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

});


