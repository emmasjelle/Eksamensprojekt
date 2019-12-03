 function isLoggedIn() {
    let check = sessionStorage.length;
    console.log(check);
    switch (check) {
        case 0:
            window.location.href = "LogIn.html";
            break;
        case 1:
            console.log("You are logged in");
            break;
        default:
            console.log('Default');
            break;
     }
 }
