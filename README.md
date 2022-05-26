# Portfolio  
### Concept  
바다와 심해를 컨셉으로 잡아 화면을 밑으로 내릴 수록 어두운 색을 배치해 심해로 들어가는 듯한 효과를 주었습니다.  

### Font  
'Noto Sans KR', sans-serif  

### Color  
1) 주조색: #28485E 
2) 보조색: #FFFFFF
## fullpage  
[fullPage.js사이트](https://alvarotrigo.com/fullPage/ko/#page1)  
``` html  
<link rel="stylesheet" href="css/fullpage.css">
```  
``` javascript  
<script type="text/javascript" src="js/fullpage.min.js"></script>
```  
``` javascript   
<script type="text/javascript">   
        var myFullpage = new fullpage('#fullpage', {
            anchors: ['home', 'project01', 'project02', 'project03', 'project04', 'project05', 'project06', 'profile'],
            navigation: true,
            menu: '#menu'
        });
 </script>
```  
## 파비콘  
``` html  
<link rel="icon" href="img/favicon.png">  
```  
## Floating Text 및 Img  
``` javascript  
// 플로팅 TEXT&IMG
function random(min,max){
    return parseFloat((Math.random() *(max - min) + min).toFixed(2));
}
function floatingObject(selector, delay, size){
    gsap.to(selector, random(1.5, 2.5),{
        y: size,
        repeat: -1, //무한반복
        yoyo: true, //재생된 애니메이션을 다시 뒤로 재생
        ease: Power1.easeOut,
        delay: random(0, delay)
    })
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 1, 5);
```  
## Modal  
``` javascript  
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
        for(var indexin Modals){
            if(typeof Modals[index].style !== 'undefined')
            Modals[index].style.display = "none";
        }
    }
}
```  
또는  
``` javascript  
const dBtn1 = document.querySelector('.dbtn1');
const dBtn2 = document.querySelector('.dbtn2');

const dModal1 = document.querySelector('.dmodal1');
const dModal2 = document.querySelector('.dmodal2');

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
```

# 1, To do list  
React로 내가 할 일을 추가, 체크, 삭제할 수 있도록 제작하였다.  
[TodoList웹페이지](https://aw0605.github.io/TodoList/)  
[TodoList github](https://github.com/aw0605/Todo-test)  
### 1) map함수를 이용한 component 반환  

### 2) input에 입력된 할 일 추가  
useRef와 useCallback을 이용해 고유값을 가질 id 및 onInsert함수와 onSubmit이벤트 설정  

### 3) 추가된 할 일 제거 기능
useCallback을 이용해 onRemove함수 생성 및 onClick시 실행하도록  

### 4) 완료된 항목 체크 표시  
삼항 연산자를 이용한 check표시와 useCallback으로 onToggle 생성  

# 2, 영단어 게임  
javascript를 이용해 화면에 보여진 영어단어의 뜻을 맞추는 게임을 제작하였다.   
[영단어 게임](https://aw0605.github.io/Javascript-game/)  
[영단어 게임 github](https://github.com/aw0605/Javascript-game)  
### 1) 배열 생성  
``` javascript  
const words =[
    {
        eng: 'apple',
        kor: '사과'
    },
    {
        eng: 'banana',
        kor: '바나나'
    },
    {
        eng: 'peach',
        kor: '복숭아'
    },
    {
        eng: 'grape',
        kor: '포도'
    },
    {
        eng: 'cherry',
        kor: '체리'
    },
    {
        eng: 'mango',
        kor: '망고'
    },
    {
        eng: 'strawberry',
        kor: '딸기'
    },
    {
        eng: 'watermelon',
        kor: '수박'
    },
    {
        eng: 'plum',
        kor: '자두'
    },
    {
        eng: 'pomegranate',
        kor: '석류'
    }
];
```

### 2) 단어 일치 체크
checkMatch라는 함수를 생성해 보여지는 단어의 kor값과 입력된 값을 비교하고 같으면 점수가 올라가면서 다음 단어가 랜덤으로 추출되어 보여지도록 한다.  
``` javascript  
function checkMatch(){
    // 입력된 값과 비교할 WordDisplay의 kor값
    const DisplayWord = wordDisplay.innerText;
    const WordIndex = words.findIndex(i => i.eng == DisplayWord);
    const MatchWord = words[WordIndex].kor;
    if(wordInput.value === MatchWord){
        if(!isPlaying){
            return;
        }
        // 점수 획득 및 보이기
        score++;
        scoreDisplay.innerText = score;
        time = GAME_TIME;
        // 랜덤한 값 배열에서 추출 및 보이기
        const randomIndex = Math.floor(Math.random()*words.length);
        wordDisplay.innerText = words[randomIndex].eng;
    }
}
```

### 3) 타이머 카운트 다운  
countDown함수를 만들어 시간이 0보다 크면 1초씩 줄어들도록 타이머를 표시한다.  
``` javascript  
function countDown(){
    time > 0? time-- : isPlaying = false;
    if(!isPlaying){
        clearInterval(timeInterval);
    }
    timeDisplay.innerText = time;
}
```  

# 3, My Art Museum  
My art museum이라는 전시 미술관의 기존 사이트를 리디자인 및 제작했다.  
[MyArtMuseum](https://aw0605.github.io/My-Art-Museum/)  
[MyArtMuseum github](https://github.com/aw0605/My-Art-Museum)  
### 1) 메뉴  
javascript로 토글 버튼 및 아코디언 메뉴를 구성,  
scroll값이 500이상 이면 메뉴의 header 부분에 배경이 생기도록 하였다.  

### 2) Fade In  
gsap으로 페이지가 로드되면 특정 부분이 fade in 효과를 나타내도록 하였다.  

### 3) 등장  
Magic Scroll을 이용해 해당 부분에 도달하면 좌우/상하에서 등장  

### 4) Top 버튼  
scroll값이 300이상 이면 Top버튼이 보여지도록 addEventListner의 scroll과 if문을 이용,  
Top버튼 클릭 시, 페이지의 상단으로 올라가도록 scrollTo를 이용  

# 4, Starship Ent  
엔터테인먼트 회사인 Starship페이지를 리디자인 및 제작하였다.   
[Starship Ent](https://aw0605.github.io/starship/)  
[Starship Ent github](https://github.com/aw0605/starship)  
### 1) 메뉴  
javascript로 토글 버튼 제작, j-query로 아코디언 메뉴를 구성  

### 2) Swiper Slider과 Slick Slider  
Swiper Slider과 Slick Slider 플러그인으로 여러 형태의 Slide를 제작  

### 3) More 버튼  
javascript에서 for문과 if문을 이용해 more 버튼 클릭 시, 정해진 숫자만큼의 콘텐츠가 추가로 보이도록 설정  

# 5, Starbucks  
기존 Starbuck사이트의 PC형을 클론 코딩하였다.  
[Starbucks](https://aw0605.github.io/STARBUCKS/)  
[Starbucks github](https://aw0605.github.io/STARBUCKS/)  
### 1) Bagdge이미지 보이기/숨기기  
gsap으로 오른쪽의 Badge이미지가 scroll값이 500이상이면 사라지도록 하였다.  

### 2) Fade In 순차적 등장  
gsap으로 페이지가 로드되면 특정 이미지들이 순차적으로 fade in 효과를 나타내도록 하였다.  

### 3) 등장  
Magic Scroll을 이용해 해당 부분에 도달하면 좌우에서 등장  

### 4) Promotion Slide  
Swiper Slider플러그인과 javascript의 addEventListner를 통해 Promotion Slide부분이 숨기기 또는 보여지게 표현  






