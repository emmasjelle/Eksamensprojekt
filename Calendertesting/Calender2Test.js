//Selected date
document.querySelector('div.datesWrapper').addEventListener('click', function () {
    let clickedDate = event.target.textContent;
    console.log(clickedDate);
    localStorage.setItem('selectedDate', clickedDate);
});

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

function checkDate() {
    for (i = 0; i < months.length; i++) {
        //month = month string from months array
        let month = months[choosenMonth.value-1];
        //daysInMonth = days in the chosen month
        let daysInMonth = getDays(choosenMonth.value,currentYear);
        //Test
        console.log(month," has ",daysInMonth," days.");
        //Turn days in choosen month into string for sessionStorage
        let monthString = JSON.stringify(daysInMonth);
        //Saves monthString in sessionStorage for our calender function
        sessionStorage.setItem('monthString',monthString);
    }
}
