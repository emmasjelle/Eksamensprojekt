class User {
    constructor(name, username, password, address, telephone, email, admin) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.address = address;
        this.telephone = telephone;
        this.email = email;
        this.admin = admin;
    }
}
    // Insert create user function here
BrugerTest = new User("Sanel","BrugerTest","123","Dalgas Have", "20202020","test@test.dk","False");

function createUser() {

    var user = document.getElementById('username');
    var pass = document.getElementById('password');

    var coruser = User.username;
    var corpass = User.password;

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