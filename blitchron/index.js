
window.addEventListener("scroll",function(){
    // console.log(window.pageYOffset);
    if (window.pageYOffset > document.querySelector('.super').getBoundingClientRect().height-100){
        document.getElementById("sidenav").classList.add("fix");
        document.getElementById("sidenav").style.top = "30%";
        document.getElementById("sidenav").style.left = "0%";
    }
    else{
        document.getElementById("sidenav").classList.remove("fix");
        document.getElementById("sidenav").style.top = "30%";
        document.getElementById("sidenav").style.left = "3%";
    }
})