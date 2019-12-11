//The purpose of this code is to create the class Booking and create pre-defined booking times.

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

//We create three booking times pr. working day at the moment(Categorized in timeB from 1-3)
//10/12/2019 times
Test1 = new Booking("0","10/12/2019","08:00","10:00","Sanel", true, 1,"");
Test2 = new Booking("1","10/12/2019","11:00","13:00","Sanel", true,2,"");
Test3 = new Booking("2","10/12/2019","14:00","16:00","Sanel", true,3,"");
//11/12/2019 times
Test4 = new Booking("3","11/12/2019","08:00","10:00","Sanel", true,1,"");
Test5 = new Booking("4","11/12/2019","11:00","13:00","Sanel", true,2, "");
Test6 = new Booking("5","11/12/2019","14:00","16:00","Sanel", true,3, "");
//12/12/2019 times - Example: only 1 time added
Test7 = new Booking("6","12/12/2019","09:00","11:00","Sanel", true,1,"");
//The times keep their idB(second index number) in case we at some future point in time need to go back and check old times.
//Our plan is also to add a journal in future, and here we would need the idB to stay the same at all times, even if
//a time is deleted.
//Times can move around, but they keep their number.
