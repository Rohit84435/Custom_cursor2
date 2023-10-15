var elem = document.querySelectorAll(".elem");

// alert(elem.length)

elem.forEach(function(val){

    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity = 1;
    });
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity = 0;
    });
    val.addEventListener("mousemove",function(para){
        val.childNodes[3].style.left = para.x + "px";
        // val.childNodes[3].style.top = para.y + "px";
    });

});