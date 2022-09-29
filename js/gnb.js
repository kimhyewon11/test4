//스크롤 내리면 --> 헤더영역 클래스 붙여서 스타일 변경 , 
// gnb 애프터 선택자 위치값에 따라 스타일 변경 
    const header = document.querySelector("#header");
    const cont =document.querySelectorAll(".cont");
    const gnbMenu = document.querySelectorAll(".gnb li")
    const subgnb = document.querySelectorAll(".subgnb li");
    //cont 들 위치 담아줄 배열 변수 
    let contStart = [];
    let mcontStart = [];
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

        subgnb.forEach(function(el,index){
            mcontStart[index] = el.offsetTop-11;
            
            if(scTop >= contStart[index]){
                subgnb.forEach(function(e,index){
                    e.classList.remove("wid");

                });
                subgnb[index].classList.add("wid");
            }
        });


    });

    //gnb 클릭시 해당 화면으로 이동 

    gnbMenu.forEach(function(el,index){
        el.addEventListener("click",function(e){
            e.preventDefault();

            let scrollMove = cont[index].offsetTop-11;
            window.scrollTo({
                top:scrollMove,
                behavior:"smooth"
            });
        });
    });

    subgnb.forEach(function(ele,index){
        ele.addEventListener("click",function(e){
            e.preventDefault();

            let mscrollMove = cont[index].offsetTop-11;

            window.scrollTo({
                top:mscrollMove,
                behavior:"smooth"
            });
        });
    });
