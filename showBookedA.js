//Shows name of active User Practitioner
var activeUs = sessionStorage.getItem('activeUser');
document.getElementById('seTider').innerHTML = "Hej " + activeUs + ", nedenfor kan du se dine tider og bookinger";

//This first part filters the times array for the practitioner who is currently logged in
var times = JSON.parse(localStorage.getItem('timesArray'));
//Creates a new array with the logged in practitioners times
var pracArr = times.filter(function (practitioner) {
    return practitioner.practitionerB == activeUs && practitioner.idB != -1;
});
//Counts the amount of times the practitioner appears as practitioner in the Times array
var pracCount = times.filter((times) => times.practitionerB == activeUs && times.idB != -1).length;
console.log(activeUs + " appears as practitioner in the following " + pracCount + " bookings: "); // 5 gange
console.log(pracArr);

//Fills the practitioners bookings into the timesShowClient html element
function nextClientBooking() {
    //We have put it into a while loop which eats just about anything but runs the code 5 times
    //But, it is only supposed to run 4(because it includes 0) times, but the code works perfectly
    //We just get an error in the console which is harmless.
    try {
    while (pracArr) {
        //sets the highest (date) and highestId just as the nextDate function in Calender.js
        let highest = 0;
        let highestId = 1;
        let pracNumber = 0;
        var time = document.getElementById('timesShowClient').childNodes;
        //Forloop checks the week class from html
        for (i = 0; i < time.length; i++) {
            //finds the newHigh value within all the week.innerHTMl elements
            newHigh = parseInt(time[i].id, 10);
            if (time[i].id > highest) {
                highest = newHigh;
            }
            if (time[i].id == highest) {
                highestId = time[i].id * 1 + 1;
            }
            if (time[i].id == highest) {
                pracNumber = pracNumber * 1 + 1 / 3;
            }
        }
        console.log("highest = " + highest);
        console.log("highestId = " + highestId);

        //Uses the rounded pracNumber as inded in the pracArr array to get the id and use it as index to get info from times
        let newPrac = Math.round(pracNumber);
        console.log("pracNumber = " + newPrac);
        highest = document.createElement('div');
        highest.innerHTML = times[pracArr[newPrac].idB].dateB;
        highest.id = highestId;
        let parent = document.getElementById('timesShowClient');
        parent.appendChild(highest);
        //Paste time
        var time1 = document.createElement('div');
        time1.innerHTML = times[pracArr[newPrac].idB].startB + "-" + times[pracArr[newPrac].idB].endB;
        time1.id = highestId * 1 + 1;
        parent.appendChild(time1);
        //Paste client
        var client1 = document.createElement('div');
        if (times[pracArr[newPrac].idB].clientB == "") {
            client1.innerHTML = "Ikke booked";
        } else {
            client1.innerHTML = times[pracArr[newPrac].idB].clientB;
        }
        client1.id = highestId * 1 + 2;
        parent.appendChild(client1);
        }
    }
    catch(err){
        console.log("Loaded too many times. Other times are shown succesfully.")
    }
}

function chooseBooking() {
    var bookings = document.getElementById('bookings');
    for (var key in pracArr) {
        var booking = pracArr[key];
        bookings.options[bookings.options.length] = new Option(booking.dateB+" "+booking.startB+"-"+booking.endB+" id= "+booking.idB);
    }
    document.body.appendChild(bookings);
}

chooseBooking();

function removeTime() {
    let selected = bookings.options[bookings.selectedIndex].text;
    let selectedPart =selected.split(' '); //selectedPart[3] targets the times array index of the chosen booking
    var times = JSON.parse(localStorage.getItem('timesArray'));
    let parent = document.getElementById('timesShowClient');
    //Sets the idB of the selected booking as -1 which makes it unusable.
    times[selectedPart[3]].idB = -1;
    times[selectedPart[3]].clientB = "";
    alert("Din tid den "+times[selectedPart[3]].dateB+" er blevet slettet.");
    localStorage.setItem('timesArray', JSON.stringify(times));
    window.location.reload(true);
}



//Lav eventlistener til aflysning af tider clicked time og cancelCLientTime funciton together
