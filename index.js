const showImages = document.getElementById("show-images")
const imageSection = document.getElementById("imageSection")

showImages.addEventListener("click", (event) => {
  event.preventDefault()

  imageSection.classList.toggle("display-img")
})
