const mbtn = document.querySelector(".spanWrap");
const mgnb =document.querySelector(".subgnb");

mbtn.addEventListener("click",function(e){
    e.preventDefault();

    mbtn.classList.toggle("chg");
    mgnb.classList.toggle("on");
});