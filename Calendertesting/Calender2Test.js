var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var months = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];

//Checks how many days there are in a specific month
function getDays(month,year) {
    return new Date(year,month, 0).getDate();
}

//Gets month from the month picker in HTML
var choosenMonth = document.getElementById('month1');
//Gets year fro mthe year picker in HTML - Unused for now
var choosenYear = document.getElementById('year1');

//Checks the number of days in the chosen month, and pastes it into the calender in next function
function checkDate() {
        //daysInMonth = days in the chosen month (ex 30, 28)
        let daysInMonth = getDays(choosenMonth.value, currentYear);
        //Turn days in choosen month into string for sessionStorage
        let monthString = JSON.stringify(daysInMonth);
        //Saves daysInMonthS in sessionStorage for our calender function
        sessionStorage.setItem('daysInMonthS',monthString);

        for (i = 0; i < months.length; i++) {
            //month = month string from months array (ex Jan, Feb)
            let month = months[choosenMonth.value - 1];
            //clickedMonth = saves month in index form (0-11)
            let clickedMonth = months.indexOf(month);
            sessionStorage.setItem('clickedMonth', clickedMonth);
            console.log(clickedMonth);
        }
        //Gets first day of the chosen month in 1-7 - BESKRIV HVAD DER SKER HER
        var firstDay = new Date(currentYear + "-" + choosenMonth.value + "-01").getDay();
        firstDay = (firstDay===0) ? 7 : firstDay;
        sessionStorage.setItem('fDayInMonthS',firstDay);
        fillCalenderDays();
}

//Fills in the 'first' weekday of the month and calls nextDate() to fill in the rest of the month
function fillCalenderDays() {
    //loads number of first weekday from SessionStorage
    var firstD = sessionStorage.getItem('fDayInMonthS');
    //Gets all days and weekday numbers from first week in html
    var firstW = document.getElementsByClassName('week');
    //Clears the calender to avoid merging of dates
    for (var i = 0; i < firstW.length; i++) {
        firstW[i].innerHTML = "";
    }
    document.getElementById('dateField').innerHTML = "";
    // Places the first workday of a chosen month correctly in the calender
    //Finds all classes "Week" and uses the first day number(subtracted by 1) as index[firstD-1]
    //for the array of elements under the class.
    document.getElementsByClassName('week')[firstD-1].innerHTML = "1";
    //Sets the id as first (first day in month, so the code knows where to start)
    document.getElementsByClassName('week')[firstD-1].id = "first";
    var first = document.getElementsByClassName('week')[firstD-1];
    //clears the id of all week divs except the actual first day of chosen month
    for (i = 0; i < firstW.length; i++) {
        if (firstW[firstD-1] != firstW[i]) {
            firstW[i].id = "";
        }
    }
    //First weekday in the month now has the id 'first';

    //iii = days in the chosen month
    var week = document.getElementsByClassName('week');
    var iii = sessionStorage.getItem('daysInMonthS');
    //This part fills the rest of the month with dates
    //Using recursion, this function repeats the nextDate() function x times depending on the days in the chosen month
    (function repeat(number) {
        nextDate(number);
        if (number > 1) repeat(number -1);
    })(iii-1);
}

//Selected date saved in localStorage and date shown in top window
document.querySelector('div.datesWrapper').addEventListener('click', function(){
    let clickedMonth = sessionStorage.getItem('clickedMonth');
    let cMonth = clickedMonth*1+1;
    let clickedDate = event.target.textContent;
    //Displays the chosen date in the top of the calender - adds a 0 in front of the month if month < 10.
    //Also disables clicking of empty fields and saves the clicked date as selectedDate in localStorage
    if (clickedDate > 0) {
        if(cMonth < 10) {
        document.getElementById('dateField').innerHTML = clickedDate + "/" + 0 + cMonth + "/" + currentYear;
            let savedDate = clickedDate+"/"+clickedMonth+"/"+currentYear;
            console.log(savedDate);
            localStorage.setItem('selectedDate', savedDate);
    } else {
        document.getElementById('dateField').innerHTML = clickedDate + "/" + cMonth + "/" + currentYear;
            let savedDate = clickedDate+"/"+clickedMonth+"/"+currentYear;
            console.log(savedDate);
            localStorage.setItem('selectedDate', savedDate);
        }
    }
    //Reveals the available times on a chosen date
    /* var savedDate = localStorage.getItem('selectedDate');
    for (i = 0; i < availableDays.length; i++) {
        if(availableDays[i].datee == savedDate) {
            let x = availableDays[i].practitioner;
            let y = availableDays[i].day[0];
            var g = JSON.stringify(y);
            document.getElementById('pracCal').innerHTML = x;
            document.getElementById('timeCal').innerHTML =
        }
    }
     */
});

//Fills in the days after the 'first' day is defined in fillCalenderDays()
function nextDate() {
    //loads number of first weekday from SessionStorage
    var firstD = sessionStorage.getItem('fDayInMonthS');
    //sets the highest (date) and highestId
    let highest = 0;
    let highestId = null;
    var week = document.getElementsByClassName('week');
    //Forloop checks the week class from html
    for (i = 0; i < week.length; i++) {
        //finds the newHigh value within all the week.innerHTMl elements
        newHigh = parseInt(week[i].innerHTML, 10);
        if(week[i].innerHTML > highest) {
            highest = newHigh;
        }
        //finds the week.innerHTML which is equal to the highest value in the elements
        //this new value is added to the number of the first weekday (all multiplied by 1 to convert into numbers)
        //If firstD was now used in this, it would start from the beginning of the week elements
        if(week[i].innerHTML == highest){
            highestId = week[i].innerHTML*1+firstD*1;
        }
    }
    //The function now finds the 'week'.innerHTML element with the highestId-1 and sets it equal to
    //the highest value +1. The function automatically knows where to add the next date
    document.getElementsByClassName('week')[highestId-1].innerHTML = highest*1+1;
}









//METHOD I TRIEDE BEFORE The nextDate() method - lacked automisation when adding a new date after the 'first'
/*function test() {
    //Note: Check difference between index and not index here
    //iii = days in the chosen month
    var iii = sessionStorage.getItem('daysInMonthS');
    //ii = number of first weekday in chosen month
    var ii = sessionStorage.getItem('fDayInMonthS');

    // fremgang: check index and fill of div - if div != iii fill another innerHTML+1
    //Måske find højeste nummer i en div, hvis det ikke er == iii, så kør funktionen en gang mere
    var week = document.getElementsByClassName('week');
    for (i = 0; i < week.length; i++) {
        //If a div doesn't contain the number of days in the given month trigger add day
        if (week[i].innerHTML != iii) {
            var x = document.getElementById('first').innerHTML;
            document.getElementById('first')
                .nextElementSibling.innerHTML = x*1+1;
            document.getElementById('first').nextElementSibling.id = '2';
        }
    }
}

 */

//If the last day in the chosen month doesn't equal number of days in chosen month trigger If:
//if (document.getElementsByClassName('week')[iii].innerHTML != iii) {
//}

/* for (var i = 0; i < week.length; i++) {
    //If a div doesn't contain the number of days in the given month trigger add day
    if (week[i].innerHTML != iii) {
       // document.getElementsByClassName('week')[first[i]].innerHTML = 2;
        console.log(first);
    }
} */
