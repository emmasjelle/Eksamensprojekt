function createBooking() {
    let booking_date = document.getElementById('date');
    let booking_start = document.getElementById('start');
    let booking_slut = document.getElementById('slut');

    //Denne del henter den aktive brugers id
    let userEmail = sessionStorage.activeUser;
    const body = {email: userEmail};
    axios.post('http://localhost:3000/users/check', body)
        .then((response) => {
            let ownerId = response.data.id;
            const body2 = {
                date: booking_date.value,
                time: booking_start.value+'-'+booking_slut.value,
                practitioner: ownerId,
                client: ownerId,
                animal: undefined
            };
            //Her oprettes bookingen som ledig i systemet under den tilhørende practitioner
            axios.post('http://localhost:3000/bookings/create', body2)
                .then((res) => {
                    showBookings();
                })
        })
        .catch((err) => {
            console.log(err)
        })
}
