const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
// Since there's more than one circle. We'll use ID and queryALL
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    // When click, current active increments
    currentActive++

    // if currentActive greater than length of circles then it will equal to length 
    // of circles. This will make the click and increments stay within 4.
    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    // When click, current active decrements
    currentActive--

    // if currentActive less than length of circles then it will stay
    // at 1
    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}