//Shows name of active User
var activeUs = sessionStorage.getItem('activeUser');
document.getElementById('seTider').innerHTML = "Hej "+activeUs+", nedenfor kan du se din bookede tid";

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
            if (activeUs == times[i].clientB) {
                document.getElementById('myTimeCal1').innerHTML = times[i].startB + "-" + times[i].endB;
                document.getElementById('myPracCal1').innerHTML = times[i].practitionerB;
                document.getElementById('myTime1').style.visibility = "visible";
                console.log("Time found")
            }
/*            if(activeUs != times[i].clientB && activeUs == times[i].clientB) {
                document.getElementById('myTimeCal1').innerHTML = "Ingen bookinger";
                document.getElementById('myPracCal1').innerHTML = "";
                document.getElementById('myTime1').style.visibility = "hidden";
                console.log("No time found");
            }*/
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


//Codereview Emma Sjelle:
/* Den viser ikke tiden hvis du booker andre tider end den sidste tid i times, så kommer den ikke frem på siden.
Kan det eventuelt være noget med dit if-statement?
            if (activeUs == times[i].clientB) {
                document.getElementById('myTimeCal1').innerHTML = times[i].startB + "-" + times[i].endB;
                document.getElementById('myPracCal1').innerHTML = times[i].practitionerB;
                document.getElementById('myTime1').style.visibility = "visible";
                console.log("Time found")
            }
            if(activeUs != times[i].clientB) {
                document.getElementById('myTimeCal1').innerHTML = "Ingen bookinger";
                document.getElementById('myPracCal1').innerHTML = "";
                document.getElementById('myTime1').style.visibility = "hidden";
                console.log("No time found");
            }
*/
//Svar:
/*Hov. Ja, det kan du have ret i. Det lader til at det andet if-statements bliver trigged, da begge if-statements
i teorien er true, hvis man vælger andre tider!
 */