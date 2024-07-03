let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')
let sections =document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')
let timeDisplay = document.querySelector('#time')
let dayOfTheWeek = document.querySelector('#day')
let date = new Date()


let hour = date.getHours()
let minute =date.getMinutes()
let seconds = date.getSeconds()
let time = `${hour}:${minute}:${seconds}`
timeDisplay.innerHTML= "Current Time: " + time

let day = date.getDay()
dayOfTheWeek.innerHTML = `${day}`

window.onscroll = ()=>{
    sections.forEach(section =>{
        let top = window.scrollY
        let offset = section.offsetTop - 150
        let height = section.offsetHeight
        let id = section.getAttribute('id')

        if (top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active')
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}