//The purpose of this code is to create our parent and children classes, validate the information given in the
//register form and finally store the created user in local storage.

//Parent User class in our system. The constructor contains variables which applies for both types of user
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
//Practitioner (admin) class which inherit from the parent class. This also applies for the next class "Client". In
// order to inherit, we use "extends User".
class Practitioner extends User {
    constructor(un, pw, nm, uAddress, phoneNumber, email, admin, companyName) {
        super(un, pw, nm, uAddress, phoneNumber, email, admin);
        this.companyName = companyName;
    }
}

class Client extends User {
    constructor(un, pw, nm, uAddress, phoneNumber, email, admin, animal) {
        super(un, pw, nm, uAddress, phoneNumber, email, admin);
        this.animal = animal;
    }
}

//When you create a practitioner in local storage this admin-key must be used during creation.
var adminKey = "888";

//This function checks that all fields in the registerform is completed correctly. We use the getElementByID to collect
//the values trough the ID and the .value enables us to collect the given value we get from the HTML form.
//Also we haven chosen to commented out from "uAddress" to "email" due to the lack of use when creating a user. This is
//also why we commented out the related if-statements.

 function validate() {
    var un = document.getElementById("un").value;
    var pw = document.getElementById("pw").value;
    var nm = document.getElementById("nm");
    //var uAddress = document.getElementById("uAddress").value;
    //var phoneNumber = document.getElementById("phoneNumber").value;
    //var email = document.getElementById("email").value;
    var admin = document.getElementById("admin");

//In order to specify what every single field should contain to return true, we create if-statements.

   //We use .length in order to check the lenght of the username and password.
    if (un.length < 4) {
        alert("Dit brugernavn skal indeholde minimum 4 karakterer");
        return false;
    }
    if (pw.length < 8) {
        alert("Dit password skal indeholde minimum 8 karakterer");
        return false;
    }

//We use the equals operator to make sure, what that the username field is being filled out.
    if (nm.value == "") {
        alert("Brugernavn kræves");
        return false;
    }
//Firstly we use the NaN function, which demands the field to be entered with numbers. Afterwards we use and-operator
// and notequals operator in order to define how a phonenumber should be written.
    /*if(isNaN(phoneNumber) && phoneNumber.length != 8){
        alert("Indtast venligst et gyldigt dansk telefonnummer");
           return false;
     }

//We use the indexOf("@") and equals operator to define, that this field should contain one @.
     if(email.indexOf("@") == -1 || email.length < 5){
         alert("Indtast en gyldig email");
         return false;
     }*/

    //Not working. Why??
     /*
     if (admin.value != adminKey || admin.value != null) {
         alert("Forkert admin nøgle");
         return false;
     }

      */

//If it runs through all if-statements and they don't return false, it will finally run the StoreUser() and
// testForAdmin() functions.
    StoreUser();
    testForAdmin();
    return true;
}

//We create a practitioner test user.
PractitionerTest = new Practitioner("Sanel","123","Sanel Gluhic","Dalgas Have 1","12345678","sanel@cbs.dk","true"," ");
//client test user.
ClientTest = new Client("Emma","123","Emma Sjelle","Dalgas Have 2","12345677","emma@cbs.dk","false","Horse");

//We create an empty array for the test users.
let users = [];
users.push(PractitionerTest,ClientTest);

//Information recived from the register form.
var un = document.getElementById('un');
var pw = document.getElementById('pw');
var nm = document.getElementById('nm');
var uAddress = document.getElementById('address');
var phoneNumber = document.getElementById('phoneNumber');
var email = document.getElementById('email');
var animal2 = document.getElementById('animal');
var admin = document.getElementById('admin');



//This function stores the information received in the register user form.
function StoreUser() {
    localStorage.setItem('un', un.value);
    localStorage.setItem('pw', pw.value);
    localStorage.setItem('nm', nm.value);
    localStorage.setItem('uAddress', uAddress.value);
    localStorage.setItem('phoneNumber', phoneNumber.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('animal', animal2.value);
    localStorage.setItem('admin', admin.value);
}
//This is + else statement test  if the created user is an admin or client user.
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
//We tried to experiment with pushing local storage users to the same array, as our pre defined users are in. Didn't
// work.

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

//In order to clear our local storage from the browser console. Very efficient during test.
function clearLocal(){
    localStorage.clear();
}