const nextbtnsDOM = document.querySelector("#next");
const prevbtnsDOM = document.querySelector("#prev");
const SlideDOM = document.querySelectorAll(".slide");


let slideIndex = 1;


const nextSlides = () =>{
    const activeSlides = document.querySelector(".active");
    if (SlideDOM.length - slideIndex == 0){
        SlideDOM[0].classList.add("active");
        slideIndex =0;

    }
    activeSlides.classList.remove("active");
    if (activeSlides.nextElementSibling){
       activeSlides.nextElementSibling.classList.add("active");
    }else{
        SlideDOM[0].classList.add("active");
    }
    slideIndex += 1;
}



const prevSlides = () =>{
    const activeSlides = document.querySelector(".active");
    if (SlideDOM.length - slideIndex == 0){
        SlideDOM[0].classList.add("active");
        slideIndex =0;
}
    activeSlides.classList.remove("active");
    if (activeSlides.nextElementSibling){
       activeSlides.nextElementSibling.classList.add("active");
    }else{
        SlideDOM[SlideDOM.length - 2].classList.add("active");
    }
    slideIndex += 1;
}



nextbtnsDOM.addEventListener("click",() =>{
    nextSlides();
});





prevbtnsDOM.addEventListener("click",() =>{

    prevSlides();
});


