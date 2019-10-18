// Her laves en funktion over alle prædefineret tider, som kan bruges på alle dage
function tider() {

    tiderne = ["8.00-9.30", "10.00-11.30", "12.00-13.30", "14.00-15.30"] // De defineret tider

return tiderne
}
console.log(tider()) // Her tjekkes funktionen



// Oprettelse af class
class booking {
    constructor(time, date, month) {
        this.time = tider();
        this.date = date;
        this.month = month;
}}

//Her oprettes ledige bookingtider
December5 = new booking(tider(), 5, 12);
December6 = new booking(tider(), 6, 12);
December7 = new booking(tider(), 7, 12);

//Test hvilke tider der er ledige d. 5 december
console.log(December5.time) // [ '8.00-9.30', '10.00-11.30', '12.00-13.30', '14.00-15.30' ]


var timeArray = [];
var dateArray = [];
var monthArray = [];

timeArray.push(December5.time, December6.time, December7.time);
dateArray.push(December5.date, December6.date, December7.date);
monthArray.push(December5.month, December6.month, December7.month);
/*
var valid = false;
var invalid = true;

for (var i = 0; i < nmArray.length; i++) {
    if (userName.value == nmArray[i] && userPw.value == pwArray[i] || userName.value == storedName && userPw.value == storedPw) {
        valid = true;
    }
}
if (valid) {
    window.location.href = "BookingLB.html";
}
else if (invalid) {
    alert("Brugernavn eller password er forkert.");
    return true;
}


/*
// booking array for time, month, date,

//Vi laver en en ny ledig tid d: 23/03/2019 med tiderne defineret i funtionen.
test = new booking(2, 23, 3);

console.log(test.time); //Her laves en instance of a class for at teste tiderne

*/