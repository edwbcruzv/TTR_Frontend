let stars = document.querySelector(".stars"),
    moon = document.querySelector(".moon"),
    mountains_behind = document.querySelector(".mountains_behind"),
    mountains_front = document.querySelector(".mountains_front"),
    text = document.querySelector(".text"),
    btn = document.querySelector(".btn")

window.addEventListener("scroll",function(){
    let value = window.scrollY
    stars.style.left = value * 0.25+ 'px'
    moon.style.top = value * 1 + 'px'
    mountains_behind.style.top = value * 0.05 + 'px'
    mountains_front.style.top = value * 0 + 'px'
    text.style.marginRight = value * 4 + 'px'
    text.style.marginTop = value * 1.5 + 'px'
    btn.style.marginTop = value * 1.5 + 'px'
})