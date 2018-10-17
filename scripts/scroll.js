$(document).ready(function(){
    $(window).scroll(function(){
       
        ShowBoiteIfScrollPast150Px();
        
    });
    
});

function ShowBoiteIfScrollPast150Px()
{
    if($(document).scrollTop() > 150)
           $('.boite').addClass('show')
}