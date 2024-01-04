/*
   썸네일을 누른다. -> 클릭이벤트
      해당 썸네일에 매칭되는 DOM 선택
      썸네일에 대한 click 이벤트 구문 작성
      앵커태그의 기본기능 작동 방지
      
   큰 이미지가 변한다.
      앵커의 href 속성값을 가져온다.
      큰 이미지의 src 속성값에 넣어준다.
      
   DOM 선택방법
      document.querySelector()
      document.querySelectorAll() - 배열형식으로 저장
      document.getElementById()
*/
//9개의 a태그(DOM)을 선택하여 배열형식으로 저장(배열은 아님) => 유사배열
const $thmbs = document.querySelectorAll('section>.thmbs>ul>li>a');
console.log('$thmbs =', $thmbs);
console.log(Array.isArray($thmbs));//false

const $screen = document.getElementById('screen');

for(let i=0;i<$thmbs.length;i++){
   $thmbs[i].addEventListener('click', function(evt){
      evt.preventDefault();
   
      //이벤트구문 안에서 this의 의미 -> Current HTML Element
      //이번에 OO한 바로 그녀석 -> $thmbs[0]
      console.log('this =', this);
   
      const bigImg = this.getAttribute('href');
      document.getElementById('screen').setAttribute('src', bigImg);
   
      const altImg = this.firstElementChild.getAttribute('alt');
      console.log('altImg =', altImg);
      $screen.setAttribute('alt', altImg);
   });
}

