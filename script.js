var leftColumn = document.querySelector('.left-fixed'); 
var rightColumn = document.querySelector('.scroll-content');
var leftArticles = document.querySelectorAll('.left-fixed article');
var rightArticles = document.querySelectorAll('.scroll-content article')

var currentIndex = 0;


/* Observer Right Column */
var observerRightColumn = new IntersectionObserver(observerRightColumnCallback, {
    threshold: 0.2
});

function observerRightColumnCallback(entries, observer) {
	console.log(entries);
    entries.forEach(entry => {
        if(entry.isIntersecting) {
         	
         	let index = Array.prototype.indexOf.call(entry.target.parentNode.children, entry.target);
         	if(index != currentIndex) {
	            let targetElement = leftArticles[index];
	            let rect = targetElement.getBoundingClientRect();
	         
	            leftColumn .scrollBy({
				      left: rect.left,
				      behavior: 'smooth'
				});
	            currentIndex = index;
			}
        }
        
    });
};

rightArticles.forEach((i) => {
    if (i) {
        observerRightColumn.observe(i);
    }
});




/* Observer Left Column */
var observerLeftColumn = new IntersectionObserver(observerLeftColumnCallback, {
    threshold: 0.2
});


function observerLeftColumnCallback(entries, observer) {
    
    entries.forEach(entry => {
        if(entry.isIntersecting) {
         	
         	let index = Array.prototype.indexOf.call(entry.target.parentNode.children, entry.target);
            if(index != currentIndex) {
	            let targetElement = rightArticles[index];
	            let rect = targetElement.getBoundingClientRect();
				rightColumn.scrollBy({
				      top: rect.top,
				      behavior: 'smooth'
				});
				currentIndex = index;
			}			
        }
       
    });
};

leftArticles.forEach((i) => {
    if (i) {
        observerLeftColumn.observe(i);
    }
});


