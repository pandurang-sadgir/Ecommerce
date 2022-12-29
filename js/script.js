
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const menus = document.getElementById('menus');

if(bar){
    bar.addEventListener('click',()=>{
        menus.classList.add('active');
    })
}


if(close){
    close.addEventListener('click',()=>{
        menus.classList.remove('active');
    })
}


// Single product details

var mainImage = document.getElementById('main-image');
var smallImage = document.getElementsByClassName('small-image');

smallImage[0].onclick = function(){
    mainImage.src =  smallImage[0].src;
}

smallImage[1].onclick = function(){
    mainImage.src =  smallImage[1].src;
}

smallImage[2].onclick = function(){
    mainImage.src =  smallImage[2].src;
}

smallImage[3].onclick = function(){
    mainImage.src =  smallImage[3].src;
}

