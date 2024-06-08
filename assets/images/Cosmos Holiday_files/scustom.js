(function() {


/*
  let paginationSection = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }
  let paginationContent = new Swiper(".newpackagePromoRight", paginationSection);
*/

  let b2cMainSliderOption = {
    parallax: true,
    effect: 'fade',
    speed: 5000,
    loop: true,
    slidesPerView:'auto',
    allowTouchMove: false,
    disableOnInteraction: true,
    loopedSlides: 4,
    observer: true,
    observeParents: true,
    autoplay: {
      enabled: true,
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }
  let b2cMainSlider = new Swiper(".b2cMainSlider", b2cMainSliderOption);


  let b2bMainSliderOption = {
    parallax: true,
    effect: 'fade',
    speed: 5000,
    loop: true,
    slidesPerView:'auto',
    allowTouchMove: false,
    disableOnInteraction: true,
    loopedSlides: 4,
    observer: true,
    observeParents: true,
    autoplay: {
      enabled: true,
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }
  let b2bMainSlider = new Swiper(".b2bMainSlider", b2bMainSliderOption);


  let thumbSlidersOption = {
    slidesPerView: 4,
    spaceBetween: 25,
    direction: "horizontal",
    speed: 400,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    allowTouchMove: false,
    disableOnInteraction: true,
    loopedSlides: 4,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".upk-button-next",
      prevEl: ".upk-button-prev",
    },
    breakpoints: {
      575: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1366: {
        slidesPerView: 4
      },
    }
  }

  let thumbSliders = new Swiper(".thumbSliders", thumbSlidersOption);

  let b2bPromoSLiderOption = {
    slidesPerView: 1,
    spaceBetween: 25,
    direction: "horizontal",
    speed: 400,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    allowTouchMove: false,
    disableOnInteraction: true,
    loopedSlides: 4,
    observer: true,
    observeParents: true,
    autoplay: {
      enabled: true,
      delay: 10000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }
  let b2bPromoSlider = new Swiper(".mySwiperPromo", b2bPromoSLiderOption);


  // let packagePromoSLiderOption = {
  //   slidesPerView: 1,
  //   spaceBetween: 25,
  //   direction: "horizontal",
  //   speed: 400,
  //   touchRatio: 0.2,
  //   slideToClickedSlide: true,
  //   loop: true,
  //   allowTouchMove: false,
  //   disableOnInteraction: true,
  //   loopedSlides: 4,
  //   observer: true,
  //   observeParents: true,
  //   autoplay: {
  //     enabled: true,
  //     delay: 10000,
  //   },
  //   navigation: {
  //     nextEl: '.package-top-slider .swiper-button-next',
  //     prevEl: '.package-top-slider .swiper-button-prev',
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true
  //   },
  // }
  // let packagePromoSlider = new Swiper(".packagePromo", packagePromoSLiderOption);


/*  let newpackagePromoSLiderOption = {
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    observer: true,
    observeParents: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".newpackage-desc-item .swiper-pagination",
      clickable: true
    },
  }
  let newpackagePromoSlider = new Swiper(".newpackagePromo", newpackagePromoSLiderOption);*/

  // let newpackagePromotional1= {
  //   slidesPerView: 1,
  //   speed: 1000,
  //   loop: true,
  //   observer: true,
  //   observeParents: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false,
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next.p1',
  //     prevEl: '.swiper-button-prev.p1',
  //   },
  // }
  // let newpackagePromotional1Slider = new Swiper(".newpackage-promotional1", newpackagePromotional1);


/*
  var swiper = new Swiper(".newpackage-promotional1", {
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    observer: true,
    observeParents: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: '.swiper-button-next.p1',
      prevEl: '.swiper-button-prev.p1',
    },
  });
*/



  let newpackagePromotional2= {
    slidesPerView: 1,
    spaceBetween: 25,
    direction: "horizontal",
    speed: 400,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    allowTouchMove: false,
    disableOnInteraction: true,
    loopedSlides: 4,
    observer: true,
    observeParents: true,
    autoplay: {
      enabled: true,
      delay: 10000,
    },
    navigation: {
      nextEl: '.newpackage-promotional2 .swiper-button-next',
      prevEl: '.newpackage-promotional2 .swiper-button-prev',
    },
  }
  let newpackagePromotional2Slider = new Swiper(".newpackage-promotional2", newpackagePromotional2);


/*
  let newpackagePromotional3= {
    slidesPerView: 1,
    spaceBetween: 25,
    direction: "horizontal",
    speed: 400,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    allowTouchMove: false,
    disableOnInteraction: true,
    loopedSlides: 4,
    observer: true,
    observeParents: true,
    autoplay: {
      enabled: true,
      delay: 10000,
    },
    navigation: {
      nextEl: '.newpackage-promotional3 .swiper-button-next',
      prevEl: '.newpackage-promotional3 .swiper-button-prev',
    },
  }
  let newpackagePromotional3Slider = new Swiper(".newpackage-promotional3", newpackagePromotional3);

*/


  // let footerSliderOptions = {
  //   spaceBetween: 10,
  //   observer: true,
  //   observeParents: true,
  //   centeredSlides: true,
  //   speed: 6000,
  //   autoplay: {
  //     delay: 1,
  //   },
  //   loop: true,
  //   slidesPerView:'auto',
  //   allowTouchMove: false,
  //   disableOnInteraction: true,
  //   // breakpoints: {
  //   //   575: {
  //   //     slidesPerView: 1,
  //   //     spaceBetween: 20
  //   //   },
  //   //   768: {
  //   //     slidesPerView: 2,
  //   //   },
  //   //   1024: {
  //   //     slidesPerView: 3,
  //   //   },
  //   // }
  // }
  // let footerSlider = new Swiper(".swiper--top", footerSliderOptions);

  let popularOptions = {
    slidesPerView: 2,
    spaceBetween: 15,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      200:{
        slidesPerView: 1,
        spaceBetween: 20
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 1,
      },
      1200:{
        slidesPerView: 2,
      }
    }
  }
  let popularSlider = new Swiper(".popular-container", popularOptions);


  let latestOptions = {
    slidesPerView: 2,
    spaceBetween: 15,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      200:{
        slidesPerView: 1,
        spaceBetween: 20
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 1,
      },
      1200:{
        slidesPerView: 2,
      }
    }
  }
  let latestSlider = new Swiper(".latest-container", latestOptions);



  let airlineOptions = {
    slidesPerView: 5,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      575: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  }
  let airlineSlider = new Swiper(".airline-filter .swiper", airlineOptions);


  let partnersOptions = {
    slidesPerView: 4,
    spaceBetween: 10,
    direction: "horizontal",
    speed: 400,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      575: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  }
  let partnersSlider = new Swiper(".partners .swiper", partnersOptions);



//================Hotel Details Slider=====================//
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 6,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });

  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

  var rAF;

  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    particles = [],
    mouseX = 0,
    mouseY = 0,
    total = 15,
    followSpeed = 0.1,
    size = 25;

  document.body.addEventListener("mousemove", function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  window.addEventListener('resize', function () {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  function init() {
    cancelAnimationFrame(rAF);

    particles = [];

    for (var i = 0; i < total; i += 1) {
      particles.push(new Particle(i));
    }

    draw();
  }

  function draw() {
    context.clearRect(0, 0, width, height);

    for (var i = 0; i < total; i += 1) {
      particles[i].update();
    }

    rAF = requestAnimationFrame(draw);
  }


  /**
   * Particle
   */
  var Particle, p;

  Particle = function (index) {
    this.initialize(index);
  };

  p = Particle.prototype;

  p.initialize = function (index) {
    this.x = -50;
    this.y = height;
    this.id = index + 1;
    this.angleX = Math.PI * 2 * Math.random();
    this.angleY = Math.PI * 2 * Math.random();
    this.speedX = .03 * Math.random() + .03;
    this.speedY = .03 * Math.random() + .03;
    this.radius = 150;

    return this;
  };

  p.update = function () {
    var aim, dx, dy, scale, angle;

    if (this.id > 1) {
      aim = particles[this.id - 1 - 1];
      dx = aim.x - this.x;
      dy = aim.y - this.y;

      this.x += dx * con.speed;
      this.y += dy * con.speed;
    } else {
      if (mouseX === 0 && mouseY === 0) {
        dx = width / 2 + Math.cos(this.angleX) * this.radius - this.x;
        dy = height / 2 + Math.sin(this.angleY) * this.radius - this.y;

        this.x = width / 2 + Math.cos(this.angleX) * this.radius;
        this.y = height / 2 + Math.sin(this.angleY) * this.radius;

        this.angleX += this.speedX;
        this.angleY += this.speedY;

      } else {
        dx = mouseX - this.x;
        dy = mouseY - this.y;

        this.x += dx * con.speed;
        this.y += dy * con.speed;
      }
    }

    angle = Math.atan2(dy, dx);
    scale = Math.cos(Math.PI / 2 * (this.id / total));

    context.save();
    context.translate(this.x, this.y);
    context.rotate(angle);
    context.scale(scale, scale);

    context.beginPath();
    context.moveTo(-size / 2 * 1.732, -size / 2);
    context.lineTo(0, 0);
    context.lineTo(-size / 2 * 1.732, size / 2);
    context.lineTo(-size / 2 * 1.2, 0);
    context.fillStyle = 'white';
    context.fill();

    context.restore();
  };

// control bar
  var ControlBar = function () {
    this.num = total;
    this.speed = followSpeed;
  };

  var con = new ControlBar();
  var gui = new dat.GUI();
  var conSpeed = gui.add(con, 'speed', 0.05, 0.25).step(0.05);
  var conNum = gui.add(con, 'num', 10, 30).step(1);

  conNum.onFinishChange(function (value) {
    total = value;
    init();
  });



})();



//
// (function() {
//   // Init
//   var container = document.getElementById("container"),
//     inner = document.getElementById("inner");
//
//   // Mouse
//   var mouse = {
//     _x: 0,
//     _y: 0,
//     x: 0,
//     y: 0,
//     updatePosition: function(event) {
//       var e = event || window.event;
//       this.x = e.clientX - this._x;
//       this.y = (e.clientY - this._y) * -1;
//     },
//     setOrigin: function(e) {
//       this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
//       this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
//     },
//     show: function() {
//       return "(" + this.x + ", " + this.y + ")";
//     }
//   };
//
//   // Track the mouse position relative to the center of the container.
//   mouse.setOrigin(container);
//
//   //----------------------------------------------------
//
//   var counter = 0;
//   var refreshRate = 10;
//   var isTimeToUpdate = function() {
//     return counter++ % refreshRate === 0;
//   };
//
//   //----------------------------------------------------
//
//   var onMouseEnterHandler = function(event) {
//     update(event);
//   };
//
//   var onMouseLeaveHandler = function() {
//     inner.style = "";
//   };
//
//   var onMouseMoveHandler = function(event) {
//     if (isTimeToUpdate()) {
//       update(event);
//     }
//   };
//
//   //----------------------------------------------------
//
//   var update = function(event) {
//     mouse.updatePosition(event);
//     updateTransformStyle(
//       (mouse.y / inner.offsetHeight / 2).toFixed(2),
//       (mouse.x / inner.offsetWidth / 2).toFixed(2)
//     );
//   };
//
//   var updateTransformStyle = function(x, y) {
//     var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
//     inner.style.transform = style;
//     inner.style.webkitTransform = style;
//     inner.style.mozTranform = style;
//     inner.style.msTransform = style;
//     inner.style.oTransform = style;
//   };
//
//   //--------------------------------------------------------
//
//   container.onmousemove = onMouseMoveHandler;
//   container.onmouseleave = onMouseLeaveHandler;
//   container.onmouseenter = onMouseEnterHandler;
// })();


// document.querySelector('[data-toggle]').addEventListener('click', function(){
//   if (swiper.realIndex == 0) {
//     swiper.slideTo(swiper.slides.length - 1);
//   } else {
//     swiper.slideTo(0);
//   }
// });

// function logIndex () {
//   requestAnimationFrame(logIndex);
//   console.log(swiper.realIndex);
// }
// logIndex();


// var swiper = new Swiper(".mySwiper", {
//   loop: true,
//   spaceBetween: 10,
//   slidesPerView: 4,
//   freeMode: true,
//   watchSlidesVisibility: true,
//   watchSlidesProgress: true,
// });
// var swiper2 = new Swiper(".mySwiper2", {
//   loop: true,
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   thumbs: {
//     swiper: swiper,
//   },
// });





// let interleaveOffset = 0.5;
// var swiper = new Swiper('.swiper.homepage', {
//
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 10000,
//     disableOnInteraction: false,
//   },
//   effect: 'fade',
//   cssMode: true,
//   mousewheel: true,
//   keyboard: true,
//   observer: true,
//   observeParents: true,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   }
// });
//
//


// let interleaveOffset = 0.5;
//
// let swiperOptions = {
//   loop: true,
//   speed: 5000,
//   grabCursor: true,
//   watchSlidesProgress: true,
//   mousewheelControl: true,
//   keyboardControl: true,
//   observer: true,
//   observeParents: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   },
//   on: {
//     progress: function () {
//       var swiper = this;
//       for (var i = 0; i < swiper.slides.length; i++) {
//         var slideProgress = swiper.slides[i].progress;
//         var innerOffset = swiper.width * interleaveOffset;
//         var innerTranslate = slideProgress * innerOffset;
//         swiper.slides[i].querySelector(".slide-inner").style.transform =
//           "translate3d(" + innerTranslate + "px, 0, 0)";
//       }
//     },
//     touchStart: function () {
//       var swiper = this;
//       for (var i = 0; i < swiper.slides.length; i++) {
//         swiper.slides[i].style.transition = "";
//       }
//     },
//     setTransition: function (speed) {
//       var swiper = this;
//       for (var i = 0; i < swiper.slides.length; i++) {
//         swiper.slides[i].style.transition = speed + "ms";
//         swiper.slides[i].querySelector(".slide-inner").style.transition =
//           speed + "ms";
//       }
//     }
//   }
// };

// var swiper = new Swiper(".swiper.homepage", swiperOptions);




// var swiper = new Swiper(".footer-widget .swiper", {
//   spaceBetween: 10,
//   observer: true,
//   observeParents: true,
//   autoplay: {
//     delay: 1,
//   },
//   loop: true,
//   speed: 3000,
//   slidesPerView:'auto',
//   allowTouchMove: false,
//   disableOnInteraction: true,
//   breakpoints: {
//     360: {
//       slidesPerView: 1
//     },
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

// let SwiperTop = new Swiper('.swiper--top', {
//   spaceBetween: 0,
//   centeredSlides: true,
//   speed: 6000,
//   autoplay: {
//     delay: 1,
//   },
//   loop: true,
//   slidesPerView:'auto',
//   allowTouchMove: false,
//   disableOnInteraction: true
// });
//
// let SwiperBottom = new Swiper('.swiper--bottom', {
//   spaceBetween: 0,
//   centeredSlides: true,
//   speed: 6000,
//   autoplay: {
//     delay: 1,
//     reverseDirection: true
//   },
//   loop: true,
//   loopedSlides: 4,
//   slidesPerView:'auto',
//   allowTouchMove: false,
//   disableOnInteraction: true
// });



// var swiper = new Swiper(".footer-widget .swiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   loopFillGroupWithBlank: true,
//   speed: 2000,
//   loop: true,
//   observer: true,
//   observeParents: true,
//   autoplay: {
//     enabled: true,
//     delay: 1000,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//   },
// });




// var swiper = new Swiper(".swiper.homepage", {
//   loop: true,
//   speed: 5000,
//   autoplay: {
//     enabled: true,
//     delay: 10000,
//     observer: true,
//     observeParents: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true
//   },
// });

//
// var swiper = new Swiper(".thumb-container", {
//   slidesPerView: 4,
//   spaceBetween: 30,
// });

