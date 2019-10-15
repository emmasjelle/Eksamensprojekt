/* class User {
    constructor(realName, username, userPassword, address, telephone, email, admin) {
        this.realName = realName;
        this.username = username;
        this.userPassword = userPassword;
        this.address = address;
        this.telephone = telephone;
        this.email = email;
        this.admin = admin;
    }
}
//Testbrugere
BrugerTest = new User("Sanel","test","123","Dalgas Have", "20202020","test@test.dk","False");
*/

var nm = document.getElementById('nm');
var pw = document.getElementById('pw');

// Store user function
function StoreUser() {
    localStorage.setItem('nm', nm.value);
    localStorage.setItem('pw', pw.value);
    alert("Din bruger er oprettet - log ind i log ind feltet.");
}

// Insert create user function here
function Login() {
    var storedName = localStorage.getItem('nm');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    if(userName.value == storedName && userPw.value == storedPw) {
        alert("jaa");
    }
    else {
        alert("kæmpe fejl");
    }

}

// Insert delete user function here



// Insert edit user function here