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

//We create a practitioner test user.
PractitionerTest = new Practitioner("Sanel","123","Sanel Gluhic","Dalgas Have 1","12345678","sanel@cbs.student.dk","true"," ");
//client test user.
ClientTest = new Client("Emma","123","Emma Sjelle","Dalgas Have 2","12345677","emma@cbs.student.dk","false","Horse");

//When you create a practitioner in local storage this admin-key must be used during creation.
var adminKey = "888";

//This function checks that all fields in the registerform is completed correctly. We use the getElementByID to collect
//the values trough the ID and the .value enables us to collect the given value we get from the HTML form.
//Also we haven chosen to commented out from "uAddress" to "email" due to the lack of use when creating a user. This is
//also why we commented out the related if-statements.

//Information recived from the register form.
var un = document.getElementById('un');
var pw = document.getElementById('pw');
var nm = document.getElementById('nm');
var uAddress = document.getElementById('address');
var phoneNumber = document.getElementById('phoneNumber');
var email = document.getElementById('email');
var animal2 = document.getElementById('animal');
var admin = document.getElementById('admin');


 function validate() {
    var users = JSON.parse(localStorage.getItem('userArray'));
//In order to specify what every single field should contain to return true, we create if-statements.
   //We use .length in order to check the lenght of the username and password.
    if (un.value.length < 4) {
        alert("Dit brugernavn skal indeholde minimum 4 karakterer");
        return false;
    }
        for (i = 0; i < users.length; i++) {
            if (un.value == users[i].un) {
                alert("Brugernavnet er allerede i brug");
                return false;
            }
        }
        //R: SG: Får vi ikke et problem i bookingen, hvis flere brugere har det samme brugernavn?
     //Kunne det ikke være en ide at loope igennem de eksisterende usernames for at tjekke at det ikke
     // allerede eksisterer?
        //R: EVNS: Jo, det får jeg lige tilføjet!
        //R: EVNS: Jeg har rettet det nu.

    if (pw.value.length < 8) {
        alert("Dit password skal indeholde minimum 8 karakterer");
        return false;
    }
//We use the equals operator to make sure, what that the username field is being filled out.
    if (nm.value == "") {
        alert("Udfyld dit navn");
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

     if (admin.value != adminKey && admin.value != "") {
         alert("Forkert admin nøgle");
         return false;
     }
//If it runs through all if-statements and they don't return false, it will finally run the StoreUser() and
// testForAdmin() functions.
    storeUser();
    return true;
}

//This function stores the information received in the register user form.
function storeUser() {
    //See Navbar.js with createUserArr
    var users = JSON.parse(localStorage.getItem('userArray'));
    if (admin.value == adminKey) {
        newPractitioner = new Practitioner(un.value, pw.value, nm.value, uAddress.value, phoneNumber.value, email.value,
            "true", "");
        alert("Din bruger er oprettet som behandler - du kan nu logge ind.");
        users.push(newPractitioner);
        localStorage.setItem('userArray', JSON.stringify(users));
        console.log(users);
    } else {
        newClient = new Client(un.value, pw.value, nm.value, uAddress.value, phoneNumber.value, email.value, "false", animal2);
        alert("Din bruger er oprettet - du kan nu logge ind.");
        users.push(newClient);
        localStorage.setItem('userArray', JSON.stringify(users));
        console.log(users);
    }
}

//R: PHO: Super at du har fået samlet admintjekket og lagt testForAdmin() ind i StoreUser.
//StoreUser() er dog skrevet med stort S, vil du rette det til småt?
//D: EVNS: hov, det retter jeg lige.
