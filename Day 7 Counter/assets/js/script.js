const p = document.querySelector('.p')
const add = document.querySelector('#add')
const remove = document.querySelector('#remove')
const reset = document.querySelector('#reset')
let number = 0


// Function

function Check(){
    if(number > 0) p.style.color = '#3f6508'
    if(number < 0) p.style.color = '#9d0505'
    if(number === 0) p.style.color = 'black'
}


// Evento CLick

add.addEventListener('click', function(){
    number += 1
    p.innerHTML = number
    Check()
})

remove.addEventListener('click', function(){
    number -= 1
    p.innerHTML = number
    Check()
})

reset.addEventListener('click', function(){
    number = 0
    p.innerHTML = number
    Check()
})

