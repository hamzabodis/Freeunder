function op(){
    document.getElementById("pop").checked = true ;
}
function move(){
    if (document.getElementById("pop").checked === true ){
        document.getElementById("lista").style.transform = "translate(0)";
        document.getElementById("ban").style.height = "40vh";
        document.getElementById("tro").style.display="none";
        
    }
}

function cl(){
    document.getElementById("pop").checked = false ;
    document.getElementById("ban").style.height = "10vh";
}

function ret(){
    if (document.getElementById("pop").checked === false ){
        document.getElementById("lista").style.transform = "translate(-100%)";
        document.getElementById("tro").style.display="block";
        
        

    }
}