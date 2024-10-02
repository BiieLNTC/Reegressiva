import { Countdown } from "./contador.js"; 

const tempoFesta = new Countdown("19 october 2024 19:00:00 GMT-0300")
const tempos = document.querySelectorAll("[data-time]")
console.log(mostrarTempo)

function mostrarTempo() {
    tempos.forEach((tempo, index) => {
        tempo.innerHTML = tempoFesta.total[index]
    })
}

mostrarTempo()
setInterval(mostrarTempo, 1000)