//低版本浏览器效果
$(function(){

  //配置整屏滚动参数
  var homeSwiper = new Swiper ('.home-swiper', {
    mode : 'vertical',
    loop: false,
    speed: 1000,
    mousewheelControl : true,
    simulateTouch: false,
    pagination: '.swiper-pagination',
    createPagination :true,
    paginationClickable :true,
    releaseFormElements:true,
    onSlideChangeStart: function(swiper){

      var sIndex = swiper.activeIndex;
      $(".top-ul>li").removeClass("active");
      $(".top-ul>li:eq("+sIndex+")").addClass("active");
      //到第三屏时 启动自动播放
      if (sIndex == "2") {
        applicationSwiper.swipeTo(0, 1000, true);
        applicationSwiper.startAutoplay();
      }

    }
  });


  //配置banner轮播参数
  var bannerSwiper = new Swiper ('.banner-swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay : 4000,
    speed: 1000,
    simulateTouch : false
  });

  //配置应用参数
  var applicationSwiper = new Swiper ('.application-swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay : 4000,
    speed: 600,
    effect : 'fade',
    simulateTouch : false,
    onSlideChangeStart: function(swiper){
      var sIndex = swiper.activeLoopIndex;
      $(".application-style>li").removeClass("active");
      $(".application-style>li:eq("+sIndex+")").addClass("active");
    }
  });

  //点击顶部导航跳到相应的板块
  $(document).on("click",".home-btn",function(){
    homeSwiper.swipeTo(0, 1000, true);
  })
  .on("click",".technology-btn",function(){
    homeSwiper.swipeTo(1, 1000, true);
  })
  .on("click",".application-btn",function(){
    homeSwiper.swipeTo(2, 1000, true);
  })
  .on("click",".company-btn",function(){
    homeSwiper.swipeTo(3, 1000, true);
  })
  .on("click",".platform-btn",function(){
    homeSwiper.swipeTo(4, 1000, true);
  });

  //切换应用领域
  $(document).on("click",".traffic-icon",function(){
    applicationSwiper.swipeTo(0, 1000, true);
    applicationSwiper.stopAutoplay();
  })
  .on("click",".checkface-icon",function(){
    applicationSwiper.swipeTo(1, 1000, true);
    applicationSwiper.stopAutoplay();
  })
  .on("click",".shoushi-icon",function(){
    applicationSwiper.swipeTo(2, 1000, true);
    applicationSwiper.stopAutoplay();
  })
  .on("click",".jiqiren-icon",function(){
    applicationSwiper.swipeTo(3, 1000, true);
    applicationSwiper.stopAutoplay();
  });

})
