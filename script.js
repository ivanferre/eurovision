var leftColumn = document.querySelector('.left-fixed'); 
var rightColumn = document.querySelector('.scroll-content');
var leftArticles = document.querySelectorAll('.left-fixed article');
var rightArticles = document.querySelectorAll('.scroll-content article')

/* Observer Right Column */
var observerRightColumn = new IntersectionObserver(observerRightColumnCallback, {
    threshold: 0.2
});

function observerRightColumnCallback(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
         	
         	let index = Array.prototype.indexOf.call(entry.target.parentNode.children, entry.target);
            let targetElement = leftArticles[index];
            let rect = targetElement.getBoundingClientRect();
			
			leftColumn.scrollLeft += rect.left;
      
        }
    });
};


rightArticles.forEach((i) => {
    if (i) {
        observerRightColumn.observe(i);
    }
});



/* Observer Left Column */
/*
var observerLeftColumn = new IntersectionObserver(observerLeftColumnCallback, {
    threshold: 0.5
});


function observerLeftColumnCallback(entries, observer) {
    entries.every(entry => {
        if(entry.isIntersecting) {
         	
         	let index = Array.prototype.indexOf.call(entry.target.parentNode.children, entry.target);
            let targetElement = rightArticles[index];
            let rect = targetElement.getBoundingClientRect();
            
			console.log(index);
			rightColumn.scrollTop += rect.top;
      
						
        }
    });
};


leftArticles.forEach((i) => {
    if (i) {
        observerLeftColumn.observe(i);
    }
});
*/

