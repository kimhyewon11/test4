const view =document.querySelector(".view");;
const circleBtn =document.querySelectorAll(".circleBtn >div")

//let sNumber =0;

let count = 0;
//슬라이드 자동실행 구간 
// let autoslide = setInterval(function(){
//     slide();   
// },2000);





let slide = setInterval(function(){
    if(count == circleBtn.length -1){
        count=0;
        clearInterval(slide);
    }
    else{
        count++;
    }
    view.style.marginLeft = -100 * count + "%";
    
},1000);



// function stopAndStart(){
//     clearInterval(slide);
//         setTimeout(function(){
//             slide =  setInterval(function(){
//                 if(count == circleBtn.length -1){
//                     count=0;
//                     clearInterval(slide);
//                 }
//                 else{
//                     count++;
//                 }
//                 view.style.marginLeft = -100 * count + "%";
            
//             },1000);
//         },1000);
// }


//슬라이드 이동 , 동그라미 버튼 활성 비활성 함수 

    function circleBtnslide (){
        circleBtn.forEach(function(el,index){
        
            el.addEventListener("click",function(){
                circleBtn.forEach(function(e,index){
                    e.classList.remove("on");
                });
                el.classList.add("on");
                view.style.marginLeft = -100 * index + "%";
            });
        }); 

    }
    

//
