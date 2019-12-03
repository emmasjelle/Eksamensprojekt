//Shows name of active User Practitioner
var activeUs = sessionStorage.getItem('activeUser');
document.getElementById('seTider').innerHTML = "Hej "+activeUs+", nedenfor kan du se dine tider og bookinger";

function showClientBookings() {
    //Fills the times array if it has not been created
    var times = JSON.parse(localStorage.getItem('timesArray'));
    if (times == null) {
        var times = [];
        times.push(Test1, Test2, Test3, Test4, Test5, Test6, Test7);
        console.log('No times found - predefined times pushed to times array.')
        localStorage.setItem('timesArray', JSON.stringify(times));
    }
    if (times.length > 0) {
        //Show times
        //1. Lav array med alle tider activeUs er practitoner i *Tjek*
        //2. find længde af array
        //3. dupliker insert time 2[i] antal gange.
        var timesArr = JSON.parse(localStorage.getItem('timesArray'));
        var pracArr = [];
        for(var i = 0; i < timesArr.length; i++){
            if(timesArr[i].practitionerB == activeUs){
                pracArr.push(timesArr[i].idB);
                console.log(pracArr);
            }
        }
        var pracCount = timesArr.filter((timesArr) => timesArr.practitionerB == activeUs).length;
        console.log(pracCount); // 5 gange


    }
}

showClientBookings();

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

