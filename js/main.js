let popUpbuttons = document.querySelectorAll('.call-popup');
let popUps = document.querySelectorAll('.popup');
let close = document.querySelectorAll('.popup__close');
let popUpbutton = document.querySelectorAll('.btn__pop-up-open')
let body = document.querySelector('body');
let buttonContentPopUp = document.querySelectorAll('.btn__pop-up-open_close-Activity');
let activeEl = 0;
//burger menu
let burgerCount = 1;
let burgerList = document.querySelector('.burger__menu-list');
let burgerButton = document.querySelector('.burger-menu');
burgerButton.addEventListener("click",()=>{
    if(burgerCount%2==1){
        burgerList.classList.add('active')
        burgerButton.classList.add('active');
    }
    else{
        burgerList.classList.remove('active');
        burgerButton.classList.remove('active');
    }
    burgerCount++;
})

//
//!warring!!! class in call__popUp must go in the given order
popUpbuttons.forEach(el =>el.addEventListener("click",()=>{
    activeEl =  el.classList[1].split(['_'])[1]-1;
    popUps[activeEl].classList.add('_PopUp-active')
    body.style.overflow='hidden';
}))
buttonContentPopUp.forEach(el => el.addEventListener("click",closePopup));
close.forEach(el => el.addEventListener("click",closePopup));
function closePopup (){
    popUps[activeEl].classList.remove('_PopUp-active');
    body.style.overflow='auto';
}
new Swiper('.swiper',{
    loop:true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable:true
      },
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    grabCursor:true,
})
let menuLinks=document.querySelectorAll('.menu__item[data-goto]');
if(menuLinks.length>0){
    menuLinks.forEach (menuLinks=>{
        menuLinks.addEventListener('click',onMenuClick)
    })
    function onMenuClick (e){
        const menuLink = e.target;
        if(menuLink.dataset.goto&&document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top;
            burgerList.classList.remove('active');
            burgerButton.classList.remove('active');
            burgerCount++;
            window.scrollTo({
                top:gotoBlockValue,
                behavior:'smooth'
            })
            
            e.preventDefault();
        }
    }
}
