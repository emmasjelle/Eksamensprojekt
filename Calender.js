var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var months = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];

//Checks how many days there are in a specific month
function getDays(month, year) {
    return new Date(year, month, 0).getDate();
}

//Gets month from the month picker in HTML
var choosenMonth = document.getElementById('month1');
//Gets year from the year picker in HTML - Unused for now
var choosenYear = document.getElementById('year1');

//Checks the number of days in the chosen month and finds the first weekday in the chosen month for future use
function checkDate() {
    //daysInMonth = days in the chosen month (ex 30, 28)
    let daysInMonth = getDays(choosenMonth.value, currentYear);
    //Saves daysInMonthS in sessionStorage for our calender function
    sessionStorage.setItem('daysInMonthS', daysInMonth);

    for (i = 0; i < months.length; i++) {
        //month = month string from months array (ex Jan, Feb)
        let month = choosenMonth.value - 1;
        sessionStorage.setItem('clickedMonth', month);
        console.log(month);
    }
    //Gets first day of the chosen month in 1-7[monday-to-sunday]
    var firstDay = new Date(currentYear + "-" + choosenMonth.value + "-01").getDay();
    console.log(firstDay); // firstDay = 0
    firstDay = (firstDay === 0) ? 7 : firstDay;
    console.log(firstDay); // firstDay = 7
    sessionStorage.setItem('fDayInMonthS', firstDay);

    //Calls fillCalenderDays() function
    fillCalenderDays();

    //Clears the colors of previous chosen dates from colorDates()
    var week = document.getElementsByClassName('week');
    for (i = 0; i < week.length; i++) {
        if (week[i].innerHTML >= 0) {
            week[i].style.backgroundColor = "";
        }
    }
    //Function that clears the available dates window and buttons
    clear();
    document.getElementById('dateField').innerHTML = "Vælg en dato nedenfor";
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
    firstW[firstD-1].innerHTML = "1";
    //Sets the id as first (first day in month, so the code knows where to start)
    //First weekday in the month now has the id 'first';
    firstW[firstD - 1].id = "first";
    //clears the id of all week divs except the actual first day of chosen month
    for (i = 0; i < firstW.length; i++) {
        if (firstW[firstD - 1] != firstW[i]) {
            firstW[i].id = "";
        }
    }

    //iii = days in the chosen month
    var iii = sessionStorage.getItem('daysInMonthS');
    //This part fills the rest of the month with dates
    //Using recursion, this function repeats the nextDate() function x times depending on the days in the chosen month
    (function repeat(number) {
        nextDate(number);
        if (number > 1) repeat(number - 1);
    })(iii - 1);
}

//Selected date saved in localStorage and date shown in top window
document.querySelector('div.datesWrapper').addEventListener('click', function () {
    let clickedMonth = sessionStorage.getItem('clickedMonth');
    let cMonth = clickedMonth * 1 + 1;
    let clickedDate = event.target.textContent;
    //Displays the chosen date in the top of the calender - adds a 0 in front of the month if month < 10.
    //Also disables clicking of empty fields and saves the clicked date as selectedDate in localStorage
    if (clickedDate > 0) {
        if (cMonth < 10) {
            document.getElementById('dateField').innerHTML = clickedDate + "/" + 0 + cMonth + "/" + currentYear;
            let savedDate = clickedDate + "/" + clickedMonth + "/" + currentYear;
            console.log(savedDate);
            localStorage.setItem('selectedDate', savedDate);
        } else {
            document.getElementById('dateField').innerHTML = clickedDate + "/" + cMonth + "/" + currentYear;
            let savedDate = clickedDate + "/" + clickedMonth + "/" + currentYear;
            console.log(savedDate);
            localStorage.setItem('selectedDate', savedDate);
        }
    }
    //Calls colorDate() function from below - colors the chosen day
    colorDate();
    clear();
    fillWindow();

});

function colorDate() {
    var x = document.getElementById('dateField').innerHTML;
    var week = document.getElementsByClassName('week');
    //Splits the dateField into a string of elements seperated by "/" and gets [0] which is the chosen date
    let chosenDay = x.split("/")[0];
    for (i = 0; i < week.length; i++) {
        //!= prevents it from coloring all the empty divs
        if (week[i].innerHTML == chosenDay && chosenDay != 0) {
            week[i].style.backgroundColor = "#00CA85";
        } else {
            week[i].style.backgroundColor = "";
        }
    }
}

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
        if (week[i].innerHTML > highest) {
            highest = newHigh;
        }
        //finds the week.innerHTML which is equal to the highest value in the elements
        //this new value is added to the number of the first weekday (all multiplied by 1 to convert into numbers)
        //If firstD was now used in this, it would start from the beginning of the week elements
        if (week[i].innerHTML == highest) {
            highestId = week[i].innerHTML * 1 + firstD * 1;
        }
    }
    //The function now finds the 'week'.innerHTML element with the highestId-1 and sets it equal to
    //the highest value +1. The function automatically knows where to add the next date
    document.getElementsByClassName('week')[highestId - 1].innerHTML = highest * 1 + 1;
}

//Function that clears the available dates window and buttons
function clear() {
    //Clears buttons
    document.getElementById('time1').style.visibility = "hidden";
    document.getElementById('time2').style.visibility = "hidden";
    document.getElementById('time3').style.visibility = "hidden";
    //Clears available dates window to avoid mixing of dates and times
    document.getElementById('timeCal1').innerHTML = "";
    document.getElementById('pracCal1').innerHTML = "";
    document.getElementById('avaiCal1').innerHTML = "";
    document.getElementById('timeCal2').innerHTML = "";
    document.getElementById('pracCal2').innerHTML = "";
    document.getElementById('avaiCal2').innerHTML = "";
    document.getElementById('timeCal3').innerHTML = "";
    document.getElementById('pracCal3').innerHTML = "";
    document.getElementById('avaiCal3').innerHTML = "";

}

//This part fills in the available dates on the chosen day
function fillWindow() {
    //Gets the 'real' date dd/mm(1-12)/yyyy from the HTML
    var x = document.getElementById('dateField').innerHTML;
    //Gets bookedTimes from the booking buttons from string format into new array
    var times = JSON.parse(localStorage.getItem('timesArray'));
    //Fills times into the chosen day window
    for (i = 0; i < times.length; i++) {
        //Time 1
        if (x == times[i].dateB && times[i].timeB == 1 && times[i].idB != "-1") {
            document.getElementById('timeCal1').innerHTML = times[i].startB + "-" + times[i].endB;
            document.getElementById('pracCal1').innerHTML = times[i].practitionerB;
            if (times[i].avaiB == true) {
                document.getElementById('avaiCal1').innerHTML = "Ledig";
                document.getElementById('time1').style.visibility = "visible";
            }
            if (times[i].avaiB != true) {
                document.getElementById('avaiCal1').innerHTML = "Optaget";
                document.getElementById('time1').style.visibility = "hidden";
            }
        }
        //Time 2
        if (x == times[i].dateB && times[i].timeB == 2 && times[i].idB != "-1") {
            document.getElementById('timeCal2').innerHTML = times[i].startB + "-" + times[i].endB;
            document.getElementById('pracCal2').innerHTML = times[i].practitionerB;
            if (times[i].avaiB == true) {
                document.getElementById('avaiCal2').innerHTML = "Ledig";
                document.getElementById('time2').style.visibility = "visible";
            }
            if (times[i].avaiB != true) {
                document.getElementById('avaiCal2').innerHTML = "Optaget";
                document.getElementById('time2').style.visibility = "hidden";
            }
        }
        //Time 3
        if (x == times[i].dateB && times[i].timeB == 3 && times[i].idB != "-1") {
            document.getElementById('timeCal3').innerHTML = times[i].startB + "-" + times[i].endB;
            document.getElementById('pracCal3').innerHTML = times[i].practitionerB;
            if (times[i].avaiB == true) {
                document.getElementById('avaiCal3').innerHTML = "Ledig";
                document.getElementById('time3').style.visibility = "visible";
            }
            if (times[i].avaiB != true) {
                document.getElementById('avaiCal3').innerHTML = "Optaget";
                document.getElementById('time3').style.visibility = "hidden";
            }
        }
    }
    //If there are no times on the chosen date, display the "No times on chosen date" message.
    var check1 = document.getElementById('pracCal1').innerHTML;
    var check2 = document.getElementById('pracCal2').innerHTML;
    var check3 = document.getElementById('pracCal3').innerHTML;
    if(check1.trim().length == 0 && check2.trim().length == 0 && check3.trim().length == 0) {
        document.getElementById('pracCal1').innerHTML = "Ingen fundne tider på den valgte dato";
    }
}


// This works - but you can only book one time, and somehow times before the currently booked date. But, you can't book times after the times you booked, which is nice.
function book1() {
    var x = document.getElementById('dateField').innerHTML;
    //Gets the times for the booked time
    let time = document.getElementById('timeCal1').innerHTML; //Ex 08:00-10:00
    let timee = time.split('-'); // Ex timeSplit = ["08:00","10:00"];
    let start = timee[0]; // = 08:00

    var times = JSON.parse(localStorage.getItem('timesArray'));
    var active = sessionStorage.getItem('activeUser');

    //Samme problem som i SeeTimesU - den tager den første og låser tiderne efter den. tider før den valgte kan stadig bookes
    for (var i = 0; i < times.length; i++) {
        if (times[i].clientB == active) {
            alert("Du har overskredet maks antal bookinger - se dine bookinger under Se mine tider");
            break;
        }
        if (times[i].clientB != active && times[i].dateB == x && times[i].startB == start) {
            times[i].avaiB = false;
            times[i].clientB = active;
            console.log(times[i].dateB + " " + times[i].avaiB);
            alert("Din tid er booked");
            document.getElementById('avaiCal1').innerHTML = "Optaget";
            document.getElementById('time1').style.visibility = "hidden";
            break;

        }
    }
    localStorage.setItem('timesArray', JSON.stringify(times));
    console.log(localStorage);
}
function book2() {
    var x = document.getElementById('dateField').innerHTML;
    //Gets the times for the booked time
    let time = document.getElementById('timeCal2').innerHTML;
    let timee = time.split('-');
    let start = timee[0];

    var times = JSON.parse(localStorage.getItem('timesArray'));
    var active = sessionStorage.getItem('activeUser');

    //Samme problem som i SeeTimesU - den tager den første og låser tiderne efter den. tider før den valgte kan stadig bookes
    for (var i = 0; i < times.length; i++) {
        if (times[i].clientB == active) {
            alert("Du har overskredet maks antal bookinger - se dine bookinger under Se mine tider");
            break;
        }
        if (times[i].clientB != active && times[i].dateB == x && times[i].startB == start) {

            times[times[i].idB].avaiB = false;
            times[times[i].idB].clientB = active;
            console.log(times[i].dateB + " " + times[i].avaiB);
            alert("Din tid er booked");
            document.getElementById('avaiCal2').innerHTML = "Optaget";
            document.getElementById('time2').style.visibility = "hidden";
            break;

        }
    }
    localStorage.setItem('timesArray', JSON.stringify(times));
    console.log(localStorage);
}
function book3() {
    var x = document.getElementById('dateField').innerHTML;
    //Gets the times for the booked time
    let time = document.getElementById('timeCal3').innerHTML;
    let timee = time.split('-');
    let start = timee[0];

    var times = JSON.parse(localStorage.getItem('timesArray'));
    var active = sessionStorage.getItem('activeUser');

    //Samme problem som i SeeTimesU - den tager den første og låser tiderne efter den. tider før den valgte kan stadig bookes
    for (var i = 0; i < times.length; i++) {
        if (times[i].clientB == active) {
            alert("Du har overskredet maks antal bookinger - se dine bookinger under Se mine tider");
            break;
        }
        if (times[i].clientB != active && times[i].dateB == x && times[i].startB == start) {

            times[times[i].idB].avaiB = false;
            times[times[i].idB].clientB = active;
            console.log(times[i].dateB + " " + times[i].avaiB);
            alert("Din tid er booked");
            document.getElementById('avaiCal3').innerHTML = "Optaget";
            document.getElementById('time3').style.visibility = "hidden";
            break;

        }
    }
    localStorage.setItem('timesArray', JSON.stringify(times));
    console.log(localStorage);
}

function clearLocal() {
    localStorage.clear();
    console.log("Local Storage cleared.")
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