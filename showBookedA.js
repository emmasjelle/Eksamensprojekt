//Shows name of active User Practitioner
var activeUs = sessionStorage.getItem('activeUser');
document.getElementById('seTider').innerHTML = "Hej "+activeUs+", nedenfor kan du se dine tider og bookinger";



function showClientBookings() {
    //This first part of the function filters the times array for the practitioner who is currently logged in
    var timesArr = JSON.parse(localStorage.getItem('timesArray'));
    //Creates a new array with the logged in practitioners times
    var pracArr = timesArr.filter(function (practitioner) {
        return practitioner.practitionerB == activeUs;
    });
    //Counts the amount of times the practitioner appears as practitioner in the Times array
    var pracCount = timesArr.filter((timesArr) => timesArr.practitionerB == activeUs).length;
    console.log(activeUs+" appears as practitioner in the following "+pracCount+" bookings: "); // 7 gange
    console.log(pracArr);

    //This second part of the function displays the practitioners times on the

}
function cancelClientTime() {
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

