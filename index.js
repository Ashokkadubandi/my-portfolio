let projectBoxes = document.querySelectorAll('.project-card');
let proImg = document.querySelector('.ban-curve-card')
let boxHeight = window.innerHeight
let Cardcarousel = document.querySelector('.card');
let boxes = document.querySelectorAll(".scroller");
let dotBoxes = document.querySelectorAll(".dot");

const getScroller = () => {
        boxes.forEach(eachBox => {
            let boxClient = eachBox.getBoundingClientRect().left
            if(boxClient < 50 && boxClient > 0){
                dotBoxes.forEach(box => {
                    if(box.id === eachBox.id){
                        box.classList.add("opacity")
                    }else{
                        box.classList.remove("opacity");
                    }
                })
            }
        })
    }

Cardcarousel.addEventListener("scroll",function(e){
    getScroller()
})

getScroller()