// This function checks if the user is logged in or not. If not the user will be directed to the LogIn page if he/she
// tries to enter a html page that is only available for the user or admin. The function works by checking the
// length of sessionStorage ??????????????????????????????????????
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
