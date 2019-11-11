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


// slet
// her omformateres datoen til dansk forståelig
let datee = new Date()
let formatted_date = datee.getDate() + "-" + (datee.getMonth() + 1) + "-" + datee.getFullYear()
console.log(formatted_date)

// her oprettes således at den dato som vælges - skrives på den ønskede måde
let date = formatted_date;
let day = datee.getDate();
let month = datee.getMonth();
let year = datee.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

/*

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

 */

// her gider selected date ikke at omskrices til dnask læselig
console.log(selectedDate);

mth_element.textContent = months[month] + " " + year;

selected_date_element.textContent = formatDate(datee);
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

// Helper-function til at formatere datoen

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

    return day + "/" + month + "/" + year;
}

// denne funktion sørgger for at der dukker tider op under kalderen -> dog skal man definere hvordan en table med disse ser ud først

class bookingtid {
    constructor(tid, dato){
        this.tid = tid;
        this.dato = dato;
    }
}

// Her defineres den predefineret tid
Tid1 = new bookingtid("08:00-10:00","21/11/2019");
    times = [];
    times.push(Tid1);


var datesBtn = document.getElementsByClassName("days");
// console.log(datesBtn.length)
for(i=0; i < datesBtn.length; i++){
    console.log("hello emsen"); // we check if we enter the for loop
    // vi opretter en eventlistenter --> den sørger for at når vi trykker på den oprettet dato, så vil den vise en tabel med de ledige tider den dag
    document.addEventListener('click', function() {
        // her laves et forloop for at tjekke om den rigtige format af datoen passer med en prædefineret dato
        for(var i=0; i < times.length; i++){
            if(selected_date_element.textContent == times[i].dato){
                alert(times[i].tid);
            }
        }

        // we check if we enter the event listener.

       // document.getElementById("hello").style.display = "block"; -> leila funktion
    })
}

