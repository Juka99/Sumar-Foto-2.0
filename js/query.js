$(document).ready(function(){

    $('.triggerNav').on('click',function(){
        $('.sideNav').toggleClass('sideNav1');
    });

    $('.sideArrow').on('click',function(){
        $('.sideNav').toggleClass('sideNav1');
    });

    $('.sider').on('click',function(){
        $('.sideNav').toggleClass('sideNav1');
    });

    $(window).scroll(function(){
        const scroll = $(window).scrollTop();
        if(scroll > 50){
            $('nav').css('background','#141414');
            $('.mainLogo').css('width','130px');
        }
    
        else{
            $('nav').css('background','transparent');
            $('.mainLogo').css('width','150px');
        }
    });

    var images = ['cover.jpg', 'cover1.JPG', 'cover2.jpg', 'cover3.jpeg', 'cover4.jpg'];
    $('main').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});

   /* $(window).scroll(function () {
        var hT = $('.sec3').offset().top,
          hH = $('.sec3').outerHeight(),
          wH = $(window).height(),
          wS = $(this).scrollTop();
        if (wS > (hT + hH - wH)) {
          $('.outer').css('transform', 'rotateY(0deg)');
        }
      }); */

});