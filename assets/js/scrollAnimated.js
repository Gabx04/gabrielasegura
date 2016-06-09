var $isAnimatedSecond = $('.second .aScroll'),
    $isAnimatedSecondSingle = $('.second .aScroll-tittle');
 
/* this code is part of the onLeave callback */   
if( index == 1 && nextIndex == 2 ) {
    $isAnimatedSecond.addClass('animated fadeInUpBig'); 
    $isAnimatedSecond.eq(0).css('animation-delay', '.3s');
    $isAnimatedSecond.eq(1).css('animation-delay', '.6s');
    $isAnimatedSecond.eq(2).css('animation-delay', '.9s');
    $isAnimatedSecondSingle.addClass('animated rollIn').css('animation-delay', '1.7s');
}
