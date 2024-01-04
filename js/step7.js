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

const $btnNext = document.querySelector('.next');
const $btnPrev = document.querySelector('.prev');

const $screen = document.getElementById('screen');

let nowIdx = 0;
let oldIdx = nowIdx;

//다음버튼
$btnNext.addEventListener('click', function(evt){
   evt.preventDefault();

   //인덱스계산
   oldIdx = nowIdx;
   if(nowIdx<$thmbs.length-1){
      nowIdx++;
   }else{
      nowIdx = 0 
   }

   //on추가
   $thmbs[nowIdx].parentElement.setAttribute('class','on');//방법1
   //this.parentElement.classList.add('on');//방법2

   //on제거
   $thmbs[oldIdx].parentElement.removeAttribute('class');//방법1
   //$thmbs[oldIdx].parentElement.classList.remove('on');//방법2

   const bigImg = $thmbs[nowIdx].getAttribute('href');
   document.getElementById('screen').setAttribute('src', bigImg);

   const altImg = $thmbs[nowIdx].firstElementChild.getAttribute('alt');
   console.log('altImg =', altImg);
   $screen.setAttribute('alt', altImg);   
});


//이전버튼
$btnPrev.addEventListener('click', function(evt){
   evt.preventDefault();

   oldIdx=nowIdx;
   if(nowIdx>0){
      nowIdx--;
   }else{
      nowIdx=$thmbs.length-1;
   }

   //on추가
   $thmbs[nowIdx].parentElement.setAttribute('class','on');//방법1
   //this.parentElement.classList.add('on');//방법2

   //on제거
   $thmbs[oldIdx].parentElement.removeAttribute('class');//방법1
   //$thmbs[oldIdx].parentElement.classList.remove('on');//방법2

   const bigImg = $thmbs[nowIdx].getAttribute('href');
   document.getElementById('screen').setAttribute('src', bigImg);

   const altImg = $thmbs[nowIdx].firstElementChild.getAttribute('alt');
   console.log('altImg =', altImg);
   $screen.setAttribute('alt', altImg);   

});


$thmbs.forEach(function($thmb,idx){
   $thmb.addEventListener('click', function(evt){

      evt.preventDefault();

      //썸네일 활성화 표시 - 9개의 썸네일중 누가 이번에 클릭한 썸네일과 같은지 비교
      $thmbs.forEach(($th)=>{
         //화살표함수는 자신의 this를 갖지 않는다.
         console.log(this === $th);
         $th.parentElement.classList.toggle('on',this === $th);
      });
      
   
      const bigImg = this.getAttribute('href');
      document.getElementById('screen').setAttribute('src', bigImg);
   
      const altImg = this.firstElementChild.getAttribute('alt');
      console.log('altImg =', altImg);
      $screen.setAttribute('alt', altImg);

   });
});