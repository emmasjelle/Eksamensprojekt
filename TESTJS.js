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

