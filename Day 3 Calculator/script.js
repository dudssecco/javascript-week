function AddQueue(num){
    var numero = document.getElementById('txtNum').innerHTML
    document.getElementById('txtNum').innerHTML = numero + num
    
    var ac = document.getElementById('txtAc').innerHTML
    document.getElementById('txtAc').innerHTML = ac + num
}

function LimparC(){
    document.getElementById('txtNum').innerHTML = ""
}

function LimparAC(){
    document.getElementById('txtAc').innerHTML = ""
    document.getElementById('txtNum').innerHTML = ""
}

function Back(){
    var result = document.getElementById('txtNum').innerHTML
    document.getElementById('txtNum').innerHTML = result.substring(0, result.length -1)
}

function Same(){
    var result = document.getElementById('txtNum').innerHTML
    if(result){
        document.getElementById('txtNum').innerHTML = eval(result);
    } else {
        window.alert('Insira "número + ação + número" para realizar o calculo.')
    }
}