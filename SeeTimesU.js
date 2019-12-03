//Shows name of active User Client
var activeUs = sessionStorage.getItem('activeUser');
document.getElementById('seTider').innerHTML = "Hej "+activeUs+", nedenfor kan du se din booking";

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
            if (times[i].clientB.length > 0) {
                document.getElementById('myTimeCal1').innerHTML = times[i].startB + "-" + times[i].endB;
                document.getElementById('myPracCal1').innerHTML = times[i].practitionerB;
                document.getElementById('myTime1').style.visibility = "visible";
                console.log("Time found")
            }
        }
    }
}

showBookings();

function cancelTime() {
    var times = JSON.parse(localStorage.getItem('timesArray'));
    for(var i = 0; i < times.length; i++){
        if(times[i].clientB == activeUs) {
            times[times[i].idB].avaiB = true;
            times[times[i].idB].clientB = "";
            document.getElementById('myTimeCal1').innerHTML = "Ingen bookinger";
            document.getElementById('myPracCal1').innerHTML = "";
            document.getElementById('myTime1').style.visibility = "hidden";
            alert("Din tid er aflyst");
        }
    }
    localStorage.setItem('timesArray', JSON.stringify(times));
}
