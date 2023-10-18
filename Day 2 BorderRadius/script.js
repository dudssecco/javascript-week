let box = document.getElementById('box')

let radiusTL = document.getElementById('itopleft').value
let radiusTR = document.getElementById('itopright')
let radiusBL = document.getElementById('ibotleft')
let radiusBR = document.getElementById('ibotright')



function AttPreviewer(){

    radiusTL = String(radiusTL)


    let propriedade = "border-radius: " + radiusTL + "px " + radiusTR + "px " + radiusBR + "px " + radiusBL + "px;"
    let propriedade = "border-radius: " + radiusTL + "px " + radiusTR + "px " + radiusBR + "px " + radiusBL + "px;"

    box.style.cssText = propriedade
    console.log(propriedade)

}