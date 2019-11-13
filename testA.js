
// loades på alle HTML sider
function navBar() {
    // vi henter både sessionstorage og local storage brugerne.
var activeUserNow = sessionStorage.getItem("activeUser");
var activeUserLocal = localStorage.getItem("admin");

// Både admin og user bar skjules på onload
    document.getElementById("user").style.display = 'none';
    document.getElementById("adm").style.display = 'none';

    // Barene skuljes indtil der logges ind
    // Der laves et forloop som tjekker om den person som er logget ind, er logget ind som en admin
    for (var i = 0; i < users.length; i++) {
        if (activeUserNow == users[i].un || activeUserLocal ){
                if (users[i].admin == "true" || activeUserLocal == "true") {
                    /*show adm bar - hide all & user bar*/
                    document.getElementById("all").style.display = 'none';
                    document.getElementById("user").style.display = 'none';
                    document.getElementById("adm").style.display = 'block';
                }
                // Der laves et forloop som tjekker om den person som er logget ind, er logget ind som en bruger
                else {
                    if (users[i].admin == "false" || activeUserLocal == "false"){
                        document.getElementById("all").style.display = 'none';
                        document.getElementById("adm").style.display = 'none';
                        document.getElementById("user").style.display= 'block';
                    }
                }
            }
        }
        }