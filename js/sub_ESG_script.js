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



//sub_ESG




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