var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var months = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];

//Checks how many days there are in a specific month
function getDays(month,year) {
    return new Date(year,month, 0).getDate();
}

//Gets month from the month picker in html
var choosenMonth = document.getElementById('month1');

//Checks the number of days in the chosen month, and pastes it into the calender in next function
function checkDate() {
        //daysInMonth = days in the chosen month (ex 30, 28)
        let daysInMonth = getDays(choosenMonth.value, currentYear);
        //Turn days in choosen month into string for sessionStorage
        let monthString = JSON.stringify(daysInMonth);
        //Saves daysInMonthS in sessionStorage for our calender function
        sessionStorage.setItem('daysInMonthS',monthString);

        //Gets first day of the chosen month in 1-7 - BESKRIV HVAD DER SKER HER
        var firstDay = new Date(currentYear + "-" + choosenMonth.value + "-01").getDay();
        firstDay = (firstDay===0) ? 7 : firstDay;
        sessionStorage.setItem('fDayInMonthS',firstDay);
        fillCalenderDays();
}
function fillCalenderDays() {
    //edits content of an html element
    //document.getElementById('man-1').innerHTML = "test";
    var firstD = sessionStorage.getItem('fDayInMonthS');
    //Gets all days and weekday numbers from first week in html
    var firstW = document.getElementsByClassName('week1');
    //Clears the calender to avoid merging of dates
    for (var i = 0; i < firstW.length; i++) {
        firstW[i].innerHTML = "";
    }
    // Places the first workday of a chosen month correctly in the calender
    //Finds all classes "Week1" and uses the first day number(subtracted by 1) as index[firstD-1]
    //for the array of elements under the class.
    document.getElementsByClassName('week1')[firstD-1].innerHTML = "1";
}

//Selected date SIGER AT MONTH=0 HVAD GÅR DER GALT HER?!
for (i = 0; i < months.length; i++) {
    //month = month string from months array (ex Jan, Feb)
    let month = months[choosenMonth.value - 1];
    let clickedMonth = months.indexOf(month);
document.querySelector('div.datesWrapper').addEventListener('click', function () {
    let clickedDate = event.target.textContent;
    let savedDate = clickedDate+"/"+clickedMonth+"/"+currentYear;
    console.log(clickedDate+"/"+clickedMonth+"/"+currentYear);
    localStorage.setItem('selectedDate', savedDate);
}
)}