/*
FRA Navbar.js
*/

//Global scope define
//The purpose of this code is to show the appropriate navbar in regards to the users acces level in our system.
//The user is either a guest, practitioner or a client.
//The runs our createUserArray and createTimesArray to check if times(bookings) and users are already stored in
//local storage. If not, it creates the two arrays and pushes the pre defined users and times into them.

function createUserArray(){
    //Check if times(array) has been created, otherwise create times
    var users = JSON.parse(localStorage.getItem('userArray'));
    if (users == null) {
        var users = [];
        users.push(PractitionerTest, ClientTest);
        console.log('No users found - predefined users pushed to user array.');
        localStorage.setItem('userArray', JSON.stringify(users));
    }
    if (users.length > 0) {
        var users = JSON.parse(localStorage.getItem('userArray'));
        console.log('userArray already exists - current users:');
        console.log(users);
    }
}
createUserArray();
function createTimesArray() {
    //Fills the times array if it has not been created
    var times = JSON.parse(localStorage.getItem('timesArray'));
    if (times == null) {
        var times = [];
        times.push(Test1,Test2,Test3,Test4,Test5,Test6,Test7);
        console.log('No times found - predefined times pushed to times array.')
        localStorage.setItem('timesArray', JSON.stringify(times));
    }
    if (times.length > 0) {
        var times = JSON.parse(localStorage.getItem('timesArray'));
        console.log('timesArray already exists - current times:');
        console.log(times);
    }
}
createTimesArray();

// Defining variables that are used often in the following. They are defined in global scope.
var allNavBar = document.getElementById("all");
var userNavBar = document.getElementById("user");
var admNavBar = document.getElementById("adm");


// Loaded(onload in body) on all HTML pages to check which Navigation Bar to display
function navBarr() {
    /* When a pre-defined user or user from localStorage logs in, the system stores their unique username
   as an activeUser in sessionStorage. SessionStorage is instead of localStorage, in order to prevent the system from
   saving the user as being logged in after the session is terminated. */
    var activeUserNow = sessionStorage.getItem("activeUser");
    var users = JSON.parse(localStorage.getItem('userArray'));
    //There is no current activeUser if the sessionStorage is empty (... == 0).
    /* As the function loads on every page, the system knows that an empty sessionStorage should result in
    the "all"(guest) Navigation Bar to be displayed. */
    if (sessionStorage.length == 0 ) {
        /*We are using style.display to hide the Navigation options, that should not be
        accesible for the unregistered guest. */
        allNavBar.style.display = 'flex';
        userNavBar.style.display = 'none';
        admNavBar.style.display = 'none';
    }
    /*If there is an activeUser(admin true/false) the script runs the activeUserNow through a loop checking
    the users array. After a match is found between activeUser(username) and the usernames in the user array
    through an if statement, another if statement is triggered. The next if statement checks if the indexed
    users[i] has an admin boolean value of "true". */
    for (var i = 0; i < users.length; i++ ) {
        if (activeUserNow == users[i].email) {
            console.log("not admin"+users[i].email);
            if (users[i].admin == "true") {
                //if the above statements are met it will display the admin navigation bar.
                admNavBar.style.display = 'flex';
                allNavBar.style.display = 'none';
                userNavBar.style.display = 'none';
            }
        }
        /*If the sessionStorage is not empty, and the activeUserNow does not have the boolean value of "true",
        a series of if statements is trigged like above. This time the statement checks if the activeUserNow has a
        boolean value of "false", resulting in the "user"(client) Navigation Bar being shown. */
        if (activeUserNow == users[i].email) {
            console.log("not admin"+users[i].email);
            if (users[i].admin == "false") {
                admNavBar.style.display = 'none';
                allNavBar.style.display = 'none';
                userNavBar.style.display = 'flex';
            }
        }
    }
}

/*
FRA Classes.js
*/
//We create a practitioner test user.
PractitionerTest = new Practitioner("Sanel","123","Sanel Gluhic","Dalgas Have 1","12345678","sanel@cbs.student.dk","true"," ");
//client test user.
ClientTest = new Client("Emma","123","Emma Sjelle","Dalgas Have 2","12345677","emma@cbs.student.dk","false","Horse");

function validate() {
    var users = JSON.parse(localStorage.getItem('userArray'));
//In order to specify what every single field should contain to return true, we create if-statements.
    //We use .length in order to check the lenght of the username and password.
    if (un.value.length < 4) {
        alert("Dit brugernavn skal indeholde minimum 4 karakterer");
        return false;
    }
    for (i = 0; i < users.length; i++) {
        if (un.value == users[i].un) {
            alert("Brugernavnet er allerede i brug");
            return false;
        }
    }
    //R: SG: Får vi ikke et problem i bookingen, hvis flere brugere har det samme brugernavn?
    //Kunne det ikke være en ide at loope igennem de eksisterende usernames for at tjekke at det ikke
    // allerede eksisterer?
    //R: EVNS: Jo, det får jeg lige tilføjet!
    //R: EVNS: Jeg har rettet det nu.

    if (pw.value.length < 8) {
        alert("Dit password skal indeholde minimum 8 karakterer");
        return false;
    }
//We use the equals operator to make sure, what that the username field is being filled out.
    if (nm.value == "") {
        alert("Udfyld dit navn");
        return false;
    }
//Firstly we use the NaN function, which demands the field to be entered with numbers. Afterwards we use and-operator
// and notequals operator in order to define how a phonenumber should be written.
    /*if(isNaN(phoneNumber) && phoneNumber.length != 8){
        alert("Indtast venligst et gyldigt dansk telefonnummer");
           return false;
     }

//We use the indexOf("@") and equals operator to define, that this field should contain one @.
     if(email.indexOf("@") == -1 || email.length < 5){
         alert("Indtast en gyldig email");
         return false;
     }*/

    if (admin.value != adminKey && admin.value != "") {
        alert("Forkert admin nøgle");
        return false;
    }
//If it runs through all if-statements and they don't return false, it will finally run the StoreUser() and
// testForAdmin() functions.
    storeUser();
    return true;
}

/*
FRA Login.js
*/
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



//Minside før seeTimesU
function showBookings() {
    //Gets bookedTimes from the booking buttons from string format into new array
    var times = JSON.parse(localStorage.getItem('timesArray'));

    //Fills times into the chosen day window
    if(times == null) {
        console.log("error");
    } else {
        //Tjek rækkefølge ifht hvilket tid der bookes - udkommenter andet if statement måske if else
        for (var i = 0; i < times.length; i++) {
            //Users booked time
            if (times[i].clientB == activeUs) {
                document.getElementById('myDateCal1').innerHTML = times[i].dateB;
                document.getElementById('myTimeCal1').innerHTML = times[i].startB + "-" + times[i].endB;
                document.getElementById('myPracCal1').innerHTML = times[i].practitionerB;
                document.getElementById('myTime1').style.visibility = "visible";
                console.log("Time found")
            }
        }
    }
}

function cancelTimeOld() {
    var times = JSON.parse(localStorage.getItem('timesArray'));
    for(var i = 0; i < times.length; i++){
        if(times[i].clientB == activeUs) {
            times[times[i].idB].avaiB = true;
            times[times[i].idB].clientB = "";
            document.getElementById('myDateCal1').innerHTML = "";
            document.getElementById('myTimeCal1').innerHTML = "Ingen bookinger";
            document.getElementById('myPracCal1').innerHTML = "";
            document.getElementById('myTime1').style.visibility = "hidden";
            alert("Din tid er aflyst");
        }
    }
}
