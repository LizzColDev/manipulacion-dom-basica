const h1 = document.querySelector ("h1")
const p = document.querySelectorAll ("p")
const parrafito = document.querySelector (".parrafito")
const pid = document.querySelector ("#pid")
const input = document.querySelector ("input")

console.log (input.value)

console.log ({
    h1,
    p,
    parrafito,
    pid,
    input,
})

const img = document.createElement("img")
img.setAttribute ("src", "https://images.pexels.com/photos/69932/tabby-cat-close-up-portrait-69932.jpeg?auto=compress&cs=tinysrgb&w=400")
console.log (img)

pid.innerHTML = ""
pid.appendChild (img)