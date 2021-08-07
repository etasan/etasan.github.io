const btnHamburger = document.querySelector('#btnhamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const link = document.querySelector('.header__menu')

btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if (header.classList.contains('open')){
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
        element.classList.remove('fade-in');
        element.classList.add('fade-out');  
        });

    }
    else {
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
        });
    }
});

link.addEventListener('click', function(){
    console.log('click link');
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElems.forEach(function(element){
    element.classList.remove('fade-in');
    element.classList.add('fade-out');
    });
});

$(function() {
    $('section').mouseenter(function() {
      $('.grid-container a[href="#' + $(this).attr('id') + '"]').addClass('active').siblings('.grid-container a').removeClass('active');
    });

    $(document).scroll(function() {
        $('.grid-container a[href="#'+$('section:hover').attr('id')+'"]').addClass('active').siblings('.grid-container a').removeClass('active');
      });
});
