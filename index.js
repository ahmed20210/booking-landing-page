
let myIcon = document.getElementById("icon")
let myNav = document.getElementById("navbar")
myIcon.addEventListener("click", () => {
    myNav.classList.toggle("active")
    console.log("fu")
})
