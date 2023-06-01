const leftCont = document.querySelector('.mandatory-x');
const rightCont = document.querySelector('.mandatory-y');
let amountOfScroll;

rightCont.addEventListener('scroll', event => {
    preventDefault(event);
    amountOfScroll = rightCont.scrollTop;
    leftCont.scrollLeft = amountOfScroll;
});

leftCont.addEventListener('scroll', event => {
    preventDefault(event);
    amountOfScroll = leftCont.scrollLeft;
    rightCont.scrollTop = amountOfScroll;
});