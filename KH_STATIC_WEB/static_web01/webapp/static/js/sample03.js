/*
    document.getElementById          : id 속성의 값을 사용하여 하나의 엘리먼트를 가져오기 위한 메서드
    document.getElementsByName       : name 속성의 값을 사용하여 여러 엘리먼트를 가져오기 위한 메서드
    document.getElementsByTagName    : 태그명을 사용하여 여러 엘리먼트를 가져오기 위한 메서드
    document.getElementsByClassName  : class 속성의 값을 사용하여 여러 엘리먼트를 가져오기 위한 메서드

    document.querySelector           : CSS 에서 사용하는 선택자를 이용하여 하나의 엘리먼트를 가져오기 위한 메서드
    document.querySelectorAll        : CSS 에서 사용하는 선택자를 이용하여 여러 엘리먼트를 가져오기 위한 메서드
*/
function toUpper() {
    var items = document.getElementsByClassName("menu-item");
    for(let item of items) {
        toUpperLower(item);
    }
}
function toLower() {
    var items = document.querySelectorAll(".menu-item");
    for(let item of items) {
        toUpperLower(item, "lower");
    }
}
function toUpperLower(element, caseType="upper") {
    var text = element.innerText;
    if(caseType == "upper") {
        element.innerText = text.toUpperCase();
    } else if(caseType == "lower") {
        element.innerText = text.toLowerCase();
    }
}