let activeUser = "";

function logInUser() {
    var storedName = localStorage.getItem('un');
    var storedPw = localStorage.getItem('pw');
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    /*  Three posibiliteis here: 1. A pre-made user succesfully logs in(from users array). 2. A newly created user logs in(Local storage).
        3.Username or password from pre-made or new user is incorrect = acces denied */
    var valid = false;
    var invalid = true;
    // Forloop that looks through the users array for matching usernames and then passwords for the matching index
    for (var i = 0; i < users.length; i++) {
        if (userName.value == users[i].un && userPw.value == users[i].pw || userName.value == storedName && userPw.value == storedPw) {
            valid = true;
        }
    }
    if (valid) {
        window.location.href = "Bookingside.html";
        sessionStorage.setItem("activeUser", userName.value);
    }
    else if (invalid) {
        alert("Brugernavnet \""+userName.value+"\" eller password er forkert.");
        return true;
       // sessionStorage.setItem("activeUser", "");
    }
}

function logOut(){
    sessionStorage.clear();
}