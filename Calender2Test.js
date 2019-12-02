var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var months = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
var bookedTimes = [];
//Empty booking
emptyB = new Booking("1","","","","",'', '',"");
bookedTimes.push(emptyB);

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
        //Clears the colors of previous chosen dates from colorDates()
        var week = document.getElementsByClassName('week');
        for (i = 0; i < week.length; i++){
            if(week[i].innerHTML >= 0){
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
    for(i = 0; i < week.length; i++){
        //!= prevents it from coloring all the empty divs
        if(week[i].innerHTML==chosenDay && chosenDay != 0) {
            week[i].style.backgroundColor = "#00CA85";
        }
        else {
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

//Function that clears the available dates window and buttons
function clear() {
    //Clears buttons
    document.getElementById('time1').style.visibility = "hidden";
    document.getElementById('time2').style.visibility = "hidden";
    document.getElementById('time3').style.visibility = "hidden";
    //Clears available dates window to avoid mixing of dates and times
    document.getElementById('timeCal1').innerHTML = "";
    document.getElementById('pracCal1').innerHTML = "Ingen ledige tider på den valgte dato";
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
    var timeBooked = localStorage.getItem('bookedTime');
    var dayBooked = localStorage.getItem('bookedDay');
    //Gets bookedTimes from the booking buttons from string format into new array

    //Fills times into the chosen day window
    for (i = 0; i < times.length; i++) {
        for (j = 0; j < bookedTimes.length; j++) {
            //Time 1
            if (x == times[i].dateB && times[i].timeB == 1) {
                document.getElementById('timeCal1').innerHTML = times[i].startB + "-" + times[i].endB;
                document.getElementById('pracCal1').innerHTML = times[i].practitionerB;
                if (bookedTimes[j].dateB != x && times[i].avaiB == true) {
                    document.getElementById('avaiCal1').innerHTML = "Ledig";
                    document.getElementById('time1').style.visibility = "visible";
                }
                if (bookedTimes[j].dateB == x && bookedTimes[j].timeB == 1) {
                    document.getElementById('avaiCal1').innerHTML = "Optaget";
                    document.getElementById('time1').style.visibility = "hidden";
                }
                if (bookedTimes[j].dateB == x && bookedTimes[j].timeB != 1) {
                    document.getElementById('avaiCal1').innerHTML = "Ledig";
                    document.getElementById('time1').style.visibility = "visible";
                }
                if (times[i].avaiB != true) {
                    document.getElementById('avaiCal1').innerHTML = "Optaget";
                    document.getElementById('time1').style.visibility = "hidden";
                }
            }
        }
        //Time 2 - metoden for time 2 og 3 virker men der kan kun være en booked tid i systemet
        if (x==times[i].dateB && times[i].timeB==2) {
            document.getElementById('timeCal2').innerHTML = times[i].startB + "-" + times[i].endB;
            document.getElementById('pracCal2').innerHTML = times[i].practitionerB;
            if (dayBooked != x && times[i].avaiB == true) {
                document.getElementById('avaiCal2').innerHTML = "Ledig";
                document.getElementById('time2').style.visibility = "visible";
            }
            if (times[i].avaiB == true) {
                document.getElementById('avaiCal2').innerHTML = "Ledig";
                document.getElementById('time2').style.visibility = "visible";
            }
            if (times[i].avaiB != true) {
                document.getElementById('avaiCal2').innerHTML = "Optaget";
                document.getElementById('time2').style.visibility = "hidden";
            }
            if (dayBooked == x && timeBooked == 2) {
                document.getElementById('avaiCal2').innerHTML = "Optaget";
                document.getElementById('time2').style.visibility = "hidden";
            }
        }
        //Time 3
        if (x==times[i].dateB && times[i].timeB==3) {
            document.getElementById('timeCal3').innerHTML = times[i].startB + "-" + times[i].endB;
            document.getElementById('pracCal3').innerHTML = times[i].practitionerB;
            if (dayBooked != x && times[i].avaiB == true) {
                document.getElementById('avaiCal3').innerHTML = "Ledig";
                document.getElementById('time3').style.visibility = "visible";
            }
            if (times[i].avaiB == true) {
                document.getElementById('avaiCal3').innerHTML = "Ledig";
                document.getElementById('time3').style.visibility = "visible";
            }
            if (times[i].avaiB != true) {
                document.getElementById('avaiCal3').innerHTML = "Optaget";
                document.getElementById('time3').style.visibility = "hidden";
            }
            if (dayBooked == x && timeBooked == 3) {
                document.getElementById('avaiCal3').innerHTML = "Optaget";
                document.getElementById('time3').style.visibility = "hidden";
            }
        }
    }
}
//Booking functions for each booking button - only possible to book one time in the calender
//Possible generate ID and store it in local storage - make it possible to book more than one time
function book1() {
    let prac = document.getElementById('pracCal1').innerHTML;
    var x = document.getElementById('dateField').innerHTML;
    //Gets the times for the booked time
    let time = document.getElementById('timeCal1').innerHTML;
    let timee = time.split('-');
    let start = timee[0];
    let end = timee[1];
    alert("Din tid er booked");
    //let chosenDay = document.getElementById('dateField').innerHTML;
    // chosenTime is equal to the button position matching the time of day (between 1-3)
    let chosenTime = 1;

    //Sets the time as unavailable to remove it from the window
    //localStorage.setItem('bookedDay', chosenDay);
    //localStorage.setItem('bookedTime', chosenTime);

    //find highest id in bookedTimes in order to create unique new id that's higher than previous
    //previousId is now the highest Id from the array.
    let previousId = null;
    for(i =0; i < bookedTimes.length; i++) {
        newId = parseInt(bookedTimes[i].idB,10);
        if (bookedTimes[i].idB > previousId) {
            previousId = newId;
        }
    }
    console.log(previousId);

    //Create id
    previousId = new Booking(previousId*1+1,x,start,end,prac,false,chosenTime,'activeUser');
    bookedTimes.push(previousId);
    //Saves the bookedTimes array in localStorage in string format eller hvad


    //Add store bookedUser as active user so that the user can see the booked time.
        // times[i].clientB == activeUser eller sådan noget - save i localStorage

    document.getElementById('avaiCal1').innerHTML = "Optaget";
    document.getElementById('time1').style.visibility = "hidden";
}
function book2() {
    alert("Din tid er booked");
    let chosenDay = document.getElementById('dateField').innerHTML;
    let chosenTime = 2;
    //Sets the time as unavailable to remove it from the window
    localStorage.setItem('bookedDay', chosenDay);
    localStorage.setItem('bookedTime', chosenTime);
    //Add store bookedUser as active user so that the user can see the booked time.
    // times[i].clientB == activeUser eller sådan noget - save i localStorage
    document.getElementById('avaiCal2').innerHTML = "Optaget";
    document.getElementById('time2').style.visibility = "hidden";
}
function book3() {
    alert("Din tid er booked");
    let chosenDay = document.getElementById('dateField').innerHTML;
    let chosenTime = 3;
    //Sets the time as unavailable to remove it from the window
    localStorage.setItem('bookedDay', chosenDay);
    localStorage.setItem('bookedTime', chosenTime);
    //Add store bookedUser as active user so that the user can see the booked time.
    // times[i].clientB == activeUser eller sådan noget - save i localStorage
    document.getElementById('avaiCal3').innerHTML = "Optaget";
    document.getElementById('time3').style.visibility = "hidden";
}

function clearLocal(){
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

//From booking function
/*let avaiIndex = 0;
for(i = 0; i < times.length; i++) {
    //Checks if the chosen date is anywhere in the times array and if it's available
    if(x==times[i].dateB && times[i].avaiB == true) {
        alert("test");
    }
}*/
/* times[1].avaiB = false;
 fillWindow();
var g = document.getElementById(this.id).id;
var f = g.split('time')[1]; */