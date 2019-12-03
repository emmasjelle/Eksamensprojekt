 function isLoggedIn() {
    let check = sessionStorage.length;
    console.log(check);
    switch (check) {
        case 0:
            window.location.href = "LogIn.html";
            break;
        case 1:
            //window.location.href = "Bookingside.html";
            break;
        default:
            console.log('Default');
            break;
     }
 }
 //MIDLERTIDIGT FJERNET FRA ONLOAD PÅ BOOKINGSIDE.HTML
 /*   }
    if (sessionStorage.length == 0) {
        window.location.href = "LogIn.html";
    } else {
        window.location.href = "Bookingside.html";
    }
} */