// Oprettelse af class
class booking {
    constructor(year, month, date) {
        this.year = year;
        this.month = month;
        this.date = date;
    }
}
//Her oprettes ledige bookingtider, 5,6,7, december.
Oktober23 = new booking(2019, 10, 23);
December5 = new booking(2019, 12, 5);
December6 = new booking(2019, 12, 6);
December7 = new booking(2019, 12, 7);

var times = [];
times.push(Oktober23, December5, December6, December7);

function searchDate() {
    var loadedDate = new Date(document.getElementById("choosenDate").value);
    if(choosenDate.value == "2019-10-23"){
        alert("lol");
    }
}



/*
// booking array for time, month, date,

//Vi laver en en ny ledig tid d: 23/03/2019 med tiderne defineret i funtionen.
test = new booking(2, 23, 3);

console.log(test.time); //Her laves en instance of a class for at teste tiderne
*/