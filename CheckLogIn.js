// This function checks if the user is logged in or not. If not the user will be directed to the LogIn page if he/she
// tries to enter a html page that is only available for the user or admin. The function works by checking the
// length of sessionStorage if length is 0 you will be redirected to LogIn if length is 1 it console.logs "You are
// logged in".
 function isLoggedIn() {
    if(sessionStorage.length > 0) {
        console.log("You are logged in");
    } else {
        window.location.href = "LogIn.html";
    }
/*    let check = sessionStorage.length;
    console.log(check);
    switch (check) {
        case 0:
            window.location.href = "LogIn.html";
            break;
        case 1:
            console.log("You are logged in");
            break;
        default:
            console.log('Error checking log in status');
            window.location.href = "LogIn.html";
            break;
     }*/
 }



