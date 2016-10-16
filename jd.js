var i= 0;
var timer;
$(function() {
    $('.ig').eq(0).show().siblings('a').hide();
    ShowTimer();

    $('.tab').hover(function () {
        i = $(this).index();
        Show();
        clearInterval(timer);
    }, function () {
        ShowTimer();
    });

    $('.btn1').click(function () {
        clearInterval(timer);
        if (i == 0) {
            i = 6;
        }
        i--;
        Show();
        ShowTimer();
    });

    $('.btn2').click(function () {
        clearInterval(timer);
        if (i == 5) {
            i = -1;
        }
        i++;
        Show();
        ShowTimer();
    });

    $('.showhow').children('li').hover(function(){
        $('.showhow').siblings('.to').show();
    },function(){
        $('.showhow').siblings('.to').hide();
    });
});

function Show(){
    $('.ig').eq(i).fadeIn(300).siblings('a').fadeOut(300);
    $('.tab').eq(i).addClass('bg').siblings().removeClass('bg');
}

function ShowTimer(){
    timer = setInterval(function(){
        i++;
        if(i==6){
            i=0;
        }
        Show();
    },4000);
}