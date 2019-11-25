
/*
function isLoggedInn() {
    var activeUserNow = sessionStorage.getItem("activeUser");

    if (sessionStorage.length == 0) {
        window.location.href = "LogIn.html";
    }
}

 */

function isLoggedInnn() {
    var activeUserNow = sessionStorage.getItem("activeUser");

    if (sessionStorage.length == 0) {
        window.location.href = "LogIn.html";
    } else {
        window.location.href = "BookingLB.html";
    }
}

// Return user to log in page if not logged in SPØRG MIKKEL
//Se Session storage ifht. isLoggedIn - I stedet for logIn så sæt en active user
// function LoggedIn() {
    /* localStorage.getItem("logIn");
      if (logIn == "0") {
          // window.location.href = "LogIn.html";
      } */
