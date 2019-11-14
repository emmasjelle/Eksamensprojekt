/*Contains User Parent class, subclasses and register functions*/

//Parent User class in our system
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
//Practitioner(admin) User class from parent User
class Practitioner extends User {
    constructor(un, pw, nm, uAddress, phoneNumber, email, admin, infoAboutMe) {
        super(un, pw, nm, uAddress, phoneNumber, email, admin);
        this.infoAboutMe = infoAboutMe;
    }
}
//Client User class from parent User
class Client extends User {
    constructor(un, pw, nm, uAddress, phoneNumber, email, admin, Animal) {
        super(un, pw, nm, uAddress, phoneNumber, email, admin);
        this.Animal = Animal;
    }
}

function validate() {
    var un = document.getElementById("un").value;
    var pw = document.getElementById("pw").value;
    var nm = document.getElementById("nm").value;
    /*var uAddress = document.getElementById("uAddress").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;*/
    var admin = document.getElementById("admin").value;
    var error_message = document.getElementById("error_message");
    var text;


    var text;
    if (un.length < 5) {
        alert("Please Enter valid Name");
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}


//Practitioner test users
PractitionerTest = new Practitioner("Sanel","123","Sanel Gluhic","Dalgas Have 1","12345678","sanel@cbs.dk","true","");
//Client test users
ClientTest = new Client("Emma","123","Emma Sjelle","Dalgas Have 2","12345677","emma@cbs.dk","false","Horse");

let users = [];
users.push(PractitionerTest,ClientTest);

//Get information from registerform
var un = document.getElementById('un');
var pw = document.getElementById('pw');
var nm = document.getElementById('nm');
var uAddress = document.getElementById('address');
var phoneNumber = document.getElementById('phoneNumber');
var email = document.getElementById('email');
var animal = document.getElementById('animal');
var admin = document.getElementById('admin');

//When creating a Practitioner in Local Storage
var adminKey = "888";

//Function that stores the registerinformation
function StoreUser() {
    console.log("virker");
    localStorage.setItem('un', un.value);
    localStorage.setItem('pw', pw.value);
    localStorage.setItem('nm', nm.value);
    localStorage.setItem('uAddress', uAddress.value);
    localStorage.setItem('phoneNumber', phoneNumber.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('animal', animal.value);
    localStorage.setItem('admin', admin.value);
}
function testForAdmin(){
    if(admin.value == adminKey) {
        localStorage.setItem('admin', 'true');
        alert("Din bruger er oprettet - log ind i log ind feltet.");
    }
    else {
            localStorage.setItem('admin', 'false');
            alert("Din bruger er oprettet - log ind i log ind feltet.");
        }
}

function localtoArray() {
    var localAdmin = localStorage.getItem('admin');
    if(localAdmin == "true") {
        PractitionerLocal = new Practitioner(localStorage.un,localStorage.pw,localStorage.nm,localStorage.uAddress,localStorage.phoneNumber,localStorage.email,localStorage.admin);
        users.push(PractitionerLocal);
    }
    else if (localAdmin == "false") {
        ClientLocal = new Client(localStorage.un,localStorage.pw,localStorage.nm,localStorage.uAddress,localStorage.phoneNumber,localStorage.email,localStorage.admin);
        users.push(ClientLocal);
    }
}

//Calls all our register functions (Remember to insert in LogIn.html)
function register() {
    StoreUser();
    testForAdmin();
    localtoArray();
}

//Function used to clear local storage from the browser console
function clearLocal(){
    localStorage.clear();
}

// Kommentarerer PHO til næste gang: "javascript local storage pushed to array disapears"
// https://stackoverflow.com/questions/19635077/adding-objects-to-array-in-localstorage