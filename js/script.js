
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
