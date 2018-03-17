//轮播
$(function(){
  //第一张显示
  $(".wrap-lists li").eq(0).show();
  //鼠标滑过手动切换，淡入淡出
  $("#position li").mouseover(function() {
    $(this).addClass('cur').siblings().removeClass("cur");
    var index = $(this).index();
    i = index;//不加这句有个bug，鼠标移出小圆点后，自动轮播不是小圆点的后一个
    // $(".pic li").eq(index).show().siblings().hide();
    $(".wrap-lists li").eq(index).fadeIn(500).siblings().fadeOut(500);
  });
  //自动轮播
  var i=0;
  var timer=setInterval(play,2000);
  //向右切换
  var play=function(){
    i++;
    i = i > 2 ? 0 : i ;
    $("#position li").eq(i).addClass('cur').siblings().removeClass("cur");
    $(".wrap-lists li").eq(i).fadeIn(500).siblings().fadeOut(500);
  }
  //向左切换
  var playLeft=function(){
    i--;
    i = i < 0 ? 2 : i ;
    $("#position li").eq(i).addClass('cur').siblings().removeClass("cur");
    $(".wrap-lists li").eq(i).fadeIn(500).siblings().fadeOut(500);
  }
  //鼠标移入移出效果
  $(".wrap-items").hover(function() {
    clearInterval(timer);
  }, function() {
    timer=setInterval(play,2000);
  });
  //左右点击切换
  $("#prev").click(function(){
    playLeft();
  })
  $("#next").click(function(){
    play();
  })
}

//二级菜单切换
$(function () {
  $('.lists>li').hover(function () {
    $(this).addClass('on')
    $(this).find('.list-1').css({display: 'block'})
    $(this).find('.menu-img2').css({display: 'block'})
    $(this).find('.menu-img1').css({display: 'none'})

  }, function () {
    $(this).removeClass('on')
    $(this).find('.list-1').css({display: 'none '})
    $(this).find('.menu-img2').css({display: 'none'})
    $(this).find('.menu-img1').css({display: 'block'})
  })
})