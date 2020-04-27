//The purpose of this code is to create our login function and logout.
//There is three possibilities when loggin in:
// 1. A pre-made user successfully logs in
// 2. A new created user logs in
// 3. The username or password from pre-made or new user is incorrect, so access is denied
function logInApi() {
    let userEmail = document.getElementById('userE').value;
    let userPass = document.getElementById('userPw').value;
    const body = {
        email: userEmail,
        password: userPass
    };
    axios.post('http://localhost:3000/users/login', body)
        .then((response) => {
            if (response.status === 200) {
                console.log(response);
                sessionStorage.setItem("activeUser", response.data.email);
                //Skal save JWT token på en eller anden måde
                window.location.href = "Bookingside.html";
            } else {
                console.log(response.status.message);
            }
        })
        .catch((err) => {
            //Denne catch skal fange min medelelse fra api'en
            alert('')
        })
}

//Log out
function logOut(){
    sessionStorage.clear();
}
function testAdmin() {
    let userEmail = sessionStorage.activeUser;
    const body = {
        email: userEmail
    };
    axios.post('http://localhost:3000/users/check', body)
        .then((response) => {
            if (response.status === 200) {
                sessionStorage.setItem("admin", response.data.admin);
            } else {
                console.log(response.status.message);
            }
        })
        .catch((err) => {
            //Denne catch skal fange min medelelse fra api'en
            alert('')
        })
}

//tidligere funktioner
//!!PRE API FUNKTION!!
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

//API første test kald
function logInUserTest() {
    var valid = false;
    var invalid = true;
    var userName = document.getElementById('userName').value;
    var pass = document.getElementById('userPw').value;
    const emma = '5ea3dcb90b82760858a9c772';
    //Skal have den til at søge det indtastede username og slå det op i databasen
    //Nedenståend er blot en test
    axios.get('http://localhost:3000/users/'+emma)
        .then(response => {
            userNm = response.data.username;
            userPw = response.data.password;
            console.log(userNm);
            console.log(userPw);
            // Forloop that looks through the users array for matching usernames and then passwords for the matching index
            if (userName == userNm) {
                valid = true;
                window.location.href = "Bookingside.html";
            }
            if (valid) {
                window.location.href = "Bookingside.html";
                sessionStorage.setItem("activeUser", un);
            }
            else if (invalid) {
                alert("Brugernavnet \""+userName+"\" eller password er forkert.");
                return true;
            }
        });
}
