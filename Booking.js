// Her laves en funktion over alle prædefineret tider, som kan bruges på alle dage
function tider() {

    tider = ["8.00-9.30", "10.00-11.30", "12.00-13.30", "14.00-15.30"] // De defineret tider

return tider
}
console.log(tider()) // Her tjekkes funktionen


// Vi laver en class
class booking {
    constructor(time, date, month) {
        this.tider() = time;
        this.date = date;
        this.month = month;
}}


//Vi laver en en ny ledig tid d: 23/03/2019 med tiderne defineret i funtionen.
test = new booking(2, 23, 3);

console.log(test.time); //Her laves en instance of a class for at teste tiderne


/*




December5 = new booking(tider(), 5, 12)

console.log(December5.time)

*/