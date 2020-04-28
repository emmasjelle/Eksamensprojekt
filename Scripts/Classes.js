//The purpose of this code is to create our parent and children classes, validate the information given in the
//register form and finally store the created user in local storage.

//Parent User class in our system. The constructor contains variables which applies for both types of user
class User {
    constructor(pw, nm, uAddress, phoneNumber, email, admin) {
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
    constructor(pw, nm, uAddress, phoneNumber, email, admin, companyName) {
        super(pw, nm, uAddress, phoneNumber, email, admin);
        this.companyName = companyName;
    }
}
class Client extends User {
    constructor(pw, nm, uAddress, phoneNumber, email, admin, animal) {
        super(pw, nm, uAddress, phoneNumber, email, admin);
        this.animal = animal;
    }
}

//When you create a practitioner in local storage this admin-key must be used during creation.
var adminKey = "888";

//This function checks that all fields in the registerform is completed correctly. We use the getElementByID to collect
//the values trough the ID and the .value enables us to collect the given value we get from the HTML form.
//Also we haven chosen to commented out from "uAddress" to "email" due to the lack of use when creating a user. This is
//also why we commented out the related if-statements.

//Information recived from the register form.
var pw = document.getElementById('pw');
var nm = document.getElementById('nm');
var uAddress = document.getElementById('address');
var uNumber = document.getElementById('phoneNumber');
var email = document.getElementById('email');
var animal2 = document.getElementById('animal');
var admin = document.getElementById('admin');

//This function stores the information received in the register user form.
function storeUserOld() {
    //See Navbar.js with createUserArr
    var users = JSON.parse(localStorage.getItem('userArray'));
    if (admin.value == adminKey) {
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
    let adminCheck = false;
    if (admin.value == adminKey) {
        adminCheck = true;
    }

        const body = {
        password: pw.value,
        name: nm.value,
        address: uAddress.value,
        email: email.value,
        phoneNumber: uNumber.value,
        admin: adminCheck
    };
    axios.post('http://localhost:3000/users/validate', body)
        .then((response) => {
            if (response.status === 200 && adminCheck === true) {
                console.log('admin true + valid');
                console.log(response.data.message);
                //INDSÆT create practitioner funktion her
            }
            if (response.status === 200 && adminCheck === false) {
                console.log('admin false + valid');
                console.log(response.data.message);
                //INDSÆT create client funktion her
            }
        })
        .catch((err) => {
            console.log(err.data.message);
        })
}

function storeUser() {
    newPractitioner = new Practitioner(pw.value, nm.value, uAddress.value, uNumber.value, email.value,
        "true");
    const body = {
        password: newPractitioner.pw,
        name: newPractitioner.nm,
        address: newPractitioner.uAddress,
        email: newPractitioner.email,
        phoneNumber: newPractitioner.uNumber,
        admin: newPractitioner.admin
    };

    axios.post('http://localhost:3000/users/signup', body)
        .then((response) => {
            if (response.status === 200) {
                alert('User created')
            }
            if (response.status === 409) {
                alert(response.status.message);
                console.log(response);
                console.log(response.data);
                console.log('triggered');
            }
        })
        .catch((err) => {
            //Denne catch skal fange min medelelse fra api'en
            console.log(err);
            console.log('test');
            alert(err);
        })
}

