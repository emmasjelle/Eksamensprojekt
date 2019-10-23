//Vi laver en User class som vi bruger til vores testbruger
class User {
    constructor(nm, pw) {
        this.nm = nm;
        this.pw = pw;
    }
}
//Testbruger(Ikke-admin)
Testbruger = new User("Sanel","123");
Testbruger2 = new User("Emma","321");
Testbruger3 = new User("Patrick","111");

var nmArray = [];
var pwArray = [];

nmArray.push(Testbruger.nm,Testbruger2.nm,Testbruger3.nm);
pwArray.push(Testbruger.pw,Testbruger2.pw,Testbruger3.pw);

//Henter Username(nm) og password(pw) fra vores register form
var nm = document.getElementById('nm');
var pw = document.getElementById('pw');

// Store user funktionen - brugeren gemmes lokalt
function StoreUser() {
    localStorage.setItem('nm', nm.value);
    localStorage.setItem('pw', pw.value);
    alert("Din bruger er oprettet - log ind i log ind feltet.");
}

var logIn = true;
localStorage.setItem("logIn", false);
// Henter localoprettet brugerinfo
function Login() {
    var storedName = localStorage.getItem('nm');
    var storedPw = localStorage.getItem('pw');
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

//  Hvis den prædefinerede testbruger(User) username og password er korrekt = log ind
    var valid = false;
    var invalid = true;
    for (var i = 0; i < nmArray.length; i++) {
        if (userName.value == nmArray[i] && userPw.value == pwArray[i] || userName.value == storedName && userPw.value == storedPw) {
            valid = true;
        }
    }
    if (valid) {
        window.location.href = "BookingLB.html";
        localStorage.removeItem("logIn");
        localStorage.setItem("logIn", true);
    }
    else if (invalid) {
        alert("Brugernavn eller password er forkert.");
        return true;
    }
}

// Return user to log in page if not logged in
 /*   function isLoggedIn() {
    localStorage.getItem("logIn");
    if (logIn = true) {
        window.location.href = "LogIn.html";
    }
}
*/
// Insert delete user function here



// Insert edit user function here