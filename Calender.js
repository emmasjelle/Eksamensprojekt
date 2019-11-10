const date_picker_element = document.querySelector(".date-picker");
const selected_date_element = document.querySelector(".date-picker .selected-date");
const date_element = document.querySelector(".date-picker .dates");
const mth_element = document.querySelector(".date-picker .dates .month .mth");

/* til addering af flere måneder
const  next_mth_element = document.querySelector(".date-picker .dates .month .next-mth");
const  prev_mth_element = document.querySelector(".date-picker .dates .month .prev-mth");
*/

const days_element = document.querySelector(".date-picker .dates .days");

const months = ['Januar', 'Febuar', "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober",
    "November", "December"];

/*
// slet
// her omformateres datoen til dansk forståelig
let current_datetime = new Date()
let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
console.log(formatted_date)

// her oprettes således at den dato som vælges - skrives på den ønskede måde
let date = formatted_date;
let day = current_datetime.getDate();
let month = current_datetime.getMonth();
let year = current_datetime.getFullYear();

 */

// Dagens dato hentes og defineres som day, month og year
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();


// Her defineres selected dates
let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

// her gider selected date ikke at omskrices til dnask læselig
console.log(selectedDate);

mth_element.textContent = months[month] + " " + year;

selected_date_element.textContent = formatDate(date);
selected_date_element.dataset.value = selectedDate;

populateDates();

// eventlistener
date_picker_element.addEventListener("click", toggleDatePicker);

// funktion
function toggleDatePicker(e) {
    if (!checkEventPathForClass(e.path, "dates")) {
   date_element.classList.toggle("active");
    }
}


function populateDates () {
    days_element.innerHTML = "";

    for (let i = 0; i < 31; i++) {
        const day_element = document.createElement("div");
        day_element.classList.add("day");
        day_element.textContent = i + 1;

        day_element.addEventListener("click", function () {
            selectedDate = new Date(year + "-" + (month+1) + "-" + (i + 1));
            selectedDay = (i + 1);
            selectedMonth = month;
            selectedYear = year;

            selected_date_element.textContent = formatDate(selectedDate);
            selected_date_element.dataset.value = selectedDate;

            populateDates();
        });


        /* if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month); {
            day_element.classList.add("selected")
        }

         */

        days_element.appendChild(day_element);
    }
}


// helper function
function checkEventPathForClass (path, selector) {
    for (let i = 0; i < path.length; i++) {
        if (path[i].classList && path[i].classList.contains(selector)) {
            return true;
        }
    }
    return false;
}

// Helper function til at formatere datoen

function formatDate(d) {
    let day = d.getDate();
    if (day < 10) {
        day = "0" + day
    }

    let month = d.getMonth() + 1; {
        if (month < 10) {
            month = "0" + month
        }
    }
    let year = d.getFullYear();

    return day + " / " + month + " / " + year;
}


var datesBtn = document.getElementsByClassName("days")
/* console.log(datesBtn.length) */
for(i=0; i < datesBtn.length; i++){
    console.log("error") // we check if we enter the for loop
    document.addEventListener('click', function() {
        console.log("Click") // we check if we enter the event listener.
        document.getElementById("hello").style.display = "block";
    })
}






/*

console.log(selectedDate);

datoer = []

// Her console logger vi for at se om det hele fungere og om vi kan få den valgte dato vist på skærmen.
if (selectedDate = ) {
    console.log("hej")
} else {
    console.log("virker ikke")
}


 */