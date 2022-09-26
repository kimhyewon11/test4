let elem = document.querySelector('.listWrap');
let iso = new Isotope(elem, {
    // options
    itemSelector: '.all',
    layoutMode: 'masonry'
});


const menu = document.querySelectorAll(".menu li");

menu.forEach(function(el,index){
    el.addEventListener("click",function(e){
        e.preventDefault();
        
        let data = el.getAttribute("data-port");
        
        iso.arrange({ 

            filter: data,
            transitionDuration: '0.5s' 

        })

        menu.forEach(function(e,index){
            e.classList.remove("on");
        });
        el.classList.add("on");
    });
});