
// if-sætning bruges til at definere hvilken bruger logger ind. Denne værdi tages fra bruger.js
if (user == guest) {
    x = 0;
} else if (user == user) {
    x = 1;
} else if (user == admin) {
    x = 2;
}

//Guest
if (x==0) {
    ("all"").show;
} else {
    ("all").hide;
}

//user
if (x==1){
    ("user").show;
} else {
    ("user").hide;
}

//Admin
if (x==2){
    ("adm").show;
} else {
    ("adm").hide;
}


// her afgøres hvilken navigationsbar der skal vises for personen der bruger interfacet. Dette afgøres via if-sætninger, hvor værdierne ovenover bruges.
if(user == nm ) {
    document.getElementById("admintest").style.display = 'none';
}

if(user == 0){
    document.getElementById("user").style.display = 'none';
}

if(user == 0111){
    document.getElementById("all").style.display = 'none';
}
