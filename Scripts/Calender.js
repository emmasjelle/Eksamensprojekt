//The purpose of this code is to create our calender. This is primarily done through the creation of the following
//functions: checkDate, fillCalenderDay, nextDate, colourDate, clear and fillWindow.
//It fills a grid of empty HTML divs with the dates of the chosen month.
//Also we create the booking functions.
let months = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
//Checks how many days there are in a specific month

function getDays(month, year) {
    return new Date(year, month, 0).getDate();
}

//Gets month from the month picker in HTML
let choosenMonth = document.getElementById('month1');
//Gets year from the year picker in HTML - Unused for now

let choosenYear = document.getElementById('year1');
//Checks the number of days in the chosen month and finds the first weekday in the chosen month for future use

function checkDate() {
    //daysInMonth = days in the chosen month (ex 30, 28)
    let daysInMonth = getDays(choosenMonth.value, choosenYear.value);
    //Saves daysInMonthS in sessionStorage for our calender function
    sessionStorage.setItem('daysInMonthS', daysInMonth);
    for (i = 0; i < months.length; i++) {
        //month = month string from months array (ex Jan, Feb)
        let month = choosenMonth.value;
        sessionStorage.setItem('clickedMonth', month);
        console.log(month);
    }
    //Gets first day of the chosen month in 1-7[monday-to-sunday]
    var firstDay = new Date(choosenYear.value + "-" + choosenMonth.value + "-01").getDay();
    console.log(firstDay); // firstDay = 0
    firstDay = (firstDay === 0) ? 7 : firstDay;
    console.log(firstDay); // firstDay = 7
    sessionStorage.setItem('fDayInMonthS', firstDay);
    //Calls fillCalenderDays() function
    fillCalenderDays();
    //Clears the colors of previous chosen dates from colorDates()
    var day = document.getElementsByClassName('day');
    for (i = 0; i < day.length; i++) {
        if (day[i].innerHTML >= 0) {
            day[i].style.backgroundColor = "";
        }
    }
    //Function that clears the available dates window and buttons
    //clear();
    document.getElementById('dateField').innerHTML = "Vælg en dato nedenfor";
}

//Fills in the 'first' weekday of the month and calls nextDate() to fill in the rest of the month
function fillCalenderDays() {
    //loads number of first weekday from SessionStorage
    var firstD = sessionStorage.getItem('fDayInMonthS');
    //Gets all days and weekday numbers
    var firstW = document.getElementsByClassName('day');
    //Clears the calender to avoid merging of dates
    for (var i = 0; i < firstW.length; i++) {
        firstW[i].innerHTML = "";
    }
    document.getElementById('dateField').innerHTML = "";
    // Places the first workday of a chosen month correctly in the calender
    //Finds all classes "day" and uses the first day number(subtracted by 1) as index[firstD-1]
    //for the array of elements under the class.
    firstW[firstD-1].innerHTML = "1";
    //Sets the id as first (first day in month, so the code knows where to start)
    //First weekday in the month now has the id 'first';
    firstW[firstD - 1].id = "first";
    //clears the id of all day divs except the actual first day of chosen month
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

//Fills in the days after the 'first' day is defined in fillCalenderDays()
function nextDate() {
    //loads number of first weekday from SessionStorage
    var firstD = sessionStorage.getItem('fDayInMonthS');
    //sets the highest (date) and highestId
    let highest = 0;
    let highestId = null;
    var day = document.getElementsByClassName('day');
    //Forloop checks the day class from html
    for (i = 0; i < day.length; i++) {
        //finds the newHigh value within all the day.innerHTMl elements
        newHigh = parseInt(day[i].innerHTML, 10);
        if (day[i].innerHTML > highest) {
            highest = newHigh;
        }
        //finds the day.innerHTML which is equal to the highest value in the elements
        //this new value is added to the number of the first weekday (all multiplied by 1 to convert into numbers)
        //If firstD was now used in this, it would start from the beginning of the day elements
        if (day[i].innerHTML == highest) {
            highestId = day[i].innerHTML * 1 + firstD * 1;
        }
    }
    //The function now finds the 'day'.innerHTML element with the highestId-1 and sets it equal to
    //the highest value +1. The function automatically knows where to add the next date
    document.getElementsByClassName('day')[highestId - 1].innerHTML = highest * 1 + 1;
}

//modified during API conversion
//Selected date saved in localStorage and date shown in top window
document.querySelector('div.datesWrapper').addEventListener('click', function () {
    //Disables 'Book tid' button
    sessionStorage.removeItem('clickedBooking');
    let clickedMonth = sessionStorage.getItem('clickedMonth');
    let cMonth = clickedMonth * 1;
    let clickedDate = event.target.textContent;
    console.log(clickedDate);
    let savedDate = '';
    //Displays the chosen date in the top of the calender - adds a 0 in front of the month if month < 10.
    //Also disables clicking of empty fields and saves the clicked date as selectedDate in localStorage
    if (clickedDate > 0) {
        if (cMonth < 10 && clickedDate < 10) {
            document.getElementById('dateField').innerHTML = 0+clickedDate+'-'+0+cMonth+'-'+choosenYear.value;
            savedDate = choosenYear.value+"-"+0+clickedMonth+'-'+0+clickedDate;
            console.log(savedDate);
            sessionStorage.setItem('selectedDate', savedDate);
        } else if (cMonth < 10 && clickedDate >= 10) {
            document.getElementById('dateField').innerHTML = clickedDate+'-'+0+cMonth+'-'+choosenYear.value;
            savedDate = choosenYear.value+"-"+0+clickedMonth+'-'+clickedDate;
            console.log(savedDate);
            sessionStorage.setItem('selectedDate', savedDate);
        } else if (cMonth >= 10 && clickedDate < 10) {
            document.getElementById('dateField').innerHTML = clickedDate+'-'+cMonth+'-'+choosenYear.value;
            savedDate = choosenYear.value+"-"+clickedMonth+'-'+0+clickedDate;
            console.log(savedDate);
            sessionStorage.setItem('selectedDate', savedDate);
        } else {
            document.getElementById('dateField').innerHTML = clickedDate+'-'+cMonth+'-'+choosenYear.value;
            savedDate = choosenYear.value+"-"+clickedMonth+'-'+clickedDate;
            console.log(savedDate);
            sessionStorage.setItem('selectedDate', savedDate);
        }
    }
    //Henter alle tider til den specifikke dag
    sessionStorage.removeItem('availableTimes');
    document.getElementById('timesShow').innerHTML = '';
    const body = {date: savedDate};
    axios.post('http://localhost:3000/bookings/getByDate', body)
        .then((response) => {
            let times = response.data;
            let availableTimes = [];
            for (let i = 0; i < times.length; i++){
                if (times[i].practitioner === times[i].client){
                    availableTimes.push(times[i]);
                    sessionStorage.setItem('availableTimes', JSON.stringify(availableTimes));
                }
            }
        })
        .then(()=>{
            let times = JSON.parse(sessionStorage.getItem('availableTimes'));
            let bookingCount = times.length;
            if (times.length == 0) {
                document.getElementById('timesShow').innerHTML = '';
            } else {
                document.getElementById('timesShow').innerHTML = '';
                //Same function used in fillCalenderDays()
                (function repeat(number) {
                    fillWindow(number);
                    if (number > 1) repeat(number - 1);
                })(bookingCount);
            }
        })
        .catch((err) => {
            //Denne catch skal fange min medelelse fra api'en
            console.log(err)
        });
    //Calls colorDate() function from below - colors the chosen day
    colorDate();
});

//Colors the chosen date
function colorDate() {
    let x = document.getElementById('dateField').innerHTML;
    let day = document.getElementsByClassName('day');
    //Splits the dateField into a string of elements seperated by "/" and gets [0] which is the chosen date
    let chosenDay = x.split("/")[0];
    for (i = 0; i < day.length; i++) {
        //!= prevents it from coloring all the empty divs
        day[i].style.backgroundColor ="#00CA85";
        if (day[i].innerHTML == chosenDay && chosenDay != 0) {
            day[i].style.backgroundColor = "#00CA85";
        } else {
            day[i].style.backgroundColor = "";
        }
    }
}

//modified during API conversion
function fillWindow() {
    //sets the highest (date) and highestId just as the nextDate function in Calender.js
    let highest = 0;
    let highestId = 1;
    let bookingNumber = 0;
    let booking = document.getElementById('timesShow').childNodes;
    //Forloop checks the week class from html
    for (i = 0; i < booking.length; i++) {
        //finds the newHigh value within all the week.innerHTMl elements
        newHigh = parseInt(booking[i].id, 10);
        if (booking[i].id > highest) {
            highest = newHigh;
        }
        if (booking[i].id == highest) {
            highestId = booking[i].id * 1 + 1;
        }
        if (booking[i].id == highest) {
            bookingNumber = bookingNumber * 1 + 1;
        }
    }
    //Uses the rounded pracNumber as inded in the pracArr array to get the id and use it as index to get info from times
    let bookingArr = JSON.parse(sessionStorage.getItem('availableTimes'));
    let newBooking = Math.round(bookingNumber);
    console.log("bookingNumber = " + newBooking);
    //Paste time
    highest = document.createElement('div');
    highest.innerHTML = bookingArr[newBooking].time;
    highest.id = highestId;
    highest.className = 'target';
    let parent = document.getElementById('timesShow');
    parent.appendChild(highest);
    //Paste practitioner
    const body = {userId: bookingArr[newBooking].practitioner};
    axios.post('http://localhost:3000/users/checkName', body)
        .then((response) => {
            highest.innerHTML = response.data.name+' - '+bookingArr[newBooking].time;
        });
    //Adds event listener on the times shown in the window.
    document.querySelector('div.times').addEventListener('click', function () {
        let clickedBooking = event.target.textContent;
        console.log(clickedBooking);
        sessionStorage.setItem('clickedBooking',clickedBooking);
        //Color chosen date
        let chosen = document.getElementsByClassName('target');
        for (let i = 0; i < chosen.length; i++) {
            if(chosen[i].innerHTML === clickedBooking) {
                chosen[i].style.backgroundColor = "#00CA85";
            } else {
                chosen[i].style.backgroundColor = "";
            }
        }
    });
}

function chooseAnimal() {
    //Denne del henter den aktive brugers id
    let userEmail = sessionStorage.activeUser;
    const body = {email: userEmail};

    axios.post('http://localhost:3000/users/check', body)
        .then((response) => {
            let ownerId = response.data.id;
            const body2 = {userId: ownerId};
            console.log('ownerId = '+ownerId);

            //Her hentes alle dyr som er tilknyttet den aktive bruger
            axios.post('http://localhost:3000/animals/getByOwner', body2)
                .then((res) => {
                    let animalArr = res.data;
                    let books = document.getElementById('animalSelect');
                    document.getElementById('animalSelect').innerText = null;
                    for (let key in animalArr) {
                        let booking = animalArr[key];
                        books.options[books.options.length] = new Option(booking.name);
                    }
                    document.body.appendChild(books);
                })
        })
        .catch((err) => {
            //Denne catch skal fange min medelelse fra api'en
            console.log(err)
        })
}

function book() {
    let clickedBooking = sessionStorage.getItem('clickedBooking');
    if (clickedBooking === null) {
        alert('Find en dato og en ledig tid i kalenderen ovenfor');
    } else {
        let timeSplit = clickedBooking.split(' ');
        let time = timeSplit[2];
        let bookingArr = JSON.parse(sessionStorage.getItem('availableTimes'));

        for (let i = 0; i < bookingArr.length; i++){
            //For loop loops through available times, finds match, uses match id for patch
            if (bookingArr[i].time === time) {
                let userEmail = sessionStorage.activeUser;
                const body = {email: userEmail};
                axios.post('http://localhost:3000/users/check', body)
                    .then((response) => {
                        //Patches Client
                        let userId = response.data.id;
                        const body2 = [{
                            propName: 'client',
                            value: userId
                        }];
                        axios.patch('http://localhost:3000/bookings/'+bookingArr[i]._id, body2)
                            .then((response) => {
                                //Removes booking from window when booking is patched
                                let chosen = document.getElementsByClassName('target');
                                for (let i = 0; i < chosen.length; i++) {
                                    if(chosen[i].innerHTML === clickedBooking) {
                                        chosen[i].style.backgroundColor = "";
                                        chosen[i].innerHTML = '';
                                    }
                                }
                                console.log(response);
                            })
                            .catch((err) => {
                                //Denne catch skal fange min medelelse fra api'en
                                console.log(err)
                            });
                        //Patches animal
                        let selected = animalSelect.options[animalSelect.selectedIndex].text;
                        let animalArr = JSON.parse(sessionStorage.getItem('animalArr'));
                        for (let i = 0; i < animalArr.length; i++){
                            if(animalArr[i].name === selected){
                                console.log(animalArr[i].name);
                                const body3 = [{
                                    propName: 'animal',
                                    value: animalArr[i]._id
                                }];
                                axios.patch('http://localhost:3000/bookings/'+bookingArr[i]._id, body3)
                                    .then((response) => {
                                        console.log(response);
                                    })
                                    .catch((err) => {
                                        //Denne catch skal fange min medelelse fra api'en
                                        console.log(err)
                                    })
                            }
                        }
                    })
                    .catch((err) => {
                        //Denne catch skal fange min medelelse fra api'en
                        console.log(err)
                    })
            }
        }
    }
}
