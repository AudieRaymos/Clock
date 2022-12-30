setInterval(setClock, 1000)

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minuetsRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minuetsRatio + currentDate.getHours()) / 12
}
