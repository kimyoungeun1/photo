// 9개의 a태그(DOM)을 선택하여 배열형식으로 저장(배열은 아님) => 유사배열
const $thmbs = document.querySelectorAll('section>.thmbs>ul>li>a');
const $screen = document.getElementById('screen');

console.log('$thmbs =', $thmbs);
console.log(Array.isArray($thmbs)); // false

const $btnNext = document.querySelector('.next');
const $btnPrev = document.querySelector('.prev');

let nowIdx = 0;
let oldIdx = nowIdx;

// 다음 버튼 이벤트
$btnNext.addEventListener('click', function(evt) {
    evt.preventDefault();

    // 인덱스 계산
    oldIdx = nowIdx;
    if (nowIdx < $thmbs.length - 1) {
        nowIdx++;
    } else {
        nowIdx = 0;
    }

    // 모든 썸네일에서 'on' 클래스 제거 후 현재 인덱스에만 'on' 추가
    $thmbs.forEach(($thmb, index) => {
        if (index === nowIdx) {
            $thmb.parentElement.classList.add('on');
        } else {
            $thmb.parentElement.classList.remove('on');
        }
    });

    // 큰 이미지 변경
    const bigImg = $thmbs[nowIdx].getAttribute('href');
    $screen.setAttribute('src', bigImg);
    const altImg = $thmbs[nowIdx].firstElementChild.getAttribute('alt');
    $screen.setAttribute('alt', altImg);
});

// 이전 버튼 이벤트
$btnPrev.addEventListener('click', function(evt) {
    evt.preventDefault();

    oldIdx = nowIdx;
    if (nowIdx > 0) {
        nowIdx--;
    } else {
        nowIdx = $thmbs.length - 1;
    }

    // 모든 썸네일에서 'on' 클래스 제거 후 현재 인덱스에만 'on' 추가
    $thmbs.forEach(($thmb, index) => {
        if (index === nowIdx) {
            $thmb.parentElement.classList.add('on');
        } else {
            $thmb.parentElement.classList.remove('on');
        }
    });

    // 큰 이미지 변경
    const bigImg = $thmbs[nowIdx].getAttribute('href');
    $screen.setAttribute('src', bigImg);
    const altImg = $thmbs[nowIdx].firstElementChild.getAttribute('alt');
    $screen.setAttribute('alt', altImg);
});

// 썸네일 클릭 이벤트
$thmbs.forEach(function($thmb, idx) {
    $thmb.addEventListener('click', function(evt) {
        evt.preventDefault();

        nowIdx = idx; // 현재 인덱스 업데이트

        // 'on' 클래스 초기화 및 현재 클릭된 썸네일에만 'on' 클래스 추가
        $thmbs.forEach(($th) => {
            $th.parentElement.classList.remove('on');
        });
        this.parentElement.classList.add('on');

        // 큰 이미지 변경
        const bigImg = this.getAttribute('href');
        $screen.setAttribute('src', bigImg);
        const altImg = this.firstElementChild.getAttribute('alt');
        $screen.setAttribute('alt', altImg);
    });
});