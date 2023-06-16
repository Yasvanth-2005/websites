window.addEventListener('scroll',function(){
    if (window.pageYOffset > document.querySelector('.super').getBoundingClientRect().height-100){
        document.getElementById("up-icon").style.display = "flex";
    }
    else{
        document.getElementById("up-icon").style.display = "none";
    }
});