class Animal {
    constructor(type, race, name, age, location, owner) {
        this.type = type;
        this.race = race;
        this.name = name;
        this.age = age;
        this.location = location;
        this.owner = owner;
    }
}
let animal_spec = document.getElementById('animal');
let animal_race = document.getElementById('race');
let animal_name = document.getElementById('name');
let animal_birth = document.getElementById('birthDate');
let animal_location = document.getElementById('loc');

function showAnimals() {
    //Denne del henter den aktive brugers id
    let userEmail = sessionStorage.activeUser;
    const body = {email: userEmail};

    axios.post('http://localhost:3000/users/check', body)
        .then((response) => {
            let ownerId = response.data.id;
            const body2 = {userId: ownerId};
            console.log('ownerId = '+ownerId);

            //Her hentes alle dyr som er tilknyttet den aktive bruger
            axios.post('http://localhost:3000/animals/getByOwner', body2)
                .then((res) => {
                    console.log(res.data);
                    sessionStorage.setItem('animalArr', JSON.stringify(res.data));
                    //Denne metode henter dyrerne i læslig form fra animalArr: console.log(JSON.parse(sessionStorage.getItem('animalArr')));
                    nextAnimal();
                })
        })
        .catch((err) => {
            //Denne catch skal fange min medelelse fra api'en
            console.log(err)
        })
}

function createAnimal() {
    //Denne del henter den aktive brugers id
    let userEmail = sessionStorage.activeUser;
    const body = {email: userEmail};

    axios.post('http://localhost:3000/users/check', body)
        .then((response) => {
            let ownerId = response.data.id;
            const body2 = {
                type: animal_spec.value,
                race: animal_race.value,
                name: animal_name.value,
                age: animal_birth.value,
                location: animal_location.value,
                owner: ownerId
            };
            //Her hentes alle dyr som er tilknyttet den aktive bruger
            axios.post('http://localhost:3000/animals/create', body2)
                .then((res) => {
                    showAnimals();
                })
        })
        .catch((err) => {
            //Denne catch skal fange min medelelse fra api'en
            console.log(err)
        })
}

//pracCount = animalCount
//praccNumber = animalNumber
//time = animal
//timesShowClient = animalsShow
//newPrac = newAnimal
//times = animalArr
function nextAnimal() {
    let animalArr = JSON.parse(sessionStorage.getItem('animalArr'));
    let animalCount = animalArr.length;
    if (animalArr.length == 0) {
        document.getElementById('animalsShow').innerHTML = 'Tilføj et dyr på knappen nedenfor';
    } else {
        document.getElementById('animalsShow').innerHTML = '';
        //Same function used in fillCalenderDays()
    (function repeat(number) {
        fillAnimals(number);
        if (number > 1) repeat(number - 1);
    })(animalCount);
    }
}
function fillAnimals() {
    //sets the highest (date) and highestId just as the nextDate function in Calender.js
    let highest = 0;
    let highestId = 1;
    let animalNumber = 0;
    let animal = document.getElementById('animalsShow').childNodes;
    //Forloop checks the week class from html
    for (i = 0; i < animal.length; i++) {
        //finds the newHigh value within all the week.innerHTMl elements
        newHigh = parseInt(animal[i].id, 10);
        if (animal[i].id > highest) {
            highest = newHigh;
        }
        if (animal[i].id == highest) {
            highestId = animal[i].id * 1 + 1;
        }
        if (animal[i].id == highest) {
            animalNumber = animalNumber * 1 + 1 / 5;
        }
    }

    //Uses the rounded pracNumber as inded in the pracArr array to get the id and use it as index to get info from times
    let animalArr = JSON.parse(sessionStorage.getItem('animalArr'));
    let newAnimal = Math.round(animalNumber);
    console.log("animalNumber = " + newAnimal);
    //Paste type
    highest = document.createElement('div');
    highest.innerHTML = animalArr[newAnimal].type;
    highest.id = highestId;
    let parent = document.getElementById('animalsShow');
    parent.appendChild(highest);
    //Paste name
    var animalName1 = document.createElement('div');
    animalName1.innerHTML = animalArr[newAnimal].name;
    animalName1.id = highestId * 1 + 1;
    parent.appendChild(animalName1);
    //Paste race
    var animalRace1 = document.createElement('div');
    animalRace1.innerHTML = animalArr[newAnimal].race;
    animalRace1.id = highestId * 1 + 1;
    parent.appendChild(animalRace1);
    //Paste age
    var animalAge1 = document.createElement('div');
    animalAge1.innerHTML = animalArr[newAnimal].age;
    animalAge1.id = highestId * 1 + 1;
    parent.appendChild(animalAge1);
    //Paste location
    var animalLocation1 = document.createElement('div');
    animalLocation1.innerHTML = animalArr[newAnimal].location;
    animalLocation1.id = highestId * 1 + 1;
    parent.appendChild(animalLocation1);
    }
