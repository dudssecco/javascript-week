function BtwoD(){
        
    // Verification

    if(document.getElementById('ibinario').value == "" 
    && document.getElementById('idecimal').value == ""){
        window.alert("Fill in one of the fields")
    } else 
    if(document.getElementById('ibinario').value != "" 
    && document.getElementById('idecimal').value != ""){
        window.alert("Fill in only one of the fields")
    }

    // Convert

    if(document.getElementById('ibinario').value != "" 
    && document.getElementById('idecimal').value == ""){

        let numB = document.getElementById('ibinario').value
        let numD = parseInt(numB, 2)

        document.getElementById('idecimal').value = numD

    } else if(document.getElementById('ibinario').value == "" 
    && document.getElementById('idecimal').value != ""){

        let numD = parseInt(document.getElementById('idecimal').value)
        let numB = numD.toString(2)

        document.getElementById('ibinario').value = numB

    }

}

function DtwoH(){

    //Verification

    if(document.getElementById('idecimal2').value == "" 
    && document.getElementById('ihexa').value == ""){
        window.alert("Fill in one of the fields")
    } else 
    if(document.getElementById('idecimal2').value != "" 
    && document.getElementById('ihexa').value != ""){
        window.alert("Fill in only one of the fields")
    }

    //Convert

    if(document.getElementById('idecimal2').value != "" 
    && document.getElementById('ihexa').value == ""){

        let numD = parseInt(document.getElementById('idecimal2').value)
        let numH = numD.toString(16)

        document.getElementById('ihexa').value = numH
        
    } else if(document.getElementById('idecimal2').value == "" 
    && document.getElementById('ihexa').value != ""){

        let numH = document.getElementById('ihexa').value
        let numD = parseInt(numH, 16)

        document.getElementById('idecimal2').value = numD

    }

}

function BtwoH(){

    // Verification

    if(document.getElementById('ibinario2').value == "" 
    && document.getElementById('ihexa2').value == ""){
        window.alert("Fill in one of the fields")
    } else 
    if(document.getElementById('ibinario2').value != "" 
    && document.getElementById('ihexa2').value != ""){
        window.alert("Fill in only one of the fields")
    }

    // Convert

    if(document.getElementById('ibinario2').value != "" 
    && document.getElementById('ihexa2').value == ""){

        let numB = document.getElementById('ibinario2').value
        let numD = parseInt(numB, 2)
        let numH = numD.toString(16)

        document.getElementById('ihexa2').value = numH

    } else if(document.getElementById('ibinario2').value == "" 
    && document.getElementById('ihexa2').value != ""){

        let numH = document.getElementById('ihexa2').value
        let numD = parseInt(numH, 16)
        let numB = numD.toString(2)

        document.getElementById('ibinario2').value = numB

    }

}