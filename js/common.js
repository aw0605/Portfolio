// 토글 버튼 - 토글 메뉴
const menuToggleBtn = document.querySelector('.mopen');
const menuHide = document.querySelector('.content');
let isHideMenu = false;

menuToggleBtn.addEventListener('click', function(){
    isHideMenu = !isHideMenu;
    if(isHideMenu){
        menuToggleBtn.classList.add('active');
        menuHide.classList.add('show');
    }else{
        menuToggleBtn.classList.remove('active');
        menuHide.classList.remove('show');
    }
});

// 모달 보이기 및 숨기기
// design-guide버튼 모달
var Btns = document.querySelectorAll('.btn');
var Modals = document.querySelectorAll('.modal');

for(var i=0; i<Btns.length; i++){
    Btns[i].onclick = function(e){
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute("href"));
        console.log(modal);
        modal.style.display = "block";
    }
}

window.onclick = function(event){
    if(event.target.classList.contains('modal')){
        for(var index in Modals){
            if(typeof Modals[index].style !== 'undefined')
            Modals[index].style.display = "none";
        }
    }
}

// project06(Design) - img버튼 모달
const dBtn1 = document.querySelector('.dbtn1');
const dBtn2 = document.querySelector('.dbtn2');
const dBtn3 = document.querySelector('.dbtn3');
const dBtn4 = document.querySelector('.dbtn4');
const dBtn5 = document.querySelector('.dbtn5');

const dModal1 = document.querySelector('.dmodal1');
const dModal2 = document.querySelector('.dmodal2');
const dModal3 = document.querySelector('.dmodal3');
const dModal4 = document.querySelector('.dmodal4');
const dModal5 = document.querySelector('.dmodal5');

dBtn1.addEventListener('click', function(){
    dModal1.style.display = "block";
});
dModal1.addEventListener('click', function(){
    dModal1.style.display = "none";
});

dBtn2.addEventListener('click', function(){
    dModal2.style.display = "block";
});
dModal2.addEventListener('click', function(){
    dModal2.style.display = "none";
});

dBtn3.addEventListener('click', function(){
    dModal3.style.display = "block";
});
dModal3.addEventListener('click', function(){
    dModal3.style.display = "none";
});

dBtn4.addEventListener('click', function(){
    dModal4.style.display = "block";
});
dModal4.addEventListener('click', function(){
    dModal4.style.display = "none";
});

dBtn5.addEventListener('click', function(){
    dModal5.style.display = "block";
});
dModal5.addEventListener('click', function(){
    dModal5.style.display = "none";
});


// 플로팅 TEXT&IMG
function random(min,max){
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject (selector, delay, size){
    gsap.to(selector, random(1.5, 2.5),{
        y : size,
        repeat : -1, //무한반복
        yoyo : true, //재생된 애니메이션을 다시 뒤로 재생
        ease : Power1.easeOut,
        delay : random(0, delay)
    })
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 1, 5);

//Magic Scroll----------
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })    
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

