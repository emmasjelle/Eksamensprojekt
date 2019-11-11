//Parent User class in our system
class User {
    constructor(un, pw, nm, uAddress, phoneNumber, email, admin) {
        this.un = nm;
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

//Practitioner test users
PractitionerTest1 = new Practitioner("Sanel","123","Sanel Gluhic","Solbjerg Plads 10","12345678","Sanel@cbs.dk","true","");
//Client test users
ClientTest1 = new Client("Emma","123","Emma Sjelle","Dalgas Have 11","12345687","Emma@cbs.dk","false","Horse");

var users = [];
users.push(PractitionerTest1,ClientTest1);

/* Test om begge subclasses kan pushes i samme array
function test() {
    for (var i = 0; i < users.length; i++) {
        if (ClientTest1.un == users[i].un) {
        console.log("lækkert"); }
    }
}
*/

//Get information from registerform
var un = document.getElementById('un');
var pw = document.getElementById('pw');
var nm = document.getElementById('nm');
var uAddress = document.getElementById('address');
var phoneNumber = document.getElementById('phoneNumber');
var email = document.getElementById('email');
var animal = document.getElementById('animal');
var admin = document.getElementById('admin');

var adminKey = "888";

//Function that stores the registerinformation
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
