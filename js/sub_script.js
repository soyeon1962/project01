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

//notice_page


//페이지 몇개 보여줄지
const rowsResponsive = window.matchMedia("(min-width: 769px)");
function rowsPerpageResponsive(e){
  if(e.matches){
    rowsPerPage = 15;
  }else{
    rowsPerPage = 10;
  }
};
let rowsPerPage = 15;
rowsResponsive.addEventListener('change', rowsPerpageResponsive);
rowsPerpageResponsive(rowsResponsive);

//table의 tr개수
const rows = document.querySelectorAll('#notice-content tbody tr');
//페이지네이션 개수
const rowsCount = rows.length;
//한 페이지에 15개씩 보여주면 페이지 총 갯수
const pageCount = Math.ceil(rowsCount/rowsPerPage);
//번호 들어갈 자리
const numbers = document.querySelector('#notice_numbers');
//화면에 보여주기

for(let i = 1; i <= pageCount; i++){
  numbers.innerHTML += `<li><a href="#none">${i}</a></li>`
};
//li의 a 태그 변수 설정
const numberBtn = numbers.querySelectorAll('a');

numberBtn.forEach((item, idx) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    for(nb of numberBtn){
      nb.classList.remove('active')
    };
    e.target.classList.add('active')
    displayRow(idx);
  });
});


function displayRow(idx){
  let start = idx * rowsPerPage;
  let end = start + rowsPerPage;
  let rowArray = [...rows];
  for(let ra of rowArray){
    ra.style.display = 'none';
  };
  let newRows = rowArray.slice(start, end);
  for(let nr of newRows){
    nr.style.display = '';
  };
  for(nb of numberBtn){
    nb.classList.remove('active')
  };
  numberBtn[idx].classList.add('active')
};
displayRow(0);

//페이지 번호 5개씩 보여주기
let prevPageBtn = document.querySelector('.notice_bottom-arrow_prev');
let nextPageBtn = document.querySelector('.notice_bottom-arrow_next');
let startPageBtn = document.querySelector('.notice_bottom-arrow_start');
let endPageBtn = document.querySelector('.notice_bottom-arrow_end');
//현재 보고있는 페이지 번호
let pageActiveIdx = 0;
//현재 보고있는 페이지네이션 번호
let currentPageNum = 0;
//페이지 번호 최대 개수
let maxPageNum = 5;
// 현재 페이지 그룹
let currentPageGroup = 0;  

function displayPage(num){
  for(let nb of numberBtn){
    nb.style.display = 'none';
  };
  let totalPageCount = Math.ceil(pageCount / maxPageNum);
  let pageArr = Array.from(numberBtn);
  let start = num * maxPageNum;
  let end = start + maxPageNum;
  let pageListArr = pageArr.slice(start, end);
  for(let item of pageListArr){
    item.style.display = 'block';
  }
  if(pageActiveIdx === 0){
    prevPageBtn.classList.add('active')
    startPageBtn.classList.add('active')
  }else{
    prevPageBtn.classList.remove('active')
    startPageBtn.classList.remove('active')
  }
  if(pageActiveIdx == totalPageCount - 1){
    nextPageBtn.classList.add('active')
    endPageBtn.classList.add('active')
  }else{
    nextPageBtn.classList.remove('active')
    endPageBtn.classList.remove('active')
  }
};
displayPage(0);

nextPageBtn.addEventListener('click', function(){
  let nextPageNum = pageActiveIdx * maxPageNum + maxPageNum;
  if(!nextPageBtn.classList.contains('active')){
    displayRow(nextPageNum);
    ++pageActiveIdx;
    displayPage(pageActiveIdx);
  }
});
prevPageBtn.addEventListener('click', function(){
  let nextPageNum = pageActiveIdx * maxPageNum - maxPageNum;
  if(!prevPageBtn.classList.contains('active')){
    displayRow(nextPageNum);
    --pageActiveIdx;
    displayPage(pageActiveIdx);
  } 
});
startPageBtn.addEventListener('click', function(){
  pageActiveIdx = 0;
  displayRow(0);
  displayPage(0);
});
endPageBtn.addEventListener('click', function(){
  let totalPageCount = Math.ceil(pageCount / maxPageNum);
  pageActiveIdx = totalPageCount - 1;
  displayRow(pageCount-1);
  displayPage(totalPageCount-1);
});

//부서명 선택 창
let part = document.querySelector('.notice_top-search h6');
let partList = document.querySelector('.site_search');
let list = document.querySelectorAll('.site_search a');
let listReset = document.querySelector('.site_search a');
//console.log(listReset)
//partList width part 랑 같게
let mobileResponsive = window.matchMedia("(max-width: 768px)");
console.log(part.offsetWidth)
console.log(partList.offsetWidth)
function partListResponsive(e){
  if(e.matches){
    partList.style.width = part.offsetWidth + 'px';
  }
}

mobileResponsive.addEventListener('change', partListResponsive);
partListResponsive(mobileResponsive);

listReset.addEventListener('click' ,function(){
  location.reload();
});

part.addEventListener('click', function(){
  if(partList.classList.contains('visible')){
    partList.classList.remove('visible')
  }else{
    partList.classList.add('visible')
  }
})
list.forEach(function(item){
  item.addEventListener('click', function(){
    part.textContent = item.rel
    partList.classList.remove('visible')
    function displayRow(){return false;}
    function displayPage(){return false;}
    rowClicked();
  });
});


function rowClicked(){
  let table = document.querySelector('.notice_main-content');
  let rowList = table.rows;
  //console.log(rowList);
  let subSiteBtn = document.querySelector('.search_button');
  
  for(let i = 2; i <= rowList.length; i++){
    let row = rowList[i];
    //console.log(row);
    let tdsNum = row.querySelectorAll('td')[1];
    //console.log(tdsNum);

    if(tdsNum.innerHTML === part.textContent){
      rowList[i].style.display = '';
      rowList[i].classList.add('list')
    }else{
      rowList[i].style.display = 'none';
      rowList[i].classList.remove('list')
    }

    //현재 보여지고 있는 tr 개수
    let classCount = document.getElementsByClassName('list').length;
    const rows = document.getElementsByClassName('list');
    const pageCount = Math.ceil(classCount/rowsPerPage);
    //console.log(pageCount);
  
    //기존 페이지 번호 초기화
    numbers.innerHTML = '';
    for(let i = 1; i <= pageCount; i++){
      numbers.innerHTML += `<li><a href="#none">${i}</a></li>`
    };
  
    const clickedNumBtn = numbers.querySelectorAll('a');
    const clickedNumReset = numbers.querySelector('a');

    clickedNumBtn.forEach((item, idx) => {
      clickedNumReset.classList.add('active')
      item.addEventListener('click', (e) => {
        e.preventDefault();
        for(nb of clickedNumBtn){
          nb.classList.remove('active')
        };
        e.target.classList.add('active')
        displayClickedRow(idx);
      });
    });

  
    function displayClickedRow(idx){
      let start = idx * rowsPerPage;
      let end = start + rowsPerPage;
      let rowArray = [...rows];
      for(let ra of rowArray){
        ra.style.display = 'none';
      };
      let newRows = rowArray.slice(start, end);
      for(let nr of newRows){
        nr.style.display = '';
      };
      for(nb of numberBtn){
        nb.classList.remove('active')
      };
      numberBtn[idx].classList.add('active')
    };
    displayClickedRow(0);



    function displayClickedRage(num){
      for(let nb of clickedNumBtn){
        nb.style.display = 'none';
      };
      let totalPageCount = Math.ceil(pageCount / maxPageNum);
      let pageArr = Array.from(clickedNumBtn);
      let start = num * maxPageNum;
      let end = start + maxPageNum;
      let pageListArr = pageArr.slice(start, end);
      for(let item of pageListArr){
        item.style.display = 'block';
      }
      if(pageActiveIdx === 0){
        prevPageBtn.classList.add('active')
        startPageBtn.classList.add('active')
      }else{
        prevPageBtn.classList.remove('active')
        startPageBtn.classList.remove('active')
      }
      if(pageActiveIdx == totalPageCount - 1){
        nextPageBtn.classList.add('active')
        endPageBtn.classList.add('active')
      }else{
        nextPageBtn.classList.remove('active')
        endPageBtn.classList.remove('active')
      }
    };
    displayClickedRage(0);
  };
};




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