//header
let menuItems = document.querySelectorAll('.main_menu-title');
let submenus = document.querySelectorAll('.sub_menu');
let header = document.querySelector('header .container');
let titleText = document.querySelectorAll('.main_menu>a');

menuItems.forEach(function(item){
  item.addEventListener('mouseenter', function(){
    menuItems.forEach(function(title){
      title.classList.remove('active');
    });
    this.classList.add('active');
    submenus.forEach(function(sub){
      sub.classList.remove('active');
    });
    header.classList.remove('active');
    titleText.forEach(function(text){
      text.classList.add('active_font');
    });
    let target = document.getElementById(item.dataset.target);
    if(target){
      target.classList.add('active');
      header.classList.add('active');
    }
    searchIcon.classList.remove('active_s')
    otherIcon01.forEach(function(burger){
      burger.classList.remove('active_s')
    });
    otherIcon02.classList.remove('active_s')
    otherIcon03.classList.remove('active_s')
    searchWrap.classList.remove('active_s')
  });
});
submenus.forEach(function(sub){
  sub.addEventListener('mouseenter', function(){
    sub.classList.add('active');
    header.classList.add('active');
    titleText.forEach(function(text){
      text.classList.add('active_font');
    });
    searchIcon.classList.remove('active_s')
    otherIcon01.forEach(function(burger){
      burger.classList.remove('active_s')
    });
    otherIcon02.classList.remove('active_s')
    otherIcon03.classList.remove('active_s')
    searchWrap.classList.remove('active_s')
  });
});
submenus.forEach(function(sub){
  sub.addEventListener('mouseleave', function(){
    sub.classList.remove('active');
    header.classList.remove('active');
    titleText.forEach(function(text){
      text.classList.remove('active_font');
    });
    searchIcon.classList.remove('active_s')
    otherIcon01.forEach(function(burger){
      burger.classList.remove('active_s')
    });
    otherIcon02.classList.remove('active_s')
    otherIcon03.classList.remove('active_s')
    searchWrap.classList.remove('active_s')
  });
});
document.querySelector('nav').addEventListener('mouseleave', function(){
  submenus.forEach(function(sub){
    sub.classList.remove('active');
  });
  header.classList.remove('active');
  menuItems.forEach(function(title){
    title.classList.remove('active');
  });
  titleText.forEach(function(text){
    text.classList.remove('active_font');
  });
  searchIcon.classList.remove('active_s')
  otherIcon01.forEach(function(burger){
    burger.classList.remove('active_s')
  });
  otherIcon02.classList.remove('active_s')
  otherIcon03.classList.remove('active_s')
  searchWrap.classList.remove('active_s')
});

window.onresize = function(){
  document.location.reload();
};


let mainLogoDver = document.querySelector('.main_logo');
let mainMenuDver = document.querySelector('.main_menu');
let loginIconDver = document.querySelector('.login-icon');
let languageIconDver = document.querySelector('.language-icon');
let searchIconDver = document.querySelector('.search-icon');
let burgerIconDver = document.querySelector('.burger-icon');
let burgerLineDver = document.querySelectorAll('.burger-line');
let siteMapWrap = document.querySelector('.site-map_wrap');
let siteMapImg = document.querySelector('.site-map_img');
let subTitle = document.querySelectorAll('.sub_title');
let subList = document.querySelectorAll('.sub_list');
let burgerMenu = document.querySelector('.burger-icon');
let respinsiveSubmenu = document.querySelector('.responsive_submenu');


console.log(document.getElementById('wrap'))

if (window.matchMedia("(min-width: 1025px)").matches) {
  /* 뷰포트 너비가 1025 픽셀 이상 */
  //site-map
  burgerIconDver.addEventListener('click', function(){
    if(!burgerIconDver.classList.contains('active_d')){
      burgerIconDver.classList.add('active_d')
      mainLogoDver.classList.add('active_d')
      mainMenuDver.classList.add('active_d')
      languageIconDver.classList.add('active_d')
      searchIconDver.classList.add('active_d')
      siteMapWrap.classList.add('active_d')
      siteMapImg.classList.add('active_d')
      loginIconDver.classList.add('active_d')
      burgerLineDver.forEach(function(line){
        line.classList.add('active_d')
      });
      document.getElementById('wrap').classList.add('active_d')
    }else{
      burgerIconDver.classList.remove('active_d')
      mainLogoDver.classList.remove('active_d')
      mainMenuDver.classList.remove('active_d')
      languageIconDver.classList.remove('active_d')
      searchIconDver.classList.remove('active_d')
      siteMapWrap.classList.remove('active_d')
      siteMapImg.classList.remove('active_d')
      loginIconDver.classList.remove('active_d')
      burgerLineDver.forEach(function(line){
        line.classList.remove('active_d')
      });
      document.getElementById('wrap').classList.remove('active_d')
    }
  });

} else {
  /* 뷰포트 너비가 1025 픽셀 미만 */
  //submenu 
  burgerMenu.addEventListener('click', function(){
    if(!burgerMenu.classList.contains('active')){
      this.classList.add('active');
      respinsiveSubmenu.classList.add('active');
      header.classList.add('active');
    }else{
      this.classList.remove('active');
      respinsiveSubmenu.classList.remove('active');
      header.classList.remove('active');
      subTitle.forEach(function(title){
        title.classList.remove('active');
      });
      subList.forEach(function(sub){
        sub.classList.remove('active');
      });
    }
  });
  
  subTitle.forEach(function(item){
    item.addEventListener('click', function(){
      if(!item.classList.contains('active')){
        subTitle.forEach(function(title){
          title.classList.remove('active');
        });
        subList.forEach(function(sub){
          sub.classList.remove('active');
        });
        this.classList.add('active');
        let target = document.getElementById(item.dataset.target);
        if(target){
          target.classList.add('active');
        }
      }else{
        subTitle.forEach(function(title){
          title.classList.remove('active');
        });
        subList.forEach(function(sub){
          sub.classList.remove('active')
        });
      }
    });
  });
}




// search
let searchIcon = document.querySelector('.search-icon');
let otherIcon01 = document.querySelectorAll('.burger-line');
let otherIcon02 = document.querySelector('.language-icon');
let otherIcon03 = document.querySelector('.login-icon');
let searchWrap = document.querySelector('.search_wrap');

searchIcon.addEventListener('click', function(){
  if(!searchIcon.classList.contains('active_s')){
    this.classList.add('active_s')
    otherIcon01.forEach(function(burger){
      burger.classList.add('active_s')
    });
    otherIcon02.classList.add('active_s')
    otherIcon03.classList.add('active_s')
    searchWrap.classList.add('active_s')
    titleText.forEach(function(text){
      text.classList.add('active_font');
    });
  }else{
    this.classList.remove('active_s')
    otherIcon01.forEach(function(burger){
      burger.classList.remove('active_s')
    });
    otherIcon02.classList.remove('active_s')
    otherIcon03.classList.remove('active_s')
    searchWrap.classList.remove('active_s')
    titleText.forEach(function(text){
      text.classList.remove('active_font');
    });
  }
});


//section.main_visual
var swiper01 = new Swiper('.mySwiper01', {
	loop: true,
	//cssMode: true,
	spaceBetween: 30,
  effect: "fade",
	navigation: {
		nextEl: ".swiper-button-next.slide_arrow",
		prevEl: ".swiper-button-prev.slide_arrow",
	},
	pagination: {
		el: ".swiper-pagination.slide_button",
		clickable: true,
	},
	//mousewheel: true,
	//keyboard: true,
});

let textElement = document.querySelector('#typing');
let text = `대한민국 농수산식품의 <br> 행복한 변화가 시작됩니다!`;
let idx = 0;
let isTag = false;

function textEffect(){
  // 현재 글자가 <로 시작하면 태그의 시작 태그
  if (text[idx] === '<') {
    isTag = true;
  }

  // 태그가 끝날 때까지 idx를 증가시키면서 건너뜀
  if (isTag && text[idx] === '>') {
    isTag = false;
  }

  if (!isTag) {
    document.querySelector('#typing').innerHTML = text.slice(0, idx+1);
  }

  idx++;
  
  if (idx < text.length) {
    setTimeout(textEffect, 180);
  } else {
    setTimeout(function(){
      idx = 0;
      textEffect();
    }, 1000);
  }
};

textEffect();

//section.service


//section.news
var swiper1 = new Swiper(".swiper-tab-1", {
  slidesPerView: 4,
  loop: true,
  slidesOffsetAfter: false,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    1025: {
      slidesPerView: 4,
    },
    911: {
      slidesPerView: 3,
    },
    769: {
      slidesPerView: 2,
    },
    666: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
      loop: false
    },
    101: {
      slidesPerView: 1,
      grid: {
        rows: 2,
      },
      loop: false
    },
  },
});
var swiper2 = new Swiper(".swiper-tab-2", {
  slidesPerView: 4,
  loop: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    1025: {
      slidesPerView: 4,
    },
    911: {
      slidesPerView: 3,
    },
    769: {
      slidesPerView: 2,
    },
    666: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
      loop: false
    },
    101: {
      slidesPerView: 1,
      grid: {
        rows: 2,
      },
      loop: false
    },
  },
});
var swiper3 = new Swiper(".swiper-tab-3", {
  slidesPerView: 4,
  loop: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    1025: {
      slidesPerView: 4,
    },
    911: {
      slidesPerView: 3,
    },
    769: {
      slidesPerView: 2,
    },
    666: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
      loop: false
    },
    101: {
      slidesPerView: 1,
      grid: {
        rows: 2,
      },
      loop: false
    },
  },
});
var swiper4 = new Swiper(".swiper-tab-4", {
  slidesPerView: 4,
  loop: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    1025: {
      slidesPerView: 4,
    },
    911: {
      slidesPerView: 3,
    },
    769: {
      slidesPerView: 2,
    },
    666: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
      loop: false
    },
    101: {
      slidesPerView: 1,
      grid: {
        rows: 2,
      },
      loop: false
    },
  },
});

//클릭시 이벤트 처리
//탭 클릭시 탭 콘텐츠가 보이게
let tabs = document.querySelectorAll('.tab');
let tabContents =document.querySelectorAll('.tab-content');

tabs.forEach(function(tab){
  //클릭이벤트 
  tab.addEventListener('click', function(){
    //모든 탭에서 active제거
    tabs.forEach(function(t){
      t.classList.remove('active')
    });
    //클릭된 탭만 active클래스 추가
    //this 이벤트가 작동된 그것
    this.classList.add('active')
    //모든 콘텐츠를 숨기고
    tabContents.forEach(function(c){
      c.classList.remove('active')
    });
    //클릭된 탭에 해당하는 콘텐츠가 표시
    let tabId = this.dataset.tab;
    document.getElementById(`tab-${tabId}`).
    classList.add('active')
    //해당 탭의 swiper 슬라이드 항상 0번째부터
    if(tabId === '1'){
      swiper1.slideTo(0,0) //첫 슬라이드로 이동
      swiper1.update();
    }
    if(tabId === '2'){
      swiper2.slideTo(0,0) //첫 슬라이드로 이동
      swiper2.update();
    }
    if(tabId === '3'){
      swiper3.slideTo(0,0) //첫 슬라이드로 이동
      swiper3.update();
    }
    if(tabId === '4'){
      swiper4.slideTo(0,0) //첫 슬라이드로 이동
      swiper4.update();
    }
  })
});

//section.sns_letter
var swiper021 = new Swiper(".mySwiper02-1", {
  initialSlide: 7,
  slidesPerView: 3.47,
  spaceBetween: 20,
  pagination: {
    el: ".sns_swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".sns_swiper-button-next",
    prevEl: ".sns_swiper-button-prev",
  },
  breakpoints: {
    1025:{
      slidesPerView: 3.47,
    },
    769: {
      slidesPerView: 1.73,
    },
    431: {
      slidesPerView: 2, //1.09
      centeredSlides: true,
      initialSlide: 1,
      loop: true,
    },
    100: {
      slidesPerView: 1.5, //1.09
      centeredSlides: true,
      initialSlide: 1,
      loop: true,
    },
  },
});
var swiper03 = new Swiper(".mySwiper03", {
  spaceBetween: 20,
  pagination: {
    el: ".letter_swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".letter_swiper-button-next",
    prevEl: ".letter_swiper-button-prev",
  },
  breakpoints: {
    1025: {
      slidesPerView: 4.6,
    },
    769: {
      slidesPerView: 2.5,
    },
    431: {
      slidesPerView: 3,
      centeredSlides: true,
      initialSlide: 1,
      loop: true,
    },
    100: {
      slidesPerView: 2,
      centeredSlides: true,
      initialSlide: 1,
      loop: true,
    },
  },
});

//section.popup
var swiper04 = new Swiper( '.popup-swiper', {
  autoplay: {
    delay: 1500,
    disableOnInteraction: false
  },
  speed: 1000,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesOffsetAfter: false,
  coverflowEffect: {
    rotate: 0,  //슬라이더 회전 각 : 클수록 슬라이딩시 회전이 커짐
    stretch: 175,  //슬라이더간 거리(픽셀) :클수록 슬라이더가 서로 많이 겹침
    depth: 120,  //깊이 효과값 : 클수록 멀리있는 느낌이 강해짐
    modifier: 1,  //효과 배수 : 위 숫자값들에 이 값을 곱하기 처리하여 효과를 강하게 처리함
    slideShadows: false,  //슬라이더 그림자 : 3D효과를 강조하기 위한 회전시 흐릿한 효과
  },  
  loop: true,
  loopedSlides: 1,
  loopAdditionalSlides : 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    1025: {
      slidesPerView: 'auto',
      coverflowEffect: {
        modifier: 1,
      }
    },
    821: {
      slidesPerView: 'auto',
      coverflowEffect: {
        modifier: 1.29,
      }
    },
    769: {
      slidesPerView: 'auto',
      coverflowEffect: {
        modifier: 1.34,
      }
    },
    691: {
      slidesPerView: 'auto',
      coverflowEffect: {
        modifier: 1.42,
      }
    },
    611: {
      slidesPerView: 'auto',
      coverflowEffect: {
        modifier: 1.54,
      }
    },
    551: {
      slidesPerView: 'auto',
      coverflowEffect: {
        modifier: 1.68,
      }
    },
    431: {
      slidesPerView: 'auto',
      coverflowEffect: {
        modifier: 1.57,
      }
    },
    391: {
      slidesPerView: 'auto',
      coverflowEffect: {
        modifier: 1.78,
      }
    },
    376: {
      slidesPerView: 'auto',
      coverflowEffect: {
        modifier: 1.85,
      }
    },
    321: {
      slidesPerView: 'auto',
      coverflowEffect: {
        modifier: 1.85,
      }
    },
    101: {
      slidesPerView: 'auto',
      coverflowEffect: {
        modifier: 1.9,
      }
    },
  }
});

// $(document).on('mouseenter', '.swiper-container', function(e){
//   console.log('stop autoplay');
//   swiper04.stopAutoplay();
// });
// $(document).on('mouseleave', '.swiper-container', function(e){
//   console.log('start autoplay');
//   swiper04.startAutoplay();
// });

//section.announcement
let announce_menu = document.querySelectorAll('div.announce_menu');
let announce_content = document.querySelectorAll('div.announce_content-wrap');

for(let a = 0; a<announce_menu.length; a++){
	announce_menu[a].addEventListener('click', function(e){
		e.preventDefault();

		for(let b = 0; b<announce_menu.length; b++){
			announce_menu[b].classList.remove('active');
			e.target.classList.add('active');
			announce_content[b].classList.remove('active');
			announce_content[a].classList.add('active');
		}
	});
};


//section.business


//section.footer
var swiper06 = new Swiper(".mySwiper06", {
  slidesPerView: 6,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1025: {
      slidesPerView: 6,
      loop: true,
    },
    801: {
      slidesPerView: 5,
      loop: true,
    },
    691: {
      slidesPerView: 4,
      loop: true,
    },
    551: {
      slidesPerView: 3,
      loop: true,
    },
    101: {
      slidesPerView: 2,
      loop: true,
    },
  }
});

let familySite = document.getElementById('footer_family-site');
let familySiteLink = document.getElementById	('footer_family-site_link');
let familySiteAfter = document.createElement("style")
console.log(familySite, familySiteLink);

familySite.addEventListener('click', function(){
  if(!familySiteLink.classList.contains('active')){
    familySiteLink.classList.add('active');
    familySiteAfter.innerHTML = `.footer_family-site::after{transform: rotate(180deg);}`
  }else{
    familySiteLink.classList.remove('active');
    familySiteAfter.innerHTML = `.footer_family-site::after{transform: rotate(0deg);}`
  }
});
document.head.appendChild(familySiteAfter);