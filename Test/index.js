const emma = '5ea3dcb90b82760858a9c772';

function get() {
    axios.get('http://localhost:3000/users/'+emma)
        .then(response => {
        console.log(response.data.email);
    });
}
// DETTE SKAL BRUGES TIL AT LOGGE IND
//Tag brugeres id og søg det op mod databasen somehow
