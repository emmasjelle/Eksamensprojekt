//Vi laver en User class som vi bruger til vores testbruger
class User {
    constructor(nm, pw) {
        this.nm = nm;
        this.pw = pw;
    }
}
//Testbruger(Ikke-admin)
Testbruger = new User("Sanel","123");
Testbruger2 = new User("Emma","321");
Testbruger3 = new User("Patrick","111");

//Array over brugerne
var nmArray = [];
var pwArray = [];

nmArray.push(Testbruger.nm,Testbruger2.nm,Testbruger3.nm);
pwArray.push(Testbruger.pw,Testbruger2.pw,Testbruger3.pw);

var nm = "Sanel";

function validate {
    for (var i=0; i<nmArray.length; i++) {
    if (nm == nmArray[i])
        alert("succes");
}

    //Hvis den lokale brugers username og password er korrekt = log ind
    if(userName.value == storedName && userPw.value == storedPw) {
        window.location.href = "BookingLB.html"
    }


/* else if(userName.value == Testbruger.nm && userPw.value == Testbruger.pw) {
 window.location.href = "BookingLB.html";
}
else {
 alert("Forkert brugernavn/password!");
} */
