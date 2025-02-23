let projectBoxes = document.querySelectorAll('.project-card');
let proImg = document.querySelector('.ban-curve-card')
let boxHeight = window.innerHeight
let Cardcarousel = document.querySelector('.card');
let boxes = document.querySelectorAll(".scroller");
let dotBoxes = document.querySelectorAll(".dot");
let pageNum = document.getElementById("pages")

const getCarouseScroller = () => {
        boxes.forEach(eachBox => {
            let boxClient = eachBox.getBoundingClientRect().left
            if(boxClient < 50 && boxClient > 0){
                dotBoxes.forEach(box => {
                    if(box.id === eachBox.id){
                        box.classList.add("opacity")
                        pageNum.textContent = box.id + "/"+dotBoxes.length
                    }else{
                        box.classList.remove("opacity");
                    }
                })
            }
        })
    }

Cardcarousel.addEventListener("scroll",function(e){
    getCarouseScroller()
})

const getProjectScroll = () => {
    projectBoxes.forEach(box => {
        let boxClient = box.getBoundingClientRect().top
        if(boxClient <= boxHeight / 5 * 4){
            box.classList.add("scroll")
        }else{
            box.classList.remove("scroll")
        }
    })
}


window.addEventListener("scroll",function(){
    getProjectScroll()
})

getCarouseScroller()