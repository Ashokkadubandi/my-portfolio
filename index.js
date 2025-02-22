let projectBoxes = document.querySelectorAll('.project-card');
let proImg = document.querySelector('.ban-curve-card')

let boxHeight = window.innerHeight

const getScroller = () => {
    projectBoxes.forEach((box) => {
        let clientHeight = box.getBoundingClientRect().top
        if(clientHeight < innerHeight / 5 * 4){
            box.classList.add('scroll');
        }else{
            box.classList.remove('scroll')
        }
    })

}

window.addEventListener("scroll",getScroller)