function get() {
    axios.get('http://localhost:3000/users')
        .then(response => {
        console.log(response);
    });
}

