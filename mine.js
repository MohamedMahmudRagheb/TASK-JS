function toggleswitch(){
    var  div= document.getElementById("links");
    if (div.style.display ==="none") {
        div.style.display="block";
    } else {
        div.style.display="none";
    }
}

function opennav(){
    document.getElementById("link").style.width="150px"
}
function closenav(){
    document.getElementById("link").style.width="0px"

}