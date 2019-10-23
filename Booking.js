// Her laves en funktion over alle prædefineret tider, som kan bruges på alle dage
function tider() {
    tiderne = ["8.00-9.30", "10.00-11.30", "12.00-13.30", "14.00-15.30"] // De defineret tider

return tiderne
}
console.log(tider()); // Her tjekkes funktionen



// Oprettelse af class
class booking {
    constructor(time, date, month) {
        this.time = tider();
        this.date = date;
        this.month = month;
}}

//Her oprettes ledige bookingtider, 5,6,7, december.
December5 = new booking(tider(), 5, 12);
December6 = new booking(tider(), 6, 12);
December7 = new booking(tider(), 7, 12);

//Test hvilke tider der er ledige d. 5 december
console.log(December5.time) // [ '8.00-9.30', '10.00-11.30', '12.00-13.30', '14.00-15.30' ]


var timeArray = [];
var dateArray = [];
var monthArray = [];

monthArray.push(December5.month, December6.month, December7.month);
dateArray.push(December5.date, December6.date, December7.date);
timeArray.push(December5.time, December6.time, December7.time);

var date = document.getElementById("choosenDate");

function searchDate() {
    localStorage.setItem('date', date.value);
    alert(date);
}
/*
// booking array for time, month, date,

//Vi laver en en ny ledig tid d: 23/03/2019 med tiderne defineret i funtionen.
test = new booking(2, 23, 3);

console.log(test.time); //Her laves en instance of a class for at teste tiderne
*/