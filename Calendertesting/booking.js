/* //The Practitioner creates an acail
class AvailableDay {
    constructor(datee, day, practitioner) {
        this.datee = datee;
        this.day = day;
        this.practitioner = practitioner;
    }
}

//Booking period class used for bookings and available working days
class BookingPeriod {
    constructor(period) {
        this.period = period;
    }
}

//Predefined booking times
Morning = new BookingPeriod("08:00-10:00");
Midday = new BookingPeriod("11:00-13:00");
Afternoon = new BookingPeriod("14:00-16:00");

//Predefined booking times array
var day = [];
day.push(Morning,Midday,Afternoon);

class Booking {
    constructor(datee, time, practitioner, client) {
        this.datee = datee;
        this.time = time;
        this.practitioner = practitioner;
        this.client = client;
    }
}
//Test Days
AvailableDay1 = new AvailableDay('27/10/2019',day,'Sanel');
let availableDays = [];
availableDays.push(AvailableDay1);

//Test bookings
Booking1 = new Booking('28/12/2019',Midday,'Sanel','Emma');
Booking2 = new Booking('29/12/2019',Morning,'Sanel','Emma');

//Hver tid på en dag skal have sin egen periode. 3 mulige om dagen.
//Skal som nævnt samles i tre forskellige tidspunkter på en dag, skal ikke samles i en.
//Tilføj to knapper i højre side book og booked. Vises afhængigt af hvad status er.

 */
//Hver tid på en dag skal have sin egen periode. 3 mulige om dagen.
//Skal som nævnt samles i tre forskellige tidspunkter på en dag, skal ikke samles i en.
//Tilføj to knapper i højre side book og booked. Vises afhængigt af hvad status er.

class Booking {
    constructor(idB, dateB, startB, endB, practitionerB, avaiB, timeB, clientB) {
        this.idB = idB;
        this.dateB = dateB;
        this.startB = startB;
        this.endB = endB;
        this.practitionerB = practitionerB;
        this.avaiB = avaiB;
        this.timeB = timeB;
        this.clientB = clientB;
    }
}
//Our system is restricted to three times pr. working day at the moment(Categorized in timeB from 1-3)
//10/12/2019 times
Test1 = new Booking("","10/12/2019","08:00","10:00","Sanel", false, 1,"Emma");
Test2 = new Booking("","10/12/2019","11:00","13:00","Sanel", true,2,"");
Test3 = new Booking("","10/12/2019","14:00","16:00","Sanel", true,3,"");
//11/12/2019 times
Test4 = new Booking("","11/12/2019","08:00","10:00","Sanel", true,1,"");
Test5 = new Booking("","11/12/2019","11:00","13:00","Sanel", true,2, "Emma");
Test6 = new Booking("","11/12/2019","14:00","16:00","Sanel", true,3, "Lars");
//12/12/2019 times - Example: only 1 time added
Test7 = new Booking("","12/12/2019","09:00","11:00","Sanel", true,1,"");

var times = [];
times.push(Test1,Test2,Test3,Test4,Test5,Test6,Test7);
