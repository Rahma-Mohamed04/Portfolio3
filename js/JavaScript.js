let skills = document.getElementById('skills')
let bars = document.querySelectorAll('.skills .progress-bar')
let sc = skills.offsetTop
let b = false
window.onresize = () => sc = skills.offsetTop
window.onscroll = () => {
    if(scrollY >= sc - 150) {
        bars.forEach((e) => e.style.width = e.getAttribute('data-width'))
        b = true
    }   
}
