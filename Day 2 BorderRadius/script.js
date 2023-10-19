function show(){

    var tl = document.getElementById('itopleft').value
    var tr = document.getElementById('itopright').value
    var br = document.getElementById('ibotright').value
    var bl = document.getElementById('ibotleft').value

    var prorety = "border-radius: " 
    + tl + "% " + tr + "% " 
    + br + "% " + bl + "%;"

    var box = document.getElementById('box')
    box.style = prorety
}
