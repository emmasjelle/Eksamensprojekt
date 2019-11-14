

const selected_date_element = document.querySelector(".date-picker .selected-date");
const mth_element = document.querySelector(".date-picker .dates .month .mth");

const days_element = document.querySelector(".date-picker .dates .days");

// Alle månederne defineres som et array
const months = ['Januar', 'Febuar', "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober",
    "November", "December"];


// Vi opretter variable med let, hvor vi henter dagens dato
// her omformateres datoen til dansk forståelig
let datee = new Date()
let formatted_date = datee.getDate() + "-" + (datee.getMonth() + 1) + "-" + datee.getFullYear()
console.log(formatted_date)

// her oprettes således at den dato som vælges - skrives på den ønskede måde
/*
let date = formatted_date;
let day = datee.getDate();
let month = datee.getMonth();
let year = datee.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

 */

// Her defineres en ny dato. Efterfølgende hentes værdierne for nuværdende dag, måned og år i forhold til lokal tid.
// Værdierne hentes gennem syntaxen get....(), denne syntax vil retunere en værdi i form af et nummer
// Nummerets længde afhænger af om det er dagen/måneden eller året man leder efter.
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();


// Her defineres at den valgte dato er lig den lokale tids dato. Dette vil resultere i, at hvis man har
// åbnet hjemmesiden, så vil den lokale tid blive vist som valgt dato (hvis man har alle månederne med).
let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;


// Her tjekkes via console.log om koden virker.
// Forventet udfald er nuværdende dato og tidspunkt.
console.log(selectedDate);

// textContent property retunere nuværende måned og år i kalderen. textContent retunere blot værdien, uden den ville man få hele div'en som værdi.
mth_element.textContent = months[month] + " " + year;

// Her tjekkes om overstående virker
// Forventet udfald "November 2019" , altså nuværdende måned.
console.log(mth_element.textContent);


// For at der står noget i den øverste hvide box, definere vi at den valgte dato
selected_date_element.textContent = formatDate(datee);
selected_date_element.dataset.value = selectedDate;

populateDates();

// Funktion som opretter alle date i "days"-arrayet.
function populateDates () {
    // HTML property .innerHTML bruges til at rydde kalenderen hver gang man klikker. Ellers ville kalderen konstant udprinte månedsdagene igen.
    days_element.innerHTML ="" ;

    // Man sætter i<31 , hvilket betyder at vi antager der er 31 dage i november. Ændres denne værdi vil måneden bestå af færre dage.
    // Hvis man vil have flere måneder på, kan man lave et if-statement som kigger på i hvilken måned er der færre dage end 31 og dermed vil
    // kalenderen kunne skelne mellem længere og kortere måneder.
    for (let i = 0; i < 31; i++) {
        // Man opretter en ny div med alle dage
        const day_element = document.createElement("div");
        // Klassen for denne div der oprettes sættes til "day"
        day_element.classList.add("day");
        // Da i sættes til 0 i forloopet er det nødvendigt at addere +1 til daoten.
        day_element.textContent = i + 1;

        // EventListener opretter så alle datoer i kalderen kan vælges.
        day_element.addEventListener("click", function () {
            selectedDate = new Date(year + "-" + (month + 1) + "-" + (i + 1));
            selectedDay = (i + 1);
            selectedMonth = month;
            selectedYear = year;

            selected_date_element.textContent = formatDate(selectedDate);
            // Nedstående går det nemt at få værdien af den valgte dato. Dermed kan vi arbejde med denne datp..
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



// Hjælper-funktion som hjælper med at formatere datoen, som skal vises øverst i den hvide box.
function formatDate(d) {
    // Nedstående variabel tager blot dagens dato.
    // Man laver er if-statement, som kigger på, hvis man er i alle dage under 10. dag, vil der blive adderet et 0 foran dagen.
    // Dette gør man for at datoen står i rigtigt format med to cifet dag, f.eks "01" istedet for "1".
    let day = d.getDate();
    if (day < 10) {
        day = "0" + day
    }

    // Den vil tage måneden af den dag som man sætter vælger.
    // Man laver er if-statement, som kigger på, hvis man er i alle måneder under 10. måned, vil der blive adderet et 0 foran måneden.
    // Dette gør man for at datoen står i rigtigt format med to cifet måned, f.eks. "05" istedet for "5".
    let month = d.getMonth() + 1; {
        if (month < 10) {
            month = "0" + month
        }
    }
    //
    let year = d.getFullYear();

    // Datoen vil vises i boxen på følgende måde
    return day + "/" + month + "/" + year;
}


class bookingtidspunkt {
    constructor(tidspunkt) {
        this.tidspunkt = tidspunkt;
    }
}
Tidspunkt1 = new bookingtidspunkt("08:00-11:00");
Tidspunkt2 = new bookingtidspunkt("12:00-15:00");

var arbejdstider = [];
arbejdstider.push(Tidspunkt1, Tidspunkt2);



class bookingtid {
    constructor(dato, tidspunkter){
        this.dato = dato;
        this.tidspunkter = arbejdstider;
    }
}

// Her defineres den predefineret tid
Tid1 = new bookingtid("21/11/2019");
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
                console.log(arbejdstider);
            }
        }

        // we check if we enter the event listener.

       // document.getElementById("hello").style.display = "block"; -> leila funktion
    })
}

