let popUpbuttons = document.querySelectorAll('.call-popup');
let popUps = document.querySelectorAll('.popup');
let close = document.querySelectorAll('.popup__close');
let popUpbutton = document.querySelectorAll('.btn__pop-up-open')
let body = document.querySelector('body');
let buttonContentPopUp = document.querySelectorAll('.btn__pop-up-open_close-Activity');
let activeEl = 0;
//burger menu
const burgerButton = document.getElementById('burgerButton');
const list  = document.getElementsByClassName('header__nav')[0];
list.style.left = '-100%';
let count = 1;
burgerButton.onclick = ()=>{
    console.log(count);
    if(count%2==1){
        list.style.left = '0';
        burgerButton.classList.add('active');
    }
    else{
        list.style.left='-100%';
        burgerButton.classList.remove('active');
    }   
    count++;
}
////////////////////////////
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
/////////////////////////////////////
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
////////////////////////////////////////////////
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
            list.style.left='-100%';
            burgerButton.classList.remove('active');
            count++;
            window.scrollTo({
                top:gotoBlockValue,
                behavior:'smooth'
            })
            
            e.preventDefault();
        }
    }
}
///////////form///////////////////
const errorblock= document.getElementById('errorform');
const form = document.forms[0];
const email = form.emailInput;
const name = form.nameInput;
const message = form.messageInput;
const time = form.time;
const people = form.people;

document.addEventListener ('submit',(event)=>{
    if(checkEmail(email)&&checkname(name)&&checkMessage(message)){
        return true;
    }
    event.preventDefault();
})


function checkEmail (el){
    if (typeof el.value=='string'){
        if(el.value.split(['@']).length>1&&el.value.split(['.']).length>1){
            if(el.value.length>8){
                return true;
            }
        }
    }
    errorblock.innerHTML="enter the correct email";
    return false;
}
function checkname (el){
    if (typeof el.value=='string'){
        if(el.value.length<30&&el.value.length>4&& el.value.split([' ']).length>1){
            return true;
        }
    }
    errorblock.innerHTML="enter the correct name";
    return false;
}
function checkMessage(el){
    if (typeof el.value=='string'){
        if(el.value.length>0){
            return true;
        }
    }
    errorblock.innerHTML="enter the correct Date";
    return false;
}

