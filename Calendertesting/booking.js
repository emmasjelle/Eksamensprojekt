//The Practitioner creates an acail
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
