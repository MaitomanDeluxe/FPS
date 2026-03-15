function updateCrosshair(){

 let moving =
 input.forward ||
 input.back ||
 input.left ||
 input.right

 let spread = moving ? 10 : 4

 document.getElementById("ch-top").style.top=-spread+"px"
 document.getElementById("ch-bottom").style.bottom=-spread+"px"
 document.getElementById("ch-left").style.left=-spread+"px"
 document.getElementById("ch-right").style.right=-spread+"px"

}
