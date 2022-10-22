const showImages = document.getElementById("show-images")
const imageSection = document.getElementById("imageSection")
const menuBtn = document.getElementById("menu")
const menu = document.getElementById("link-menu")
const cross = document.getElementById("cross")

// showImages.addEventListener("click", (event) => {
//   event.preventDefault()

//   imageSection.classList.toggle("display-img")
// })

menuBtn.addEventListener("click", (e) => {
 menu.style.display = "block"
 menuBtn.style.display = "none"
 cross.style.display = "block"
})

cross.addEventListener("click", (e) => {
 menu.style.display = "none"
 menuBtn.style.display = "block"
 cross.style.display = "none"
})

const arrowRight = document.querySelector(".arrow-right")
const arrowLeft = document.querySelector(".arrow-left")
const images = document.querySelectorAll(".image")

const imagesArr = Array.prototype.slice.call(images)

function right() {
 const currentEl = document.querySelector(".display-img")

 //remove current class
 currentEl.classList.remove("display-img")
 if (currentEl.nextElementSibling) {
  //Check for next slide
  currentEl.nextElementSibling.classList.add("display-img")
 } else {
  //if there are no more children with that class and add to the 1st
  images[0].classList.add("display-img")
 }
}

function left() {
 const currentEl = document.querySelector(".display-img")

 //remove current class
 currentEl.classList.remove("display-img")
 //prev el

 if (currentEl.previousElementSibling) {
  currentEl.previousElementSibling.classList.add("display-img")
 } else {
  images[images.length - 1].classList.add("display-img")
 }
}

arrowRight.addEventListener("click", right)
arrowLeft.addEventListener("click", left)

//////////////////////////////////////////////////
//Selecting by tumbnails

const tumbnails = document.querySelectorAll(".tumbnails")

//converting to an arr
const tumbArr = Array.prototype.slice.call(tumbnails)

tumbArr.map((el) => {
 el.addEventListener("click", () => {
  // console.log(`The element's id is ${el.id}`)
  const currentEl = document.querySelector(".display-img")

  //remove current class
  currentEl.classList.remove("display-img")

  //find an element with a simpler class
  let foundElement = imagesArr.find((element) =>
   element.classList.contains(`${el.id}`)
  )

  foundElement.classList.add("display-img")
 })
})
