//카운트 업되는 함수 정의 

function countUp (increase,sel,desti,speed){
    moveCheck =false;
    let num = 0;
    let desChange =""

    let autoCount =setInterval(function(){
        num += increase;
        document.querySelector(sel).innerHTML = num;

        if(num>=desti){
            clearInterval(autoCount);
            desChange=desti;
            document.querySelector(sel).innerHTML = desChange;
        }
    },speed);
}




//스크롤 이벤트 구간
let cont5Start =document.querySelector(".cont5").offsetTop;
let moveCheck =true;


window.addEventListener("scroll",function(){
    let cont5Start =document.querySelector(".cont5").offsetTop;
    let scTop = window.scrollY;

    if(scTop >= cont5Start){
        if(moveCheck ==true){
            countValue.forEach(function(el){
                countUp(
                    el.plus,
                    el.tag,
                    el.complete,
                    el.loop
                );
            });
        }
    }
});

//객체 세팅 
let countValue = [
    {
        plus :50,
        tag : ".count1",
        complete :1200,
        loop : 25
    },
    {
        plus :10,
        tag : ".count2",
        complete :120,
        loop : 25
    },
    {
        plus :1,
        tag : ".count3",
        complete :5,
        loop : 10
    },
    {
        plus :1,
        tag : ".count4",
        complete :20,
        loop : 20
    }
];