//Vi laver en User class som vi bruger til vores testbruger
class User {
    constructor(nm, pw) {
        this.nm = nm;
        this.pw = pw;
    }
}
//Testbruger(Ikke-admin)
Testbruger = new User("Sanel","123");


//Henter Username(nm) og password(pw) fra vores register form
var nm = document.getElementById('nm');
var pw = document.getElementById('pw');

// Store user funktionen - brugeren gemmes lokalt
function StoreUser() {
    localStorage.setItem('nm', nm.value);
    localStorage.setItem('pw', pw.value);
    alert("Din bruger er oprettet - log ind i log ind feltet.");
}

// Henter localoprettet brugerinfo
function Login() {
    var storedName = localStorage.getItem('nm');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

//Hvis den lokale brugers username og password er korrekt = log ind
    if(userName.value == storedName && userPw.value == storedPw) {
        window.location.href = "http://localhost:63342/Projekt/Eksamensprojekt/BookingLB.html"
    }

    // Hvordan får man den til at læse User class i stedet for Testbruger?
//Hvis den prædefinerede testbruger(User) username og password er korrekt = log ind
    else if(userName.value == Testbruger.nm && userPw.value == Testbruger.pw) {
        window.location.href = "http://localhost:63342/Projekt/Eksamensprojekt/BookingLB.html";
    }
    else {
        alert("Forkert brugernavn/password!");
    }
}

// Insert delete user function here



// Insert edit user function here