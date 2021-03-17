// SLIDERS

$('.main-slider').slick();
$('.post-slider').slick();


let hiddenMenu = document.querySelector(".hidden-menu");
let mobileMenu = document.querySelector(".mobile-menu");
let dropDownMenu  = document.querySelector(".drop-down-menu");
console.log(mobileMenu)
hiddenMenu.addEventListener("click",()=>
{
    mobileMenu.classList.toggle("active-menu");
    dropDownMenu.classList.toggle("visible-menu");
})


let toggleBtn = document.querySelector(".toggle-contact-btn");
let hiddenContacts  = document.querySelector(".hidden-contact-list");
toggleBtn.addEventListener("click",()=>
{
  hiddenContacts.classList.toggle("visible-contact-list")
})


$(function() {
 
    $(window).scroll(function() {
     
    if($(this).scrollTop() != 0) {
     
    $('.scroll-start').fadeIn();
     
    } else {
     
    $('.scroll-start').fadeOut();
     
    }
     
    });
     
    $('.scroll-start').click(function() {
     
    $('body,html').animate({scrollTop:0},2000);
     
    });
     
    });