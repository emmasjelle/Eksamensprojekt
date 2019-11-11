class Journal {
    constructor(username, animalName, time, date, location, treatmentType) {
        this.username = username;
        this.animalName = animalName;
        this.time = time;
        this.date = date;
        this.location = location;
        this.treatmentType = treatmentType;
    }
}
// Insert download journal function here

// Insert pull journal function here

var times = [
    "08.00-10.00",
    "11.00-13.00",
    "14.00-16.00",
];

document.getElementById("").innerHTML = times[0];


var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars[0];


for(var i = 1; i <= 31; i++) {
    times.push(i);
}
