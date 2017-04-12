$(document).ready(function(){
    
    
    
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


