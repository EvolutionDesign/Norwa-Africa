//navigation menu
const navBtnOpen = document.querySelector("#menuNavBtnOpen")
const navBtnClosed = document.querySelector("#menuNavBtnClosed")
const menuNavContent = document.querySelector(".transform")

navBtnOpen.addEventListener("click", (e) => {
 e.preventDefault()

 navBtnOpen.style.display = "none"
 navBtnClosed.style.display = "flex"

 menuNavContent.classList.toggle("navigation__content--active")
})

navBtnClosed.addEventListener("click", (e) => {
 e.preventDefault()
 navBtnOpen.style.display = "flex"
 navBtnClosed.style.display = "none"

 menuNavContent.classList.toggle("navigation__content--active")
})
