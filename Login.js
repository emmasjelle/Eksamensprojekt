//The purpose of this code is to create our login function and logout.

//There is three possibilities when loggin in:
// 1. A pre-made user successfully logs in
// 2. A new created user logs in
// 3. The username or password from pre-made or new user is incorrect, so access is denied
function logInUser() {
    var users = JSON.parse(localStorage.getItem('userArray'));
    var valid = false;
    var invalid = true;
    // Forloop that looks through the users array for matching usernames and then passwords for the matching index
    for (var i = 0; i < users.length; i++) {
        if (userName.value == users[i].un && userPw.value == users[i].pw) {
            valid = true;
        }
    }

    //If there is a match in username and password the user will be directed to the booking page. If there isn't a match
    //the system will create an alert and stay on the same page.
    if (valid) {
        window.location.href = "Bookingside.html";
        sessionStorage.setItem("activeUser", userName.value);
    }
    else if (invalid) {
        alert("Brugernavnet \""+userName.value+"\" eller password er forkert.");
        return true;
    }
}

//Log out
function logOut(){
    sessionStorage.clear();
}
