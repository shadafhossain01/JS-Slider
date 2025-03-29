let slides=document.querySelector(".slides");
let slide=document.querySelectorAll(".slide");
let dotContainer=document.querySelector(".dot-container");
let prevBtn=document.querySelector(".pervBtn")
let nextBtn=document.querySelector(".nextBtn")

let CurrentSlider=0;
let totalSlide=slide.length;

for(let i=0; i<totalSlide; i++){
    let dot= document.createElement("div");
    dot.classList.add("dot")
    dotContainer.appendChild(dot)
    dot.setAttribute("data-index",i)

    if(i==0){
        dot.classList.add("active")
    }
}

function updateSlider(index){
    if(index<0){
        CurrentSlider=totalSlide-1;
    }
    else if(index>totalSlide-1){
        CurrentSlider=0;
    }
    else{
        CurrentSlider=index;
    }

        slides.style.transform=`translateX(-${CurrentSlider*100}%)`

        let dots=document.querySelectorAll(".dot");
        dots.forEach((dot)=>{
            dot.classList.remove("active")
        })
        dots[CurrentSlider].classList.add("active")
    
}

prevBtn.addEventListener("click",()=>{
    updateSlider(CurrentSlider-1)
})
nextBtn.addEventListener("click",()=>{
    updateSlider(CurrentSlider+1)
})

let dots=document.querySelectorAll(".dot");
dots.forEach((dot)=>{
  dot.addEventListener("click",()=>{
        updateSlider(parseInt(dot.getAttribute("data-index")))
    })
})