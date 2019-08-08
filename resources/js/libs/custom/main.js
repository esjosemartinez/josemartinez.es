var container = $('.container');

var link = $('.link');

var navOpen = false;
var navMain = $('.main-nav');
var navIcon = $('.main-nav-icon');
var navText = $('.main-nav-text');

var scrollTop = $(window).scrollTop();

// HOME


$(document).ready(function () {
    container.fadeIn(400,function(){

    });
    
    link.on('click', function(){
        container.fadeOut(200,function(event){
            event.preventDefault();
            window.location = this.attr('href');
        });
    });

    navIcon.on('click', function(event){
        event.preventDefault();
        if(navOpen){
            closeNav();
        }else{
            openNav();
        }
       console.log('Main NAV: '+navOpen);
    });
});
function openNav(){
    navText.delay(1000).addClass('visible');
    $('body').addClass('main-nav-open').delay(500).queue(function(){
        $(this).addClass('main-nav-open-content').dequeue();
    });
    navOpen = true;
}
function closeNav(){
    navText.removeClass('visible');
    $('body').removeClass('main-nav-open main-nav-open-content').delay(400).queue(function(){
        $(this).removeClass('main-nav-open-content').dequeue();
    });
    navOpen = false;
}
$(window).on('scroll', function(){    
    scrollTop = $(window).scrollTop();
    if (scrollTop >= 5) {
        $('body').addClass('on-scroll');
    } else {
        $('body').removeClass('on-scroll');
    }
});
$(window).on('resize', function(){    
    closeNav();
});