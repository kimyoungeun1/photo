//라이브러리란? 유용한 함수들의 모음


//DOM 셀렉팅 통합함수
const $ = function(query){

    if(query[0]==='#'){
        //console.log(query.slice(1));//screen
        return document.getElementById(query.slice(1));
    }else{
        return document.querySelectorAll(query);
    }

    //문자열은 읽기전용 배열이다.
    query[0] = 'k';
    console.log(`query[0] = ${query[0]}`);//#
    console.log(`query[2] = ${query[2]}`);//c
    console.log(`query[4] = ${query[4]}`);//e

};


//태그의 속성을 제어하는 함수
const attr = function(요소명, 속성명, 속성값){
    if(속성값===undefined){
        return 요소명.getAttribute(속성명);
    }else{
        요소명.setAttribute(속성명, 속성값);
    }
};