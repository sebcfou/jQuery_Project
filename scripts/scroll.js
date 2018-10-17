$(document).ready(function(){
    $(window).scroll(function(){
       
        ShowBoiteIfScrollPast160Px();
        
    });
    
});

function ShowBoiteIfScrollPast150Px()
{
    if($(document).scrollTop() > 160)
           $('.boite').addClass('show')
}