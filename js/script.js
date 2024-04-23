let input = document.querySelector("input")
let counter = document.querySelector(".counter")
let maxLength = input.getAttribute("maxlength")

input.addEventListener("keyup" , () => {
    counter.innerHTML = maxLength - input.value.length
})