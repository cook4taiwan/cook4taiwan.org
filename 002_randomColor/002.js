$(document).ready(function(){
    
    function randomColor (){
        return "#" + Math.random().toString(16).slice(2,8);
    };
    
    
    $(".box").mouseenter(function(){
        $(this).css("background-color",randomColor());
        $(this).css("box-shadow","0 0 8px white");    
    });
    $(".box").mouseleave(function(){
        $(this).css("box-shadow","none");
    });
    


});


