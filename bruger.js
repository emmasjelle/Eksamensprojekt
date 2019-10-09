class Bruger {
    constructor(navn, brugernavn, password, adresse, telefon, email) {
        this.navn = navn;
        this.brugernavn = brugernavn;
        this.password = password;
        this.adresse = adresse;
        this.telefon = telefon;
        this.email = email;
    }
}
    // her skal funktionen opret bruger være
function opretBruger() {

    var user = document.getElementById('username');
    var pass = document.getElementById('password');

    var coruser = "test";
    var corpass = "123";

    if(user.value == coruser) {

        if(pass.value == corpass) {

            window.alert("You are logged in as " + user.value);

        } else {

            window.alert("incorrect username or password!");
        }

    } else {
        window.alert("Incorrect username or password!");
}
}


// her skal funktionen sletBruger være



// her skal funktionen redigerBruger være