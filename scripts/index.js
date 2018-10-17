$(document).ready(function(){
    $('button').click(function(){
        //$('.box:last').toggle(); //show or hide based on current status
        //$('.box').text("This text is coing from JQuery");
        //$('.box').html("<h1>This text is coing from JQuery</h1>");
        //ChangeColorAndHideFirstBox();
        //ChangeColorAndHideFirstBoxChainingMethod();
        //AppendPrependAfterBefore();
        ChangeCss();
        ChangeImage();
        Fade();
    });
});

$(document).ready(function(){
    $('button').hover(function(){HideImage();},
                        function(){ ShowImage();}
    );
});

$(document).ready(function(){
    $('button').hover(function(){ 
        $('.box:last').append("hello world"); // will append everytime mouse hovers
    });
});

function Fade()
{
    //$('.fadeOutBox').fadeOut(2000).fadeIn(2000);
    $('.fadeOutBox').fadeToggle(2000);
}

function HideImage()
{
    $('img').hide(2000);
}
function ShowImage()
{
    $('img').show(2000);
}

function ChangeImage()
{
    $('img').removeAttr("src");
    $('img').attr("src","img/you.jpeg");
}

function ChangeCss()
{
    //$('.box:first').css("PROPERTY","VALUE");
    $('.box:first').css("color","orange");
    //$('.box:first').css({"PROPERTY":"VALUE","PROPERTY":"VALUE"});
    $('.box:last').css({"color":"orange","border":"2px solid orange"});
    // add new class
    //$('.box:even').addClass("color");
    $('.box:even').toggleClass("color");
}

function AppendPrependAfterBefore()
{
    $('.box:first').append("<h3>this is JQuery Text</h3>");
    $('.box:last').prepend("<h3>this is JQuery Text</h3>");
    $('.box:even').after("<h3>added after even boxes by JQuery</h3>");
    $('.box:odd').before("<h3>added before odd boxes by JQuery</h3>");
}


function ChangeColorAndHideFirstBox()
{
    $('.box:first').css("color","orange");
    $('.box:first').css("border","2px solid orange");
    $('.box:first').hide(2000);
}

// same method as above using Chaining
function ChangeColorAndHideFirstBoxChainingMethod()
{
    $('.box:first').css("color","orange").css("border","2px solid orange").hide(2000);
}