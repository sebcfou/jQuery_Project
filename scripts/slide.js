$(document).ready(function(){
    $('.up').click(function(){
        SlideUp();
    });
    $('.down').click(function(){
        SlideDown();
    });
    $('.slide').click(function(){
        SlideToggle();
    });
});

function SlideUp(){
    $('.box').slideUp(3000);
}

function SlideDown(){
    $('.box').slideDown(1000);
}

function SlideToggle(){
    $('.box').slideToggle(1000);
}