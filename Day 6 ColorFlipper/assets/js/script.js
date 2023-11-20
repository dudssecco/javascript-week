const title = document.querySelector('.title')
const btnChange = document.querySelector('.change')
const btnReset = document.querySelector('.reset')


function RandomNum(max){
    let num = Math.floor(Math.random() * max);

    if(num === 9){
        title.style.color = 'white'
        btnChange.style.color = 'white'
        btnChange.style.border = '1px solid white'
        btnReset.style.color = 'white'
        btnReset.style.border = '1px solid white'

    } else {
        title.style.color = 'black'
        btnChange.style.color = 'black'
        btnChange.style.border = '1px solid black'
        btnReset.style.color = 'black'
        btnReset.style.border = '1px solid black'
    }
    
    switch(num){
        case 0:
            document.body.style.backgroundColor = 'skyblue'
            break;
        case 1:
            document.body.style.backgroundColor = 'red'
            break
        case 2:
            document.body.style.backgroundColor = 'green'
            break
        case 3:
            document.body.style.backgroundColor = 'purple'
            break
        case 4:
            document.body.style.backgroundColor = 'pink'
            break
        case 5:
            document.body.style.backgroundColor = 'yellow'
            break
        case 6:
            document.body.style.backgroundColor = 'gray'
            break
        case 7:
            document.body.style.backgroundColor = 'orange'
            break
        case 8:
            document.body.style.backgroundColor = 'brown'
            break
        case 9:
            document.body.style.backgroundColor = 'black'
            break
        default:
            document.body.style.backgroundColor = 'white'
            break
    }
    
}

function Reset(){
    document.body.style.backgroundColor = 'white'
    title.style.color = 'black'
    btnChange.style.color = 'black'
    btnChange.style.border = '1px solid black'
    btnReset.style.color = 'black'
    btnReset.style.border = '1px solid black'
}

btnChange.addEventListener('click', function(){
    RandomNum(10)
})

btnReset.addEventListener('click', function(){
    Reset()
})