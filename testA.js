function adminlol() {
var activeUserNow = sessionStorage.getItem("activeUser");
    for (var i = 0; i < users.length; i++) {
        if (activeUserNow == users[i].un){
                if (users[i].admin == "true") {
                    /*show adm bar - hide all & user bar*/
                    document.getElementById("all").style.display = 'none';
                    document.getElementById("user").style.display = 'none';
                }
                else {
                    if (users[i].admin == "false"){
                        document.getElementById("all").style.display = 'none';
                        document.getElementById("adm").style.display = 'none';

                    }

                }
            }
        }
        }

/*            show navigation bar for admin
        }
    } if else (activeUser == users[i].admin == false); {
        show navigation bar for user
    }
    else {
        show navigation bar guest
    }
*/