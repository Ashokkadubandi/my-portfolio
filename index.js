let projectBoxes = document.querySelectorAll('.project-card');
let boxHeight = window.innerHeight
console.log(innerHeight)

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