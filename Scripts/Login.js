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
            console.log(err);
        })
}

//Log out
function logOut(){
    sessionStorage.clear();
}

