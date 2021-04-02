  var modalBug = document.getElementById('Bugsmash');
var btnBug = document.getElementById("BtnBug");
// var span = document.getElementsByClassName("close")[0];

btnBug.onclick = function() {
  var span = document.getElementsByClassName("close")[0];
     modalBug.style.display = "block";
  
         span.onclick = function() {
        modalBug.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modalBug) {
            modalBug.style.display = "none";
        }
    }
}


var modalPubg = document.getElementById('Pubg');
var btnPubg = document.getElementById("BtnPubg");

btnPubg.onclick = function() {
var span = document.getElementsByClassName("close")[1];
 modalPubg.style.display = "block";
     span.onclick = function() {
    modalPubg.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalPubg) {
        modalPubg.style.display = "none";
    }
}
} 


var modalIdea = document.getElementById('idea');
var btnIdea = document.getElementById("BtnIdea");

btnIdea.onclick = function() {
var span = document.getElementsByClassName("close")[2];
 modalIdea.style.display = "block";
     span.onclick = function() {
    modalIdea.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalIdea) {
        modalIdea.style.display = "none";
    }
}
} 


var modalGoogle = document.getElementById('google');
var btnGoogle = document.getElementById("BtnGoogle");

btnGoogle.onclick = function() {
var span = document.getElementsByClassName("close")[3];
 modalGoogle.style.display = "block";
     span.onclick = function() {
    modalGoogle.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalGoogle) {
        modalGoogle.style.display = "none";
    }
}
} 

var modalTech = document.getElementById('tech');
var btnTech = document.getElementById("BtnTech");

btnTech.onclick = function() {
var span = document.getElementsByClassName("close")[4];
 modalTech.style.display = "block";
     span.onclick = function() {
    modalTech.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalTech) {
        modalTech.style.display = "none";
    }
}
} 


var modalGal = document.getElementById('gal');
var btngal = document.getElementById("BtnGal");

btngal.onclick = function() {
var span = document.getElementsByClassName("close")[5];
 modalGal.style.display = "block";
     span.onclick = function() {
    modalGal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalGal) {
        modalGal.style.display = "none";
    }
}
} 

var modalBlind = document.getElementById('blind');
var btnBlind = document.getElementById("BtnBlind");

btnBlind.onclick = function() {
var span = document.getElementsByClassName("close")[6];
 modalBlind.style.display = "block";
     span.onclick = function() {
    modalBlind.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalBlind) {
        modalBlind.style.display = "none";
    }
}
} 


var modalFifa = document.getElementById('fifa');
var btnFifa = document.getElementById("BtnFifa");

btnFifa.onclick = function() {
var span = document.getElementsByClassName("close")[7];
 modalFifa.style.display = "block";
     span.onclick = function() {
    modalFifa.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalFifa) {
        modalFifa.style.display = "none";
    }
}
} 


var modalCs = document.getElementById('cs');
var btnCs = document.getElementById("BtnCs");

btnCs.onclick = function() {
var span = document.getElementsByClassName("close")[8];
 modalCs.style.display = "block";
     span.onclick = function() {
    modalCs.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalCs) {
        modalCs.style.display = "none";
    }
}
} 