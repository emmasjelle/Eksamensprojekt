// Oprettelse af class
class booking {
    constructor(date) {
        this.date = date;
    }
}
//Her oprettes ledige bookingtider, 5,6,7, december.
Oktober23 = new booking("2019-10-23");
Oktober24 = new booking("2019-10-24");

var times = [];
times.push(Oktober23, Oktober24);

function test() {
    for (var i = 0; i < times.length; i++){
        if("2019-10-23" == times[i].date) {
        console.log("lol");
    }
    }
}
test();


