//The purpose of this code is to create our parent and children classes, validate the information given in the
//register form and finally store the created user in local storage.

//Parent User class in our system. The constructor contains variables which applies for both types of user
class User {
    constructor(pw, nm, uAddress, phoneNumber, email, practitioner) {
        this.pw = pw;
        this.nm = nm;
        this.uAddress = uAddress;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.practitioner = practitioner;
    }
}
//Practitioner class which inherit from the parent class. This also applies for the next class "Client". In
// order to inherit, we use "extends User".
class Practitioner extends User {
    constructor(pw, nm, uAddress, phoneNumber, email, practitioner, companyName) {
        super(pw, nm, uAddress, phoneNumber, email, practitioner);
        this.companyName = companyName;
    }
}
class Client extends User {
    constructor(pw, nm, uAddress, phoneNumber, email, practitioner, animal) {
        super(pw, nm, uAddress, phoneNumber, email, practitioner);
        this.animal = animal;
    }
}

//When you create a practitioner in local storage this practitioner-key must be used during creation.
const practitionerKey = "888";

//This function checks that all fields in the registerform is completed correctly. We use the getElementByID to collect
//the values trough the ID and the .value enables us to collect the given value we get from the HTML form.
//Also we haven chosen to commented out from "uAddress" to "email" due to the lack of use when creating a user. This is
//also why we commented out the related if-statements.

//Information recived from the register form.
let pw = document.getElementById('pw');
let nm = document.getElementById('nm');
let uAddress = document.getElementById('address');
let uNumber = document.getElementById('phoneNumber');
let email = document.getElementById('email');
let practitioner = document.getElementById('admin');

//This function stores the information received in the register user form.
function storeUserOld() {
    //See Navbar.js with createUserArr
    let users = JSON.parse(localStorage.getItem('userArray'));
    if (admin.value == practitionerKey) {
        newPractitioner = new Practitioner(pw.value, nm.value, uAddress.value, uNumber.value, email.value,
            "true");
        alert("Din bruger er oprettet som behandler - du kan nu logge ind.");
        users.push(newPractitioner); //POST klassen (practitioner eller user)
        localStorage.setItem('userArray', JSON.stringify(users));
        console.log(users);
    } else {
        newClient = new Client(pw.value, nm.value, uAddress.value, uNumber.value, email.value, "false");
        alert("Din bruger er oprettet - du kan nu logge ind.");
        users.push(newClient);
        localStorage.setItem('userArray', JSON.stringify(users));
        console.log(users);
    }
}

function validateSignUp() {
    let practitionerCheck = false;
    if (practitioner.value === practitionerKey) {
        practitionerCheck = true;
        newPractitioner = new Practitioner(pw.value, nm.value, uAddress.value, uNumber.value, email.value,
            "true");
    } else {
        newClient = new Client(pw.value, nm.value, uAddress.value, uNumber.value, email.value, "false");
    }
        const body = {
        password: pw.value,
        name: nm.value,
        address: uAddress.value,
        email: email.value,
        phoneNumber: uNumber.value,
        practitioner: practitionerCheck
    };
    axios.post('http://localhost:3000/users/signup', body)
        .then((response) => {
            console.log('Sign up information is valid');
        })
        .catch((err) => {
            console.log('Sign up information is invalid');
        })
}
