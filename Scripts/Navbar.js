function navBar() {
    // Defining variables that are used often in the following. They are defined in global scope.
    var allNavBar = document.getElementById("all");
    var userNavBar = document.getElementById("user");
    var admNavBar = document.getElementById("adm");

    let userEmail = sessionStorage.activeUser;
    const body = {email: userEmail};

    //Client is not a user or a practitioner
    if (sessionStorage.length == 0 ) {
        /*We are using style.display to hide the Navigation options with our post request, in order to show
          the navigation bar according to the user system privileges. */
        allNavBar.style.display = 'flex';
        userNavBar.style.display = 'none';
        admNavBar.style.display = 'none';
    } else if (sessionStorage.length != 0) {
        axios.post('http://localhost:3000/users/check', body)
            .then((response) => {
                //True = client is a practitioner. False = Client is a Client
                if (response.data.admin === true) {
                    admNavBar.style.display = 'none';
                    allNavBar.style.display = 'none';
                    userNavBar.style.display = 'flex';
                } else {
                    admNavBar.style.display = 'flex';
                    allNavBar.style.display = 'none';
                    userNavBar.style.display = 'none';
                }
            })
            .catch((err) => {
                //Denne catch skal fange min medelelse fra api'en
                console.log(err)
            })
        }
}
