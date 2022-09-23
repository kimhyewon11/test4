//스크롤 내리면 --> 헤더영역 클래스 붙여서 스타일 변경 , 
// gnb 애프터 선택자 위치값에 따라 스타일 변경 
    const header = document.querySelector("#header");
    const cont =document.querySelectorAll(".cont");
    const gnbMenu = document.querySelectorAll(".gnb li")
    //cont 들 위치 담아줄 배열 변수 
    let contStart = [];
    window.addEventListener("scroll",function(){
        let scTop = window.scrollY;
        let headerStart = header.offsetTop ;
        
        if(scTop > headerStart){
            header.classList.add("fixed");
        }
        else {
            header.classList.remove("fixed");
        }

        cont.forEach(function(el,index){
            contStart[index] = el.offsetTop-11;
            
            if(scTop >= contStart[index]){
                gnbMenu.forEach(function(el,index){
                    el.classList.remove("on");
                });
                gnbMenu[index].classList.add("on");
            }

        });

    });

