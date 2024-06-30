const button = document.querySelector("button")
const inputMin = document.querySelector(".input-min")
const inputMax = document.querySelector(".input-max")

function gererationNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    const drawnNumber = document.querySelector(".drawn-number")
    const finalResult = document.querySelector(".showresult")

    // Buscar números aleatorios
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    finalResult.style.visibility = "visible"
    drawnNumber.innerHTML = result
}

// Eventos
button.addEventListener("click", gererationNumber)