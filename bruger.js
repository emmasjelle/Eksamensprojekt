class User {
    constructor(name, username, password, address, telephone, email) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.address = address;
        this.telephone = telephone;
        this.email = email;
    }
}
    // Insert create user function here
function createUser() {

    var user = document.getElementById('username');
    var pass = document.getElementById('password');

    var coruser = "test";
    var corpass = "123";

    if(user.value == coruser) {

        if(pass.value == corpass) {

            window.alert("You are logged in as " + user.value);

        } else {

            window.alert("incorrect username or password!");
        }

    } else {
        window.alert("Incorrect username or password!");
}
}


// Insert delete user function here



// Insert edit user function here