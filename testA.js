// Loaded(onload in body) on all HTML pages to check which Navigation Bar to display

function navBar() {
    // When a pre-defined user or user from localStorage logs in, the system stores their unique username as an activeUser in sessionStorage.
    // sessionStorage is instead of localStorage, in order to prevent the system from saving the user as being logged in after the session is terminated.
    var activeUserNow = sessionStorage.getItem("activeUser");
    //The variables below are used in order to check the admin boolean value of a localStorage created user.
    var localUserNow = localStorage.getItem("un");
    var localUserAdmin = localStorage.getItem("admin");

    //There is no current activeUser if the sessionStorage is empty (... == 0).
    //As the function loads on every page, the system knows that an empty sessionStorage should result in the "all"(guest) Navigation Bar to be displayed.
    if (sessionStorage.length == 0) {
        //We are using style.display to hide the Navigation options, that should not be accesible for the unregistered guest.
        document.getElementById("user").style.display = 'none';
        document.getElementById("adm").style.display = 'none';
    }
    //If there is an activeUser(admin true/false) the script runs the activeUserNow through a loop checking the users array.
    //after a match is found between activeUser(username) and the usernames in the user array through an if statement, another if statement is triggered.
    //the next if statement checks if the indexed user[i] has an admin boolean value of "true".
    for (var i = 0; i < users.length; i++ ) {
        if (activeUserNow == users[i].un) {
            if (users[i].admin == "true") {
                //if the above statements are met it will display the admin navigation bar.
                document.getElementById("all").style.display = 'none';
                document.getElementById("user").style.display = 'none';
            }
        }
        //If the sessionStorage is not empty, and the activeUserNow does not have the boolean value of "true", a series of if statements is trigged like above.
        //This time the statement checks if the activeUserNow has a boolean value of "false", resulting in the "user"(client) Navigation Bar being shown.
        if (activeUserNow == users[i].un) {
            if (users[i].admin == "false") {
                document.getElementById("all").style.display = 'none';
                document.getElementById("adm").style.display = 'none';
            }
        }
    }
    //The if statments below work like the ones above. The only difference is the comparison between the current activeUserNow and the localUserNow instead of the user array.
    if (activeUserNow == localUserNow && localUserAdmin == "true") {
        document.getElementById("all").style.display = 'none';
        document.getElementById("user").style.display = 'none';
    }
    if (activeUserNow == localUserNow && localUserAdmin == "false") {
        document.getElementById("all").style.display = 'none';
        document.getElementById("adm").style.display = 'none';
    }
}
