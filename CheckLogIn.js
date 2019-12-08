// The purpose of this code is to check if the user is logged in or not. If not the user will be directed to the
// LogIn page if the user tries to enter a html page that is only available for the user or admin. The function works
// by checking the length of sessionStorage if length is 0 you will be redirected to LogIn if length is 1 it
// console.logs "You are logged in".
 function isLoggedIn() {
    if(sessionStorage.length > 0) {
        console.log("You are logged in");
    } else {
        window.location.href = "LogIn.html";
    }
 }

 // Function that is responsible for sending the user from "BehandlingsTyper" to "Bookingside" if "book" if clicked.
function book() {
    if(sessionStorage.length != 0) {
        window.location.href = "Bookingside.html";
    } else {
        window.location.href = "LogIn.html";
    }
}