//Shows name of active User Client
let activeUs = sessionStorage.getItem('activeUser');
//document.getElementById('seTider').innerHTML = "Nedenfor kan du se dine booking";

function showBookings(){
    //Denne del henter den aktive brugers id
    let userEmail = sessionStorage.activeUser;
    const body = {email: userEmail};

    axios.post('http://localhost:3000/users/check', body)
        .then((response) => {
            let ownerId = response.data.id;
            const body2 = {userId: ownerId};
            console.log('ownerId = '+ownerId);

            //Her hentes alle dyr som er tilknyttet den aktive bruger
            axios.post('http://localhost:3000/bookings/getByUser', body2)
                .then((res) => {
                    console.log(res.data);
                    sessionStorage.setItem('bookingArr', JSON.stringify(res.data));
                    //Denne metode henter dyrerne i læslig form fra animalArr: console.log(JSON.parse(sessionStorage.getItem('animalArr')));
                    nextBooking();
                })
        })
        .catch((err) => {
            //Denne catch skal fange min medelelse fra api'en
            console.log(err)
        })
}

//Shows the name of the practitioner and not the id
function getPracName(id) {
    const body = {userId: id};
    axios.post('http://localhost:3000/users/checkName', body)
        .then((response) => {
            sessionStorage.setItem('Prac', JSON.stringify(response.data.name));
        })
        .catch((err) => {
            console.log(err)
        });
    let name = JSON.parse(sessionStorage.getItem('Prac'));
    return name;
}

//animalCount = bookingCOunt
//animalNumber = bookingNumber
//animal = booking
//animalsShow =bookingsShow
//newAnimal = newBooking
//animalArr = bookingArr
function nextBooking() {
    let bookingArr = JSON.parse(sessionStorage.getItem('bookingArr'));
    let bookingCount = bookingArr.length;
    if (bookingArr.length == 0) {
        document.getElementById('bookingsShow').innerHTML = 'Book en tid på kalender siden';
    } else {
        document.getElementById('bookingsShow').innerHTML = '';
        //Same function used in fillCalenderDays()
        (function repeat(number) {
            fillBookings(number);
            if (number > 1) repeat(number - 1);
        })(bookingCount);
    }
}
function fillBookings() {
    let bookings = document.getElementById('bookings');
    //sets the highest (date) and highestId just as the nextDate function in Calender.js
    let highest = 0;
    let highestId = 1;
    let bookingNumber = 0;
    let booking = document.getElementById('bookingsShow').childNodes;
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
            bookingNumber = bookingNumber * 1 + 1 / 5;
        }
    }

    //Uses the rounded pracNumber as inded in the pracArr array to get the id and use it as index to get info from times
    let bookingArr = JSON.parse(sessionStorage.getItem('bookingArr'));
    let newBooking = Math.round(bookingNumber);
    console.log("bookingNumber = " + newBooking);
    //Paste Date
    highest = document.createElement('div');
    highest.innerHTML = bookingArr[newBooking].date;
    highest.id = highestId;
    let parent = document.getElementById('bookingsShow');
    parent.appendChild(highest);
    //Paste Time
    var bookingTime1 = document.createElement('div');
    bookingTime1.innerHTML = bookingArr[newBooking].time;
    bookingTime1.id = highestId * 1 + 1;
    parent.appendChild(bookingTime1);
    //Paste Practitioner
    var bookingPrac1 = document.createElement('div');
    bookingPrac1.innerHTML = getPracName(bookingArr[newBooking].practitioner);
    bookingPrac1.id = highestId * 1 + 1;
    parent.appendChild(bookingPrac1);
    //Add option to booking cancel
}

function chooseBooking() {
    let bookings = document.getElementById('bookings');
    let bookingArr = JSON.parse(sessionStorage.getItem('bookingArr'));
    for (let key in bookingArr) {
        let booking = bookingArr[key];
        bookings.options[bookings.options.length] = new Option(booking.date+' - '+booking.time);
    }
    document.body.appendChild(bookings);
}
