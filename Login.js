let activeUser = "";

function logInUser() {
    var users = JSON.parse(localStorage.getItem('userArray'));
    /*  Three posibiliteis here: 1. A pre-made user succesfully logs in(from users array). 2. A newly created user logs
    in(from users array).
        3.Username or password from pre-made or new user is incorrect = acces denied */
    var valid = false;
    var invalid = true;
    // Forloop that looks through the users array for matching usernames and then passwords for the matching index
    for (var i = 0; i < users.length; i++) {
        if (userName.value == users[i].un && userPw.value == users[i].pw) {
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
    }
}

function logOut(){
    sessionStorage.clear();
}