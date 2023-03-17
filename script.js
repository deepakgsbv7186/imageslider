const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const bottom = document.querySelector('.bottom');

// console.log(images);
let slideNumber = 1;
const slideLength = images.length;

// bottom 
for(let i=0; i<slideLength; i++){
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);
}
const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor = "#03C988";

const removeBg = () =>{
    buttons.forEach(button=>{
        button.style.backgroundColor = "transparent";
        button.style.transition = "all 1s ease";
    });
}
buttons.forEach((button,index)=>{
    button.addEventListener("click",()=>{
        removeBg();
        slider.style.transform = `translateX(-${index * 800}px)`;
        slideNumber = index+1;
        button.style.backgroundColor = "#03C988";
    });
});

// top
const nextSlide = ()=> {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++;
}
const getFirstSlide = () =>{
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}
const prevSlide = ()=> {
    slider.style.transform = `translateX(-${(slideNumber-2) * 800}px)`;
    slideNumber--;
}
const getLastSlide = () =>{
    slider.style.transform = `translateX(-${(slideLength-1) * 800}px)`;
    slideNumber = slideLength;
}
const changeColor = () =>{
    removeBg();
    buttons[slideNumber-1].style.backgroundColor = "#03C988";
}
right.addEventListener("click",()=>{
    slideNumber<slideLength?nextSlide():getFirstSlide();
    changeColor();
});
left.addEventListener("click",()=>{
    slideNumber>1?prevSlide():getLastSlide();
    changeColor();
});

