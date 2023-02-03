const circles = document.querySelectorAll(".circle")
const prev = document.querySelector("#pre")
const next = document.querySelector("#nxt")
const parentBTN = document.querySelector(".btns")

// console.log(prev)


parentBTN.addEventListener("click", handleSteps)
document.ondbl = () => false

let counter = 1
function handleSteps(event) {
    let target = event.target
    if (target.parentElement == parentBTN) {
        console.log(target.textContent)
        
        if (target == prev) {
            handlePrev(target)
        } else if (target == next) {
            handleNext(target)
        }
        
    }
    disableButtons()
}


function handleNext(target) {
    if (counter < circles.length) {
        handleTransform(target)
        // prev.classList.add("enabled")
        let currentCircle = circles[counter-1] 
        let nextSibling = currentCircle.nextElementSibling
        if (nextSibling != null) {
            nextSibling.style.backgroundColor = "rgb(108, 192, 143)"
        }
        let nextCircle = circles[counter]
        if (nextCircle) {
            nextCircle.classList.add("active") //= "rgb(108, 192, 143)"
        }
        counter++
        console.log(counter)
        // let sibling
    }
}

function handlePrev(target) {
    if (counter > 1) {
        handleTransform(target)
        let currentCircle = circles[counter-1]
        let prevSibling = currentCircle.previousElementSibling
        if (prevSibling != null) {
            prevSibling.style.backgroundColor = "rgb(62, 66, 64)"
        }
        let prevCircle = circles[counter-1]
        prevCircle.classList.remove("active")
        counter--
    }
}

function handleTransform(target) {
    target.style.transform = "scale(0.8)"
    setTimeout(() => {
        target.style.transform = "scale(1)"
    }, 70);
} 

function disableButtons() {
    if (counter === circles.length) {
        next.classList.add("disabled")
        next.classList.remove("enabled")
    } else if (counter < circles.length) {
        next.classList.add("enabled")
        next.classList.remove("disabled")
    } 
    if (counter > 1) {
        prev.classList.add("enabled")
        prev.classList.remove("disabled")
    } else if (counter == 1) {
        prev.classList.add("disabled")
        prev.classList.remove("enabled")

    }
}

