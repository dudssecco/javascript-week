const zero = n => {
    return ('0' + n).slice(-2)
}

const intervalo = setInterval(() => {

    const data = new Date()
    const dataHora = zero(data.getHours())
    const dataMinuto = zero(data.getMinutes())
    const dataSegundo = zero(data.getSeconds())

    document.querySelector('div.hora').innerHTML = `${dataHora}`
    document.querySelector('div.minuto').innerHTML = `${dataMinuto}`
    document.querySelector('div.segundo').innerHTML = `${dataSegundo}`
    
}, 1000);