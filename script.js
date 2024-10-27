const handle = document.getElementById("handle");

function handleState() {
    handle.classList.toggle("hidden");  // Toggle the hidden class
}

const initialTranslateLTR = -40*4
const initialTranslateRTL = 30*4

function setupIntersectionObserver(element, isLTR, speed) {

    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting) {
            // Add the scroll handler when the element is intersecting
            document.addEventListener('scroll', scrollHandler);
        } else {
            // Remove the scroll handler when the element is not intersecting
            document.removeEventListener('scroll', scrollHandler);
        }
    };

    // Correct: Use IntersectionObserver with correct capitalization
    const intersectionObserver = new IntersectionObserver(intersectionCallback);

    intersectionObserver.observe(element);

    // Scroll handler function
    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
        
        let totalTranlate = 0;

        if(isLTR){
            totalTranlate = translateX + initialTranslateLTR
        }else{
            totalTranlate = -(translateX + initialTranslateRTL)
        }
        // Correct: Fixed 'transform' typo
        element.style.transform = `translateX(${totalTranlate}px)`;
    }
}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
