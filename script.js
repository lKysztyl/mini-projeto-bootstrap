document.addEventListener("DOMContentLoaded", function() {
    setInterval(() => {
        let scrollPositionY = window.scrollY;
        console.log(scrollPositionY)
        if (scrollPositionY > 100) {
            header.classList.add('fixed-top');
        } else if (scrollPositionY < 100) {
            header.classList.remove('fixed-top');
        }
    }, 500);
});