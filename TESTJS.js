// Her laves en funktion over alle prædefineret tider, som kan bruges på alle dage
function tider() {
    tiderne = ["8.00-9.30", "10.00-11.30", "12.00-13.30", "14.00-15.30"] // De defineret tider

    return tiderne
}

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

var timeArray = [];
var dateArray = [];
var monthArray = [];

timeArray.push(December5.time, December6.time, December7.time);
dateArray.push(December5.date, December6.date, December7.date);
monthArray.push(December5.month, December6.month, December7.month);

