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

//Users from the User class pushed into array for later use
var users = [];
users.push(Testbruger,Testbruger2,Testbruger3);

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

/*  Three posibiliteis here: 1. A pre-made user succesfully logs in(from users array). 2. A newly created user logs in(Local storage).
    3.Username or password from pre-made or new user is incorrect = acces denied */
    var valid = false;
    var invalid = true;
    // Forloop that looks through the users array for matching usernames and then passwords for the matching index
    for (var i = 0; i < users.length; i++) {
        if (userName.value == users[i].nm && userPw.value == users[i].pw || userName.value == storedName && userPw.value == storedPw) {
            valid = true;
        }
    }
    if (valid) {
        window.location.href = "BookingLB.html";
        //Creates an activeUser in the sessionStorage
        sessionStorage.setItem('activeUser', userName.value);
    }
    else if (invalid) {
        alert("Brugernavnet \""+userName.value+"\" eller passwordet er forkert.");
        return true;
    }
}

// Return user to log in page if not logged in
//FÅ DEN HER TIL AT VIRKE
/* function isLoggedIn() {
    sessionStorage.getItem('activeUser');
    for (var i = 0; i < users.length; i++) {
        if ('activeUser' === users[i].nm) {
            console.log("test");
            break
        }
        else {
            window.location.href = "LogIn.html";
        }
    }
}



//Log out user - Delete sessionstorage user
function logOut() {
    sessionStorage.clear();
}


 */






