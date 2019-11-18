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

function getCurrent(month,year) {
    return new Date(year,month, 0).getDate();
};
let daysInMonth = getCurrent(currentMonth,currentYear);
let selectedMonth = currentMonth;
