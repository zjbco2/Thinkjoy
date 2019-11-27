//高级浏览器效果
$(function(){
  var sWidth = $(document).width();
  if (sWidth>1450) {
    //配置粒子效果参数
    var config = {
        vx: 3,//点x轴速度,正为右，负为左
        vy:  3,//点y轴速度
        height: 2,//点高宽，其实为正方形，所以不宜太大
        width: 2,
        count: 120,//点个数
        color: "255,255,255",//点颜色
        stroke: "255,255,255",//线条颜色
        dist: 15000,//点吸附距离
        e_dist: 20000,//鼠标吸附加速距离
        max_conn: 20//点到点最大连接数
    }
    //创建粒子效果canvas
    CanvasParticle(config);
  }
  if (sWidth<=1450 && sWidth>1024) {
    var config = {
        vx: 3,
        vy:  3,
        height: 2,
        width: 2,
        count: 90,
        color: "255,255,255",
        stroke: "255,255,255",
        dist: 6000,
        e_dist: 15000,
        max_conn: 15
    }
    CanvasParticle(config);
  }

  //配置整屏滚动参数
  var homeSwiper = new Swiper ('.home-swiper', {
    direction : 'vertical',
    loop: false,
    speed: 1000,
    hashnav:true,
    mousewheelControl : true,
    simulateTouch: false,
    pagination: '.swiper-pagination',
    createPagination :true,
    paginationClickable :true,
    releaseFormElements:true,
    onTransitionStart: function(swiper){

      var sIndex = swiper.activeIndex;
      $(".top-ul>li").removeClass("active");
      //返回到第一屏是去除导航条白底，其他情况添加白底
      if (sIndex == "0") {
        if ($(".topnav-white").length>0) {
          $(".topnav").removeClass("topnav-white");
          $(".banner-pagination").removeClass("white-bg");
        }
      }
      else if (sIndex != "0") {
        if ($(".topnav-white").length==0) {
          $(".topnav").addClass("topnav-white");
        }
        $(".top-ul>li:eq("+sIndex+")").addClass("active");
        $(".banner-pagination").addClass("white-bg");
      }

      //到第二屏时 执行动效
      if (sIndex == "1") {
        var $content = $(".technology-box .box-content");
        if (!$content.hasClass("fadeInUp")) {
          $content.addClass("fadeInUp animated duration1 delay2");
        }
      }

      //到第三屏时 启动自动播放
      if (sIndex == "2") {
        var $content = $(".application-block1 .application-content");
        if (!$content.hasClass("fadeInUp")) {
          $content.addClass("fadeInUp animated duration1 delay2");
        }
      }

      //到第四屏时 执行动效
      if (sIndex == "3") {
        var $content1 = $(".company-box .box-content>p");
        var $content2 = $(".company-box .box-content .company-advantage");
        if (!$content1.hasClass("fadeInUp")) {
          $content1.addClass("fadeInUp animated duration1 delay1");
          $content2.addClass("fadeInUp animated duration1 delay2");
        }
      }

      //到第五屏时 执行动效
      if (sIndex == "4") {
        var $content1 = $(".platform-box .box-content>p");
        var $content2 = $(".platform-box .box-content .platform-server");
        if (!$content1.hasClass("fadeInUp")) {
          $content1.addClass("fadeInUp animated duration1 delay1");
          $content2.addClass("fadeInUp animated duration1 delay2");
        }
      }

      //到第六屏时 启动自动播放
      if (sIndex == "5") {
        var $content = $(".contact-box .contact-block");
        if (!$content.hasClass("zoomIn")) {
          $content.addClass("zoomIn animated duration1 delay2");
        }
      }

    }
  });

  //配置banner轮播参数
  var bannerSwiper = new Swiper ('.banner-swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay : 5000,
    speed: 700,
    effect : 'fade',
    simulateTouch : false,
  })

  //配置应用参数
  var applicationSwiper = new Swiper ('.application-swiper', {
    direction: 'horizontal',
    mousewheelControl : true,
    mousewheelReleaseOnEdges : true,
    speed: 800,
    simulateTouch : false,
    onTransitionStart: function(swiper){
      var sIndex = swiper.activeIndex;
      $(".application-style>li").removeClass("active");
      // if (sIndex == "0") {
      //   homeSwiper.enableMousewheelControl();
      // }
      // else if (sIndex == "4") {
      //   homeSwiper.enableMousewheelControl();
      // }
      // else {
      //   homeSwiper.disableMousewheelControl();
      // }
      $(".application-style>li:eq("+sIndex+")").addClass("active");
    }
  })

  //点击顶部导航跳到相应的板块
  $(document).on("click",".home-btn",function(){
    homeSwiper.slideTo(0, 1000, true);
    homeSwiper.enableMousewheelControl();
  })
  .on("click",".technology-btn",function(){
    homeSwiper.slideTo(1, 1000, true);
    homeSwiper.enableMousewheelControl();
  })
  .on("click",".application-btn",function(){
    homeSwiper.slideTo(2, 1000, true);
    applicationSwiper.slideTo(0, 1000, true);
  })
  .on("click",".company-btn",function(){
    homeSwiper.slideTo(3, 1000, true);
    homeSwiper.enableMousewheelControl();
  })
  .on("click",".platform-btn",function(){
    homeSwiper.slideTo(4, 1000, true);
    homeSwiper.enableMousewheelControl();
  });

  //切换应用领域
  $(document).on("click",".traffic-icon",function(){
    applicationSwiper.slideTo(0, 1000, true);
  })
  .on("click",".checkface-icon",function(){
    applicationSwiper.slideTo(1, 1000, true);
  })
  .on("click",".shoushi-icon",function(){
    applicationSwiper.slideTo(2, 1000, true);
  })
  .on("click",".jiqiren-icon",function(){
    applicationSwiper.slideTo(3, 1000, true);
  });

  //控制应用板块切换过于灵敏问题
  $('.application-box').bind('mousewheel', function(event, delta) {
    var dir = delta > 0 ? 'Up' : 'Down';
    if (dir == 'Up') {
      if (applicationSwiper.activeIndex == 0) {
        homeSwiper.enableMousewheelControl();
      }
      else {
        homeSwiper.disableMousewheelControl();
      }
    } else {
      if (applicationSwiper.activeIndex == 0) {
        homeSwiper.disableMousewheelControl();
      }
      else if (applicationSwiper.activeIndex == 3) {
        homeSwiper.enableMousewheelControl();
      }
      else{
        homeSwiper.disableMousewheelControl();
      }
    }
  });

})
