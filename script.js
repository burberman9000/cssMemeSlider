const carousel = document.querySelector('.carousel');
const buttons = document.querySelectorAll('.radio__button');
const text = document.querySelector('.text__holder');
const images = document.querySelectorAll('img');
const slides = document.querySelectorAll('.slider');
let slidePos = 1;

const slideSwitcher = (item) => {
    switch (item) {
        case 1:
            text.innerHTML = '300 bucks';
            slidePos = 1;
            carousel.style.transform = 'translateX(0%)';
            break;
        case 2:
            text.innerHTML = 'Look at this graph!';
            slidePos = 2;
            carousel.style.transform = 'translateX(-25%)';
            break;
        case 3:
            text.innerHTML = 'У меня есть фулл, но я его не дам';
            slidePos = 3;
            carousel.style.transform = 'translateX(-50%)';
            break;
        case 4:
            text.innerHTML = 'Детей';
            slidePos = 4;
            carousel.style.transform = 'translateX(-75%)';
            break;
        default:
            carousel.style.marginLeft = '0px';
    }
};

buttons.forEach((item, index) => {
    item.addEventListener('click', () => {
        slideSwitcher(index + 1);
    });
});
slideSwitcher(slidePos);
