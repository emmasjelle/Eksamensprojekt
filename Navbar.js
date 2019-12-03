//Global scope define

// Defining variables that are used often in the following. They are defined in global scope.
const allNavBar = document.getElementById("all");
const userNavBar = document.getElementById("user");
const admNavBar = document.getElementById("adm");
function createUserArr(){
    //Check if times(array) has been created, otherwise create times
    var users = JSON.parse(localStorage.getItem('userArray'));
    if (users == null) {
        var users = [];
        users.push(PractitionerTest, ClientTest);
        console.log('No users found - predefined users pushed to user array.')
        localStorage.setItem('userArray', JSON.stringify(users));
    }
    if (users.length > 0) {
        var users = JSON.parse(localStorage.getItem('userArray'));
        console.log(users);
    }
}
createUserArr();

// Loaded(onload in body) on all HTML pages to check which Navigation Bar to display
function navBar() {
    /* When a pre-defined user or user from localStorage logs in, the system stores their unique username
   as an activeUser in sessionStorage. SessionStorage is instead of localStorage, in order to prevent the system from
   saving the user as being logged in after the session is terminated. */
    var activeUserNow = sessionStorage.getItem("activeUser");
    var users = JSON.parse(localStorage.getItem('userArray'));
    //There is no current activeUser if the sessionStorage is empty (... == 0).
    /*As the function loads on every page, the system knows that an empty sessionStorage should result in
    the "all"(guest) Navigation Bar to be displayed. */
    if (sessionStorage.length == 0) {
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
        if (activeUserNow == users[i].un) {
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
        if (activeUserNow == users[i].un) {
            if (users[i].admin == "false") {
                admNavBar.style.display = 'none';
                allNavBar.style.display = 'none';
                userNavBar.style.display = 'flex';
            }
        }
    }
    /*The if statments below work like the ones above. The only difference is the comparison between the current
    activeUserNow and the localUserNow instead of the user array. */
   /* if (activeUserNow == localUserNow && localUserAdmin == "true") {
        admNavBar.style.display = 'flex';
        allNavBar.style.display = 'none';
        userNavBar.style.display = 'none';
    }
    if (activeUserNow == localUserNow && localUserAdmin == "false") {
        admNavBar.style.display = 'none';
        allNavBar.style.display = 'none';
        userNavBar.style.display = 'flex';
    }*/
}
