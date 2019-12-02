//Denne JS-fil indeholder vores User class (Parent), underklasser, register funktionen og tilhørende funktioner.

//Parent User klassen i vores system. Vi har dertil en constructor som indeholder variabler/attributes/properties?
class User {
    constructor(un, pw, nm, uAddress, phoneNumber, email, admin) {
        this.un = un;
        this.pw = pw;
        this.nm = nm;
        this.uAddress = uAddress;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.admin = admin;
    }
}
//Behandler/practitioner (admin) User klassen fra vores parent User
class Practitioner extends User {
    constructor(un, pw, nm, uAddress, phoneNumber, email, admin) {
        super(un, pw, nm, uAddress, phoneNumber, email, admin);
    }
}
//Klient/Client User klassen fra vores parent User
class Client extends User {
    constructor(un, pw, nm, uAddress, phoneNumber, email, admin, Animal) {
        super(un, pw, nm, uAddress, phoneNumber, email, admin);
        this.Animal = Animal;
    }
}

//Her opretter vi funktionen som vil tjekke at alle felter i brugerregisteringen bliver udfyldt korrekt.
// Vi benytter getElementById til at hente værdierne gennem deres ID. Derudover bruger vi .value
// Vi har udkommenteret fra uAdress til admin, da værdierne på nuværende tidspunkt ikke bliver brugt når vi opretter en
//bruger. Vi har derfor også udkommenteret de tilhørende if-statements. 
 function validate() {
    var un = document.getElementById("un").value;
    var pw = document.getElementById("pw").value;
    var nm = document.getElementById("nm");
    //var uAddress = document.getElementById("uAddress").value;
    //var phoneNumber = document.getElementById("phoneNumber").value;
    //var email = document.getElementById("email").value;
    //var admin = document.getElementById("admin").value;

//Vi laver if-statement til at kunne specificere hvad hver enkelt felt skal indeholde for at kunne returnere true (blive
// "godkendt".)

   //Her bruger vi .length til at tjekke længden på brugernavnet og passwordet
    if (un.length < 5) {
        alert("Dit brugernavn skal indeholde minimum 5 karakterer");
        return false;
    }
    if (pw.length < 5) {
        alert("Dit password skal indeholde minimum 5 karakterer");
        return false;
    }

//Her bruger vi en equals operator til at sørge for, at brugernavns feltet bliver udfyldt.
    if (nm.value == "") {
        alert("Brugernavn kræves");
        return false;
    }
//Her bruger vi først en NaN funktion, som betyder at det skal være tal, som indtastes. Derefter bruger vi en
// and-operater og en notequals operator til at definere hvordan et telefonnummer skal skrives.
    /*if(isNaN(phoneNumber) && phoneNumber.length != 8){
        alert("Indtast venligst et gyldigt telefonnummer");
           return false;
     }

//Her bruger vi indexOf("@") og equals operator til at definere at dette felt skal indeholde ét @. Derudover bruger vi
//igen .lenght til at definere minimum længden på emailen.
     if(email.indexOf("@") == -1 || email.length < 5){
         alert("Indtast en gyldig email");
         return false;
     }*/

//Hvis den løber igennem alle if-statements og de ikke returnerer false, så vil den køre hhv. StoreUser() og
// testForAdmin() funktionerne.
    StoreUser();
    testForAdmin();
    return true;
}

//Her opretter vi en behandler/practitioner test bruger.
PractitionerTest = new Practitioner("Sanel","123","Sanel Gluhic","Dalgas Have 1","12345678","sanel@cbs.dk","true");
//Her opretter vi en klient/client test bruger.
ClientTest = new Client("Emma","123","Emma Sjelle","Dalgas Have 2","12345677","emma@cbs.dk","false","Horse");

//Her opretter vi et tomt array, hvor vi pushe vores testbrugere op i.
let users = [];
users.push(PractitionerTest,ClientTest);

//Her hentes informationer fra registrerformen.
var un = document.getElementById('un');
var pw = document.getElementById('pw');
var nm = document.getElementById('nm');
var uAddress = document.getElementById('address');
var phoneNumber = document.getElementById('phoneNumber');
var email = document.getElementById('email');
var animal = document.getElementById('animal');
var admin = document.getElementById('admin');

//Når man opretter en behdandler/practitioner i local storage skal denne admin-nøgle bruges for oprettelse.
var adminKey = "888";

//Vi laver en funktion som gemmer den information vi har modtaget i registrer bruger formen.
function StoreUser() {
    localStorage.setItem('un', un.value);
    localStorage.setItem('pw', pw.value);
    localStorage.setItem('nm', nm.value);
    localStorage.setItem('uAddress', uAddress.value);
    localStorage.setItem('phoneNumber', phoneNumber.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('animal', animal.value);
    localStorage.setItem('admin', admin.value);
}
//Her opretter vi en funktion som bruger en if og en else statement til at teste om der er blevet oprettet en admin-bruger
// eller om der er blevet oprettet en almindelig bruger. Derudover bruger vi igen en equals operator.
function testForAdmin(){
    if(admin.value == adminKey) {
        localStorage.setItem('admin', 'true');
        alert("Din bruger er oprettet som behandler - du kan nu logge ind.");
    }
    else {
            localStorage.setItem('admin', 'false');
            alert("Din bruger er oprettet - du kan nu logge ind.");
        }
}
//Her eksperimenterede vi med at pushe local storage brugere til det samme array, som vores præ-definerede bruger er I.
//Det fungerede dog ikke.

/*function localtoArray() {
    var localAdmin = localStorage.getItem('admin');
    if(localAdmin == "true") {
        PractitionerLocal = new Practitioner(localStorage.un,localStorage.pw,localStorage.nm,localStorage.uAddress,localStorage.phoneNumber,localStorage.email,localStorage.admin);
        users.push(PractitionerLocal);
        localStorage.setItem("users", users);
    }
    else if (localAdmin == "false") {
        ClientLocal = new Client(localStorage.un,localStorage.pw,localStorage.nm,localStorage.uAddress,localStorage.phoneNumber,localStorage.email,localStorage.admin);
        users.push(ClientLocal);
        localStorage.setItem("users", users);
    }
}
*/

//Vi oprettede denne funktion til at kunne clear vores Local Storage fra vores browser consol. Vi har især brugt denne
//funktion under vores tests.
function clearLocal(){
    localStorage.clear();
}