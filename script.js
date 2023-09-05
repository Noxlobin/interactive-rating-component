
const ratingValues1 = document.getElementById("1")
const ratingValues2 = document.getElementById("2") 
const ratingValues3 = document.getElementById("3") 
const ratingValues4 = document.getElementById("4") 
const ratingValues5 = document.getElementById("5") 
const screen1 = document.getElementsByClassName("constant")[0] || null
const screen2 = document.getElementsByClassName("thank-you")[0] || null
const submitBtn = document.getElementById("submit-btn")
const rating = document.getElementById("rating")
let neutralColor = "hsl(216, 12%, 54%)"
let neutralBg = "hsl(213, 23%, 23%)"


ratingValues1.addEventListener("click", () => {
  rating.innerText = 1
  ratingValues1.style.backgroundColor = "hsl(217, 12%, 63%)"
  ratingValues1.style.color = "white"
  ratingValues2.style.backgroundColor = neutralBg
  ratingValues2.style.color = neutralColor
  ratingValues3.style.backgroundColor = neutralBg
  ratingValues3.style.color = neutralColor
  ratingValues4.style.backgroundColor = neutralBg
  ratingValues4.style.color = neutralColor
  ratingValues5.style.backgroundColor = neutralBg
  ratingValues5.style.color = neutralColor

})

ratingValues2.addEventListener("click", () => {
  rating.innerText = 2
  ratingValues2.style.backgroundColor = "hsl(217, 12%, 63%)"
  ratingValues2.style.color = "white"
  ratingValues1.style.backgroundColor = neutralBg
  ratingValues1.style.color = neutralColor
  ratingValues3.style.backgroundColor = neutralBg
  ratingValues3.style.color = neutralColor
  ratingValues4.style.backgroundColor = neutralBg
  ratingValues4.style.color = neutralColor
  ratingValues5.style.backgroundColor = neutralBg
  ratingValues5.style.color = neutralColor

})

ratingValues3.addEventListener("click", () => {
  rating.innerText = 3
  ratingValues3.style.backgroundColor = "hsl(217, 12%, 63%)"
  ratingValues3.style.color = "white"
  ratingValues1.style.backgroundColor = neutralBg
  ratingValues1.style.color = neutralColor
  ratingValues2.style.backgroundColor = neutralBg
  ratingValues2.style.color = neutralColor
  ratingValues4.style.backgroundColor = neutralBg
  ratingValues4.style.color = neutralColor
  ratingValues5.style.backgroundColor = neutralBg
  ratingValues5.style.color = neutralColor

})

ratingValues4.addEventListener("click", () => {
  rating.innerText = 4
  ratingValues4.style.backgroundColor = "hsl(217, 12%, 63%)"
  ratingValues4.style.color = "white"
  ratingValues1.style.backgroundColor = neutralBg
  ratingValues1.style.color = neutralColor
  ratingValues2.style.backgroundColor = neutralBg
  ratingValues2.style.color = neutralColor
  ratingValues3.style.backgroundColor = neutralBg
  ratingValues3.style.color = neutralColor
  ratingValues5.style.backgroundColor = neutralBg
  ratingValues5.style.color = neutralColor

})

ratingValues5.addEventListener("click", () => {
  rating.innerText = 5
  ratingValues5.style.backgroundColor = "hsl(217, 12%, 63%)"
  ratingValues5.style.color = "white"
  ratingValues1.style.backgroundColor = neutralBg
  ratingValues1.style.color = neutralColor
  ratingValues2.style.backgroundColor = neutralBg
  ratingValues2.style.color = neutralColor
  ratingValues3.style.backgroundColor = neutralBg
  ratingValues3.style.color = neutralColor
  ratingValues4.style.backgroundColor = neutralBg
  ratingValues4.style.color = neutralColor

})

submitBtn.addEventListener("click", () => {
  screen2.style.display = "block"
  screen1.style.display = "none"
  
  if (rating.innerText === "") {
    rating.innerText = 1
  }
})