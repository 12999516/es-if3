showimg(){
if(document.querySelector("#colour").value && document.querySelector("MA")){
    document.getElementById("immagine").innerHTML = <img src="img/mare_col.jfif"></img> 
} else if (document.querySelector("#colour").value && document.querySelector("MO")){
    document.getElementById("immagine").innerHTML = <img src = "img/montagna_colour.jfif"></img>
} else if (document.querySelector("#colour").value && document.querySelector("C")) {
document.getElementById("immagine").innerHTML = <img src = "img/città_colour.jfif"></img>
}
}