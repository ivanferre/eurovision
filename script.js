var s1 = document.querySelector('.mandatory-x');
var s2 = document.querySelector('.mandatory-y');

function select_scroll() {

    s2.scrollTop = s1.scrollLeft;
}

s2.addEventListener('scroll', select_scroll(), false);