document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    function showSlide() {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slides[index].classList.add("active");
    }

    function nextSlide() {
        console.log("Siguiente slide");
        index++;
        if (index === slides.length) {
            index = 0;
        }
        showSlide();
    }

    function prevSlide() {
        console.log("Slide anterior");
        index--;
        if (index < 0) {
            index = slides.length - 1;
        }
        showSlide();
    }

    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    console.log(prevButton);
    console.log(nextButton); 

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
});
